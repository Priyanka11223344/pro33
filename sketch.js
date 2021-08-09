const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;

var drops = [];
var bgimg;
var world,engine;

function preload(){
bgimg = loadImage("snow1.jpg");
}

function setup() {
    createCanvas(1000, 700);

  engine = Engine.create();
  world = engine.world;
}
 
function draw() {
  background(bgimg);
  Engine.update(engine);
  
  if(frameCount%10===0){
    for(var j = 50; j <= width-10; j= j+50)
    drops.push(new Snowfall(j,10,10));
   }

   for (var i = 0; i < drops.length; i++) {
    drops[i].display();   
  }

  }