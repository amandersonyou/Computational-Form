// Original code from Elena https://github.com/elenaleegold
// edited for partner challenge
// "BLOB" code from daniel schiffman tutorial for making BLOBS
//require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


var yoff = 0.0;
let radius = 130;
let hamradius = 60;
var yoffHam = 0.8;

//number of bubbles in pan
let bubNum = 150;

//jiggliness of egg
let jiggliness = 0.01;

//color has to be changed in setup!
let yolkCol;

//change this to change the spikiness of the egg's edges
let eggSpikiness = 0.25;

//change randomizing_speed to increase or decrease the speed of the pan bubbles generating
let randomizing_speed = 5;

var randX, randY, randSize;
let timeLastUpdated = Date.now();

//bg col has to be changed in setup!
let bgCol;

//change this to change how much the yolk moves in the pan
let egdeBlob = 35;

let eggCook = 0;

function setup() {
  createCanvas(700, 700);
  // yolkCol = color(255, 212, 31);
  yolkCol = color(88, 180, 54);
  // bgCol = color(90, 170, 255);
  bgCol = color(226, 66, 66);
}

function draw() {
  background(bgCol);

  //pan shapes
  fill(40);
  rect(0, 330, 100, 100);
  ellipse(350, 350, 600);
  fill(50);
  ellipse(350, 350, 500);

  //pan bubbles
  noStroke();
  if (Date.now() - timeLastUpdated > randomizing_speed) {
    randX = random(175, 500);
    randY = random(175, 600);
    randSize = random(5,50);
    timeLastUpdated = Date.now();
  }
  for (var i = 0; i < bubNum*5; i++) {
    fill(70);
    ellipse(randX, randY, randSize);
  }


  //egg stuff
  push();
  translate(width / 2, height / 2);
  beginShape();
  strokeWeight(10);
  stroke(255,202,88,80);
  fill(255,eggCook);
  var xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(xoff, yoff), 0, 1, egdeBlob * -1, egdeBlob);
    var r = radius + offset;
    var x = r * cos(a) -80;
    var y = r * sin(a) - 40;
    curveVertex(x, y);
    xoff += eggSpikiness;
    //ellipse(x, y, 4, 4);
  }
  endShape(CLOSE);
  noStroke();
  eggCook++;

  yoff += jiggliness;

  //eggyolk
  fill(yolkCol);
  ellipse(offset-60, offset - 50, radius*0.8);

  //egg shine
  fill(255, 100);
  ellipse(offset-50, offset-20, radius*0.25);

  // make ham!
  push();
  translate(width / 20, height / 20);
  beginShape();
  strokeWeight(20);
  stroke(0, 20);
  fill(88, 180, 54);
  var xoff = 0;
  for (var a = 0; a < TWO_PI; a += 1.45) {
    var offset = map(noise(xoff, yoff), 0, 6, egdeBlob, egdeBlob);
    var r = hamradius + offset;
    var x = r * cos(a) + 100;
    var y = r * sin(a)+50;
    curveVertex(x, y);
  }
  endShape(CLOSE);
  noStroke();


  pop();

  

}
