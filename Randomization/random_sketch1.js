// Challenge sketch generating a new work in the style of Anni Albers
// Utilizing the P5 Scribble Library from Generative Light: 
// https://github.com/generative-light/p5.scribble.js
// inspired by: https://albersfoundation.org/templates/assets/images/art-anni/04_Fabrics/med/fabrics_08.jpg
// inspired by: https://albersfoundation.org/art/anni-albers/weavings/#slide6

function setup() {
    createCanvas(600, 400);
    background(0);
    stroke(4);
    strokeWeight(2.15);

    var width = 800;
    var height = 500;

    // create an instance of scribble and set a few parameters
    var scribble = new Scribble(); 
    scribble.bowing = 0; // controls the bowing curve of the lines to not be too wide
    stroke(246, 238, 214); // cream matches dropper sourced color of inspo


    // batch of horizontal lines, increase by 10 pixels for each
    scribble.roughness = 2;
    scribble.scribbleLine(0, 10, width, 10 );
    scribble.scribbleLine(0, 20, width, 20 );
    scribble.scribbleLine(0, 30, width, 30 );
    scribble.scribbleLine(0, 40, width, 40 );
    scribble.scribbleLine(0, 50, width, 50 );
    scribble.scribbleLine(0, 60, width, 60 );
    scribble.scribbleLine(0, 70, width, 70 );
    scribble.scribbleLine(0, 80, width, 80 );
    scribble.scribbleLine(0, 90, width, 90 );
    scribble.scribbleLine(0, 100, width, 100 );
    scribble.scribbleLine(0, 110, width, 110 );
    scribble.scribbleLine(0, 120, width, 120 );
    scribble.scribbleLine(0, 130, width, 130 );
    scribble.scribbleLine(0, 140, width, 140 );
    scribble.scribbleLine(0, 150, width, 150 );
    scribble.scribbleLine(0, 160, width, 160 );
    scribble.scribbleLine(0, 170, width, 170 );
    scribble.scribbleLine(0, 180, width, 180 );
    scribble.scribbleLine(0, 190, width, 190 );
    scribble.scribbleLine(0, 200, width, 200 );
    scribble.scribbleLine(0, 210, width, 210 );
    scribble.scribbleLine(0, 220, width, 220 );
    scribble.scribbleLine(0, 230, width, 230 );
    scribble.scribbleLine(0, 240, width, 240 );
    scribble.scribbleLine(0, 250, width, 250 );
    scribble.scribbleLine(0, 260, width, 260 );
    scribble.scribbleLine(0, 270, width, 270 );
    scribble.scribbleLine(0, 280, width, 280 );
    scribble.scribbleLine(0, 290, width, 290 );
    scribble.scribbleLine(0, 300, width, 300 );
    scribble.scribbleLine(0, 310, width, 310 );
    scribble.scribbleLine(0, 320, width, 320 );
    scribble.scribbleLine(0, 330, width, 330 );
    scribble.scribbleLine(0, 340, width, 340 );
    scribble.scribbleLine(0, 350, width, 350 );
    scribble.scribbleLine(0, 360, width, 360 );
    scribble.scribbleLine(0, 370, width, 370 );
    scribble.scribbleLine(0, 380, width, 380 );
    scribble.scribbleLine(0, 390, width, 390 );



    // batch of verticle lines
    // add 30 between groups, within groups add 4
    scribble.roughness = 1;
    scribble.scribbleLine(10, 0, 10, height );
    scribble.scribbleLine(14, 0, 14, height );
    scribble.scribbleLine(18, 0, 18, height );

    scribble.roughness = 1;
    scribble.scribbleLine(48, 0, 48, height );
    scribble.scribbleLine(52, 0, 52, height );
    scribble.scribbleLine(56, 0, 56, height );

    scribble.scribbleLine(86, 0, 86, height );
    scribble.scribbleLine(90, 0, 90, height );
    scribble.scribbleLine(94, 0, 94, height );

    scribble.scribbleLine(124, 0, 124, height );
    scribble.scribbleLine(128, 0, 128, height );
    scribble.scribbleLine(132, 0, 132, height );

    scribble.scribbleLine(162, 0, 162, height );
    scribble.scribbleLine(166, 0, 166, height );
    scribble.scribbleLine(170, 0, 170, height );

    scribble.scribbleLine(200, 0, 200, height );
    scribble.scribbleLine(204, 0, 204, height );
    scribble.scribbleLine(208, 0, 208, height );

    scribble.scribbleLine(238, 0, 238, height );
    scribble.scribbleLine(242, 0, 242, height );
    scribble.scribbleLine(246, 0, 246, height );
    
    scribble.scribbleLine(276, 0, 276, height );
    scribble.scribbleLine(280, 0, 280, height );
    scribble.scribbleLine(284, 0, 284, height );

    scribble.scribbleLine(314, 0, 314, height );
    scribble.scribbleLine(318, 0, 318, height );
    scribble.scribbleLine(322, 0, 322, height );

    scribble.scribbleLine(352, 0, 352, height );
    scribble.scribbleLine(356, 0, 356, height );
    scribble.scribbleLine(360, 0, 360, height );

    scribble.scribbleLine(390, 0, 390, height );
    scribble.scribbleLine(394, 0, 394, height );
    scribble.scribbleLine(398, 0, 398, height );

    scribble.scribbleLine(428, 0, 428, height );
    scribble.scribbleLine(432, 0, 432, height );
    scribble.scribbleLine(436, 0, 436, height );

    scribble.scribbleLine(458, 0, 458, height );
    scribble.scribbleLine(462, 0, 462, height );
    scribble.scribbleLine(466, 0, 466, height );

    scribble.scribbleLine(496, 0, 496, height );
    scribble.scribbleLine(500, 0, 500, height );
    scribble.scribbleLine(504, 0, 504, height );

    scribble.scribbleLine(534, 0, 534, height );
    scribble.scribbleLine(538, 0, 538, height );
    scribble.scribbleLine(542, 0, 542, height );

    scribble.scribbleLine(572, 0, 572, height );
    scribble.scribbleLine(576, 0, 576, height );
    scribble.scribbleLine(580, 0, 580, height );



//colorful lines at varying thickness and random order

scribble.roughness = 1;
stroke(4);
strokeWeight(8);
stroke(230, 85, 28, 120); // red-orange
scribble.scribbleLine(66, 0, 66, height );
scribble.scribbleLine(294, 0, 294, height )
scribble.scribbleLine(560, 0, 560, height )
scribble.scribbleLine(522, 0, 522, height )
scribble.scribbleLine(104, 0, 104, height )
scribble.scribbleLine(180, 0, 180, height )
stroke(176, 43, 68, 120); // dark pink
scribble.scribbleLine(256, 0, 256, height )
scribble.scribbleLine(28, 0, 28, height )
scribble.scribbleLine(332, 0, 332, height )
scribble.scribbleLine(370, 0, 370, height )
scribble.scribbleLine(484, 0, 484, height )
scribble.scribbleLine(598, 0, 598, height )
strokeWeight(15);
stroke(38, 76, 164, 120); // dark seablue
scribble.scribbleLine(142, 0, 142, height )
scribble.scribbleLine(446, 0, 446, height )
scribble.scribbleLine(218, 0, 218, height )
scribble.scribbleLine(408, 0, 408, height )


}

function draw() {
    

}

