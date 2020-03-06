// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

// Background image credit: JR Korpa on Unsplash

var frequency_slider;
var amplitude_slider;
var timespeed_slider;

var startX = 20;
var startY = 150;
var endX = 450;
var endY = 150;

let img;
function preload() {
  img = loadImage('assets/painting.jpg');
}

function setup() {
    createCanvas(500, 300);


    createP('Frequency');
    frequency_slider = createSlider(0, 50, 10);
    createP('Amplitude');
    amplitude_slider = createSlider(0, 50, 10);
    createP('Circle Size');
    size_slider = createSlider(0, 200, 150);


}


function draw() {
    // background(50);
    ellipseMode(CENTER);
    image(img, 0, 0);

    var frequency = frequency_slider.value() / 100;
    var amplitude = amplitude_slider.value() / 100;
    var circleSize = size_slider.value() / 100;


    noiseDetail(1, .5);



    fill(255);
    noStroke();

    // study this loop. do you understand how the line of ellipses is created?
    for (i = 0; i < 5; i += .099) {
        var x = lerp(startX, endX, i);
        var y = lerp(startY, endY, i);

        // hint: drive offsetX and offsetY with noise() instead of random()
        var offsetX = (random() - .5) * amplitude * 100;
        var offsetY = (random() - .5) * amplitude * 100;
        var offsetX1 = (random() - .5) * frequency * 50;
        var offsetY1 = (random() - .5) * frequency * 50;
        var size = (random() - 2) * circleSize * 10;
        // var offsetY2 = (random() - 5) * timespeed * 10;

        fill(247, 219, 2);
        ellipse(x + offsetX + offsetX1, y + offsetY + offsetY1, size, size);
        ellipse(x + offsetX + offsetX1, y + offsetY + offsetY1 + 100, size, size);
        ellipse(x + offsetX + offsetX1, y + offsetY + offsetY1 - 100, size, size);
    }
// noLoop();


}