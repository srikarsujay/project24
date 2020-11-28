
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
	

	//Create the Bodies Here.
paper=new Paper(100,100,20)
	Engine.run(engine);
  binleft=new Bin(450,630,20,100)
  binright=new Bin(630,630,20,100)
  binbottom=new Bin(540,680,200,20)
  ground=new Ground(400,690,800,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  binleft.display()
  binright.display()
  binbottom.display()
  ground.display()
  paper.display()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-50}) 
	}
}


