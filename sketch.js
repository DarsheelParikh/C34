const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var world
var engine 

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create()
  world = engine.world
  box1 = new box(900,100,70,70)
  box2 = new box(800,100,70,70)
  box3 = new box(700,100,70,70)
  ground1 = new ground(600,600,1200,20)
  ball1 = new ball(200,200,80,80)
  rope1 = new rope(ball1.body, {x:500,y:50})

}

function draw() {
  background(180);
  box1.display()
  box2.display()
  box3.display()
  ground1.display()
  ball1.display()
  rope1.display()

}



