// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

var myTurtle;

function setup() {
	createCanvas(650, 650);
	myTurtle = new Turtle();
}

function draw() {
	background(50);

	noFill();
    frameRate(3);
    let lineColor= ["#f59274", "#f3a9a9", "#f38c8c", "#799acf", "#91b388", "#dfc370", "#f6bd9d", "#669db3", "#f18070", "#aed9e9"];

	myTurtle.penUp();
    myTurtle.moveTo(325, 325);
    myTurtle.penDown();

    for (var n = 0; n < 120; n++) {
		myTurtle.moveForward(random(0,100));
        myTurtle.turnRight(random(10, 170));
        myTurtle.penUp();
        myTurtle.turnLeft(random(40, 150));
        myTurtle.penDown();
		myTurtle.moveForward(random(30, 100));
        myTurtle.turnRight(random(100, 220));
        stroke(random(lineColor));
        strokeWeight(random(.5,3));
        }


	// noLoop();
}
