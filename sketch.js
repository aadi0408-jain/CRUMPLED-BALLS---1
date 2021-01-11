var ground, ground2,  rect1, rect2, rect3, paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	ground = createSprite(width/2, height-35, width, 10);
	ground.shapeColor=color(255);

	ground2 = createSprite(100, 655, 200, 18);
	ground2.shapeColor=color(255);

	rect1=createSprite(650,652, 200, 15);
	rect1.shapeColor = "red";
	rect2=createSprite(550,610, 20, 100);
	rect2.shapeColor = "red";
	rect3=createSprite(750,610, 20, 100);
	rect3.shapeColor = "red";

	//Create the Bodies Here.

	paper = new Paper(100, 640, 10);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  drawSprites();

}

function keyPressed(){

	if(keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body, paper.body.position, {x:13, y: -15})

	}

}


