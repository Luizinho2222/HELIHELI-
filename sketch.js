const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgimg;
var heliImg 
var heliS;

var peopleImg, peopleS;

function preload() {

heliImg = loadImage("heli.png");

bgimg = loadImage("bgimg.png");

peopleImg = loadImage("sos.png");

}



function setup() {
  createCanvas(windowWidth,windowHeight);
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
  
  if(keyIsDown("DOWN_ARROW")){
    save();
    console.log("down arrow");
  }
  
  
  
  
  drawSprites();
}

function save(){

  


}
