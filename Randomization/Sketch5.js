function setup() {
    createCanvas(800, 800);
  }
  
width = 800;
height = 800;


    noStroke();

function draw() {
    frameRate(2);
    background(220);
    line(0, height/2, width, height/2)
    line(0, height/4, width, height/4)
    line(0, 600, width, 600)
    line(width/2, 0, width/2, height)
    ellipse(width/2, random(0, height), 50, 50);
    ellipse(width/2, random(0, height), 100, 100);
    ellipse(width/2, random(0, height), 150, 150);

    line(width/4, 0, width/4, height)
    ellipse(width/4, random(0, height), 50, 50);
    ellipse(width/4, random(0, height), 100, 100);
    ellipse(width/4, random(0, height), 150, 150);

    line(600, 0, 600, height)
    ellipse(600, random(0, height), 50, 50);
    ellipse(600, random(0, height), 100, 100);
    ellipse(600, random(0, height), 150, 150);

    
}