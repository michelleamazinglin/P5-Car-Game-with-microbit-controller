
//broken yellow lines
let line1 = {
  x: 300,
  y:0,
  x2: 300,
  y2: 50,
  sp: 5,
  col: "#c2b908",
  draw: function(){
      strokeWeight(5);
      stroke("#c2b908");
      line(this.x, this.y, this.x2, this.y2);
  },
  //moving function
  move: function(){
    this.y+=this.sp;
    this.y2+=this.sp;
    if(this.y>height){
      this.y=-50;
      this.y2=100;
    }
  }
}
//second broken lines
let line2 = {
  x: 300,
  y: 300,
  x2: 300,
  y2: 350,
  sp: 5,
  col: "#dbd109",
  draw: function(){
      strokeWeight(5);
      stroke("#c2b908");
      line(this.x, this.y, this.x2, this.y2);
  },
  //moving the second line
  move: function(){
    this.y+=this.sp;
    this.y2+=this.sp;
    if(this.y>height){
      this.y=-50;
      this.y2=100;
    }
  }
}

