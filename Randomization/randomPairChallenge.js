function setup () {
    createCanvas(windowWidth, windowHeight);
    frameRate(2);
    noStroke();
}

function draw () {
    let backgroundColor= ["#f59274", "#f3a9a9", "#f38c8c", "#799acf", "#91b388"];
    // let backgroundColor= ["red", "orange", "green", "blue"];
    var position = 0;
    backgroundColor= shuffle(backgroundColor);

for (let i =0; i <100; i++) {
background(colorPicker());
fill(colorPicker())
rect(windowWidth/2-150, windowHeight/2-150, 300, 300);
}

function colorPicker () {
v= backgroundColor[position];
position++;

if (position == backgroundColor.length) {
    backgroundColor= shuffle(backgroundColor);
    position= 0;
}
return v;
}

}

