


let scores = [];
let i = 0;
let score = 0; 
let test = 0;
//backgroundMusic array initialized
let backgroundMusic = [];
let mode;

//game over text object
let txt = {
  gameOver: "GAME OVER",
  ScoreResult: "Your final score is: ",
  color: 255,
  stroke: 255,
  size: 38,
  size1: 24,
  x: 150,
  y: 300,
  x1: 175,
  y1: 350,
}

let backgroundLeft;
let BackgroundRight;
//song preload function, it prealoads the file 
function preload(){
  //racing song
  backgroundMusic[0] = loadSound(`https://assets.editor.p5js.org/5e668e706626be0024a32163/bfd1b130-891b-47d5-8838-7214c5ce0f3b.m4a`);
  //crashing song
  backgroundMusic[1] = loadSound(`https://assets.editor.p5js.org/5e668e706626be0024a32163/558a5cfd-a41c-4fa4-83a7-765ffd86366f.m4a`);
}

function setup() {
  //storing the scores to use it later for //levelup function
  mode=0;
  for(let i=0; i<100;i++){
    test += 10;
    scores[i] = test;
 }
 
  //creating instance of Border class
  backgroundLeft = new Sidewalk();
  BackgroundRight = new Sidewalk();
  BackgroundRight.x = 450;
  createCanvas(canvas.w, canvas.h);
  background(canvas.col);
}
 
function draw() {
  if(mode===0){
    fill(5, 1, 36);
    textSize(txt.size);
    text("Press enter to start the game", 50, 250);
    text("Press space to connect to microbit controller", 10, 350);
    text("Good Luck ;)", 200, 450);
  }
  if(mode===1){
  background(109, 104, 117); 
  moveLines();
  moveTrees();
  design();
  moveCars();
  levelUp();
  fill(0);
  rect(0,0,600,40);
  displayScore();
  }
}
//design function, drawing the objects, by //calling their draw methods
function design(){
  backgroundLeft.draw();
  BackgroundRight.draw();
  trees.drawCircle();
  myCar.draw();
  trees.drawBottom();
  trees2.drawCircle();
  trees2.drawBottom();
}
//car moving function
function moveCars(){
  
  if(car1.y<0){
    car1.x = random(155,410);
    //color of cars randomized
    car1.col[1] = random(255);
    car1.col[2] = random(255);
    car1.col[3] = random(255);
  }
  
  if(car1.y===-50 || car2.y===-50 || car3.y===-50){
      score++;
  }

  if(car2.y<0){
    car2.x = random(155,410);
    car2.col[1] = random(255);
    car2.col[2] = random(255);
    car2.col[3] = random(255);
    //console.log("debuging");
  }

  if(car3.y<0){
    car3.x = random(155,410);
    car3.col[1] = random(255);
    car3.col[2] = random(255);
    car3.col[3] = random(255);
    //console.log("debuging");
  }

  myCar.move();
  car1.draw();
  car1.move();
  car2.draw();
  car2.move();
  car3.draw();
  car3.move();
  
  let collide = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car1.x, car1.y, car1.w, car1.h);
  //if colide returns true calls the stop function
  if(collide){
    //plays the crash song
    backgroundMusic[1].play();
    stop();
  }
  //assigning colideCar function for car2, //passing arguement
  let collide2 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car2.x, car2.y, car2.w, car2.h);
  //if colide returns true calls the stop function
  if(collide2){
    //plays the crash song
    backgroundMusic[1].play();
    stop();
  }
  //assigning colideCar function for car3, //passing arguement
    let collide3 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car3.x, car3.y, car3.w, car3.h);
  //if colide returns true calls the stop function
  if(collide3){
    //plays the crash song
    backgroundMusic[1].play();
    stop();
  }
}

function collideCar(x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
}
//moves the lines
function moveLines(){
  line1.draw();
  line1.move();
  line2.draw();
  line2.move();
}
//stops the game and displays the Game over
//and the final score
function stop(){
    background(0);
    stroke(txt.stroke);
    fill(txt.color);
    textSize(txt.size);
    text(txt.gameOver, 170, txt.y);
    textSize(txt.size1);
    noStroke();
    text(`${txt.ScoreResult}${score}`, txt.x1, txt.y1);
     noLoop();
     backgroundMusic[0].stop()
}
//trees moving function
function moveTrees(){
  trees.moveCircle();
  trees.moveBottom();
  trees2.moveCircle();
  trees2.moveBottom();
}

function displayScore(){
    noStroke();
    fill(txt.color);
    textSize(16);
  //displaying the score
    text(`YOUR SCORE: ${score}`, 50, 20);
  //displaying the speed 
    fill(txt.color);
    textSize(16);
    text(`YOUR SPEED: ${car1.sp}0 km/h `, 400, 20);
}


//this function for increase the speed 
function levelUp(){
  //score is equal to the number in array speed //up
    if(score === scores[i])
    {
      
      console.log("speeding");
      //increment every objects speed by 1
      car1.sp++;
      car2.sp++;
      car3.sp++;
      trees.esp++;
      trees.rsp++;
      trees2.esp++;
      trees2.rsp++;
      line1.sp++;
      line2.sp++;
      i++;
      score++;
    }
}

function keyPressed(){
    if(keyCode===ENTER && mode===0){
        mode=1;
        //playing the first song;
       backgroundMusic[0].play();
    }
    if(keyCode == 32 && mode === 0){
      microBitConnect();
    }
}

// function mousePressed(){
//   microBitConnect();
// }




