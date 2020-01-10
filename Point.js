
class Point {

	constructor() {

		console.log(width);
		console.log(height);

		this.x = 0;
		this.y = 0;

		while (Math.abs(this.x/width - this.y/height) < 0.02) {
			this.x = Math.random() * width;
			this.y = Math.random() * height;
		}

		if (this.y/this.x < height/width) {
			this.label = 1;
			this.color = color(210, 100, 70);
		} else {
			this.label = -1;
			this.color = color(70, 160, 220);
		}

	}

	/**
	 * Draw an ellipse at this point's location
	 * @param {int} guess AI's guess
	 */
	show(guess) {

		if (guess == this.label) {
			fill(this.color);
		}
		else {
			fill(60, 210, 90);
		}

		noStroke();
		ellipse(this.x, this.y, 9, 9);

	}

}