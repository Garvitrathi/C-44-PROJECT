const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var bg;
var form,player,game ; 
var car1,car2,car3,car4;
var car1img,car2img,car3img,car4img;
var cars = [] ;

function preload() {
  bg = loadImage("Images/background.jpg");
  car1img = loadImage("Images/car1.jpg");
  car2img = loadImage("Images/car2.jpg");
  car3img = loadImage("Images/car3.jpg");
  car4img = loadImage("Images/car4.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 170);

  engine = Engine.create();
  world = Engine.world;

  database = firebase.database();
}

function draw() {
  Engine.update(engine)

  drawSprites();
}