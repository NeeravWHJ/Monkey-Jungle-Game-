var banana_Image,obstacle_Image,back_Image,player_Image;
var back_ground,player;
var foodGroup,fruit;
var obstacleGroup,obstacle;
var score = 0;
var ground;


function preload(){
 
 banana_Image = loadImage("banana.png");
 obstacle_Image = loadImage("stone.png");
 back_Image = loadImage("jungle.png");
  
 //player_Image = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08"); 
    
}


function setup() {
  createCanvas(800, 400);
  
 back_ground = createSprite(0,0,800,400);
 back_ground.addImage("groundback",back_Image);
 back_ground.x = back_ground.width/2;
 back_ground.visible = false; 
  
 player = createSprite(25,385,10,10);
 //player.addAnimation("Image",player_Image);
  
  ground = createSprite(400,350,800,10);
  ground.visible = false;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}

function draw() {
  background(220);
  
  text("Survival Time = "+ score,100,50);
score = score + Math.round(World.frameRate/60);

  
 back_ground.velocityX = -3;
 
 if(back_ground.x < 0){
 back_ground.x = back_ground.width/2;   
    
    }
  
banana();
stone();  
  
if(foodgroup.isTouching(player)){
 score = score+2;  
  foodgroup.destroyEach();
  
   }
  
 if(keyDown("space")&& player.y >= 245){
player.velocityY = -12 ; 
}
    
  player.velocityY = player.velocityY + 0.8;
  player.collide(ground);
  
drawsprites(); 
}

function banana(){
  
if(frameCount % 80 === 0){
fruit = createSprite(200,200,10,10);
fruit.addImage("banana", banana_Image);
fruit.y = Math.round(random(180,220));
fruit.velocityX = -3;  
fruit.lifetime = 300;
fruitGroup.add(fruit); 
  
}
  
}

function stone(){
 
if(frameCount % 300 === 0){

obstacle = createSprite(165,400,10,25);  
obstacle.velocityX = -4;

  
  
  
  
}
  
}





