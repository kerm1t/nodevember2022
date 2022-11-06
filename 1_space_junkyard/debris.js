/**
 * Triangle Strip 
 * by Ira Greenberg. 
 * 
 * Generate a closed ring using the vertex() function and 
 * beginShape(TRIANGLE_STRIP) mode. The outsideRadius and insideRadius 
 * variables control ring's radii respectively.
 */
// https://processing.org/examples/trianglestrip.html


// inspired https://happycoding.io/gallery/spirals/index
// this little function puts quite some load on the laptop :(
// ... i think it's due to sin/cos calculation
//     so why not do a precalc
function spiral() {
  background(0);
  strokeWeight(4); // Thicker
 let xm = 600
 let ym = 400
 let r = 100
 for (let i=0;i<1000;i++) { // every 400 = 1 circle
  j = random(255) // sega :-)
  stroke(j, 255-j, j%255)
  strokeWeight(2+random(52)); // Thicker

  phi = i/8//(frameCount+i)*PI/180
  x = xm + r*cos(phi)
  y = ym + r*sin(phi)
  r = r+1.4
  point(x+random(125),y+random(25))
 }
  
  filter(BLUR, 5);
  
  stroke(0, 0, 0)
  strokeWeight(1);
  for (y=0;y<300;y++) {
   line(0, y*3, 1200, y*3);
  }
 console.log(frameRate())
}

function setup() {
  createCanvas(1200, 800, P2D);

  spiral()

}

function draw()
{
}

/*
 * Triangle Strip 
 * by Ira Greenberg. 
 * 
 * Generate a closed ring using the vertex() function and 
 * beginShape(TRIANGLE_STRIP) mode. The outsideRadius and insideRadius 
 * variables control ring's radii respectively.
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

}

function draw() {
  orbitControl();
}
*/