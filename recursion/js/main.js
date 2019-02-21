function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    noFill();
    ellipse(300, 200, 300);
    drawCircle(300,200,300);
}

let drawCircle = (x,y,z) =>{
    ellipse(x,y,z);
    if (z > 2){
        drawCircle(x + z * 0.5, y, z * .5);
        drawCircle(x - z * 0.5, y, z * .5);
    }
}


let app = ()=>{
    setup();
    draw();
}

app();