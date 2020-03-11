// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js
// image: Apparat's album art for "Walls" 

let walls;

function preload() {
walls = loadImage('https://raw.githubusercontent.com/amandersonyou/Computational-Form/master/Pixels/assets/apparatWalls.jpeg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noSmooth();

  alterImage(walls);
  image(walls, 0, 0, windowWidth, windowHeight);

  noLoop();
}

function getQuick(img, x, y) {
    let i = (y * img.width + x) * 4;
    return [
      walls.pixels[i],
      walls.pixels[i + 1],
      walls.pixels[i + 2],
      walls.pixels[i + 3]
    ];
  }


function alterImage(img) {
    img.loadPixels();

  for (let y = 0; y < img.height; y ++) {
    for (let x = 0; x < img.width; x ++) {
        colorMode(HSB);
        // setting the colors, randomizing some values
        let c1 = color(6, (random(30,90)), (random(10,75)));
        let c2 = color((random(20, 170)), 91, 80);
        let c3 = color(45, (random(30,180)), 90)
        // dividing up the pixel patterns
        img.set(x, y/4, c1);
        img.set(x/2, y*2.5, c2);
        img.set(x*4, y*2, c3);
    }
  }
  img.updatePixels();
}
