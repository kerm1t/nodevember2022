
// ocean palette https://www.color-hex.com/color-palette/47651
let flock = [];
let t=0;
/*
function setup() {
  createCanvas(1600, 800,WEBGL);
  createP("Drag the mouse to generate new boids.");
  for (let f=0;f<10;f++) {
    flock[f] = [-400+random(800),-200+random(400)]
  }
}
*/
var q = function( p ) { // p could be any variable name
  p.setup = function() {
    p.createCanvas(800, 500, p.WEBGL);
//    p.createP("Drag the mouse to generate new boids.");
    for (let f=0;f<10;f++) {
      flock[f] = [-400+p.random(800),-200+p.random(400)]
    }
  }

  p.draw = function() {
  p.background(155);
//  p.background(59,227,228);
//  background(66,131,185);
  src3d(p);
  fish3d(p);
//  fish3d_move(p);
//  fish3d_follow(p);
/*  for (let f=0;f<10;f++) {
    fish3d_followAT(mouseX-400+random(800),mouseY-200+random(400));
//    fish3d_followAT(mouseX+flock[f][0]+noise(t*frameCount),mouseY+flock[f][1]+noise(t));
  }
*/  t=t+0.01
  p.orbitControl();
  }
}
var myp5 = new p5(q, 'c1');


var r = function( p ) { // p could be any variable name
  p.setup = function() {
    p.createCanvas(800, 400, p.WEBGL);
//    p.createP("Drag the mouse to generate new boids.");
    for (let f=0;f<10;f++) {
      flock[f] = [-400+p.random(800),-200+p.random(400)]
    }
  }

  p.draw = function() {
//  background(51);
  p.background(59,227,228);
//  background(66,131,185);
  grid3d(p);
//  fish3d();
  fish3d_move(p);
//  fish3d_follow(p);
/*  for (let f=0;f<10;f++) {
    fish3d_followAT(mouseX-400+random(800),mouseY-200+random(400));
//    fish3d_followAT(mouseX+flock[f][0]+noise(t*frameCount),mouseY+flock[f][1]+noise(t));
  }
*/  t=t+0.01
  p.orbitControl();
  }
}
var myp5 = new p5(r, 'c2');



var s = function( p ) { // p could be any variable name
  p.setup = function() {
    p.createCanvas(800, 400, p.WEBGL);
//    p.createP("Drag the mouse to generate new boids.");
    for (let f=0;f<10;f++) {
      flock[f] = [-400+p.random(800),-200+p.random(400)]
    }
  }

  p.draw = function() {
//  background(51);
  p.background(59,227,228);
//  background(66,131,185);
  grid3d(p);
//  fish3d();
//  fish3d_move();
  fish3d_follow(p);
/*  for (let f=0;f<10;f++) {
    fish3d_followAT(mouseX-400+random(800),mouseY-200+random(400));
//    fish3d_followAT(mouseX+flock[f][0]+noise(t*frameCount),mouseY+flock[f][1]+noise(t));
  }
*/  t=t+0.01
  p.orbitControl();
  }
}
var myp5 = new p5(s, 'c3');



function src3d(p) {
  // draw crosses
  p.stroke(0,0,0);
  p.strokeWeight(1);
  dx = (p.width/2/100);
  dy = (p.height/2/100);
  p.beginShape(p.LINES);
    p.vertex(-10, 0, 0);
    p.vertex(10, 0, 0);
  p.endShape();
  p.beginShape(p.LINES);
    p.vertex(0,-10, 0);
    p.vertex(0,10, 0);
  p.endShape();
}

function grid3d(p) {
 // draw crosses
 p.stroke(0,0,0);
 p.strokeWeight(1);
 dx = (p.width/2/100);
 dy = (p.height/2/100);
 for (let i=-(dx-1);i<dx;i++) {
  for (let j=-(dy-1);j<dy;j++) {
    p.beginShape(p.LINES);
      p.vertex(i*100-10, j*100, 0);
      p.vertex(i*100+10, j*100, 0);
    p.endShape();
    p.beginShape(p.LINES);
      p.vertex(i*100,j*100-10, 0);
      p.vertex(i*100,j*100+10, 0);
    p.endShape();
    }
 }
}

