// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


function setup() {
    createCanvas(500, 500);
    // colorMode(HSB);
    noLoop();
}

function draw() {
    background(245);

    img = createImage(100, 100);
    img.loadPixels();
// background gradient 
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x+=2.5) {
            var c = color(y*7, 185, 20);
            img.set(x, y, c);
        }
    }

    img.updatePixels();

    noSmooth();
    image(img, 0, 0, width, height);
    noLoop();



}