// inspired by elenaleegold's facemaker: https://github.com/elenaleegold/faceMaker
// individual challenge for comp form parameters week
// most images from Unsplash.com

var ears1, ears2, ears3, ears4, ears5, ears6, ears7;
var eyes1, eyes2, eyes3, eyes4, eyes5;
var nose1, nose2, nose3, nose4, nose5, nose6, nose7, nose8, nose9, nose10, nose11;

var sliderEars, sliderEyes, sliderNose;

function preload() {
  // load images for cat faces
  ears1 = loadImage('CatFaces/ears/catears1.jpeg');
  ears2 = loadImage('CatFaces/ears/catears2.jpeg');
  ears3 = loadImage('CatFaces/ears/catears3.jpeg');
  ears4 = loadImage('CatFaces/ears/catears4.jpeg');
  ears5 = loadImage('CatFaces/ears/catears5.jpeg');
  ears6 = loadImage('CatFaces/ears/catears6.jpeg');
  ears7 = loadImage('CatFaces/ears/catears7.jpeg');

  eyes1 = loadImage('CatFaces/cateyes/cateyes1.jpeg');
  eyes2 = loadImage('CatFaces/cateyes/cateyes2.jpeg');
  eyes3 = loadImage('CatFaces/cateyes/cateyes3.jpeg');
  eyes4 = loadImage('CatFaces/cateyes/cateyes4.jpeg');
  eyes5 = loadImage('CatFaces/cateyes/cateyes5.jpeg');
  eyes6 = loadImage('CatFaces/cateyes/cateyes6.jpeg');

  nose1 = loadImage('CatFaces/catnose/catnose1.jpeg');
  nose2 = loadImage('CatFaces/catnose/catnose2.jpeg');
  nose3 = loadImage('CatFaces/catnose/catnose3.jpeg');
  nose4 = loadImage('CatFaces/catnose/catnose4.jpeg');
  nose5 = loadImage('CatFaces/catnose/catnose5.jpeg');
  nose6 = loadImage('CatFaces/catnose/catnose6.jpeg');
  nose7 = loadImage('CatFaces/catnose/catnose7.jpeg');
  nose8 = loadImage('CatFaces/catnose/catnose8.jpeg');
  nose9 = loadImage('CatFaces/catnose/catnose9.jpeg');
  nose10 = loadImage('CatFaces/catnose/catnose10.jpeg');
  nose11 = loadImage('CatFaces/catnose/catnose11.jpeg');
  nose12 = loadImage('CatFaces/catnose/catnose12.jpeg');

}

function setup() {
  createCanvas(800, 600);
  textSize(14);

// set up sliders for ears, eyes, and nose
  sliderEars = createSlider(1, 7, 1);
  sliderEars.position(500, 100);
  sliderEars.style('width', '150px');

  sliderEyes = createSlider(1, 6, 1);
  sliderEyes.position(500, 230);
  sliderEyes.style('width', '150px');

  sliderNose = createSlider(1, 12, 1);
  sliderNose.position(500, 370);
  sliderNose.style('width', '150px');

}


function draw() {
  background(255);

  text("Ears", 500, 140);
  text("Eyes", 500, 270);
  text("Nose", 500, 410);

// load cat face images based on slider value
  var earVal = eval("ears" + sliderEars.value());
  image(earVal, 0, 0);

  var eyeVal = eval("eyes" + sliderEyes.value());
  image(eyeVal, 0, 150);

  var noseVal = eval("nose" + sliderNose.value());
  image(noseVal, 0, 275);



}
