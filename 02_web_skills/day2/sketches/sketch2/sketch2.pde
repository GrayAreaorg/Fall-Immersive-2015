//From Day 1 of Processing for Fall 2015 Immersive
//written by Sarah Wever
//
//covers:
//2d drawing, animation

//declare any variables we plan to use
float x;
float y;
float xspeed;
float yspeed;


void setup() {
  //setup will run once at the beginning of our program
  //we will write things here that we only want to run in the first frame

  //set size of screen (in pixels) and background color
  size(600, 350);
  

  //starting point for our ball and bounce speed
  x = width/2;
  y = height/2;
  xspeed = 1;
  yspeed = 3;
}

void draw() {
  //this will loop constanltly once the program has started
  //LPT: order is important

  //redeclare background color so we don't get trails from our ball
  background(255,255,0);

  //no stroke, purple ball
  noStroke();
  fill(255, 0, 255);

  //set x and y location to increase by the value of speed with every frame

  y = y + yspeed;
  x = x + xspeed;

  //if the ball goes off any side of the screen:
  //multiply the speed by it's inverse to have it reverse direction
  if (y > height-25 || y < 25) {
    yspeed = yspeed * -1;
  }

  if (x > width-25 || x < 25) {
    xspeed = xspeed * -1;
  }




  //draw our circle
  ellipse(x, y, 50, 50);
}
