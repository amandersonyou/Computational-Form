// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// Dot Challenge Starting Point

function setup() {
    createCanvas(400, 600);
}


function draw() {
    background(5, 2, 64);

    noStroke();
    ellipseMode(CENTER);


    var noiseFrequency = 250;

    // stars
    for (var i = 0; i < 200; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        var x = (random(0, 400));
        var y = (random(0, 600));

        // the diameter shouldn't always be 10, it needs to vary
        var diameter = 1.25;

        // the colors also need to change
        // what colorMode would be easiest to work with?
        fill(255, 255, 255);
        ellipse(x, y, diameter, diameter);

    }

    for (var i = 0; i < 80; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        var x = (random(20,width-50) + random(10,width-50)+ random(10,width-50)) / 3;
        var y = (random(10,height) + random(20,height)+ random(10,height+50)) / 3;

        // the diameter shouldn't always be 10, it needs to vary
        var diameter = (random(1,4)+random(1,4))/2;

        // the colors also need to change
        // what colorMode would be easiest to work with?
        fill(184, 240, 249, 100);
        ellipse(x, y, diameter, diameter);

    }

    noLoop();
// Sun
fill(251, 231, 50);
ellipse(150, 200, 38, 38);
fill(251, 187, 50);
ellipse(150, 200, 33, 33);
// Mercury
fill(235, 193, 86);
ellipse(160, 160, 4, 4);
// Neptune
fill(50, 117, 251);
ellipse(80, 120, 10, 10);
// Saturn
fill(248, 233, 196);
ellipse(280, 380, 13, 13);
// Jupiter
fill(250, 189, 97);
ellipse(310, 440, 18, 18);
// Pluto
fill(125, 168, 197);
ellipse(290, 400, 3, 3);
// Earth's Moon
fill(221, 222, 223);
ellipse(110, 195, 3, 3);
// Mars
fill(242, 78, 7);
ellipse(360, 550, 8, 8);

    }





