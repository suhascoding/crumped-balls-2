class Dustbin{

    constructor(x,y,width,height){
    var options = { 
        isStatic: true,
        restitution:0,
         friction:1,
         density:10
    }
  
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbin.png");
    World.add(world,this.body); 
  
    }
  
    display(){
    ImageMode(CENTER);
    fill("yellow");
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
     }
  
  }    