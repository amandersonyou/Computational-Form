// inspired and guided by Dan Shiffman's Fractal Tree's code
// https://www.youtube.com/watch?v=0jjeOYMjmDU
// Sent to Elena for partner challenge
// require p5.dom.js & p5.min.js


// set angle for branches that will come out of fractal tree
var angle = PI / 4;
var slider;
// look for var branchCount within branch function


function setup() {
  createCanvas(600, 650);
  // make slider to control branches, can set range here
  slider = createSlider(0, TWO_PI, PI/5, .08);
  bgCol = color(0);
}

function draw() {
  // set background color
  background(bgCol);
  strokeWeight(2.25);
  // Create color range for trees - can play with these values
  from = color(255, 200, 0, 0.7 * 255);
  to = color(0, 200, 255, 0.7 * 255);
  c1 = lerpColor(from, to, 0.2);
  c2 = lerpColor(from, to, 0.5);
  angle = slider.value();
  // set the tree to draw from the bottom middle of the canvas
  translate(300, height);
  //call function for branch defined below, make as many as you want!
  stroke(from);
  branch(40);
  stroke(c1);
  branch(70);
  stroke(c2);
  branch(100);
  stroke(to);
  branch(130);

}

function branch(len) {
  var branchCount = 0.7;
  // if you make these non-zeros, the lines disjoint, which could be interesting
  line(0, 0, 0, 0-len);
  // translate to make branches starting at top of trunk
  translate(0, -len);
  // draw more branches at different angles, angle defined above setup
  // if statement to keep computer from creating infinate branches inside branch function
  if (len > 4) {
    push();
    rotate(angle);
    // This number you multiply by here makes it fun and weird!
    branch(len * branchCount);
    pop();
  // now make branch to left side
    push();
    rotate(-angle);
    branch(len * branchCount);
    pop();
  }


}
