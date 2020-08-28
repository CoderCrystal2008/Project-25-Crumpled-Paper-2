
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//creates the paper
	paper = new Paper (200,120);
	

	//creates the dustbin
	dustbin = new Dustbin (400,610,100,90);
	

	//creates the ground
	ground = new Ground (400,650,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();



  
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-10.51});
}

}


