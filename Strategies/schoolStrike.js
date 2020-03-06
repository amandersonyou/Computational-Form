// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// Dot Challenge Starting Point

function setup() {
    createCanvas(800, 800);
}


function draw() {
    background(255);

    noStroke();
    ellipseMode(CENTER);


    var noiseFrequency = .02;

    // black
    // for (var i = 0; i < (103); i++) {
    //     // these points are not scattered in the same way
    //     // how can you make the arrangement match the challenge?
    //     var x = (random(10,width-10) + random(10,width-10)+ random(10,width-10)) / 3;
    //     var y =(random(10,height-10) + random(10,height-10)+ random(10,height-10)) / 3;

    //     var diameter = 5
    //     fill(0);
    //     ellipse(x, y, diameter, diameter);
    // }

    // cinnamon
    // for (var i = 0; i < (392); i++) {
    //     // these points are not scattered in the same way
    //     // how can you make the arrangement match the challenge?
    //     var x = (random(10,width-10) + random(10,width-10)+ random(10,width-10)) / 3;
    //     var y =(random(10,height-10) + random(10,height-10)+ random(10,height-10)) / 3;

    //     var diameter = 5
    //     fill(232, 124, 23);
    //     ellipse(x, y, diameter, diameter);
    // }

        // cinnamon
        for (var i = 0; i < (2473); i++) {
            // these points are not scattered in the same way
            // how can you make the arrangement match the challenge?
            var x = (random(10,width-10) + random(10,width-10)+ random(10,width-10)) / 3;
            var y =(random(10,height-10) + random(10,height-10)+ random(10,height-10)) / 3;
    
            var diameter = 5
            fill(166, 166, 166);
            ellipse(x, y, diameter, diameter);
        }


    noLoop();


}