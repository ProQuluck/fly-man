
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var backgroundImage;
var jonh,jonhImage

function preload(){

  //backgroundImage = loadImage('fundo.avif')
  backgroundImage = loadImage('background.avif')
  jonhImage = loadImage('jonh.png')
}


function setup() {
  createCanvas(1500,650);

  engine = Engine.create();
  world = engine.world;
  
  jonh = createSprite(50,600,10,10);
  jonh.addImage(jonhImage)
  jonh.scale = 0.07
  
  bullet = createSprite(10,300,90,90)
  bullet.scale = 0.1
}


function draw() 
{

  background(50);
  image(backgroundImage,0,0,1500,650);
  
  Engine.update(engine);
  
  if(keyDown("up_arrow") && jonh.y>=120){
    jonh.velocityY = -10;
  }
  jonh.velocityY = jonh.velocityY+0.5

  if(keyDown("left_arrow")){
    jonh.velocityX = -5;
  }

  if(keyDown("right_arrow")){
    jonh.velocityX = 5;
  }

  drawSprites()
}

