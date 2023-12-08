// base
import * as THREE from 'https://cdn.skypack.dev/three@0.130.0/build/three.module.js';
import { ConvexGeometry } from 'https://cdn.skypack.dev/three@0.130.0/examples/jsm/geometries/ConvexGeometry.js';

let scene = new THREE.Scene();
let renderer, camera;
let screenWidth, screenHeight;

// Raycasting
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const jumpTargetHelper = new THREE.Object3D();
const jumpTargetObject = new THREE.Object3D();


// General geometry
let obj, sphere;

// Head 
const headRadius = 5;
const toothRadius = 5;
const toothDepth = 0.1;
const topJaw = new THREE.Object3D();
const bottomJaw = new THREE.Object3D();
const head = new THREE.Object3D();
const headLook = new THREE.Object3D();
const headVector = new THREE.Vector3();
headVector.set(0, 0, 0);
let bite = {
  amount: 2,
  toothAngle: THREE.Math.degToRad( 15 ),
  minAngle: THREE.Math.degToRad( 0 ),
  maxAngle: THREE.Math.degToRad( 30 ),
};

let chompTween, hopTween;
let biteIsAnimating = false;

// Chain
const chainHolder = new THREE.Object3D();
const neckJoint = new THREE.Object3D();
const chainRadius = 1;
const chainTube = 0.3;
const chainCount = 7;

// textures
const imgDir = 'https://assets.codepen.io/67732/';
const textures = {
  'metalColor' : {
    url: `Metal024_1K_Color`
  },
  'metalDisplacement' : {
    url: `Metal024_1K_Displacement`
  },
  'metalNormal' : {
    url: `Metal024_1K_Normal`
  },
  'teethColor' : {
    url: 'Porcelain001_1K_Color'
  },
  'teethDisplacement' : {
    url: 'Porcelain001_1K_Displacement'
  },
  'teethNormal' : {
    url: 'Porcelain001_1K_Normal'
  },
  'teethRoughness' : {
    url: 'Porcelain001_1K_Roughness'
  },
}



const init = () => {
  (screenWidth = window.innerWidth), (screenHeight = window.innerHeight);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(screenWidth, screenHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0xefefef);
  document.body.appendChild(renderer.domElement);
  window.addEventListener("resize", onWindowResize, false);
  document.getElementsByTagName('canvas')[0].addEventListener('click', position.jump, false );

  // camera
  camera = new THREE.PerspectiveCamera(
    10,
    screenWidth / screenHeight,
    0.1,
    200000
  );
  camera.position.set(0, 50, 200);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);

  loadImages();
  addLights();
};


function addLights() {
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xcccccc, 0.75);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
  dirLight.castShadow = true;
  dirLight.position.set(-25, 25, 60);
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;

  const d = 50;
  dirLight.shadow.camera.left = - d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = - d;
  scene.add(dirLight);
}

const loadImages = () => {
  let imagesLoaded = 0; 
  const loader = new THREE.TextureLoader();

  for (const [key, t] of Object.entries(textures)) {
    loader.load(
      `${imgDir + t.url}.jpg`,
      function (texture) {
        imagesLoaded++;
        textures[key].texture = texture;
        if(imagesLoaded === Object.keys(textures).length){
          loadGeometry();
          animate();
        }
      },
      undefined,
      function (err) {
        console.error("An error happened.");
      }
    );
  };
};

const addSphere = (name,radius,color, phi, a) =>{
  if(head.getObjectByName(name)){
    const sphere = head.getObjectByName(name);
    head.remove(sphere);
    sphere.geometry.dispose();
  }

  const sphereObj = new THREE.Mesh( 
    new THREE.SphereGeometry( radius, 32, 32, 0, phi, 0, Math.PI ), 
    new THREE.MeshPhongMaterial({
       color: color, 
       side: (name === 'head') ? THREE.DoubleSide : THREE.DoubleSide, 
       bumpMap: textures.metalDisplacement.texture,
       normalMap: textures.metalNormal.texture,
       map: textures.metalColor.texture,
    } )
  );

  sphereObj.position.set(0, 0, 0);
  sphereObj.name = name;
  sphereObj.rotation.x = -THREE.Math.degToRad( 90 ) - bite.toothAngle + ((bite.maxAngle - bite.minAngle) * -a);
  sphereObj.rotation.z = -THREE.Math.degToRad( 270 );
  sphereObj.castShadow = sphereObj.receiveShadow = (name === 'head'); 
  head.add( sphereObj );
}

