/**
 * Triangle Strip 
 * by Ira Greenberg. 
 * 
 * Generate a closed ring using the vertex() function and 
 * beginShape(TRIANGLE_STRIP) mode. The outsideRadius and insideRadius 
 * variables control ring's radii respectively.
 */
// https://processing.org/examples/trianglestrip.html
let x = 0;
let y = 0;
let outsideRadius = 150;
let insideRadius = 100;

function setup() {
  createCanvas(640, 360, WEBGL); // P2D or WEBGL
//  normalMaterial(); // color according to normal vector
  describe(
    'Camera orbits around a box when mouse is hold-clicked & then moved.'
  );
}

function draw() {
  background(204);
//ellipse(50,50,80,80);

//  stroke(255);
  let numPoints = map(mouseX, 0, width, 6, 60);
  let angle = 0;
  let angleStep = 180.0/numPoints;

// set camera (a) manually
//  camera(20, 20, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
// (b) by mouse
  orbitControl();

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
}