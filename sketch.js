var canvas;
var music;
var surf1;
var surf2;
var surf3;
var surf4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surf1= createSprite(100,550,120,40);
    surf1.shapeColor ="red";
    surf2= createSprite(250,550,120,40);
    surf2.shapeColor ="yellow";
    surf3= createSprite(400,550,120,40);
    surf3.shapeColor ="green";
    surf4= createSprite(550,550,120,40);
    surf4.shapeColor ="blue";
    
    box= createSprite(random(20,750),100,40,40);  
    box.shapeColor = "white";
    box.velocityX=4;
    box.velocityY=9;
    
}
function draw(){

    
background("black");
drawSprites();
edges=createEdgeSprites();
box.bounceOff(edges);

    if(surf1.isTouching(box) && box.bounceOff(surf1)){
      
       box.shapeColor="red";
       music.play();
     
    }
    if(surf2.isTouching(box) && box.bounceOff(surf2)){
      
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
         
    }
    if(surf3.isTouching(box) && box.bounceOff(surf3)){
      
        box.shapeColor="green";
         
     }
     if(surf4.isTouching(box) && box.bounceOff(surf4)){
      
        box.shapeColor="blue";
         
     }
     

}