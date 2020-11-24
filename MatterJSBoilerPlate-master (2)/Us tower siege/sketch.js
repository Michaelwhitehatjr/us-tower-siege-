
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
	box1 = new Box(400,200,60,60);
	box2 = new Box(300,300,60,60);
	box3 = new Box(400,150,60,60);
	box4 = new Box(300,300,60,60);
	box5 = new Box(400,180,60,60);
	box6 = new Box(300,200,60,60);
	box7 = new Box(400,200,60,60);
	box8 = new Box(300,200,60,60);
	box9 = new Box(400,200,60,60);
	box10 = new Box(300,200,60,60);
	ground = new Ground(400,690,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	ground.display();

  drawSprites();
 
}



