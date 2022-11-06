
// ocean palette https://www.color-hex.com/color-palette/47651
let flock = [];
let t=0;

function setup() {
  createCanvas(1600, 800,WEBGL);
  createP("Drag the mouse to generate new boids.");
  for (let f=0;f<10;f++) {
    flock[f] = [-400+random(800),-200+random(400)]
  }
}

function draw() {
//  background(51);
  background(59,227,228);
//  background(66,131,185);
  grid3d();
//  fish3d();
//  fish3d_move();
  fish3d_follow();
/*  for (let f=0;f<10;f++) {
    fish3d_followAT(mouseX-400+random(800),mouseY-200+random(400));
//    fish3d_followAT(mouseX+flock[f][0]+noise(t*frameCount),mouseY+flock[f][1]+noise(t));
  }
*/  t=t+0.01
  orbitControl();
}

function grid3d() {
 // draw crosses
 stroke(0,0,0);
 strokeWeight(1);
 for (let i=-5;i<6;i++) {
  for (let j=-3;j<4;j++) {
    beginShape(LINES);
      vertex(i*100-10, j*100, 0);
      vertex(i*100+10, j*100, 0);
    endShape();
    beginShape(LINES);
      vertex(i*100,j*100-10, 0);
      vertex(i*100,j*100+10, 0);
    endShape();
    }
 }
}

function fish3d() {
//  noFill();
//  strokeWeight(4); // Thicker
 let xm = 0
 let ym = 0
 let r = 200
 let pz = 0.1
   
 stroke(	66,131,185);
  fill(84,195,215);
  strokeWeight(3);
  beginShape(LINES);
  frameCount= 0; // stop animation
  for (let i=0;i<80;i++) { // every 400 = 1 circle
    phi = (frameCount+i)*PI/180
    px = xm-200 + r*cos(phi)
    py = ym + r*sin(phi)
//    r = r+.04
    vertex(px, py, pz);
  }
  for (let i=0;i<80;i++) { // every 400 = 1 circle
    phi = (160+frameCount+i)*PI/180
    px = xm+100 + r*cos(phi)
    py = ym+170 + r*sin(phi)
//    r = r+.04
    vertex(px, py, pz);
  }
  endShape();
}

function fish3d_move() {
//  background(59,227,228);
//  noFill();
//  strokeWeight(4); // Thicker
 let xm = 0
 let ym = 0
 let r = 200
 let pz = 0.1
 
 stroke(	66,131,185);
  fill(84,195,215);
  strokeWeight(3);
  beginShape(LINES);
//  frameCount= 0; // stop animation
  for (let i=0;i<80;i++) { // every 400 = 1 circle
    phi = (frameCount+i)*PI/180
    if (i==0) {
      phasex = r*cos(phi);
      phasey = r*sin(phi);
    }
    px = -phasex + xm + r*cos(phi)
    py = -phasey + ym + r*sin(phi)
//    r = r+.04
    vertex(px, py, pz);
  }
  
  for (let i=80;i>0;i--) { // every 400 = 1 circle
    phi = (160+frameCount+i)*PI/180
    if (i==80) {
      phasex = r*cos(phi);
      phasey = r*sin(phi);
    }
    px = -phasex + xm + r*cos(phi)
    py = -phasey + ym + r*sin(phi)
//    r = r+.04
    vertex(px, py, pz);
  }
  endShape();
}


// follow the mouse pointer (fish rotated to be horizontal)
function fish3d_follow() {
  //  background(59,227,228);
  //  noFill();
  //  strokeWeight(4); // Thicker
   let xm = 0
   let ym = 0
   let r = 200
   let pz = 0.1
   
   stroke(	66,131,185);
    fill(84,195,215);
    strokeWeight(3);
    beginShape(LINES);
    frameCount= 60; // stop animation
    for (let i=0;i<80;i++) { // every 400 = 1 circle
      phi = (frameCount+i)*PI/180
      if (i==0) {
        phasex = r*cos(phi);
        phasey = r*sin(phi);
      }
      px = -phasex + mouseX-600 + r*cos(phi)
      py = -phasey + mouseY-400 + r*sin(phi)
  //    r = r+.04
      vertex(px, py, pz);
    }
    
    for (let i=80;i>0;i--) { // every 400 = 1 circle
      phi = (160+frameCount+i)*PI/180
      if (i==80) {
        phasex = r*cos(phi);
        phasey = r*sin(phi);
      }
      px = -phasex + mouseX-600 + r*cos(phi)
      py = -phasey + mouseY-400 + r*sin(phi)
  //    r = r+.04
      vertex(px, py, pz);
    }
    endShape();
  }

// randomly follow the mouse pointer (fish rotated to be horizontal)
  function fish3d_followAT(x,y) {
    //  background(59,227,228);
    //  noFill();
    //  strokeWeight(4); // Thicker
     let xm = 0
     let ym = 0
     let r = 200
     let pz = 0.1
     
     stroke(	66,131,185);
      fill(84,195,215);
      strokeWeight(3);
      beginShape(LINES);
      frameCount= 60; // stop animation
      for (let i=0;i<80;i++) { // every 400 = 1 circle
        phi = (frameCount+i)*PI/180
        if (i==0) {
          phasex = r*cos(phi);
          phasey = r*sin(phi);
        }
        px = -phasex + x-800 + r*cos(phi)
        py = -phasey + y-400 + r*sin(phi)
    //    r = r+.04
        vertex(px, py, pz);
      }
      
      for (let i=80;i>0;i--) { // every 400 = 1 circle
        phi = (160+frameCount+i)*PI/180
        if (i==80) {
          phasex = r*cos(phi);
          phasey = r*sin(phi);
        }
        px = -phasex + x-800 + r*cos(phi)
        py = -phasey + y-400 + r*sin(phi)
    //    r = r+.04
        vertex(px, py, pz);
      }
      endShape();
    }