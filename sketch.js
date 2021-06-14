
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var base1,base2,base3,base4;
var stone,sling;
var st1,st2,st3,st4,st5,st6,st7,st8;
var st9;
var st11,st12,st13,st14,st15,st16;
var st18;
var st19,st20,st21,st22;
var st24;
var backgroundImg;
function preload(){
 getBackgroundImage();
}
function setup(){
 createCanvas(1200, 600);
 engine = Engine.create();
 world = engine.world;
 base1 = new Base(75,400,150,400);
 base2 = new Base(600,587.5,1200,25);
 base3 = new Base(1187.5,300,25,600);
 base4 = new Base(600,12.5,1200,25);

 stone=new Circle(50,100,40);
 sling=new SlingShot(stone.body,{x:100,y:100});
//layer1
 st1=new Stick(300,525,100,100);
 st2=new Stick(400,525,10,100);
 st3=new Stick(500,525,10,100);
 st4=new Stick(600,525,10,100);
 st5=new Stick(700,525,10,100);
 st6=new Stick(800,525,10,100);
 st7=new Stick(900,525,10,100);
 st8=new Stick(1000,525,100,100);
//layer2base
 st9=new Stick(650,465,880,10);
//layer2
 st11=new Stick(400,425,100,100);
 st12=new Stick(500,425,10,100);
 st13=new Stick(600,425,10,100);
 st14=new Stick(700,425,10,100);
 st15=new Stick(800,425,10,100);
 st16=new Stick(900,425,100,100);
//layer3base
 st18=new Stick(650,365,550,10);
//layer3
 st19=new Stick(500,325,100,100);
 st20=new Stick(600,325,10,100);
 st21=new Stick(700,325,10,100);
 st22=new Stick(800,325,100,100);
 st24=new Stick(650,265,440,10);
 Engine.run(engine);  
}
function draw(){
 if(backgroundImg){
  background(backgroundImg);
 }
 base1.display();
 base2.display();
 base3.display();
 base4.display();

 stone.display();
 sling.display();

 st1.display();
 st2.display();
 st3.display();
 st4.display();
 st5.display();
 st6.display();
 st7.display();
 st8.display();

 st9.display();

 st11.display();
 st12.display();
 st13.display();
 st14.display();
 st15.display();
 st16.display();

 st18.display();

 st19.display();
 st20.display();
 st21.display();
 st22.display();

 st24.display();
 drawSprites();
}
function mouseDragged(){
 Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
 sling.fly();
}
function keyPressed(){
 if(keyCode===32){
  Matter.Body.setPosition(stone.body,{x:50,y:100});   
 }
 sling.attach(stone.body);
}
async function getBackgroundImage(){
 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Calcutta");
 var responseJson = await response.json();
 var datetime = responseJson.datetime;
 var hour =  datetime.slice(11,13);
 console.log(hour);
 if(hour>=06 && hour<18 ){
  backgroundImg = loadImage("day.jpg");
 }else{
  backgroundImg = loadImage("night.png");  
 }
}
