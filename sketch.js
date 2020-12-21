const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

function setup() {
  createCanvas(800,400);
  var ground_option={
    isStatic:true
  }
  var ball_option={
    restitution:1.0
  }
  engine=Engine.create();
  world=engine.world;
  ball=Bodies.circle(200,100,20,ball_option);
  World.add(world,ball);
  ground=Bodies.rectangle(200,390,200,20,ground_option);
  World.add(world,ground);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);


  drawSprites();
}