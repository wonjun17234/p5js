let leftClicked = false;
let rightClicked = false;
let colors;
let rain = false;

let glassesIndex = 0;

let rainDrops = [];
let rainDropCount = 100;

let keyMessage = "";
let keyMessageTimer = 0;

function setup() {
  createCanvas(500, 500);
  colors = (128, 128, 128);
  
  for (let i = 0; i < rainDropCount; i++) {
    rainDrops.push({
      x: random(width),
      y: random(-100, 100),
      speed: random(4, 10)
    });
  }
  
}

function draw() {
  background(220);
  
 
  stroke(1);
  strokeWeight(3);
  // 몸통
  fill(colors);
  if(rain)
  {
    stroke(100, 100, 255); // 파란색 비
    strokeWeight(2);
    for (let drop of rainDrops) {
      line(drop.x, drop.y, drop.x, drop.y + 10);
      drop.y += drop.speed;

      // 캔버스 밖으로 나가면 다시 위로
      if (drop.y > height) {
        drop.y = random(0, 100);
        drop.x = random(width);
        drop.speed = random(4, 10);
      }
    }
    
    stroke(colors);
    triangle(111, 384, 233, 130, 384, 383);
    
    stroke(0);
    bezier(111, 384, 89, 210, 90, 150, 233, 130);
    bezier(233, 130, 375, 158, 380, 251,  384, 383);
    
    
  }
  else
  {
      ellipse(245, 380, 280, 100);
  }
  
  stroke(1);
  strokeWeight(3);
  bezier(0, 450, 60, 390, 60, 390, 200, 370);
  bezier(500, 450, 440, 390, 440, 390, 300, 370);
  
  noStroke();
  quad(0, 450, 500, 450, 500, 500, 0, 500);
  quad(200, 355, 300, 355, 400, 450, 100, 450);
  triangle(0, 450, 187, 370,100, 450);
  triangle(500, 450, 313, 370, 400, 450);

  strokeWeight(5);
  stroke(colors);
  line(111, 384, 184, 372);
  line(382, 382, 315, 372);
  
  strokeWeight(3);
  
  stroke(1)
  strokeWeight(3);
  noFill();
  bezier(107, 384, 139, 420, 139, 410, 177, 421);
  bezier(384, 382, 372, 400, 372, 410, 321, 426);
  
  fill(251, 206, 177);
  
  noStroke()
  quad(195, 396, 210, 322, 280, 324, 300, 395);
  noStroke();
  ellipse(247, 397, 120, 70);
  
  stroke(0);
  line(195, 396, 210, 322);
  line(300, 395, 280, 324);
  
  noStroke();
  quad(160, 258 + 20, 224, 340 + 20, 281, 327 + 20, 320, 258 + 20);
  quad(231, 340 + 20, 264, 344 + 20, 283, 329 + 20, 216, 316 + 20);
  triangle(230, 345 + 10, 186, 318  + 10, 160, 269  + 10);
  quad(160, 278, 189, 201, 279, 198, 320, 280)
  
  stroke(1)
  bezier(225, 344 + 20, 184, 314 + 20, 184, 314 + 20, 160, 258 + 20);
  bezier(265, 344 + 20, 300, 314 + 20, 310, 314 + 20, 320, 258 + 20);
  bezier(225, 344 + 20, 250, 348 + 20, 242, 348 + 20, 265, 344 + 20);
  
  bezier(160, 278, 160, 224, 160, 224, 189, 201);
  bezier(320, 280, 320, 216, 300, 216, 279, 198);
  bezier(189, 201,  231, 189, 231, 189, 279, 198)
  
  noFill()
  stroke(255);
  strokeWeight(8);
  strokeCap(ROUND);
  
  
  if(leftClicked)
  {
    bezier(165, 405, 165, 420, 165, 450, mouseX, mouseY);
  }
  else
  {
    line(165, 405, 165, 450);
  }
  if(rightClicked)
  {
    bezier(330, 405, 330, 430, 330, 470, mouseX, mouseY);
  }else
  {
    line(330, 405, 330, 470);
  }
  
  
  
  stroke(0);
  strokeWeight(1);
  fill(255);
  rect(219, 333, 8, 4);
  rect(227, 333, 8, 8);
  rect(235, 333, 8, 11);
  rect(243, 333, 8, 11);
  rect(251, 332, 8, 9);
  rect(259, 331, 8, 6);
  
  stroke(1);
  strokeWeight(3);
  noFill();
  bezier(210, 330, 245, 334, 245, 334, 275, 327); // 
  bezier(210, 330, 245, 350, 245, 351, 275, 327); // 
  
  stroke(251, 206, 177);
  bezier(210, 330 + 3, 245, 350 + 3, 245, 351 + 3, 275, 327 + 3);
  
  stroke(0)
  strokeWeight(2);
  line(243, 270, 240, 300);
  line(237, 258, 240, 260);
  bezier(232, 305, 234, 303, 234, 305, 237, 305);
  bezier(244, 305, 247, 303, 247, 305, 249, 305);
  
  strokeCap(SQUARE);
  
  
  bezier(185, 271, 201, 264, 201, 264, 215, 272);
  bezier(185, 271, 201, 281, 201, 281, 215, 272);
  bezier(185 + 80, 271, 201 + 80, 264, 201 + 80, 264, 215 + 80, 272);
  bezier(185 + 80, 271, 201 + 80, 281, 201 + 80, 281, 215 + 80, 272);
  
  bezier(187, 261, 199, 254, 199, 254, 211, 261);
  bezier(187 + 80, 261, 199 + 80, 254, 199 + 80, 254, 211 + 80, 261);
  
  fill(255);
  noStroke();
  quad(185, 271, 200, 266, 215, 272, 200, 278)
  quad(185 + 80, 271, 200 + 80, 266, 215 + 80, 272, 200 + 80, 278)
  
  stroke(0);
  fill(0);
  ellipse(200, 272, 10, 10);
  ellipse(200 + 80, 272, 10, 10);
  
  noStroke();
  // quad(185, 216, 285, 216, 302, 192, 172, 192);
  
  ellipse(166, 240, 30, 30);
  ellipse(166, 211, 30, 30);
  ellipse(179, 211, 30, 30);
  ellipse(168, 224, 30, 30);
  ellipse(176, 219, 30, 30);
  ellipse(185, 227, 30, 30);
  ellipse(200, 225, 30, 30);
  ellipse(215, 230, 30, 30);
  ellipse(230, 227, 30, 30);
  ellipse(245, 228, 30, 30);
  ellipse(260, 227, 30, 30);
  ellipse(277, 223, 30, 30);
  ellipse(292, 225, 30, 30);
  ellipse(155, 225, 30, 30);
  ellipse(172, 195, 30, 30);
  ellipse(190, 200, 30, 30);
  ellipse(210, 205, 30, 30);
  ellipse(225, 200, 30, 30);
  ellipse(240, 202, 30, 30);
  ellipse(255, 200, 30, 30);
  ellipse(270, 205, 30, 30);
  ellipse(285, 208, 30, 30);
  ellipse(300, 215, 30, 30);
  ellipse(160, 195, 30, 30);
  ellipse(175, 185, 30, 30);
  ellipse(195, 180, 30, 30);
  ellipse(215, 178, 30, 30);
  ellipse(235, 175, 30, 30);
  ellipse(255, 177, 30, 30);
  ellipse(275, 183, 30, 30);
  ellipse(290, 190, 30, 30);
  ellipse(305, 205, 30, 30);
  ellipse(315, 220, 30, 30);
  ellipse(313, 240, 30, 30);
  ellipse(153, 210, 30, 30);
  ellipse(303, 192, 30, 30);
  ellipse(319, 200, 30, 30);
  ellipse(327, 218, 30, 30);
  ellipse(323, 234, 30, 30);
  
  
  switch(glassesIndex)
  {
    case 0:
      break;
    case 1:
      stroke(0);
      noFill();
      ellipse(200, 272, 50, 50);
      line(224, 272, 256, 272);
      ellipse(280, 272, 50, 50);
      line(159, 278, 175, 272);
      line(305, 272, 320, 277);
      break;
    case 2:
      fill("#009900");

      bezier(225, 300, 158.5, 284.5, 145.5, 253.5, 180, 198);
      bezier(225, 300, 225, 240, 225, 240, 180, 198);

      bezier(255, 300, 321.5, 284.5, 334.5, 253.5, 300, 198);
      bezier(255, 300, 255, 240, 255, 240, 300, 198);

      fill(0);

      bezier(212.3, 288.7, 161.1, 279.1, 152.8, 256.2, 183.1, 210.4);
      bezier(212.3, 288.7, 216.2, 251.8, 216.2, 251.8, 183.1, 210.4);

      bezier(267.7, 288.7, 313.9, 279.1, 323.9, 256.2, 292.7, 210.4);
      bezier(267.7, 288.7, 263.8, 251.8, 263.8, 251.8, 292.7, 210.4);

      stroke("#009900")
      strokeWeight(10)
      line(220, 280, 257, 280);
      break;
  }
  
  
  if (keyMessageTimer > 0 && keyMessage != "a") {
    noStroke();
    fill(0);
    textSize(16);
    textAlign(RIGHT, TOP);
    text(keyMessage, width - 10, 10);
    keyMessageTimer--;
  }
}

