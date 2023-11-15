// default, but good to know
gsap.ticker.fps(60);

const animationRemote = bodymovin.loadAnimation({
	container: document.getElementById("spinner"),
	path: "https://assets.codepen.io/1839803/space-spinner.json",
	autoplay: true,
	renderer: "svg",
	loop: true
});

gsap.to("#cover", {
	delay: 2,
	opacity: 0,
	display: "none",
	duration: 5,
	ease: "none"
});
gsap.to("#spinner", { delay: 2, opacity: 0, duration: 3, ease: "none" });
gsap.to("#hud-left", { left: "7%", duration: 3, ease: "none" });
gsap.to("#hud-right", { right: "7%", duration: 3, ease: "none" });
gsap.to("#hud-bottom", { width: "20vw", duration: 3, ease: "none" });
gsap.to(".banner-area", { delay: 5, opacity: 1, duration: 3, ease: "none" });
gsap.to("#scene-container", {
	delay: 6,
	opacity: 1,
	duration: 3,
	ease: "none"
});

gsap.fromTo(
	".mtr-1",
	{
		bottom: "100%",
		left: "100%"
	},
	{
		delay: 20,
		top: "100%",
		left: "-10%",
		duration: 3,
		ease: "none",
		repeat: -1
	}
);

gsap.fromTo(
	".mtr-2",
	{
		top: "20%",
		left: "100%"
	},
	{
		delay: 11,
		top: "100%",
		left: "20%",
		duration: 2,
		ease: "none",
		repeat: -1
	}
);

gsap.fromTo(
	".mtr-3",
	{
		bottom: "100%",
		right: "40%"
	},
	{
		delay: 7,
		top: "70%",
		right: "100%",
		duration: 3,
		ease: "none",
		repeat: -1
	}
);

gsap.fromTo(
	".mtr-4",
	{
		bottom: "100%",
		right: "50%"
	},
	{
		delay: 9,
		top: "50%",
		right: "100%",
		duration: 2,
		ease: "none",
		repeat: -1
	}
);

gsap.fromTo(
	".mtr-5",
	{
		bottom: "50%",
		left: "100%"
	},
	{
		delay: 14,
		top: "100%",
		left: "50%",
		duration: 3,
		ease: "none",
		repeat: -1
	}
);

gsap.fromTo(
	".mtr-6",
	{
		bottom: "40%",
		left: "100%"
	},
	{
		delay: 10,
		top: "100%",
		left: "60%",
		duration: 3,
		ease: "none",
		repeat: -1
	}
);

// ========================================================

let camera;
let controls;
let renderer;
let scene;
let loop;

const clock = new THREE.Clock();

// loop
class Loop {
	constructor(camera, scene, renderer) {
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		this.updatables = [];
	}

	start() {
		this.renderer.setAnimationLoop(() => {
			// tell every animated object to tick forward one frame
			this.tick();

			// render a frame
			this.renderer.render(this.scene, this.camera);
		});
	}

	stop() {
		this.renderer.setAnimationLoop(null);
	}

	tick() {
		// only call the getDelta function once per frame!
		const delta = clock.getDelta();
		for (const object of this.updatables) {
			object.tick(delta);
		}
	}
}

// world
class World {
	constructor(container) {
		camera = createCamera();
		renderer = createRenderer();
		scene = createScene();
		loop = new Loop(camera, scene, renderer);
		container.append(renderer.domElement);
		controls = createControls(camera, renderer.domElement);

		const { ambientLight, mainLight } = createLights();

		loop.updatables.push(controls);
		scene.add(ambientLight, mainLight);

		const resizer = new Resizer(container, camera, renderer);
	}

	async init() {
		const { helmet } = await loadHelmet();

		loop.updatables.push(helmet);
		// move the target to the center of the helmet
		controls.target.copy(helmet.position);

		scene.add(helmet);
	}

	render() {
		renderer.render(scene, camera);
	}

	start() {
		loop.start();
	}

	stop() {
		loop.stop();
	}
}

// renderer
function createRenderer() {
	let renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true
	});
	renderer.setClearColor(0x000000, 0); // the default

	renderer.physicallyCorrectLights = true;

	return renderer;
}

// control
function createControls(camera, canvas) {
	const controls = new THREE.OrbitControls(camera, canvas);

	controls.enableDamping = true;

	// forward controls.update to our custom .tick method
	controls.tick = () => controls.update();

	return controls;
}

// setSize fn
const setSize = (container, camera, renderer) => {
	camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
};

// resizer
class Resizer {
	constructor(container, camera, renderer) {
		// set initial size
		setSize(container, camera, renderer);

		window.addEventListener("resize", () => {
			// set the size again if a resize occurs
			setSize(container, camera, renderer);
			// perform any custom actions
			this.onResize();
		});
	}

	onResize() {}
}

// scene
function createScene() {
	const scene = new THREE.Scene();

	// making scene background transparent
	scene.background = null;

	return scene;
}

// lights factory
function createLights() {
	const ambientLight = new THREE.HemisphereLight("white", "darkslategrey", 5);

	const mainLight = new THREE.DirectionalLight("white", 4);
	mainLight.position.set(-20, 10, 20);

	return { ambientLight, mainLight };
}

// camera
function createCamera() {
	const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);

	camera.position.set(0, 0, 10);

	return camera;
}

// setupModel fn
function setupModel(data) {
	const model = data.scene.children[0];

	return model;
}

async function loadHelmet() {
	const loader = new THREE.GLTFLoader();

	const [helmetData] = await Promise.all([
		loader.loadAsync(
			"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf"
		)
	]);

	const helmet = setupModel(helmetData);
	helmet.position.set(0, 0, 2);

	helmet.tick = (delta) => {
		helmet.rotation.z += 0.007;
	};

	return {
		helmet
	};
}

async function main() {
	// Get a reference to the container element
	const container = document.querySelector("#scene-container");

	// create a new world
	const world = new World(container);

	// complete async tasks
	await world.init();

	// start the animation loop
	world.start();
}

main().catch((err) => {
	console.error(err);
});

// =====================================================================

let isMenuOpen = false;
const menu = document.getElementById("menu-bar");
const menuButton = document.getElementById("menu-button");

handleMenuButtonClick = () => (isMenuOpen = !isMenuOpen);

menuButton.addEventListener("click", () => {
	handleMenuButtonClick();
	if (isMenuOpen) {
		menuButton.classList.remove("fas", "fa-bars");
		menuButton.classList.add("far", "fa-times-circle");
		menu.classList.toggle("invisible");
		gsap.fromTo(
			menu,
			1,
			{
				opacity: 0,
				xPercent: 100
			},
			{
				opacity: 1,
				// x: 0
				xPercent: 0
			}
		);
	} else {
		menuButton.classList.remove("far", "fa-times-circle");
		menuButton.classList.add("fas", "fa-bars");

		gsap.fromTo(
			menu,
			1,
			{
				opacity: 1
			},
			{
				opacity: 0,
				xPercent: 100,
				onComplete: () => {
					menu.classList.toggle("invisible");
				}
			}
		);
	}
});
