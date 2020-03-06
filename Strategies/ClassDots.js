// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// Dot Challenge Starting Point

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(50);

    noStroke();
    ellipseMode(CENTER);


    var noiseFrequency = 250;

    // from = color(86, 100%, 50%);
    // to = color(334, 100%, 50%);
    // c1 = lerpColor(from, to, 0.33);
    // c2 = lerpColor(from, to, 0.66);
    // small circles
    for (var i = 0; i < 40; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        var x = (random(30, 275) + random(30, 140) / 2);
        var y = (random(40, 275) + random(50, 100) / 2);

        // the diameter shouldn't always be 10, it needs to vary
        var diameter = 10;

        // the colors also need to change
        // what colorMode would be easiest to work with?
        fill(0, 255, 42);

        ellipse(x, y, diameter, diameter);
    }

    // medium circles
    for (var i = 0; i < 20; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        var x = (random(30, 200) + random(30, 140) / 2);
        var y = (random(40, 240) + random(50, 100) + random(50, 100)/ 3);

        // the diameter shouldn't always be 10, it needs to vary
        var diameter = 15;

        fill(0, 30, 255);
        ellipse(x, y, diameter, diameter);
    }


    // tiny circles
    for (var i = 0; i < 10; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        var x = (random(30, 200) + random(30, 140) / 2);
        var y = (random(40, 230) + random(50, 100) / 2);

        // the diameter shouldn't always be 10, it needs to vary
        var diameter = 6;

        fill(255, 149, 0);
        ellipse(x, y, diameter, diameter);
    }

    // larger circles
    for (var i = 0; i < 5; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        var x = (random(30, 200) + random(30, 140) / 2);
        var y = (random(40, 230) + random(50, 100) / 2);

        // the diameter shouldn't always be 10, it needs to vary
        var diameter = 18;

        fill(230, 0, 255);
        ellipse(x, y, diameter, diameter);
    }

    noLoop();


}

strategies.noise_high = function() {
    return placePointsNoise(POINT_COUNT, width, height, 1);
}