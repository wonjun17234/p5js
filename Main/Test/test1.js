let xPos;
let yPos;
let diam;

let xSpeed;
let ySpeed;

let padWidth;
let padHeight;
let padX;

function setup() {
  createCanvas(400, 400);
  diam = 50;
  xPos = width / 2;
  yPos = height / 2;
  xSpeed = 10;
  ySpeed = 10;
  padWidth = 180 / 2;
  padHeight = 20;
}

function draw() {
  background(220);
  
  ellipse(xPos, yPos, diam, diam);
  
  xPos += xSpeed;
  yPos += ySpeed;
  
  let x = constrain(mouseX, padWidth, width - padWidth);
  
  quad(x - padWidth, height - padHeight, x - padWidth, height, x + padWidth, height, x + padWidth, height - padHeight);
  
  
  if(yPos + diam / 2 > height- padHeight && (xPos >= x - padWidth && x + padWidth >= xPos)) 
  {
    if(pmouseX < mouseX)
    {
      xSpeed = abs(xSpeed);  
    }
    else if(pmouseX > mouseX)
    {
      xSpeed = -abs(xSpeed); 
    }
    
    ySpeed *= -1;
  }
  
  
  if(xPos + diam / 2 > width || xPos - diam / 2 < 0) xSpeed *= -1;
  if(yPos - diam / 2 < 0) ySpeed *= -1;
  
  if(yPos >= height - padHeight)
  {
    console.log("죽음");    
    xPos = width / 2;
    yPos = height / 2 - 180;
    ySpeed = abs(ySpeed);
  }
  
  
  
}