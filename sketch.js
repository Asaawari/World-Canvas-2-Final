points = [];
start = false;
var final = points;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    background(51);
    
}

points = [];
 var drawing = [];
start = false;

function setup(){
    createCanvas(800, 800);
  
}

function draw(){
    background("#00FEF6")

    if(start){
       points.push(createVector(mouseX, mouseY));
    }

    stroke(255);
    strokeWeight(4);
    fill("black");
    for(var i = 0; i < drawing.length; i++){
        var path = drawing[i];
        beginShape();
        fill("black");
        for(var j = 0; j < path.length; j++){
            vertex(path[j].x,path[j].y);
        }
        //var x = path[i].x;
       endShape();
       //vertex(drawing[i].x, drawing[i].y);
       // var y = path[i].y;
    }
  }

function mouseDragged(){
    start = true;
    point = {
      x : mouseX, 
      y:mouseY
    }
    drawing.push(point);
}

function mouseReleased(){
    start = false;
}