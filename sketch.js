
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var block1,block2,block3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper = new Paper(100,200);
	ground = new Ground(700,480,1400,5);
	block1 = new Block(800,410,20,130);
	block2 = new Block(1050,410,20,130);
	block3 = new Block(925,465,230,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();

  drawSprites();
 paper.display();
 ground.display();
 block1.display();
 block2.display();
 block3.display();


}

function keyPressed(){
if (keyCode === UP_ARROW){
 Matter.Body.applyForce(paper.body,paper.body.position, {x:0.7,y:-15.6});
} 
}

