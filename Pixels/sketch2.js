// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js
// image credit: Mike Meyers https://unsplash.com/photos/-haAxbjiHds

let phoneImage;

function preload() {
//   phoneImage = loadImage('https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80');  
//phoneImage = loadImage('https://raw.githubusercontent.com/amandersonyou/Computational-Form/master/Pixels/assets/PhoneV1.png');
phoneImage = loadImage('https://raw.githubusercontent.com/amandersonyou/Computational-Form/master/Pixels/assets/PhoneV3.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noSmooth();

  alterImage(phoneImage);
  image(phoneImage, 0, 0, windowWidth, windowHeight);

  noLoop();
}

function getQuick(img, x, y) {
    let i = (y * img.width + x) * 4;
    return [
      phoneImage.pixels[i],
      phoneImage.pixels[i + 1],
      phoneImage.pixels[i + 2],
      phoneImage.pixels[i + 3]
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
