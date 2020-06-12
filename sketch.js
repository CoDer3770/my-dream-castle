function setup() {
  createCanvas(800,400);
 var gate,gate1


}

function draw() {
  background(255,255,255);  
  triangle(30, 75, 58, 20, 86, 75);
  rect(30, 76, 55, 275, 20);
  triangle(370, 75, 398, 20, 426, 75);
  rect(370, 76, 55, 275, 20);
  square(140, 200, 150, 200);
  gate = createSprite(210,325,20,50);
  gate.shapeColor = "cyan"
  gate1 = createSprite(230,80,288,20);
  gate1.shapeColor = "red"
  rect(100, 186, 15, 155, 20);
  triangle(100, 186, 114, 186, 142, 150);
  rect(320, 186, 15, 155, 20);
  triangle(320, 186, 334, 186, 334 - 28, 150);
  circle(220,120,30)
  drawSprites();
}