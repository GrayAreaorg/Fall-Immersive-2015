//From Day 1 of Processing for Fall 2015 Immersive
//written by Sarah Wever
//
//covers:
//the entire project from conception to completion
//takes inspiration from Pour Painting: https://www.youtube.com/watch?v=d6egUsZvWu4
//
//drawing, arrays, arraylist, saving images from screen
//classes, functions, mouse and keyboard inputs

//initialize variables
float size = 20;
float growspeed = 0.5;
float pourspeed = 1;
//intialize class we created
Pour pour;
//intialize image we will load
PImage img;
//initialize arraylist to store our 'paint circles'
ArrayList <Pour> pours = new ArrayList<Pour>();

void setup() {

  size(700, 700);
  background(255);
  
  //load image from data folder
  img = loadImage("add.png");
  image(img, width/2-15, height/2-15);
  
  //color and write text
  fill(0);
  text("click to paint", width/2-37, height/2+40);
}

void draw() {
  
  //Get all the current paint pours we have already stored
  //then update their size and display them
  for (int i = 0; i<pours.size (); i++) {
    pour = pours.get(i);
    pour.update();
    pour.display();
  }
  
  //if the paint pour is off the screen removed it
  //keeps our program running fast
  for (int i = pours.size () - 1; i >= 0; i--) {
    pour = pours.get(i);
    if (pour.finished()) {
      pours.remove(i);
    }
  }
  
  //print lines for dubugging
  //println(pours.size());
  //println(frameRate);
}

//pressing the mouse makes a new paint pour object
void mousePressed() { 
  if (mouseX >= (width/2-5) && mouseX <= (width/2+5) || mouseY > (height/2-5) && mouseY < (height/2+5)) {
    pours.add(new Pour(color(random(0, 255), random(0, 255), random(0, 255)), size));
  }
}

//press enter to save current image
void keyPressed() {
  if (key == ENTER) {
    saveFrame("data/line-######.png");
  }
}