const getSpherePosition = () =>{
  sphere.updateMatrixWorld();
  scene.updateMatrixWorld();
  const c = new THREE.Vector3(); 
  return sphere.getWorldPosition(c);
}

const updateBite = () =>{
  const a = bite.amount/100;
  topJaw.rotation.x = (bite.maxAngle - bite.minAngle) * -a;
  bottomJaw.rotation.x = (bite.maxAngle - bite.minAngle) * a;

  const phi = (Math.PI - bite.toothAngle)*2 + ((bite.maxAngle - bite.minAngle) * -a*2); 
  addSphere('head', headRadius, 0x415a6b, phi, a);
  addSphere('innerHead', headRadius*0.9, 0x820800, phi, a);
}

const loadGeometry = () => {
  // ground
  const ground = new THREE.Mesh( 
    new THREE.BoxGeometry( 100, 2, 100 ), 
    new THREE.MeshStandardMaterial( {color: 0xffffff} )
  );
  ground.position.set(0, -0.5-headRadius, 0);
  ground.castShadow = true;
  ground.receiveShadow = true;
  scene.add( ground );
  
  // the chain
  chainHolder.position.set(0, chainRadius-headRadius+1, 0);
  scene.add(chainHolder);
  headLook.add(neckJoint);
  neckJoint.position.set(0, 0, -headRadius);
  for(let i=0; i<chainCount; i++){
    const torus = new THREE.Mesh( 
      new THREE.TorusGeometry( chainRadius, chainTube, 16, 100 ), 
      new THREE.MeshPhongMaterial({
        color: 0xeeeeee, 
        bumpMap: textures.metalDisplacement.texture,
        normalMap: textures.metalNormal.texture,
        map: textures.metalColor.texture,
        specular: 0xffffff,
        shininess: 60,
      })
    );
    torus.castShadow = true;
    torus.receiveShadow = true;
    torus.rotation.y = Math.PI/2;
    chainHolder.add( torus );
  }
  
  // the head
  head.rotation.x = THREE.Math.degToRad( 15 );
  headLook.add(head);
  headLook.position.set(0, 0, headRadius*3)
  scene.add(headLook);
  jumpTargetObject.add(jumpTargetHelper);
  jumpTargetHelper.position.set(0, 0, 70);
  scene.add(jumpTargetObject);
  
  head.add(topJaw);
  head.add(bottomJaw);
  obj = new THREE.Object3D();
  sphere = new THREE.Object3D();
  sphere.position.set(0, 0, toothRadius);
  obj.add( sphere );
  scene.add( obj );

  
  // the teeth
  let tooth, vertices;
  const toothTexture = new THREE.MeshStandardMaterial({
    bumpMap: textures.teethDisplacement.texture,
    normalMap: textures.teethNormal.texture,
    roughnessMap: textures.teethRoughness.texture,
    map: textures.teethColor.texture,
    metalness: 0.1
  });

  for(let i = 0; i<9; i++){
    vertices = [];
    for(let j = i; j<i+3; j++){
      let angle = 90 - ((180/10) * j);
      if(j == i || j== i+2){
        sphere.position.set(0, 0, toothRadius - toothDepth);
        obj.rotation.x = (j % 2) ? -bite.toothAngle*2 : bite.toothAngle*2;
        obj.rotation.y = -THREE.Math.degToRad( angle );
        vertices.push( getSpherePosition() );
      }

      sphere.position.set(0, 0, toothRadius);
      obj.rotation.x = (j % 2) ? -bite.toothAngle : bite.toothAngle;
      obj.rotation.y = -THREE.Math.degToRad( angle );
      vertices.push( getSpherePosition() );

      sphere.position.set(0, 0, toothRadius - toothDepth);
      vertices.push( getSpherePosition() );
    }

    tooth = new THREE.Mesh( 
      new ConvexGeometry( vertices ), 
      toothTexture
    );

    tooth.castShadow = true; 
    tooth.receiveShadow = true; 
  
    if(i % 2){
      topJaw.add(tooth);
    }else{
      bottomJaw.add(tooth);
    }
  }

  // the eyes
  const eyeAngle = THREE.Math.degToRad(45);
  const eyeballTexture = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shininess: 100,
    specular: 0xffffff
  });

  const corneaTexture = new THREE.MeshPhongMaterial({
    color: 0x000000,
    shininess: 100,
    specular: 0xffffff
  });

  for(let i = 0; i<2; i++){
    const r = (i === 0) ? eyeAngle*1.25 : (-1.25 * eyeAngle);
    obj.rotation.x = eyeAngle;
    obj.rotation.y = 0;
    obj.rotation.z = r;
    sphere.position.set(0, 4.9, 0);

    const eyeball = new THREE.Mesh( 
      new THREE.SphereGeometry( 1, 32, 16 ),
      eyeballTexture
    );
    eyeball.castShadow = true; 
    eyeball.receiveShadow = true;
    
    eyeball.rotation.x = eyeAngle;
    eyeball.rotation.z = r;
    eyeball.scale.y = 0.25;
    let a = getSpherePosition();
    eyeball.position.set(a.x, a.y, a.z)
    topJaw.add(eyeball);

    sphere.position.set(0, 5.1, 0);
    const cornea = new THREE.Mesh( 
      new THREE.SphereGeometry( 0.5, 32, 16 ),
      corneaTexture
    );
    cornea.rotation.x = eyeAngle;
    cornea.rotation.z = r;
    cornea.scale.y = 0.25;

    a = getSpherePosition();
    cornea.position.set(a.x, a.y, a.z )
    cornea.castShadow = true;
    cornea.receiveShadow = true;
    topJaw.add(cornea);
  }

  // raycasting object
  const raycasterPlane = new THREE.Mesh( 
    new THREE.SphereGeometry( 75, 32, 16 ),
    new THREE.MeshBasicMaterial( { transparent: true, opacity: 0} )
  );

  raycasterPlane.name = 'rp';
  scene.add(raycasterPlane)

  window.addEventListener( 'mousemove', onMouseMove, false );

  startChomp();
  startHop();
};

