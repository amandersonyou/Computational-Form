
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// Photo by Glenn Carstens-Peters on Unsplash

let mySound;
let fft;
let img;

function preload() {
    mySound = loadSound('assets/thunderstorm.wav');
    img = loadImage('assets/rainWindow.jpg');
}

function setup() {
    createCanvas(650, 420);

    fft = new p5.FFT(0, 128);
    fft.setInput(mySound);


    startButton = createButton('start');
    startButton.mousePressed(start);

    stopButton = createButton('stop');
    stopButton.mousePressed(stop);
}

function start() {
    mySound.loop(0, 1, 1, 0, 18);
}

function stop() {
    mySound.pause();
}

function draw() {
    // background(50);
    image(img, 0, 0);
    // fill(106, 150, 172);
    noStroke();

    const data = fft.waveform();
    // fill("106, 150, 172");
    for (let i = 0; i < 85; i++) {
        const x = map(i, 0, 35, 0, 650);
        const y = map(data[i], -1, 1, 120, 270);
        fill(200, 209, 217);
        ellipse(x, y, (random(5,15)), (random(5,15)));
    }
}

