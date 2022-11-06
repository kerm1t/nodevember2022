let table = []

function setup() {
  createCanvas(400, 400, P2D);

  for(let i = 0; i < 1000; i++){
    table[i] = sin(i/1000.0);
  }
}

function fastSin(x){
  let index = x * 1000.0;
  return table[index];
}

function draw1() {
  background(200);
  strokeWeight(3); // Thicker
// kreis  x^2+y^2 = radius
// -> parametergleichung
// x = xm + r*cos(phi)
// y = ym + r*sin(phi)
 let xm = 200
 let ym = 200
 let r = 20
 for (let i=0;i<1400;i++) { // this does several bigger steps, as no conversion deg to rad
  phi = i+frameCount
  x = xm + r*cos(phi)
  y = ym + r*sin(phi)
  r = r+0.1
  point(x,y)
 }
}

// inspired https://happycoding.io/gallery/spirals/index
// this little function puts quite some load on the laptop :(
// ... i think it's due to sin/cos calculation
//     so why not do a precalc
function spiral() {
  background(200);
  strokeWeight(4); // Thicker
 let xm = 200
 let ym = 200
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


https://stackoverflow.com/questions/13042110/create-a-fast-sin-function-to-improve-fps-fast-sin-function
function spiral_fast() {
  background(200);
  strokeWeight(4); // Thicker
 let xm = 200
 let ym = 200
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
}


function draw()
{
  spiral_fast()
}