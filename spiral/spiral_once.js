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

function setup() {
  createCanvas(400, 400, P2D);

  spiral()
}

function draw()
{
}