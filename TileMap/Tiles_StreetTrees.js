let treeData;

function preload() {
  treeData = loadTable('assets/2015_StreetTreeData_short.csv', 'csv', 'header');

}


function setup() {
    createCanvas(1000, 1000);
    noStroke();

    // examine and check data is connecting  
    var treeStatus = treeData.getColumn('status');
    var treeDia = treeData.getColumn('tree_dbh');
    var stumpDia = treeData.getColumn('stump_diam');
    print(treeStatus);
    print(treeDia);
    print(stumpDia);



}

function draw() {

    background(240,248,255); // Alice Blue

    var table_treeData = treeData;
    var tileColumns = 50;
    var tileRows = 50;

    x = 25;
    y = 50;

    // for (var x = 0; x <= width; x = x + 50) {
        // for (var y = 0; y<height;y=y+50) {

    for (var i=0; i<table_treeData.getRowCount(); i++){
            var treeStat = (table_treeData.getString(i, 3));
            var treeDia = (table_treeData.getNum(i, 1));
            var stumpDia = (table_treeData.getNum(i, 2));
            if (treeStat == "Alive") {
                fill('green');
                rect(x, y, treeDia, 20);
            } else if (treeStat == "Dead") {
                fill('black');
                rect(x, y, treeDia, 10);
            } else {
                fill('black');
                ellipse(x, y, stumpDia);
            }

        x += tileColumns;
        // y += tileRows;

    }


}