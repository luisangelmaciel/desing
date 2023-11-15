const randomNumber = (min, max) => {
	return Math.random() * (max - min) + min;
};

const colours = ["#EFC8ED", "#E7E4F8", "#fff"];
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
c.width = window.innerHeight / 2;
c.height = c.width;
const vAngle = Math.random() * 2 * Math.PI;
const vMag = 1.5 * (0.6 + 0.4 * Math.random());
const maxVelComp = 2.5;
let particleCount = 2;
let particles = [];

const createParticles = () => {
	for (let i = 0; i < particleCount; i++) {
		const newParticle = {
			x: c.width / 3,
			y: c.height / 2,
			velX: vMag * Math.cos(Math.random() * 2 * Math.PI),
			velY: vMag * Math.sin(Math.random() * 2 * Math.PI)
		};

		particles.push(newParticle);
	}
};

window.addEventListener("resize", (e) => {
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	c.width = window.innerHeight / 2;
	c.height = c.width;
	draw();
});

const container = () => {
	ctx.beginPath();
	ctx.arc(c.width / 2, c.height / 2, c.width / 2, 0, 2 * Math.PI);
	ctx.shadowBlur = 0;

	const gradient = ctx.createRadialGradient(
		c.width / 2 + c.width / 2 / 1.5,
		c.width / 2 - c.width / 2 / 1.6,
		c.width / 5000,
		c.width / 2,
		c.height / 2,
		c.width / 1.9
	);
	gradient.addColorStop(0.01, "#ff009946");
	gradient.addColorStop(0.7, "#33006610");
	gradient.addColorStop(0.77, "rgba(255, 53, 149, 0.05)");
	gradient.addColorStop(0.91, "rgba(255, 53, 149, 0.4)");
	gradient.addColorStop(0.95, "rgba(255, 53, 149, 0.6)");
	gradient.addColorStop(1, "#ff0099");

	ctx.fillStyle = gradient;
	ctx.fill();
};

const draw = () => {
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	ctx.globalCompositeOperation = "source-over";
	const lines = randomNumber(10, 130);

	for (let i = 0; i < 5; i++) {
		createParticles();
	}

	ctx.lineWidth = randomNumber(0.5, 8);
	ctx.strokeStyle = colours[Math.floor(randomNumber(0, colours.length))];
	ctx.beginPath();

	for (let i = 0; i < lines - 1; i++) {
		ctx.moveTo(particles[i].x, particles[i].y);
		var nextX = particles[i].x + (particles[i + 1].x - particles[i].x) * 0.1;
		var nextY = particles[i].y + (particles[i + 1].y - particles[i].y) * 0.1;
		ctx.lineTo(nextX, nextY);

		particles[i + 1].x = nextX;
		particles[i + 1].y = nextY;
		ctx.shadowBlur = 10;
		ctx.shadowColor = "#ff6ECA";
	}
	ctx.stroke();
};

const update = () => {
	particles.forEach((particle) => {
		particle.velX += (1 - 2 * Math.random()) * 0.3;
		particle.velY += (1 - 2 * Math.random()) * 0.3;
		checkVelocity(particle);
		checkBounds(particle);
		particle.x += particle.velX;
		particle.y += particle.velY;
	});
};

const checkVelocity = (obj) => {
	if (obj.velX > maxVelComp) {
		obj.velX = maxVelComp;
	} else if (obj.velX < -maxVelComp) {
		obj.velX = -maxVelComp;
	}

	if (obj.velY > maxVelComp) {
		obj.velY = maxVelComp;
	} else if (obj.velY < -maxVelComp) {
		obj.velY = -maxVelComp;
	}

	obj.x += obj.velX;
	obj.y += obj.velY;
};

const checkBounds = (obj) => {
	const radius = c.width / 2;
	const dx = obj.x - radius;
	const dy = obj.y - radius;
	const collision = Math.sqrt(dx * dx + dy * dy) >= radius - 10;

	if (collision) {
		var theta = Math.atan2(dy, dx);
		var R = radius - 10;

		obj.x = radius + R * Math.cos(theta);
		obj.y = radius + R * Math.sin(theta);

		obj.velX *= -1;
		obj.velY *= -1;
	}
};

const animate = () => {
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	requestAnimationFrame(animate);
	draw();
	update();
	container();
};

animate();