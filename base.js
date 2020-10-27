class Baseclass{

 constructor(x,y,width,height){


this.body = Bodies.rectangle(x,y,width,height);
 this.width = width;
this.image = loadImage("Plucking mangoes/boy.png");
 this.height = height;
 World.add(world,this.body);
 }

display(){

var pos = this.body.position;


rectMode(CENTER);

image(this.image,pos.x,pos.y,this.width,this.height);


}

 }   















