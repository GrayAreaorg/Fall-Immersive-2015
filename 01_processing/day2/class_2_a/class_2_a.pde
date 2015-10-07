//From Day 2 of Processing for Fall 2015 Immersive
//written by Sarah Wever
//
//covers:
//review drawing, drawing with arrays

float[] balls;

void setup() {
  
  size(500, 500);
  balls = new float[10];

  for (int i= 0; i<balls.length; i++) {
    balls[i] = i;
  }
}

void draw() {
  
  background(255);
  noStroke();
  fill(39, 129, 38);

  for (int i=0; i < balls.length; i++) {
    float spaced = map(balls[i], 0, 9, 10, width-10);
    ellipse(spaced, height/2, 20, 20);
  }
  
}
