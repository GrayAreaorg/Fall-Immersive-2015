class Pour {

  color c;
  float size;
  float growspeed = 0.5;
  float pourspeed = 1;

  Pour(color tempc, float tempsize) {
    c = tempc;
    size = tempsize;
  }

  void update() {

    if (mousePressed==true) {
      size = size+pourspeed;
    }

    size = size + growspeed;
  }


  void display() {
    noStroke();
    fill(c);
    ellipse(width/2, height/2, size, size);
  }

  boolean finished() {
    if (size >= 1000) {
      return true;
    } else {
      return false;
    }
  }
}
