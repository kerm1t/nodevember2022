function setup() {
  // put setup code here
  cnv = createCanvas(1500, 800, WEBGL);
//  size(400, 400, P3D);
  cnv.mouseWheel(zoom);
}

// https://discourse.processing.org/t/how-to-make-a-better-zoom-with-orbitcontrol/12978/4
function zoom(event) {
    let sensitivityZoom = 0.05;
    let scaleFactor = cnv.height;
    if (event.deltaY > 0) {
        cnv._curCamera._orbit(0, 0, sensitivityZoom * scaleFactor);
    } else {
        cnv._curCamera._orbit(0, 0, -sensitivityZoom * scaleFactor);
    }
}

let x = 0;
let y = 0;
let outsideRadius = 150;
let insideRadius = 100;

function draw() {
  // put drawing code here

// https://p5js.org/examples/form-3d-primitives.html
  background(100);

//  noStroke();
  fill(50);
  stroke(255);
  push();
  translate(-275, 175);
  rotateY(1.25);
  rotateX(-0.9);
  box(100);
  pop();

  noFill();
  stroke(255);
  push();
  translate(500, height * 0.35, -200);
  sphere(300);
  pop();


// https://processing.org/examples/trianglestrip.html
  let numPoints = 50//map(mouseX, 0, width, 6, 60);
  let angle = 0;
  let angleStep = 180.0/numPoints;

  beginShape(TRIANGLE_STRIP); 
  for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius;
    let py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  endShape();
  orbitControl();
}
