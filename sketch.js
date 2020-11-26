
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, wall1, wall2, wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper=new Paper(60,250,70);
	ground=new Ground(width/2,620,width,20);
	wall1=new Wall(1200,610,20,200);
	wall2=new Wall(1000,610,20,200);
	wall3=new Wall(1100,600,200,20);

	wall1= createSprite(width/1.4,600,200,20,{isStatic:true});
	wall1.shapeColor=color("red")

	wall2=createSprite(1000,560,20,100,{isStatic:true});
	wall2.shapeColor=color("red")

	wall3=createSprite(800,560,20,100,{isStatic:true});
	wall3.shapeColor=color("red")

	groundSprite=createSprite(width/2, height-80, width,10);
	groundSprite.shapeColor=color(255)

	//paper=createSprite(20,650,20,20);
	//paper.shapeColor=color("yellow")


	 ground = Bodies.rectangle(width/2, 650, width, 100 , {isStatic:true} );
	 World.add(world, ground)

	
	 //Matter.Bodies.circle(x,y, radius, [options], [maxSides])``
	

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  //ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
    
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-125});

		
	}

}	

