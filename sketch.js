const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1,ground2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21,b22,b23,b24,b25;
var ball;
var string;

function setup() {
	createCanvas(1535,790);
	


	engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(670,500,400,20)
    ground2 = new Ground(1280,400,350,20)

    b1 = new Blocks(550,455,40,70)
    b2 = new Blocks(590,455,40,70)
    b3 = new Blocks(630,455,40,70)
    b4 = new Blocks(670,455,40,70)
    b5 = new Blocks(710,455,40,70)
    b6 = new Blocks(750,455,40,70)
    b7 = new Blocks(790,455,40,70)
   
   ball = new Ball(200,400,50)
   
    b8 = new Blocks(590,385,40,70)
    b9 = new Blocks(630,385,40,70)
    b10 = new Blocks(670,385,40,70)
    b11 = new Blocks(710,385,40,70)
    b12 = new Blocks(750,385,40,70)

    b13 = new Blocks(630,315,40,70)
    b14 = new Blocks(670,315,40,70)
    b15 = new Blocks(710,315,40,70)
    b16  = new Blocks(670,245,40,70)
    
    b17 = new Blocks(1200,355,40,70)
    b18 = new Blocks(1241,355,40,70)
    b19 = new Blocks(1282,355,40,70)
    b20 = new Blocks(1323,355,40,70)
    b21 = new Blocks(1364,355,40,70)

    b22 = new Blocks(1241,285,40,70)
    b23 = new Blocks(1282,285,40,70)
    b24 = new Blocks(1323,285,40,70)
    b25 = new Blocks(1282,215,40,70)

    string = new String(ball.body,{x:200,y:300})

   
 }

function draw() {
	background("grey");
Engine.update(engine);




ground1.display()
ground2.display()
b1.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
ball.display()

b8.display()
b9.display()
b10.display()
b11.display()
b12.display()

b13.display()
b14.display()
b15.display()
b16.display()

b17.display()
b18.display()
b19.display()
b20.display()
b21.display()

b22.display()
b23.display()
b24.display()
b25.display()

string.display()


}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
	
	
    }
    
function mouseReleased (){
    string.fly();       
      }


function keyPressed(){
    if(keyCode === 32){
        string.attach(ball.body)
    }
}