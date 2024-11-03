var tree1;
var tree2;
var tree3;
var bush1;
var bush2;
var bush3;
var clouds1;
var clouds2;
var grass;
var moon;
var sun;
var mountain1;
var mountain2;
var mountain3;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
// img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
// img = loadImage('https://dma-git.github.io/images/74.png');
tree1 = loadImage('images/tree1.png');
tree2 = loadImage('images/tree2.png');
tree3 = loadImage('images/tree3.png');
bush1 = loadImage('images/bush1.png');
bush2 = loadImage('images/bush2.png');
bush3 = loadImage('images/bush3.png');
clouds1 = loadImage('images/clouds1.png');
clouds2 = loadImage('images/clouds2.png');
grass = loadImage('images/grass.jpg');
moon = loadImage('images/moon.png');
sun = loadImage('images/sun.png');
mountain1 = loadImage('images/mountain1.png');
mountain2 = loadImage('images/mountain2.png');
mountain3 = loadImage('images/mountain3.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    stroke(10);
    strokeWeight(0);
    fill(random(120),random(250),250);
    ellipse(mouseX, mouseY, 1500, 1500);
    
  } else if (toolChoice == '2') { // second tool
  
    stroke(10);
    strokeWeight(0);
    fill(250,200,120,150);
    ellipse(mouseX, mouseY, 10, 10);
  } else if (toolChoice == '3') { // third tool
  
    stroke(10);
    strokeWeight(0);
    fill(250,250,250,200);
    ellipse(mouseX, mouseY, 10, 10);
  } else if (toolChoice == '4') {
    
    let randomTree = random([tree1, tree2, tree3]);
    image(randomTree, mouseX, mouseY, 100, 100);
  } else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    let mountains = random([mountain1, mountain2, mountain3]);
    image(mountains, mouseX, mouseY, 300, 300);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

   image(grass, mouseX, mouseY, 300, 300); 
  } else if (toolChoice == '7') {

    let randocloud = random([clouds1,clouds2]);
    image(randocloud, mouseX, mouseY, 100, 100);
  } else if (toolChoice == '8') {

    image(sun, mouseX, mouseY, 100, 100);
  } else if (toolChoice == '9') {

    image(moon, mouseX, mouseY, 70, 70);
  } else if (toolChoice == '0') {
    let bushes = random([bush1,bush2,bush3]);
    image(bushes, mouseX, mouseY, 100, 100);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
 
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
