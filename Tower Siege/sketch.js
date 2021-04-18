var line
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var hex, slingshot;

var gameState = "onSling";
var score = 0;

function preload() {
   // getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


hex = new Hex(100,200,10,10);
blocks = new Blocks(1000,200);
blocks2 = new Blocks(950,200);
blocks3 = new Blocks(900,200);
blocks4 = new Blocks(975,150);
blocks5 = new Blocks(925,150);
blocks6 = new Blocks(950,100);
slingshot = new SlingShot(hex.body,{x:200, y:50});
ground = new Ground(945,235,150,10)



blocks7 = new Blocks(600,300);
blocks8 = new Blocks(550,300);
blocks9 = new Blocks(500,300);
blocks10 = new Blocks(575,250);
blocks11 = new Blocks(525,250);
blocks12 = new Blocks(550,200);
ground1 = new Ground(545,350,150,10)

}

function draw(){
        background("#755519");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);

    text("SCORE:")

    hex.display();
   blocks.display();
   blocks2.display();
   blocks3.display();
   blocks4.display();
   blocks5.display();
   blocks6.display();
   blocks7.display();
   blocks8.display();
   blocks9.display();
   blocks10.display();
   blocks11.display();
   blocks12.display();
   ground.display();
    ground1.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        hex.trajectory = [];
        Matter.Body.setPosition(hex
.body,{x:200,y:50});
       slingshot.attach(hex
.body);
    }
}