function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background(220);
  
  stroke(255);
  
  beginShape();
  r = 100;
  for (var a=0;a<2*3.14;a+=.1)
  {
    var x = cos(a)*r;
    var y = sin(a)*r;
    vertex(200+x,200+y);
  } 
  endShape();
  
  stroke(255, 0, 0);
  strokeWeight(2);
  beginShape();
  r = 95;
  for (var a=0;a<2*3.14;a+=.1)
  {
    var x = cos(a)*r;
    var y = sin(a)*r;
    vertex(200+x,200+y);
  } 
  endShape(CLOSE);

//  stroke(204, 204, 204);
  strokeWeight(0);
  var x = 140;
  var y = 140;
  text('EkwoTECH UG', x, y+0);
  text('2015', x, y+12);
  text('500€   Einlage', x, y+2*12);
  text('500€   Gewinnvortrag', x, y+3*12);
  text('6629€ Gewinn vor Steuern', x, y+4*12);
  text('231€   Gewerbesteuer', x, y+5*12);
  text('825.86€ Umsatzsteuer', x, y+6*12);
  text('-/-        Lohnsteuer', x, y+7*12);
  text('994€    Körperschaft', x, y+8*12);
  text('54.67€ Soli', x, y+9*12);
  text('2105.53€ Summe Steuern', x, y+10*12);
  text('4523.47€ Saldo', x, y+11*12);
}
