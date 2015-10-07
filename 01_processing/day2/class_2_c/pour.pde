//create a unique object for our program called 'pour'  //<>//
//designed to resemble the pattern created from pouring paing
class Pour {
  
  //initialze the 'qualities' of our object
  color c;
  float size;
  
  //create a space to receive the variables from the main portion of our program
  Pour(color tempC, float tempSize) {
    c = tempC;
    size = tempSize;
  }
  
  //create a function to update the size of our paint pours
  void update() {
    if (mousePressed) {
      if (mouseX >= (width/2-5) && mouseX <= (width/2+5) || mouseY > (height/2-5) && mouseY < (height/2+5)) {
        size = size + pourspeed;
      }
    }

    size = size + growspeed;
    //println(size);
  }
  
  //create a function to draw our paint pours
  void display() {
    noStroke();
    fill(c);
    ellipse(width/2, height/2, size, size);
  }
  
  //create a boolean that determines when our paint pour is off the screen
  boolean finished()
  {
    if (size == 1000) {
      return true;
    } else {
      return false;
    }
  }
}
