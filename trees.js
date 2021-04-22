
//Trees object
let img;

let trees = {
    positionX: 92,
    positionY: 20,
    shapeHeight: 75,
    movingLength: 5,
  
    drawCircle: function (){
      noStroke();
        fill("#309621");
        circle(this.positionX, this.positionY, this.shapeHeight)
    },
  
    moveCircle: function(){
      this.positionY+=this.movingLength;
      if(this.positionY>height){
        this.positionY = -100;
        this.treeBottomY = -70;
      }
    },
    treeBottomX: 85,
    treeBottomY: 50,
    treeBottomWidth: 15,
    treeBottomHeight: 50,
    movingSpeed: 5,
  
    drawBottom: function(){
      noStroke();
      fill("#573223");
      rect(this.treeBottomX, this.treeBottomY, this.treeBottomWidth, this.treeBottomHeight);
    },
      moveBottom: function(){
      this.treeBottomY+=this.movingSpeed;
    }
}

let trees2 = {
    positionX: 500,
    positionY: 220,
    shapeHeight: 75,
    movingLength: 5,

    drawCircle: function (){
      noStroke();
        fill("#1e704a");
        circle(this.positionX, this.positionY, this.shapeHeight);
    },

    moveCircle: function(){
      this.positionY+=this.movingLength;
      if(this.positionY>height){
        this.positionY = -100;
        this.treeBottomY = -70;
      }
    },
    treeBottomX: 492,
    treeBottomY: 250,
    treeBottomWidth: 15,
    treeBottomHeight: 50,
    movingSpeed: 5,

    drawBottom: function(){
      noStroke();
      fill("#3d1d10");
      rect(this.treeBottomX, this.treeBottomY, this.treeBottomWidth, this.treeBottomHeight);
    },//right tree trunk is moving
      moveBottom: function(){
      this.treeBottomY+=this.movingSpeed;
    }
}