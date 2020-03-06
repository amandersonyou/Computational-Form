// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

var myTurtle;

function setup() {
	createCanvas(500, 450);
	myTurtle = new Turtle();
}

function draw() {
	background(117, 191, 219);

	noFill();
	stroke(255, 255, 255, 180);
	strokeWeight(2);


	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(100, 250);

	// put the pen down to draw
	myTurtle.penDown();

    // draw the triangle
    stroke(46, 160, 76);
	for (var i = 0; i < 72; i++) {
		myTurtle.moveForward(300);
        myTurtle.turnRight(175);
        myTurtle.moveForward(400);
        myTurtle.turnRight(175);
    }

    stroke(249, 216, 0);
    myTurtle.penUp();
    myTurtle.moveTo(100, 150);
    myTurtle.penDown();
    for (var i = 0; i < 72; i++) {
		myTurtle.moveForward(300);
        myTurtle.turnRight(175);
        myTurtle.moveForward(400);
        myTurtle.turnRight(175);
    }
    
    stroke(7, 93, 190);
    myTurtle.penUp();
    myTurtle.moveTo(100, 350);
    myTurtle.penDown();
    for (var i = 0; i < 72; i++) {
		myTurtle.moveForward(300);
        myTurtle.turnRight(175);
        myTurtle.moveForward(400);
        myTurtle.turnRight(175);
    }
    stroke(244, 44, 0);
    myTurtle.penUp();
    myTurtle.moveTo(100, 50);
    myTurtle.penDown();
    for (var i = 0; i < 72; i++) {
		myTurtle.moveForward(300);
        myTurtle.turnRight(175);
        myTurtle.moveForward(400);
        myTurtle.turnRight(175);
	}


    // myTurtle.penUp();
	// 	for (var i = 0; i < 700; i++) {
    //     myTurtle.moveForward(5);
    //     myTurtle.penDown();
	// 	myTurtle.turnRight(random(4, 50));
	// }
	// myTurtle.penUp();
	// 	for (var i = 0; i < 2; i++) {
    //     myTurtle.moveForward(50);
    //     myTurtle.penDown();
	// 	myTurtle.turnRight(random(50, 600));
	// }

	noLoop();
}
