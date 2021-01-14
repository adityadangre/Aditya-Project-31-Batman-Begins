const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,boy_running;
var bg,bg_img;
var t, t1,t2,t3,t4;
var rand;
var drop=[];
var maxDrops=100;
var tcf=0;

function preload(){
    t1 = loadImage("1.png");
    t2 = loadImage("2.png");
    t3 = loadImage("3.png");
    t4 = loadImage("4.png");
    bg_img = loadImage("bg.png");
    boy_running=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
}

function setup(){
    var canvas = createCanvas(600,720);
    engine = Engine.create();
    world = engine.world;  

    bg = createSprite(300,360,600,20);
    bg.addImage("bg",bg_img);
    bg.scale=2.8;
    bg.x = bg.width /2;
    bg.velocityX = -1;
    
    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drop.push(new Drop(random(0,720), random(0,720)));
        }
    }
    man = new Man(320,500);

    boy=createSprite(300,580);
    boy.addAnimation("running",boy_running);
    boy.scale=0.4;
}

function draw(){
    background("white");
    Engine.update(engine);

    if (bg.x < 0){
        bg.x = bg.width/2;
    }
    man.display();
    drawSprites();

    for(var i = 0; i<maxDrops; i++){
        drop[i].display();
        drop[i].update();        
    } 

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        tcf=frameCount;
        t = createSprite(random(10,600), random(10,30), 10, 10);
        switch(rand){
            case 1: t.addImage(t1);
            break;
            case 2: t.addImage(t2);
            break; 
            case 3: t.addImage(t3);
            break;
            case 4: t.addImage(t4);
            break;
            default: break;
        }
        t.scale = random(0.3,0.9);
    }
    if(tcf + 10 ===frameCount && t){
        t.destroy();
    }
    
    
}   

