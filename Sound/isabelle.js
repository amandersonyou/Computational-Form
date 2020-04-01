// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// song is from Animal Crossing recorded off YouTube, hope that's ok.

var button;
var song;
var fft;
var w;

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}


function preload() {
    song = loadSound('assets/Isabelle2.m4a');
    img = loadImage('assets/isabelleSinging.png');
}

function setup() {
    createCanvas(700, 389);
    button = createButton('toggle');
    button.mousePressed(toggleSong);
    song.play();
    fft = new p5.FFT(.8, 64);
    w = width / 64;
}


function draw() {
    image(img, 0, 0);
    var spectrum = fft.analyze();
    for (var i = 0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        var y = map(amp, 0, 255, height, 0);
        fill((random(70,255)), (random(0,155)), (random(0,255)), 160)
        ellipse(i * w, y-30, w+40, 60);
    }
    noStroke();
    noFill();

}