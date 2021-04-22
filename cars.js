//driving car
direction = 0;
let myCar = {
  x: 400,
  sp: 10,
  y: 400,
  w: 40,
  h: 55,
  draw: function(){
    noStroke();
    fill(255, 173, 173);
    rect(this.x, this.y, this.w, this.h);
    stroke("white");
    line(this.x+10, this.y, this.x+10, this.y+55);
    line(this.x+30, this.y, this.x+30, this.y+55);
    fill(255, 173, 173);
    stroke(0);
    rect(this.x+5, this.y+10,this.w-10, this.h-20);
  },
  move: function(){
      if((direction > 0) &&  (this.x+this.w!==width-150)){
    this.x+=this.sp;
  }
  if((direction < 0) && (this.x!==150)){
    this.x-=this.sp;
  }
  }
}

function microBitReceivedMessage(message){
  direction = message;
  if (direction > 0) {
    console.log("right");
  } else {
    console.log("left");
  }
}
//enemies car1
let car1 = {
  x: 170,
  sp: 8,
  y: -50,
  w: 40,
  h: 55,
  col: [255, 0, 0],
  draw: function(){
    fill(this.col[0], this.col[1], this.col[2]);
    rect(this.x, this.y, this.w, this.h);
  },
  move: function(){
    //move the car1
      this.y+=this.sp;
    //if the car1 is out of the canvas bring it back to the top
  if(this.y>height){
    //car1 y value initialize to -50; 
    this.y=-50;
    }
  }
}
//enemies car2
let car2 = {
  x: 330,
  sp: 8,
  y: -250,
  w: 40,
  h: 55,
  col: [255, 0, 0],
  draw: function(){
    fill(this.col[0], this.col[1], this.col[2]);
    rect(this.x, this.y, this.w, this.h);
  },
  move: function(){
    //move the car2
      this.y+=this.sp;
    //if the car2 is out of the canvas bring it back to the top
  if(this.y>height){
    this.y=-50;
    }
  }
}

let car3 = {
  x: 330,
  sp: 8,
  y: -550,
  w: 40,
  h: 55,
  col: [255, 0, 0],
  draw: function(){
    fill(this.col[0], this.col[1], this.col[2]);
    rect(this.x, this.y, this.w, this.h);
  },
  move: function(){
    //move the car3
      this.y+=this.sp;
    //if the car3 is out of the canvas bring it back to the top
  if(this.y>height){
    this.y=-50;
    }
  }
}