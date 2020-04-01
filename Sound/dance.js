// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

let dance;
let music;
let analyzer;


function preload() {
  dance = createVideo('assets/DPM.mov');
  music = loadSound('assets/RobotDance.wav');
  analyzer = new p5.Amplitude();
  analyzer.setInput(music);
}

function setup() {
  music.loop();
  dance.size(640, 360);
  dance.loop();
}
