// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// Image by Amanda Anderson-You of a cat named Ost (Cheese) in Copenhagen, 2019

let ostKat;

function preload() {
    ostKat = loadImage("https://raw.githubusercontent.com/amandersonyou/Computational-Form/master/Pixels/assets/ostKat.png");
}

function setup() {
    createCanvas(ostKat.width,ostKat.height );
  // noprotect
}


function draw() {
    background(0, 0, 0);
    noStroke();

    var spacing = 500 / ostKat.width;
    for (var y = 0; y < ostKat.height; y+=7) {
        for (var x = 0; x < ostKat.width; x+=7) {
            var in_color = ostKat.get(x, y);
            var c = lightness(in_color);
           // console.log(lightness(in_color))      
          if(c<=30){
          fill(190,190,c*0.2);
          ellipse(x,y, c*0.1);
          } else if(c>30&&c<=40){
          fill(150,150,c);
            ellipse(x,y,c*0.1);
          } else if (c>40&&c<=50){
          fill(150,150,c*3);
            ellipse(x,y,c*0.1);
          } else if(c>50){
            fill(150,190,c*4);
          ellipse(x,y,c*0.09);
          }

        }
    }

    noLoop();
}