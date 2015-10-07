//From Day 1 of Processing for Fall 2015 Immersive
//written by Sarah Wever
//
//covers:
//2d drawing, mouse interaction

float y;
float speed=3;
Ball[] balls;

void setup() {
  size(600, 350);
  background(0);
  y = height/2;
  balls = new Ball[10];

  for (int x = 0; x <balls.length; x++) {
    float spaced = map(x, 0, 9, 10, width-10);
    balls[x] = new Ball(spaced, random(0, 5));
  }
}

void draw() {
  
  noStroke();
  fill(39, 129, 38);

  for (int i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}

void keyPressed() {
  for (int i = 10; i < balls.length; i+=30) {
    balls[i].reset();
  }
}
