// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

let mySound;

function preload() {
  mySound = loadSound('assets/Isabelle2.m4a');
}


function setup() {
    createCanvas(400, 200);
    background(50);
    const startButton = createButton('play');
    startButton.mousePressed(start);
  }
  
  function start() {
    mySound.play(0, 1, 1);
  }
  