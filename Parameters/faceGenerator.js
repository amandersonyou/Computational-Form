
// inspired by elenaleegold's facemaker: https://github.com/elenaleegold/faceMaker
  
let baseFace, baseFace_color;
let ears1, ears2, ears3, ears4, ears5, ears6, ears7;
let eyes1, eyes2, eyes3, eyes4, eyes5;
let nose1, nose2, nose3, nose4, nose5, nose6, nose7, nose8, nose9, nose10, nose11;


// let sliderR_face, sliderG_face, sliderB_face;
let sliderEars, sliderEyes, sliderNose;

function preload() {
  
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

}

function setup() {
  createCanvas(900, 900);
  textSize(14);
//   sliderR_face = createSlider(0, 255, random(100, 255));
//   sliderR_face.position(700, 50);
//   sliderR_face.style('width', '150px');

//   sliderG_face = createSlider(0, 255, random(100, 255));
//   sliderG_face.position(700, 100);

//   sliderG_face.style('width', '150px');

//   sliderB_face = createSlider(0, 255, random(100, 255));
//   sliderB_face.position(700, 150);

//   sliderB_face.style('width', '150px');
  sliderEars = createSlider(1, 7, int(random(1, 7)));
  sliderEars.position(100, 100);
  sliderEars.style('width', '150px');


  sliderEyes = createSlider(1, 5, int(random(1, 5)));
  sliderEyes.position(100, 300);
  sliderEyes.style('width', '150px');


  sliderNose = createSlider(1, 11, int(random(1, 11)));
  sliderNose.position(100, 500);
  sliderNose.style('width', '150px');



}


function draw() {
  background(255);


  text("Ears", 700, 340);
  text("Nose", 700, 440);
  text("Mouth", 700, 540);

//   faceColR = sliderR_face.value();
//   faceColG = sliderG_face.value();
//   faceColB = sliderB_face.value();

//   push();
//   tint(faceColR, faceColG, faceColB);
//   image(baseFace_color, 0, 0);
//   pop();

//   image(baseFace, 0, 0);

  var earVal = eval("ear" + sliderEars.value());
  image(earVal, 0, 0);

  var eyeVal = eval("eye" + sliderEyes.value());
  image(eyeVal, 0, 0);

  var noseVal = eval("nose" + sliderNose.value());
  image(noseVal, 0, 0);




//   if(sliderHair.value() == 5){
//   }
//   else{
//     var hairVal = eval("hair" + sliderHair.value());
//     image(hairVal, 0, 0);
//   }
  
//     if(sliderAc.value() == 5){
//   }
//   else{
//     var acVal = eval("ac" + sliderAc.value());
//     image(acVal, 0, 0);
//   }
    

}
