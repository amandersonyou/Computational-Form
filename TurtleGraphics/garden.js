var myTurtle;
var r;

var length;

function setup() {
	createCanvas(500, 500);
	myTurtle = new Turtle();
}

function draw() {
	background(145, 217, 192);

	noFill();
  for(var a = 0; a < 6; a++){
    myTurtle.penUp();
    var tree_x = pickRandom();
    var tree_y = pickRandom_1();
    myTurtle.moveTo(tree_x, tree_y);
    r = pickRadium();
    myTurtle.penDown();
    tree_1(r);

    for(var b = 0; b < 3; b++){
      myTurtle.penUp();
      myTurtle.moveTo(tree_x - pickFlower_x()*2, tree_y + pickFlower_y()*2);
      myTurtle.penDown();
      flower_1();
    }
  }

  for(var c = 0; c < 5; c++){
    myTurtle.penUp();
    var tree_x = pickRandom();
    var tree_y = pickRandom_1();

    myTurtle.moveTo(tree_x, tree_y);
    myTurtle.penDown();
    tree_2();
  }

 
// Make a couple more flowers
stroke(170, 113, 216, 100);
strokeWeight(1);
  for (var i = 0; i < 85; i++) {
    myTurtle.moveForward(150);
    myTurtle.turnRight(195);
}

myTurtle.penUp();
myTurtle.moveTo(random(10,200), random(0, 400));
strokeWeight(3);
for (var i = 0; i < 24; i++) {
    myTurtle.penDown();
    myTurtle.moveForward(15);
    myTurtle.turnRight(124);
    myTurtle.moveForward(40);
    myTurtle.turnLeft(30);
}

// School of Fish!

myTurtle.penUp();
myTurtle.moveTo(random(50,400), random(50, 400));
myTurtle.penDown();
drawFish(myTurtle);

myTurtle.penUp();
myTurtle.moveTo(random(50,400), random(50, 400));
myTurtle.penDown();
drawFish(myTurtle);

myTurtle.penUp();
myTurtle.moveTo(random(50,400), random(50, 400));
myTurtle.penDown();
drawFish(myTurtle);

myTurtle.penUp();
myTurtle.moveTo(random(50,400), random(50, 400));
myTurtle.penDown();
drawFish(myTurtle);

myTurtle.penUp();
myTurtle.moveTo(random(50,400), random(50, 400));
myTurtle.penDown();
drawFish(myTurtle);


}

function drawFish(t) {
    strokeWeight(5);
    stroke(255, 168, 8);
    // tail
	for (var i = 0; i < 2; i++) {
		t.moveForward(20);
        t.turnRight(12);
        t.turnLeft(160);
        t.moveForward(20);
    }
    // top body
    for (var i = 0; i < 4; i++) {
        t.moveForward(30);
        t.turnRight(30);
    }
    //bottom body
    for (var i = 0; i < 4; i++) {
        t.turnRight(42);
        t.moveForward(35);
    }
}

function tree_1(r){

  stroke(46, 140, 27, map(r, 5, 30, 10, 120));
	strokeWeight(2);

	for (var i = 0; i < 13; i++) {
    for(var j = 0; j <10; j++){
      //myTurtle.pushState();
      myTurtle.moveForward(r *.8);
  		myTurtle.turnRight(60);
      //myTurtle.popState();

    }
		myTurtle.moveForward(r);
		myTurtle.turnRight(175);
	}

	noLoop();
}

function flower_1(){
  stroke(222, 140, 157);
	strokeWeight(1);


	for (var i = 0; i < 6; i++) {
    for(var j = 0; j <10; j++){
      //myTurtle.pushState();
      myTurtle.moveForward(3);
  		myTurtle.turnRight(60);
      //myTurtle.popState();

    }
		myTurtle.moveForward(6);
		myTurtle.turnRight(180);
	}

	noLoop();
}
function tree_2(){
  stroke(46, 135, 94, map(r, 5, 30, 50, 120));
  strokeWeight(2);
  myTurtle.penUp();
	//myTurtle.moveTo(100, 100);
	for (var h = 0; h < 8; h++){
	myTurtle.penUp();
	//myTurtle.moveTo(100, 100);
	myTurtle.turnTo(45* h);
	myTurtle.penDown();
	drawBranch(30);
	}
}
function drawBranch(length){
  if (length < 2) {
		return;
	}

	// draw this branch
	myTurtle.moveForward(length);

	// left child
	myTurtle.pushState();
	myTurtle.turnLeft(60);
	drawBranch(length * 0.6);
	//drawBranch(length * random(.5, .9));

	myTurtle.popState();

	// right child
	myTurtle.pushState();
	myTurtle.turnRight(60);
	drawBranch(length * 0.6);
	//drawBranch(length * random(.5, .9));
	myTurtle.popState();
}

function pickRandom(){
  return random(0,500);
}

function pickRandom_1(){
  return random(0,500);
}
function pickRadium(){
  return random(5, 30);
}
function pickFlower_x(){
  return random(0, 30);
}
function pickFlower_y(){
  return random(0, 30);
}
//funtion tree_2(){}