
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var tree1,ground1;
var mango1,mango2,mango3,mango4,mango5;
var boy, boyImage;
var stone, constraint1 ;
function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);
	background(255,255,255);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(500,550,30,30);
	boy.addImage("boy",boyImage);
	boy.scale = 0.1;

	//Create the Bodies Here.
	tree1 = new Tree(1050,300)
	ground1 = new Ground(width/2,670,width,20)
	mango1 = new Mango(1000,150,70);
	mango2 = new Mango(1100,150,70);
	mango3 = new Mango(1150,150,70);
	mango4 = new Mango(1150,200,70);
	mango5 = new Mango(1000,200,70);
	stone = new Stone(450,500,70);
	constraint1 = new Constraint1(stone.body,{x:550, y:550});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree1.display();
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  constraint1.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    constraint1.fly()
}