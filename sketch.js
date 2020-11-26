const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof1;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(1200,1200,300,25);
	bobObject1 = new Bob(1000,1200);
	bobObject2 = new Bob(800,1200);
    bobObject3 = new Bob(600,1200);
	bobObject4 = new Bob(400,1200);
	bobObject5 = new Bob(200,1200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}








