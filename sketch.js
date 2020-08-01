const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;
var divisionHeight=300;

var particles=[]
var plinkos=[]
var divisions=[]

function setup() {
  engine = Engine.create();
  world = engine.world;
 
  createCanvas(480,800);
  

  ground1=new ground(240,780,480,20);
  
  
}

function draw() {
  background(0);  

  Engine.update(engine);

  for(var k=0; k<=width ; k=k+80){
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40; j<=width; j=j+50)
  {
    plinkos.push(new plinko(j,75));
  }
for(var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new plinko(j,175));

}

for(var j=0; j<particles.length; j++){
  particles[j].display();
}

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,width/2+10),10,10))
  }


  ground1.display();
  
  drawSprites();
}