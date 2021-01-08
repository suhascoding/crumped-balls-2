class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.radius = 70;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
      pop();

    }
  };
