class Stick{
 constructor(x, y, width, height) {
  var options = {
   'restitution':0.008,
   'friction':2,
   'density':1.0,
    isStatic:false
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
 }
 display(){
  var pos =this.body.position;
  var angle=this.body.angle;
  fill("brown");
  push ();
  translate (pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(4);
  stroke("brown");
  rect(0, 0, this.width, this.height);
  pop ();
 }
}