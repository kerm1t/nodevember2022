// #nodevember psychedelic alley #nodevember2022

// inspired https://happycoding.io/gallery/spirals/index
// this little function puts quite some load on the laptop :(
// ... i think it's due to sin/cos calculation
//     so why not do a precalc
function spiral() {
  background(200);
  strokeWeight(4); // Thicker
 let xm = 0
 let ym = 0
 let r = 2
 for (let i=0;i<5000;i++) { // every 400 = 1 circle
  phi = (frameCount+i)*PI/180
  x = xm + r*cos(phi)
  y = ym + r*sin(phi)
  r = r+0.02
  point(x,y)
//  j = i+frameCount
  j = i*0.02 // sega :-)
  stroke(j%255, 255-j%255, 255+j%255)
 }
 console.log(frameRate())
}

function spiral3d() {
  background(200);
//  strokeWeight(4); // Thicker
 let xm = 0
 let ym = 0
 let r = 2
 let pz = 0.1
  beginShape(LINES);
  for (let i=0;i<1500;i++) { // every 400 = 1 circle
    phi = (frameCount+i)*PI/180
    px = xm + r*cos(phi)
    py = ym + r*sin(phi)
    pz = pz-0.1
    r = r+.04
    vertex(px, py, pz);
  }
  endShape();
}


function hexagon() {
  background(200);
  noFill();
  strokeWeight(4); // Thicker
 let xm = 0
 let ym = 0
 let r = 100
 let pz = 0.1
 let px = 100; py = 0
  beginShape(LINES);
  for (let i=0;i<200;i++) {
    vertex(px, py, pz);
    phi = (60*i)*PI/180
    px = xm + r*cos(phi)
    py = ym + r*sin(phi)
    pz = pz-2
    r = r+.04
    vertex(px, py, pz);
  
//    j = i // sega :-)
//    stroke(j%255, 255-j%255, 255+j%255)
    stroke(100,100,0);
  }
  endShape();
  beginShape(LINES);
 r = 200
 pz = 0.1
 px = 200; py = 0
  for (let i=0;i<200;i++) {
    vertex(px, py, pz);
    phi = (60*i)*PI/180
    px = xm + r*cos(phi)
    py = ym + r*sin(phi)
    pz = pz-2
    r = r+.04
    vertex(px, py, pz);
  
//    j = i // sega :-)
//    stroke(j%255, 255-j%255, 255+j%255)
    stroke(0,200,0);
  }
  endShape();
}


function hexagon_shade() {
  background(200);
  noFill();
  strokeWeight(4); // Thicker
 let xm = 0
 let ym = 0
 let r = 100
 let pz = 0.1
 let px = r; py = 0
  for (let i=0;i<200;i++) {
  beginShape(LINES);
    vertex(px, py, pz);
    phi = (60*i)*PI/180
    px = xm + r*cos(phi)
    py = ym + r*sin(phi)
    pz = pz-2
    r = r+.04
    vertex(px, py, pz);
  endShape();
  
    j = i // sega :-)
    stroke(j%255, 255-j%255, 255+j%255)
  }
 r = 120
 pz = 0.1
 px = r; py = 0
  for (let i=0;i<200;i++) {
  beginShape(LINES);
    vertex(px, py, pz);
    phi = (60*i)*PI/180
    px = xm + r*cos(phi)
    py = ym + r*sin(phi)
    pz = pz-2
    r = r+.04
    vertex(px, py, pz);
  endShape();
  
    j = 255-i // sega :-)
    stroke(j%255, 255-j%255, 255+j%255)
  }
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

function setup() {
  cnv = createCanvas(1200, 800, WEBGL);

//  spiral();
//  spiral3d(); tut's ned
  cnv.mouseWheel(zoom);
}

function draw()
{
//  spiral3d();
//  hexagon();
  hexagon_shade();
  orbitControl();
}