//From Day 1 of Processing for Fall 2015 Immersive
//written by Sarah Wever
//
//covers:
//2d drawing, mouse interaction

//declare any variables we plan to use
float x;
float y;
float xspeed;
float yspeed;

void setup(){
  //setup will run once at the beginning of our program
  //we will write things here that we only want to run in the first frame
  
  //set size of screen (in pixels) and background color
  size(500, 500);
  background(255);
  
  //starting point for our ball and bounce speed
  x = width/2;
  y = height/2;
  xspeed = 15.0;
  yspeed = 15.0;
  
}

void draw(){
  
  background(255);
  
  noStroke();
  fill(255, 0, 255);
  
  //instead of constraining the ball to the edges of the screen
  //we are 'attracting' the ball to the mouse with every frame
  y = y + (mouseY - y)/yspeed;
  x = x + (mouseX - x)/xspeed;
  
  ellipse(x, y, 50, 50);
  
  
}
