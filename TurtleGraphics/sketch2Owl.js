// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

var myTurtle;

function setup() {
	createCanvas(600, 600);
	myTurtle = new Turtle();
}

function draw() {
    background("#497b97");
	fill(0);
	stroke(0);
	

    // move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(200, 200);
    myTurtle.penDown();
    

    // yellow eye
    drawOuterEye(myTurtle);
    myTurtle.penUp();

    myTurtle.moveTo(400, 200);
    myTurtle.penDown();
    drawOuterEye(myTurtle);

    // pupils
    myTurtle.penUp();
    myTurtle.moveTo(212, 215);
    myTurtle.penDown();
    drawInnereye(myTurtle);

    myTurtle.penUp();
    myTurtle.moveTo(399, 218);
    myTurtle.penDown();
    drawInnereye(myTurtle);

    // eye rims
    myTurtle.penUp();
    myTurtle.moveTo(403, 250);
    myTurtle.penDown();
    drawRim(myTurtle);

    myTurtle.penUp();
    myTurtle.moveTo(186, 255);
    myTurtle.penDown();
    drawRim(myTurtle);


    // draw cheeks
    myTurtle.penUp();
    myTurtle.moveTo(450, 135);
    myTurtle.penDown();
    for (var i = 0; i < 70; i++) {
    myTurtle.moveForward(-2.75)
    myTurtle.turnLeft(-1);
    }

    myTurtle.penUp();
    myTurtle.moveTo(150, 135);
    myTurtle.penDown();
    for (var i = 0; i < 80; i++) {
        myTurtle.moveForward(-2.5)
        myTurtle.turnLeft(1);
        }
    
    myTurtle.penUp();
    myTurtle.moveTo(150, 135);
    myTurtle.penDown();
    for(var d = 0; d < 180; d++) {
        myTurtle.moveForward(.35);
        myTurtle.turnLeft(.35);
        }
    myTurtle.penUp();
    myTurtle.moveTo(490, 95);
    myTurtle.penDown();
    for(var d = 0; d < 170; d++) {
        myTurtle.moveForward(.35);
        myTurtle.turnLeft(.35);
        }
    
    myTurtle.penUp();
    myTurtle.moveTo(290, 250);
    myTurtle.penDown();
    for (var i = 0; i < 30; i++) {
        myTurtle.moveForward(2.5)
        myTurtle.turnLeft(2);
        }

    myTurtle.penUp();
    myTurtle.moveTo(310, 250);
    myTurtle.penDown();
    for (var i = 0; i < 30; i++) {
        myTurtle.moveForward(2.5)
        myTurtle.turnRight(3);
        }


    noLoop();
    

}

// draw a triangle using the turtle provided
function drawInnereye(e) {
	for (var i = 0; i < 400; i++) {
        stroke("#021c12");
        strokeWeight(25);
		e.moveForward(.2);
        e.turnRight(1);
	}
};

function drawOuterEye(t) {
	for (var i = 0; i < 400; i++) {
        stroke("#f3b800");
        strokeWeight(40);
		t.moveForward(.3);
		t.turnRight(1);
    }
};
    
function drawRim(x) {
    for (var i = 0; i < 400; i++) {
        stroke("#2f2423");
        strokeWeight(5);
        x.moveForward(.7);
        x.turnRight(1);
    }
};
