//From Day 1 of Processing for Fall 2015 Immersive
//written by Sarah Wever
//
//this is just an example Mondrian that you can make 
//for the challenge as the last part of class

float y = 294;
float speed = 5;

void setup() {
  size(420, 444);
}

void draw() {
  background(255);
  noStroke();

  //yellow//
  fill(255, 255, 0);
  rect(mouseX, 0.0, 50, 97);

  //blue//
  fill(0, 0, 255);
  rect(56.7, 386, 111, 19);

  //red//
  fill(255, 0, 0);
  rect(256, mouseY, 71, 74);
  rect(409, 385, 11, 19);

  //lines//
  stroke(0);
  strokeWeight(10);
  line(54, 0, 54, 444);   //1
  line(105, 0, 105, 444); //2
  line(141, 0, 141, 444); //3
  line(162, 0, 162, 444); //4
  line(251, 0, 251, 444); //5
  line(331, 0, 331, 444); //6
  line(358, 0, 359, 444); //7
  line(404, 0, 404, 444); //8

  strokeWeight(13);
  line(0, 102, 420, 102); //9
  line(0, 168, 420, 168); //10
  line(0, 224, 420, 224); //11
  
  strokeWeight(13);
  line(254, 379, 355, 379); //13

  strokeWeight(10);
  line(254, 433, 355, 433); //14
  
    
  y = y - speed;
  
  if(y<0 || y > 294){
    speed = speed*-1;
  }
  
  line(0, y, 420, y); //12
}