const onWindowResize = (event) => {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  renderer.setSize(screenWidth, screenHeight);
  camera.aspect = screenWidth / screenHeight;
  camera.updateProjectionMatrix();
};

/* Raycasting */
const onMouseMove = ( event ) => {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

const getRaycastIntersects = () =>{
  // update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects( scene.children );
  intersects.forEach( i => {
      if(i.object.name == 'rp'){


        jumpTargetObject.lookAt( i.point );
        headLook.lookAt( i.point );
        updateChains();
      }
  });
}

const getWorldPosition = obj =>{
  let target = new THREE.Vector3();
  obj.getWorldPosition(target);
  return target;
}

const updateChains = () =>{
  const neckJointVector = getWorldPosition(neckJoint);
  chainHolder.lookAt(neckJointVector);
  const neckLength = new THREE.Vector3( 0, -headRadius, 0 ).distanceTo( neckJointVector );  
  chainHolder.children.forEach((link, index) =>{
    link.position.z = ((neckLength-chainRadius) / chainCount) * index;
  });
}

let isJumping = false;
const position = {
  jump: () =>{
    if(!isJumping){
      isJumping = true;
      (chompTween) ? chompTween.kill() : null;
      (hopTween) ? hopTween.kill() : null;

      gsap.to(bite, 0.1, {
        amount: 100,
        ease: Power2.easeIn,
        onComplete: ()=>{ 
          gsap.to(bite, 0.05, {
            amount: 2,
            ease: Power2.easeIn,
            onComplete: ()=>{ biteIsAnimating = true; }
          });
        }
      });

      let jumpTarget = getWorldPosition(jumpTargetHelper);

      gsap.to(headLook.position, 0.15, {
        x: jumpTarget.x,
        y: jumpTarget.y,
        z: jumpTarget.z,
        ease: Bounce.easeOut,
        onComplete: () => {
          setTimeout(position.reset, 1000);
        }
      });
    }
  },
  reset: () => {
    gsap.to(headLook.position, 5, {
      x: 0,
      y: 0,
      z: headRadius*3,
      ease: Power4.easeInOut,
      onComplete: () => {
        isJumping = false;
        biteIsAnimating = true;
        startChomp();
        startHop();
      }
    })
  }
}

const startHop = () =>{
  hopTween = gsap.to(headLook.position, 0.25, {
    y: 2,
    ease: Power2.easeOut,
    yoyo: true,
    repeat: -1
  });
}


const startChomp = () =>{
  bite.amount = 2;
  chompTween = gsap.to(bite, 0.25, {
    amount: 100,
    ease: Power1.easeOut,
    yoyo: true,
    repeat: -1
  });
}

const animate = () => {
  getRaycastIntersects();
  updateBite(); 
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

init(); // light this candle

