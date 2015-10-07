
void setup(){
  size(600, 350);
  
}

void draw(){
  background(49, 59, 80);
  noStroke();
  fill(255, 255, 0, 50);
  ellipse(mouseX, mouseY, 70, 70);
  fill(255, 255, 0, 100);
  ellipse(mouseX, mouseY, 10, 10);
}
