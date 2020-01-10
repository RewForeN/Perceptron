
const numPoints = 800;

let ai;
let points = [];
let index = 0;

function setup() {

	createCanvas(innerWidth, innerHeight);

	ai = new Perceptron();

	for (let i = 0; i < numPoints; i++) {
		points[i] = new Point(width, height);
	}

}

function draw() {
	
	background(40);
	stroke(100);
	strokeWeight(3);
	line(0, 0, width, height);

	// Show points
	points.forEach(pt => {
		let guess = ai.guess([pt.x, pt.y]);
		pt.show(guess);
	});

	// Show the AI's current state
	let x = ai.weights[0];
	let y = ai.weights[1];
	stroke(180, 60, 200);
	strokeWeight(1);
	line(0, 0, -y * 100, x * 100);

	// Train the AI
	let curr = points[index];
	let inputs = [curr.x, curr.y];
	let target = curr.label;
	ai.train(inputs, target);

	index = (index == points.length-1) ? 0 : index + 1;

}