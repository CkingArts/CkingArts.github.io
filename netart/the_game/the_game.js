//the game

//variables
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img;
var img2;

//preload image
function preload(){
  img = loadImage('mole.png');
  img2 = loadImage('congrats.jpg')
}
function setup() {
  createCanvas(600,600)
  textAlign(CENTER);
  textSize(20);
}


function draw() {
  background(204);
  if (gameState == "L1"){
    levelOne();
  }
  if (gameState == "L2"){
     levelTwo();
  }
  if (gameState == "L3"){
     levelThree();
  }
  if (gameState == "WIN"){
     gameEND();
  }
  text(("Score: " + score),width/2,40);
}//end draw

function levelOne(){
  text("level 1",width/2,height-20);
  var distanceToball = dist(ballx,bally,mouseX,mouseY);
  if(distanceToball < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score+1
  }
  if(score>5){
    gameState = "L2";
  }
  //ellipse(ballx,bally,ballSize,ballSize);
  image(img,ballx-25,bally-25,50,50);
  line(ballx,bally,mouseX,mouseY);
}//end level 1

function levelTwo(){
  background(200,100,0);
  text("level 2",width/2,height-20);
  var distanceToball = dist(ballx,bally,mouseX,mouseY);
  if(distanceToball < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score+1;
  }
  if(score>10){
    gameState = "L3"
  }
  //line(ballx,bally,mouseX,mouseY);
  //ellipse(ballx,bally,ballSize,ballSize);
  image(img,ballx-25,bally-25,50,50);
}//end level 2

function levelThree(){
  background(0,100,200);
  text("level 3",width/2,height-20);
  var distanceToball = dist(ballx,bally,mouseX,mouseY);
  if(distanceToball < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score+1;
    ballSize = ballSize - 5;
  }
  if(score>15){
    gameState = "WIN"
  }
  //line(ballx,bally,mouseX,mouseY);
  //ellipse(ballx,bally,ballSize,ballSize);
  image(img,ballx-25,bally-25,50,50);
}//end level 3

function gameEND(){
  background(img2);
  text("YOU WIN",width/2,height-20);
}//end of game end
