// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var leftPupil, rightPupil, tounge_slider, color_picker;

function setup() {
    createCanvas(200, 300);

    fill(100);
    noStroke();

    createP('Pupil Position');
    // pos_x_slider = createSlider(0, width, width * .5);
    leftPupil = createSlider(25, 75, width * .5);
    rightPupil = createSlider(125, 175, width * .5);

    createP('Tongue Length');
    tongue_slider = createSlider(10, 150, 10);

    createP('Color');
    color_picker = createInput("#ac5861", "color");
}


function draw() {
    background(color_picker.value());
    fill(color_picker.value());
    var pos_x1 = leftPupil.value();
    var pos_x2 = rightPupil.value();
    var tongue = tongue_slider.value();


// left eye white
ellipseMode(CORNER); // Set ellipseMode is CORNER
fill(255); // Set fill to white
ellipse(25, 25, 50, 50); // Draw white ellipse using CORNER mode

// left pupil
ellipseMode(CORNERS); // Set ellipseMode to CORNERS
fill(50); // Set fill to gray
ellipse(pos_x1, 25, 50, 50); // Draw gray ellipse using CORNERS

// right eye white
ellipseMode(CORNER); // Set ellipseMode is CORNER
fill(255); // Set fill to white
ellipse(125, 25, 50, 50); // Draw white ellipse using CORNER mode

// right pupil
ellipseMode(CORNERS); // Set ellipseMode to CORNERS
fill(50); // Set fill to gray
ellipse(pos_x2, 25, 150, 50); // Draw gray ellipse using CORNERS

// tongue
fill("#e1a0b6");
rect(75, 100, 50, tongue, 50);
  
}