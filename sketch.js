// here is the fractal tree with push and pop matrix
// before each call to branch the matrix is pushed and then poped to go back to the original place before push was called 
// see https://youtu.be/0jjeOYMjmDU  dan shiffman!


let angle = 0

let slider;

let bigSeal;


function preload() {
  bigSeal = loadFont('Jinwen big seal character Font-Traditional Chinese.ttf');
  
}


function setup() {
  createCanvas(windowWidth, windowHeight-(windowHeight/10));// need to leave room for the dom slider
  
  slider = createSlider(0,TWO_PI,PI/4,0.01);
  slider.position(width/4,height);
  slider.size(width/2);

  
}

function draw() {
  background(51);
  angle = slider.value();  
  stroke(255);
  translate(windowWidth/2,height); // moving the origin i.e. 0,0 to 200,height 
  branch(windowHeight/6); // still the branch len
  textAlign(TOP);
  textAlign(CENTER);
  //rotate(90);
  
}


function branch(len){
  //rotate(180);
  textFont(bigSeal);
  textSize(len);
  text('地',0,0); // so now this is a line from orgin to origin - len on y
  translate(0,-len*0.7);
  text('天',0,0); // so now this is a line from orgin to origin - len on y
  translate(0,-len);
  
  
  //line(0,0,0,-len*0.67); second branch but lets make it recursive
  
  if (len >2){         // exit condition for the recursive loop
    push()            //saves the position at the top of the branch
    rotate(angle);          
    branch(len*0.67);   // branch to the right
    pop();            // returns to the position at the top of the branch so you can draw the other side
    push();
    rotate(-angle);
    branch(len*0.67);   // branch to the left
    pop();
  }
  
}