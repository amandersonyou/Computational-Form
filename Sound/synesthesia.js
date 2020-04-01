// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// audio from freesounds.org

var button;
function preload() {
    mySound = loadSound('assets/alphabet.wav');
}

function setup() {
    createCanvas(500, 300);
    background("#BD0D13");

    startButton = createButton('start');
    startButton.mousePressed(start);

    stopButton = createButton('stop');
    stopButton.mousePressed(stop);

    console.log(mySound.currentTime());
    //a dark red
    mySound.addCue(0, changeBackground, color("#BD0D13"));
    //b orange
    mySound.addCue(1, changeBackground, color("#FF8000"));
    //c green
    mySound.addCue(2, changeBackground, color("#5BAB0C"));
    //d blue/purple
    mySound.addCue(4, changeBackground, color("#0C0873"));
    //e purple
    mySound.addCue(5, changeBackground, color("#2D15A3"));
    //f orange
    mySound.addCue(6, changeBackground, color("#EB7D00"));
    //g blue/purple
    mySound.addCue(7, changeBackground, color("#542C8F"));
    //h redish purple
    mySound.addCue(9, changeBackground, color("#DE4112"));
    //i yellow
    mySound.addCue(10, changeBackground, color("#FFEF08"));
    //j orange
    mySound.addCue(11, changeBackground, color("#F57B11"));
    //k purple
    mySound.addCue(13, changeBackground, color("#BD4EF5"));
    //l lilac
    mySound.addCue(14, changeBackground, color("#D2A7FC"));
    //m red/orange/purple 
    mySound.addCue(16, changeBackground, color("#B30534"));
    //n hunter green
    mySound.addCue(18, changeBackground, color("#177510"));
    //o purple
    mySound.addCue(19, changeBackground, color("#411475"));
    //p orange
    mySound.addCue(20, changeBackground, color("#FA9D23"));
    //q purple
    mySound.addCue(22, changeBackground, color("#4D1596"));
    // //r red
    mySound.addCue(24, changeBackground, color("#D11204"));
    // yellow
    mySound.addCue(25, changeBackground, color("#FFFF00"));
    //t blue/purple
    mySound.addCue(26, changeBackground, color("#270FA3"));
    //u green
    mySound.addCue(28, changeBackground, color("#4DA36F"));
    //v orange
    mySound.addCue(29, changeBackground, color("#FF9012"));
    //w red/orange
    mySound.addCue(31, changeBackground, color("#C23400"));
    //x dark purple
    mySound.addCue(33, changeBackground, color("#230F5C"));
    //y yellow
    mySound.addCue(34, changeBackground, color("#FAE900"));
    //z grey/white
    mySound.addCue(35, changeBackground, color("#E6EAF0"));

}

function changeBackground(col) {
    background(col);
    // console.log(mySound.currentTime());
}

function start() {
mySound.loop(0, 1, 1, 0, 45);
}

function stop() {
mySound.pause();
}

