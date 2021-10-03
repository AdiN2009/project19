var sea,ship;
var seaImg,shipImg;
var rock, rockImg;
var coin,coinImg;
var coinsGroup,rocksGroup;
var score;
var gameState = "end";
var gameState = "play";


function preload(){
    shipImg1 = loadAnimation("ship-1.png");
    shipImg2 = loadAnimation("ship-2.png");
    shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
    seaImg = loadImage("sea.png");
    rockImg = loadImage("rock.png");
    coinImg = loadImage("coin.png");
}

function setup() {
    createCanvas(800,400);
    background("black");
  
    // Moving background
    sea=createSprite(800,200);
    sea.addImage(seaImg);
    sea.velocityX = -5;
    sea.scale=0.3;
  
    rocksGroup = new Group();
    coinsGroup = new Group();

    ship = createSprite(260,300,30,30);
    ship.addAnimation("movingShip",shipImg1);
    ship.scale =0.06125;
    score=0;
}

function draw() {
    if (gameState === "play") {
    score = score + Math.round(frameCount/60);
    

    ship.velocityY=0
    sea.velocityX = -3;

  if (keyDown("UP_ARROW")){
      ship.velocityY= -6;
  }
  if (keyDown("DOWN_ARROW")){
    ship.velocityY= 6;
} 
 if (ship.y<=236){
     ship.y=235
 }
 if (ship.y>=379){
    ship.y=378
}
if (ship.isTouching(coinsGroup)){
    score=score+500
    coin.destroy();
}
if (ship.isTouching(rocksGroup)){
    ship.destroy();
    gameState="end"
}
rocks();
    //uncomment code to reset the background
    if(sea.x < 200){
 

      sea.x = sea.width/8;
     
    }
    
   
    drawSprites();
    text("Score: " + score,700,180);
}
    if (gameState === "end"){
        background("black");
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
      }
 
}



function rocks() {
    if (frameCount % 70 === 0){
   rock = createSprite(600,-50)
   rock.y = Math.round(random(400,250));
   rock.addImage(rockImg)
   rock.scale = 0.06
 rock.velocityX=-2;
   rocksGroup.add(rock);
   rock.lifetime = 500;
    }

    if (frameCount % 240 === 0){
     coin = createSprite(600,-50)
   coin.y = Math.round(random(375,275));
  coin.addImage(coinImg)
  coin.scale = 0.1
   coin.velocityX = -2;
   coinsGroup.add(coin);
  
    }
}