class Bob {
    constructor(x, y,r) {
      var options = {
        'density':0.8,
        'friction': 0,
        'restitution':1,
        isStatic:false
      };
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      this.x = x;
      this.y = y;
      this.r = r;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill('red')
      rectMode(CENTER)
      eclipse(0, 0, this.r,this.r);
      pop();
    };
  };
  