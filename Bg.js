class Bgclass{
constructor(x,y, width, hieght, angle){
var options = {
'restitution':0.8,
'friction':1.0,
'density':1.0,
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.hieght = height;
this.Image = loadImage("Images/BG1")
this.Image = loadImage("Images/BG2")
this.Image = loadImage("Images/end")
}
display(){

var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.hieght);
pop();
}
}