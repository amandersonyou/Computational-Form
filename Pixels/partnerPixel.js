// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(57, 24, 20);
    img = createImage(15, 15);
    img.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x+=2) {
            
            colorMode(HSB);
            // setting the colors, randomizing some values
            let c1 = color(6, 80, (random(55,75)));
            let c2 = color(6, 91, 80);
            let c3 = color(6, (random(30,80)), 90)
            // dividing up the pixel patterns
            img.set(x, y/4, c1);
            img.set(x/2, y*2.5, c2);
            img.set(x*4, y*2, c3);
        }
    }

    img.updatePixels();

    noSmooth();
    // main full image of the pattern + overlapping and sectioned images of the pattern
    image(img, 0, 0, width, height*2);
    image(img, 0, 0, width, height);
    image(img, width/2, height/2, width/2, height/2);
    image(img, 0, 0, width/2, height*2);
    image(img, 0, 0, width*2, height/2);
    noLoop();
}