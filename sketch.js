
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBinnnn,world,grounddd,balll;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var BallOptions = 
	{isStatic:false,restitution:0.3,friction:0.5,density:1.2};

	grounddd = new ground(100,150);
	dustBinnnn = new dustbin(250,130,5);
	balll = new ball(25,100,7,BallOptions);

  
}


function draw() {

	background("white");
	Engine.update(engine);
	balll.display();
	dustBinnnn.display();
	grounddd.display();

}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		Body.applyForce(balll.ballObject,balll.ballObject.position,{x:(document.getElementById("x").value/10),y:(document.getElementById("y").value/10)});
	}
}
