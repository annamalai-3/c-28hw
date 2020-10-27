
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyimg;
function preload()
{
boyimg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	boy = createSprite(170,340,70,70);
	boy.addImage(boyimg);
	boy.scale = 0.2;
	//Create the Bodies Here.
	tree = new Tree(490,70,500,500);
	mango = new Mangoes(321,49,20,20);
	stone = new Stone(60,200,30,30);
	chain = new Chain(stone.body,{x:150,y:290});
    
	
  
}


function draw() {
	background("red")
	
  rectMode(CENTER);
  background(0);
 Engine.update(engine);                                                                                       

 tree.display();
 mango.display();
stone.display();
chain.display();







  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}


