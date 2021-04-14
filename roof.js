class Roof {
    constructor(x, y, width,height) {
      var options = {
        isStatic:true
      };
      this.body = Bodies.rect(this.x,this.y,this.width,this.height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width,this.height);
      pop();
    };
  };
  