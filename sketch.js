var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var jumpsound, diesound, checkpointsound;
var cloud, cloudsGroup, cloudImage;
var obstacle1_image;
var obstacle2_image;
var obstacle3_image;
var obstacle4_image;
var obstacle5_image;
var obstacle6_image;
var cloudsGroup, obstaclesGroup;
var newImage;
var gamestate;
var score = 0;
var gameover, game_over;
var game_restart, restart;

function preload() {

  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  trex_collided= loadAnimation("trex_collided.png");

  groundImage = loadImage("ground2.png");

  jumpsound = loadSound("jump.mp3");
  obstacle1_image=loadImage("obstacle1.png");
  gameover_image=loadImage("gameOver.png");

  //get date and time from mycomputer
  d = new Date();
  n = d.getMinutes();
  console.log(n)

}

function setup() {
  createCanvas(1500,400);

  trex = createSprite(0, 390, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided",trex_collided);
  trex.velocityX=4;
  trex.scale=0.7;
 
  ground = createSprite(0,390,1200*5,20);
  ground.addImage("ground", groundImage);
  ground.scale=5;
 // imageMode(CENTER);
 // image(groundImage,0,390,1200*5,20);
  ground.x =0;

  invisibleGround = createSprite(0,390,1200*5,10);
  invisibleGround.visible = false;

  obstacle1 = createSprite(1000,370,0,0);
  obstacle1.addImage("obstacle", obstacle1_image);
  obstacle1_image.scale=1.5;

}

function draw() {
  background(180);
      
  trex.collide(invisibleGround);
  obstacle1.collide(invisibleGround);

  camera.x=trex.x;
  camera.y=trex.y;

  if(trex.isTouching(obstacle1)){
              
    trex.changeAnimation("collided");
    trex.velocityX=0;
   gameOver = createSprite(750,200,0,0);
   gameOver.addImage("game_over",gameover_image);

  }

  drawSprites();
}