// ----------------------------------------------------------
// multiple instances of p5.js on an html page
// p5 instance mode: http://joemckaystudio.com/multisketches/
// p5 reference: https://p5js.org/reference/#/p5/p5
// hmm, this seems to be a lot of work,
// to add the scope to each and every command
// ----------------------------------------------------------

function fish3d(p) {
  p.noFill();
//  strokeWeight(4); // Thicker
 let xm = 0
 let ym = 0
 let r = 200
 let pz = 0.1
   
 p.stroke(0);
 //p.fill(255);
 //p.strokeWeight(3);
 p.beginShape(p.LINES);
  frameCount= 0; // stop animation
  for (let i=0;i<80;i++) { // every 400 = 1 circle
    phi = (frameCount+i)*p.PI/180
    px = xm-200 + r*p.cos(phi)
    py = ym + r*p.sin(phi)
//    r = r+.04
    p.vertex(px, py, pz);
  }
  for (let i=0;i<80;i++) { // every 400 = 1 circle
    phi = (160+frameCount+i)*p.PI/180
    px = xm+100 + r*p.cos(phi)
    py = ym+170 + r*p.sin(phi)
//    r = r+.04
    p.vertex(px, py, pz);
  }
  p.endShape();
}

function fish3d_move(p) {
//  background(59,227,228);
//  noFill();
//  strokeWeight(4); // Thicker
 let xm = 0
 let ym = 0
 let r = 200
 let pz = 0.1
 
 p.stroke(	66,131,185);
 p.fill(84,195,215);
 p.strokeWeight(3);
 p.beginShape(p.LINES);
//  frameCount= 0; // stop animation
  for (let i=0;i<80;i++) { // every 400 = 1 circle
    phi = (p.frameCount+i)*p.PI/180
    if (i==0) {
      phasex = r*p.cos(phi);
      phasey = r*p.sin(phi);
    }
    px = -phasex + xm + r*p.cos(phi)
    py = -phasey + ym + r*p.sin(phi)
//    r = r+.04
    p.vertex(px, py, pz);
  }
  
  for (let i=80;i>0;i--) { // every 400 = 1 circle
    phi = (160+p.frameCount+i)*p.PI/180
    if (i==80) {
      phasex = r*p.cos(phi);
      phasey = r*p.sin(phi);
    }
    px = -phasex + xm + r*p.cos(phi)
    py = -phasey + ym + r*p.sin(phi)
//    r = r+.04
    p.vertex(px, py, pz);
  }
  p.endShape();
}


// follow the mouse pointer (fish rotated to be horizontal)
function fish3d_follow(p) {
  //  background(59,227,228);
  //  noFill();
  //  strokeWeight(4); // Thicker
   let xm = 0
   let ym = 0
   let r = 200
   let pz = 0.1
   
   p.stroke(	66,131,185);
    p.fill(84,195,215);
    p.strokeWeight(3);
    p.beginShape(p.LINES);
    frameCount= 60; // stop animation, align fish horizontally
    for (let i=0;i<80;i++) { // every 400 = 1 circle
      phi = (frameCount+i)*p.PI/180
      if (i==0) {
        phasex = r*p.cos(phi);
        phasey = r*p.sin(phi);
      }
      px = -phasex + p.mouseX-p.width/2 + r*p.cos(phi)
      py = -phasey + p.mouseY-p.height/2 + r*p.sin(phi)
  //    r = r+.04
      p.vertex(px, py, pz);
    }
    
    for (let i=80;i>0;i--) { // every 400 = 1 circle
      phi = (160+frameCount+i)*p.PI/180
      if (i==80) {
        phasex = r*p.cos(phi);
        phasey = r*p.sin(phi);
      }
      px = -phasex + p.mouseX-p.width/2 + r*p.cos(phi)
      py = -phasey + p.mouseY-p.height/2 + r*p.sin(phi)
  //    r = r+.04
      p.vertex(px, py, pz);
    }
    p.endShape();
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