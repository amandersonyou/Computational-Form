// P5 sketch for hero image of thesis
let particles = [];

function setup() {
    createCanvas(windowWidth, 800);
    // loadFont('Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf', drawText);
    frameRate(35);
}

// function drawText(font) {
//     fill(0);
//     textFont(font, 100);
//     text('CLIMATE // SLEEP', 50, 50);
// }


function draw() {
    background(220,212,209, 220);
    for (let i = 0; i < 2; i ++) {
        let p = new Particle();
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}

class Particle {

    constructor() {
        this.x = random(0, windowWidth);
        this.y = 790;
        this.vx = random(-1, 1);
        this.vy = random(-7, -1);
        this.alpha = 255;
    }

finished() {
    return this.alpha < 0;
}

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha-= 2;

    }

    show() {
        noStroke();
        // stroke(255);
        fill(150, this.alpha);
        ellipse(this.x, this.y, random(3, 10));
    }
}



