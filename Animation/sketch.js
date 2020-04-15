function preload() {
    playfair = loadFont('Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf');
}

function setup() {
    createCanvas(windowWidth, 1200);
    noStroke();
    ellipseMode(RADIUS);
    frameRate(2);
    textFont(playfair);
    textSize(width/2);
    textAlign(CENTER, CENTER);
    text('CLIMATE // SLEEP');
    // colorMode(HSB);
    // noLoop();
}

function draw() {
    clear();
    background(220,212,209);
    // background(50);
    // blendMode(ADD)
    fill(52, 52, 53, 100);
    


    for (let i = 0; i < 700; i += 1) {
        let offSet = 5;
        let rad = random(1, 6);
        let min = offSet + rad;
        let xPos = random(10, windowWidth);
        let yPos = random(10, height - min);
        ellipse(xPos, yPos, rad);
    }

}
