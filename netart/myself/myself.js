function setup() {
createCanvas(600, 600)
}


function draw() {
background(203);
strokeWeight(1);
//BACKHAIR
fill(30,8,2);
rect(200,170,200,300);
//RIGHT EAR
push();
translate(215,200);
rotate(radians(170));
fill(210,140,12);
ellipse(0,0,40,80);
pop(CLOSE);
//LEFT EAR
fill(210,140,12);
push();
translate(385,200);
rotate(radians(10));
ellipse(0,0,40,80);
pop(CLOSE);
//SHIRT
beginShape();
vertex(300,370);
vertex(450,420);
vertex(470,600);
vertex(120,600);
vertex(150,420);
fill(200,30,100);
endShape(CLOSE);
strokeWeight(4);
line(300,300,300,600);
strokeWeight(1);
line(210,508,200,600);
line(400,508,420,600);
//NECK
fill(210,140,12);
rect(250,200,100,190)
//COLLAR
arc(300,385,100,100,radians(0),radians(180))
//HEAD
ellipse(300,200,170,200);
//EYES
fill(230,240,200)
ellipse(255,205,45,23)
ellipse(345,205,45,23)
//PUPILS
fill(50,45,10)
arc(255,193,30,42,radians(10),radians(170));
arc(345,193,30,42,radians(10),radians(170));
//NOSE
fill(210,140,12);
ellipse(300,235,35,35)
//LIPS
fill(200,60,60);
strokeWeight(0);
ellipse(300,275,50,30)
//MOUTH
noFill();
stroke(0);
strokeWeight(1);
curve(240,260, 270,270, 333,270, 396,260);
//LEFT BROW
strokeWeight(3);
curve(300,188, 320,185, 360,178, 380,187);
curve(224,187, 234,178, 270,185, 288,188);
//FRONT HAIR
fill(30,8,2);
rect(210,160,10,330);
rect(380,160,10,330);
//HAT
fill(230,240,200);
arc(300,170,210,200,radians(180),radians(360));
//CAT
strokeWeight(0);
fill(100,230,255);
ellipse(300,130,70,60);
triangle(283,103, 268,130, 260,100);
triangle(318,103, 325,130, 340,100);
fill(255,255,255);
ellipse(287,130,15,15);
ellipse(311,130,15,15);
}