function mousePressed()
{
  console.log("x, y =", mouseX, mouseY); 
  leftClicked = false;
  rightClicked = false;
  
  if ((mouseX >= 160 && mouseX <= 170) && mouseY >= 445 && mouseY <= 455) {
    leftClicked = true;
    keyMessage = "왼쪽 끈 당김";
    keyMessageTimer = 120;
  }

  if ((mouseX >= 325 && mouseX <= 335) && mouseY >= 465 && mouseY <= 475) {
    rightClicked = true;
    keyMessage = "오른쪽 끈 당김";
    keyMessageTimer = 120;
  }
}
function keyPressed()
{
  if (key == "c" || key == "C") {
    let R = random(0, 255);
    let G = random(0, 255);
    let B = random(0, 255);
    colors = [R, G, B];
    keyMessage = "색상 변경 (C)";
  } 
  else if (key == "g" || key == "G") {
    glassesIndex++;
    if (glassesIndex >= 3) glassesIndex = 0;
    keyMessage = "안경 변경 (G)";
  } 
  else if (key == "r" || key == "R") {
    rain = !rain;
    keyMessage = "모자(R)";
  }
  else if (key == "s" || key == "S") {
    saveGif("my", 10, 500);
    keyMessage = "a";
  }

  keyMessageTimer = 120; // 약 2초 (60fps 기준)
}

