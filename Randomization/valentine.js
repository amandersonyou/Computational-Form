function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(238,162,162);
    fill("#ffcce6");
    frameRate(1);
    noStroke();
    
   // heart drawing
    fill(246,224,224, 240);
    rect(180, 150, 20, 200);
    rect(160, 120, 20, 200);
    rect(140, 90, 20, 200);
    rect(120, 110, 20, 150);
    rect(100, 130, 20, 120);
    rect(80, 150, 20, 80);
    // right side of heart
    rect(200, 120, 20, 200);
    rect(220, 90, 20, 200);
    rect(240, 110, 20, 150);
    rect(260, 130, 20, 120);
    rect(280, 150, 20, 80);
    
    // poem
    fill(199,85,85);
    let randRose = ["red", "pink", "yellow", "peach", "smelly", "thorny", "scented", "nice to receive", "basic", "traditional", "flowers", "symbolic" ];
    let randViolet = ["pretty", "fancy", "purple", "flowers", "wild", "heart shaped", "blooming", "resilient", "edible"]; 
    let randSugar = ["sweet", "refined", "grainy", "messy", "delicious", "a pantry staple", "addictive"];
    textFont("Trechbuchet");
    textSize(32);
    text("roses are ", 10, 30);
    textSize(44);
    text(random(randRose),10,70);
    textSize(32);
    text("violets are ", 10, 120);
    textSize(44);
    text(random(randViolet),10,160);
    textSize(32);
    text("sugar is ", 10, 210);
    textSize(44);
    text(random(randSugar),10,250);
    textSize(32);
    text("... and so are you! ;)", 10, 320);
  
  
  }
  
  
  
  