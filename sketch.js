
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var paperBall;

function setup() {
	createCanvas(800, 700);

	var ground  = createSprite(width/2,height-35,width,10)
	ground.shapeColor = ("yellow");

	dustbin1 = createSprite(695,620,10,100)
	dustbin2 = createSprite(495,620,10,100)
	dustbin3 = createSprite(595,660,200,20)

	paperBall = new Paper(295,660)


	engine = Engine.create();
	world = engine.world;

	//ground
	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true})
	World.add(world,ground)

	//Create the Bodies Here.
	dustbin1 = Bodies.rectangle(400,600,20,200,{isStatic:true})
	dustbin2 = Bodies.rectangle(400,600,20,200,{isStatic:true})
	dustbin3 = Bodies.rectangle(400,600,100,20,{isStatic:true})

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  paperBall.display();

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
	}
}



