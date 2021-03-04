var bullet,wall;
var bullet1,wall1;

var speed,weight;
var line;

function setup() {
  createCanvas(1600,600);
line=createSprite(10,300,3000,5)

  speed=random(10,40);
  weight=random(5,95)
 bullet= createSprite(100, 150, 50, 50);
 bullet.velocityX=speed;
 bullet.shapeColor=(255)

 bullet1= createSprite(200, 450, 50, 50);
 bullet1.velocityX=speed;
 bullet1.shapeColor=(255)

 

 wall=createSprite(1200,150,60,180);
// wall.shapeColor=(80,80,80);

 wall1=createSprite(1200,450,60,180);
// wall1.shapeColor=(80,80,80);

 
}

function draw() {
  background(0); 
 if(wall.x-bullet.x<(wall.width/2+bullet.width/2)){ 
  bullet.velocityX=0
var deformation=1*weight*speed*speed/150
if( deformation<100){
  wall.shapeColor=color("yellow")
}
if (deformation>100 && deformation<180){
  wall.shapeColor=color("red")
}
 }

 if(wall1.x-bullet1.x<(wall1.width/2+bullet1.width/2)){ 
  bullet1.velocityX=0
var deformation=1*weight*speed*speed/200
if( deformation<100 ){
  wall1.shapeColor=color("red")
}
if(deformation>100 && deformation<180){
wall1.shapeColor=color("yellow")
}
 }

 

  drawSprites();
}