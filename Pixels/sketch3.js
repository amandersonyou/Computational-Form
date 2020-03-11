// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js
// image: Apparat's album art for "Walls" https://www.apparat.net/

let walls;

function preload() {
walls = loadImage('https://raw.githubusercontent.com/amandersonyou/Computational-Form/master/Pixels/assets/apparatWalls.jpeg');

}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  noSmooth();

  alterImage(walls);
  image(walls, 0, 0, 600, 600);

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
        let c1 = color(341, 94, 58);
        let c2 = color(128, 52, 58);
        let c3 = color(45, (random(30,180)), 90)
        img.set(x, y*8, c1);
        img.set(x, y*10, c1);
        img.set(x/2, y*4, c3);
        // img.set(x*10, (y*(random(8,20))), c2);
        img.set(x*10, y/2, c2);
    }
  }
  img.updatePixels();
}
