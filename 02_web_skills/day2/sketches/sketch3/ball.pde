class Ball {

  float speed;
  float x;
  float y = height/2;

  Ball( float tempx, float tempspeed) {
    speed = tempspeed;
    x = tempx;
  }
  
  void reset() {
    y = height/2;
  }

  void update() {
    y = y + speed;

    if (y > height-10 || y < 10) {
      speed = speed * -1;
    }
    
  }

  void display() {
    fill(random(255), random(255), random(255));
    ellipse(x, y, 20, 20);
  }
}
