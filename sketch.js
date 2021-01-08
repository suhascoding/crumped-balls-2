
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperimg,paper,dustbinimg,dustbin;

var ground,paper,dustbin;
var block1,block2,block3;
function preload(){
  paperimg=loadImage("paper.png")
  dustbinimg=loadImage("dustbin.png")
}
function setup() {
  createCanvas(1200, 700);
  rectMode(CENTER);

  

	engine = Engine.create();
  world = engine.world;
  var ground_options ={
    isStatic: true
  }

  var options = {
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
}
 

  ground = Bodies.rectangle(600,690,1200,20,ground_options);
  World.add(world,ground);

  paper = new Paper(100,250);
  dustbin = new Dustbin(1000,580,200,200);
  

	Engine.run(engine);

}

function draw() {
  
  background("red");
  rect(ground.position.x,ground.position.y,1200,20);
  drawSprites();
  drawSprites();
  paper.display();
  dustbin.display();
}
 
function keyPressed() {
	if(keyCode===38){
		Matter.Body.applyForce(paper.body,paper.position,{x:50,y:-45});
	}}
