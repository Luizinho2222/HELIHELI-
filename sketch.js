const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgimg;
var heliImg 
var heliS;

var peopleImg, peopleS;

var pizzaImg;
var pizza;

function preload() {

heliImg = loadImage("heli.png");

bgimg = loadImage("bgimg.png");

peopleImg = loadImage("sos.png");

pizzaImg = loadImage("pizza.png");
}



function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;
}


function draw() 
{
  background(bgimg)
  Engine.update(engine);
  
  heliS = createSprite(100,100);
  heliS.addImage(heliImg);
  
  peopleS = createSprite(200,200);
  peopleS.addImage(peopleImg);
  
  pizza = createSprite(heliS.x,heliS.Y - 10);
  pizza.addImage(pizzaImg);
  

  if(keyIsDown(DOWN_ARROW)){
    save();
    
  }
  
  
  
  
  drawSprites();
}

function save(){

  
 
  
  if(pizza.Y < 700){
    pizza.SetVelocityY(0.5);
  }
  


}
