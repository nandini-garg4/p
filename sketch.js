
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var tree;
var ground;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

tree=new Tree(700,420,400,500)
	//Create the Bodies Here.
	ground=new Ground(450,670,900,10)
	stone=new Stone(290,700,40,40)
  boy=new Boy(170,590,170,300)
  mango1=new Mango(650,250,30,30)
  mango2=new Mango(700,300,30,30)
  mango3=new Mango(590,380,28,30)
  mango4=new Mango(730,230,25,30)
  mango5=new Mango(850,340,30,30)
  mango6=new Mango(780,330,25,30)
  mango7=new Mango(730,350,25,30)
  mango8=new Mango(660,370,30,30)
  mango9=new Mango(570,330,27,30)
  mango10=new Mango(630,320,30,30)
  mango11=new Mango(770,270,30,30)
  elastic = new Elastic(stone.body,{x:120,y:520});


	
  
}


function draw() {
 
  background("lightGrey");
  Engine.run(engine);
  rectMode(CENTER);
  
  tree.display()
  ground.display()
  stone.display()
  boy.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  elastic.display()


 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  elastic.fly();
}


