Pour apour;
PImage img;
ArrayList <Pour> pours = new ArrayList<Pour>();


void setup() {
  size(700, 700);
  background(255);
  
  img = loadImage("add.png");
  image(img, width/2-15, height/2-15);
  
}

void draw() {


  for (int i=0; i <pours.size (); i++) {
    apour = pours.get(i); 
    apour.update(); 
    apour.display();
  }
  
  for (int i=pours.size()-1; i >=0; i--){
    apour = pours.get(i);
    if(apour.finished() == true){
      pours.remove(i);
    }
  }
  
  println(frameRate);
}

void mousePressed(){
   pours.add(new Pour(color(random(0,255), random(0, 255), random(0, 255)), 50));
}

void keyPressed(){
  if (keyCode == ENTER) {
      saveFrame("images/line-######.png");
    }
}
