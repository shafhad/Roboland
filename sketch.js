var robot, r1;
var music;
var sky, skyImage;
var timer;
var laser, laserA, laserI, laserS, laserI2, laser2, laserG, laserG2;
var move = false;
var bullet, bulletA, bulletS, shootBall, shootBallG;
var ground;
var spark, sparkS;
var enemy1, enemy2, enemy3, enemy4, enemyAnimation;
var board1, board2, board3, board4,  boardImage;
var enemyBall, enemyBounce1, enemyBounce2, enemyCreater1, enemyCreater2, enemyCreater3;
var blast1, blast2, blast3, blast4, eBlast, blast1g, blast2g, blast3g, blast4g, blastSound;
var shootBallState = 1;
var laserScore = 0, laserScore2 = 0, laserState;
var fireState;
var battery, batteryImage, batteryIcon, batteryG, batteryCount = 0;
var robotIcon, robotIconImage, robotIcon2;
var c, cImage;
var healthBar, healthBarImage, rHealth, rhealthImage;
var batteryBar, batteryBarImage, blueBatteryBar, blueBatteryBarImage;
var laserBar, laserBarImage, greenLaserBar, greenLaserBarImage;
var batteryCircle, batteryCircleImage;
var batteryIcon;
var missile, missile2, missileG, missileImage, missileBlast, missileG2, missileBlastG, missileBlast2, missileBlastG2;
var health1, health2, health3, health4, healthAImage;
var START = 1;
var PLAY = 2;
var END = 0;
var ACCOMPLISHED = 3;
var FAILED = 4;
var gameState = START;
var enemy, eb1;
var score = 0;
var wallScore = 5;
var endScore = 0;
var dadMissileCount = 5;
var finalWall2, finalWall, finalWallG;
var chargeS;
var jet, jetImage,jet2, jetG, jetG2; 
var explode;
var wbImage;
var wLaserImage, gLaserImage;
var laserActivate;
var eb, eb1, eb2, eb3;
var hit;
var siren;
var dadMissile, dadMissile2, dadMissileG, dadMissileG2, dadMissileImage;
var lowHealth;
var momI, dadA, mom, dad;
var a1I, a2I, a3I, a4I, a5I, a6I;
var PlayI, play;
var countDown;
var missionAccomplished, missionAccomplishedI, missionFailed, missionFailedI;
var roboland, robolandI;
var edge, edge2;
var shootLine;
var enemyBounce1, enemyBounce2, enemyBounce3, enemyBounce4, enemyBall, enemyBall2;
var chargeMove, wallMove, momMove, gameStart;
var animation, bLaser;
var laserIcon;
var pBar, progressBar;
var enemyBoss, enemyBossBlast, enemyBossBlast2;
var a1, a2, a3, a4, a5, a6;
var erHealth1, erHealth2, erHealth3, erHealth4;
var health1, health2, health3, health4;
var blast1, blast2, blast3, blast4, blast1g, blast2g, blast3g, blast4g;
var wall, wall2, wallImage;
var finalBlast;
var eg1, eg2, eg3, eg4, bg1, bg2, bg3, bg4, hg1, hg2, hg3, hg4, eh1, eh2, eh3, eh4;
var wallG, wallG2;
var htPlay, htPlay2, htPlayI, htPlayI2;
var back, backI;


function preload(){
   
    r1= loadAnimation(
    "frame_04_delay-0.03s-removebg-preview.png", 
    "frame_08_delay-0.03s-removebg-preview.png", 
    "frame_12_delay-0.03s-removebg-preview.png");
    
    bulletA = loadAnimation(
    "frame_00_delay-0.1s-removebg-preview.png", 
    "frame_02_delay-0.1s-removebg-preview.png", 
    "frame_04_delay-0.1s-removebg-preview.png", 
    "frame_06_delay-0.1s-removebg-preview.png", 
    "frame_08_delay-0.1s-removebg-preview.png", 
    "frame_10_delay-0.1s-removebg-preview.png", 
    "frame_12_delay-0.1s-removebg-preview.png", 
    "frame_14_delay-0.1s-removebg-preview.png", 
    "frame_16_delay-0.1s-removebg-preview.png", 
    "frame_18_delay-0.1s-removebg-preview.png");

    skyImage = loadImage("joined.png");
    
    sparkS = loadSound("spark.mp3");
    
    music = loadSound("Undertale Asriel Dreemurr Theme.mp3");

    laserI = loadImage("lazer7-removebg-preview.png");

    laserI2 = loadImage("laser2.png");
 
    laserS = loadSound("laser.mp3");
    bulletS = loadSound("shot.mp3");

    enemyAnimation = loadAnimation("E1.png", "E2.png", "E3.png", "E4.png", "E5.png", "E2.png", "E1.png")

    boardImage = loadImage("Board.png")

    eBlast = loadAnimation("frame_01_delay-0.05s-removebg-preview.png", 
    "frame_03_delay-0.05s-removebg-preview.png",  
    "frame_05_delay-0.05s-removebg-preview.png", 
    "frame_07_delay-0.05s-removebg-preview.png", 
    "frame_09_delay-0.05s-removebg-preview.png",  
    "frame_11_delay-0.05s-removebg-preview.png",  
    "frame_13_delay-0.05s-removebg-preview.png",  
    "frame_15_delay-0.05s-removebg-preview.png",  
    "frame_17_delay-0.05s-removebg-preview.png",  
    "frame_19_delay-0.05s-removebg-preview.png", 
    "frame_21_delay-0.05s-removebg-preview.png",  
    "frame_23_delay-0.05s-removebg-preview.png",
    "frame_25_delay-0.05s-removebg-preview.png") 

    blastSound = loadSound("Small explosion.mp3");

    batteryImage = loadImage("Battery.png");

    chargeS = loadSound("Power charge.mp3");

    robotIconImage = loadImage("frame_04_delay-0.03s-removebg-preview.png");

    healthBarImage = loadImage("hb.png");
  
    batteryBarImage = loadImage("BatteryBar.png");

    rhealthImage = loadImage("health.png");

    cImage = loadImage("bgc.jpg.png");

    blueBatteryBarImage = loadImage("blueBatteryBar.png");

    batteryCircleImage = loadImage("bc.png");

    jetImage = loadImage("jet.png");

    missileImage = loadImage("Missile.png");

    explode = loadSound("Explode.mp3");
  
    healthAImage= loadImage("healthA.png");

    laserBarImage = loadImage("laserBar.png");

    wbImage = loadImage("wbb.png");

    wLaserImage = loadImage("wL.png");

    gLaserImage = loadImage("gL.png");

    laserActivate = loadSound("LaserActivate.mp3");

    eb1 = loadAnimation("1.png", "2.png", "3.png", "4.png", "5.png", 
    "6.png", "7.png", "8.png", "9.png", "10.png", 
    "11.png", "12.png", "13.png", "14.png", "15.png", "16.png");

    eb = loadAnimation("1.png");

    eb2 = loadAnimation("frame_00_delay-0.1s-removebg-preview1.png", 
    "frame_01_delay-0.1s-removebg-preview1.png", 
    "frame_02_delay-0.1s-removebg-preview1.png", 
    "frame_03_delay-0.1s-removebg-preview1.png", 
    "frame_04_delay-0.1s-removebg-preview1.png", 
    "frame_05_delay-0.1s-removebg-preview1.png", 
    "frame_06_delay-0.1s-removebg-preview1.png", 
    "frame_07_delay-0.1s-removebg-preview1.png", 
    "frame_08_delay-0.1s-removebg-preview1.png", 
    "frame_09_delay-0.1s-removebg-preview1.png", 
    "frame_10_delay-0.1s-removebg-preview1.png", 
    "frame_11_delay-0.1s-removebg-preview1.png", 
    "frame_12_delay-0.1s-removebg-preview1.png", 
    "frame_13_delay-0.1s-removebg-preview1.png", 
    "frame_14_delay-0.1s-removebg-preview1.png", 
    "frame_15_delay-0.1s-removebg-preview1.png", 
    "frame_28_delay-0.1s-removebg-preview.png", 
    "frame_29_delay-0.1s-removebg-preview.png", 
    "frame_30_delay-0.1s-removebg-preview.png", 
    "frame_31_delay-0.1s-removebg-preview.png", 
    "frame_32_delay-0.1s-removebg-preview.png", 
    "frame_33_delay-0.1s-removebg-preview.png", 
    "frame_34_delay-0.1s-removebg-preview.png", 
    "frame_35_delay-0.1s-removebg-preview.png")

    eb3 = loadAnimation("frame_00_delay-0.07s-removebg-preview.png", 
    "frame_01_delay-0.07s-removebg-preview.png", 
    "frame_02_delay-0.07s-removebg-preview.png", 
    "frame_03_delay-0.07s-removebg-preview.png", 
    "frame_04_delay-0.07s-removebg-preview.png", 
    "frame_05_delay-0.07s-removebg-preview.png", 
    "frame_06_delay-0.07s-removebg-preview.png", 
    "frame_07_delay-0.07s-removebg-preview.png", 
    "frame_08_delay-0.07s-removebg-preview.png", 
    "frame_09_delay-0.07s-removebg-preview.png") 

   wallImage = loadImage("wall.png");

   hit = loadSound("hit.mp3");

   siren = loadSound("siren.mp3");


  dadMissileImage = loadImage("dadMissile.png");


  lowHealth = loadSound("low health.mp3");

  momI = loadImage("mom.png");

  dadA = loadAnimation("imageonline-co-flipped (2).png", 
  "imageonline-co-flipped (3).png", 
  "imageonline-co-flipped (4).png", 
  "imageonline-co-flipped (5).png", 
  "imageonline-co-flipped (6).png", 
  "imageonline-co-flipped (7).png", 
  "imageonline-co-flipped (8).png", 
  "imageonline-co-flipped (9).png"); 

  a1I = loadImage("a1.png");
  a2I = loadImage("a2.png");
  a3I = loadImage("a3.png");
  a4I = loadImage("a4.png");
  a5I = loadImage("a5.png");
  a6I = loadImage("a6.png");
 
 playI = loadImage("play.jpg");

 countDown = loadSound("5 4 3 2 1.mp3");

 missionAccomplishedI = loadImage("missionAccomplished.jpg");

 missionFailedI = loadImage("missionFailed.jpg");

 robolandI = loadImage("RL.png");

 htPlayI = loadImage("htPlay2.png");

 htPlayI2 = loadImage("htPlay.png");

 backI = loadImage("Back.png");
}

 


function setup(){

 laserState = false;
 

    
    
    canvas = createCanvas(1366, 656);

    missionAccomplished = createSprite(-11656, 328)
    missionAccomplished.addImage("missionAccomplished", missionAccomplishedI);

    missionFailed = createSprite(11656, 328)
    missionFailed.addImage("missionFailed", missionFailedI);
    missionFailed.scale = 0.5;

    edge2 = createSprite(-100, 328, 1, 656);

    edge = createSprite(100, 0, 100, 1);

       
    shootLine = createSprite(900, 328, 1, 656);
    shootLine.state = true;
    
    enemyBounce1 = createSprite(0, 100, 5, 50);
    enemyBounce2 = createSprite(600, 100, 5, 50);

    enemyBall = createSprite(10, 100, 10, 10);
   

    enemyBounce3 = createSprite(0, -100, 5, 50);
    enemyBounce4 = createSprite(-600, -100, 5, 50);

    enemyBall2 = createSprite(-300, -100, 10, 10);
   

    chargeMove = createSprite(0, 500, 50, 50);
    
       
    wallMove = createSprite(0, 200, 10, 10);

    momMove = createSprite(0, 200, 10, 10);

    gameStart = createSprite(0, 0);

    sky = createSprite(683, 328, 1366, 656);
    sky.addImage("sky",skyImage);
    sky.scale = 1.54;

   

    
    animation = createSprite(width/2+2700, -2000);
   
    bLaser = createSprite(390, 76);
    bLaser.addImage("black laser", wLaserImage);
    bLaser.scale = 1.2;
    
    laserBar = createSprite(410, 76);
    laserBar.addImage("laserBar",laserBarImage);
    laserBar.scale = 0.7;
    laserBar.rotation = 180;

    laserIcon = createSprite(410, 76);
    laserIcon.addImage("laser", laserI);
    laserIcon.scale = 0.15;
    laserIcon.rotation = -90;
   
    pBar = createSprite(-105, 625);
    pBar.addImage("health", rhealthImage);
    pBar.scale = 0.6;

    progressBar = createSprite(143, 625);
    progressBar.addImage("health bar", healthBarImage);
    progressBar.scale = 0.5;

    robotIcon2 = createSprite(8, 610);
    robotIcon2.addImage("icon",robotIconImage);
    robotIcon2.scale = 0.3;

    rHealth = createSprite(250, 50);
    rHealth.addImage("health", rhealthImage);
    rHealth.scale = 1.2;

    healthBar = createSprite(301, 50);
    healthBar.addImage("health bar", healthBarImage);

    wb = createSprite(190, 76);
    wb.addImage("white bar", wbImage);
    wb.scale = 1.1;

    blueBatteryBar = createSprite(-20, 76);
    blueBatteryBar.addImage("blueBatteryBar", blueBatteryBarImage);
    blueBatteryBar.scale = 1.1;
    
    batteryBar = createSprite(170, 75);
    batteryBar.addImage("batteryBar",batteryBarImage);
    batteryBar.scale = 0.7;




 
    c = createSprite(30, 70);
    c.addImage("circle", cImage);
    c.scale = 0.5

    batteryIcon = createSprite(100, 76);
    batteryIcon.addImage("battery icon", batteryImage);
    batteryIcon.scale = 0.1;
    batteryIcon.rotation = -45;
  
    robotIcon = createSprite(30, 70);
    robotIcon.addImage("icon",robotIconImage);
    robotIcon.scale = 0.4;
     
    batteryCircle = createSprite(100, 450);
    batteryCircle.addImage("battery circle", batteryCircleImage);
    batteryCircle.scale = 0.05;
   
    

    spark = createSprite(125, 570);
    spark.addAnimation("spark", bulletA);
    spark.rotation = 90;
    spark.scale = 0.3;
    

    bullet = createSprite(160, 450);
    bullet.addAnimation("bullet", bulletA);
    bullet.scale = 0.175;



    robot = createSprite(100, 450);
    robot.addAnimation("r", r1);
    robot.addAnimation("blast", eBlast);
    robot.health = 100;

    mom = createSprite(400, -100, 50, 100);
    mom.addImage("mom", momI);
    mom.scale = 0.5;
    mom.setCollider("rectangle", -65, 10, 150, 280);


    
    dad = createSprite(700, -150, 50, 100);
    dad.addAnimation("dad", dadA);
    dad.scale = 0.6;
    dad.setCollider("rectangle", -20, -80, 200, 250);

    enemyBoss = createSprite(1500, 400);
    enemyBoss.scale = 1.5;
    enemyBoss.addAnimation("enemy", eb1);
    enemyBoss.addAnimation("eb", eb);
    enemyBoss.addAnimation("enemy 2", eb2);
    enemyBoss.addAnimation("enemy 3", eb3);

    enemyBoss.pause();


    finalWall2 = createSprite(1500, 328);
    finalWall2.addImage("wall", wallImage);
    finalWall2.setCollider("rectangle", -75, 0, 125, 1000);

    robot.scale = 0.5;

    

    a6 = createSprite(width/2-25, height/2);
    a6.addImage("a6", a6I);
    a6.scale = 0.85;
   
    a5 = createSprite(width/2-25, height/2);
    a5.addImage("a5", a5I);
    a5.scale = 0.65;

    a4 = createSprite(width/2-25, height/2);
    a4.addImage("a4", a4I);
    a4.scale = 0.65;

    a3 = createSprite(width/2-25, height/2);
    a3.addImage("a3", a3I);
    a3.scale = 0.65;

    a2 = createSprite(width/2-25, height/2);
    a2.addImage("a2", a2I);
    a2.scale = 0.65;

    a1 = createSprite(width/2-25, height/2);
    a1.addImage("a1", a1I);
    a1.scale = 0.65;

    roboland = createSprite(-2000, 800);
    roboland.addImage("roboland", robolandI);
 
    play = createSprite(-2000, 1100);
    play.addImage("play", playI);
    play.scale = 0.4;
   
    htPlay = createSprite(-2000, 1250);
    htPlay.addImage("how to play", htPlayI);
    htPlay.scale = 1;

    htPlay2 = createSprite(10000, 950);
    htPlay2.addImage("how to play2", htPlayI2);
    htPlay2.scale = 0.5;

    back = createSprite(10000, 1285);
    back.addImage("back", backI);
    back.scale = 0.5;
    back.setCollider("rectangle", 0, -20, 450, 100)

    ground = createSprite(652, 550, 1366, 5);
    ground.visible = false;
  
 
    

    eg1 = new Group();
    eg2 = new Group();
    eg3 = new Group();
    eg4 = new Group();


    blast1g = new Group();
    blast2g = new Group();
    blast3g = new Group();
    blast4g = new Group();
    

    bg1 = new Group();
    bg2 = new Group();
    bg3 = new Group();
    bg4 = new Group();

    hG1 = new Group();
    hG2 = new Group();
    hG3 = new Group();
    hG4 = new Group();

    eH1 = new Group();
    eH2 = new Group();
    eH3 = new Group();
    eH4 = new Group();

    wallG = new Group();
    wallG2 = new Group();

    laserG = new Group();
    laserG2 = new Group();

    shootBallG = new Group();
   
    batteryG = new Group();
        
    jetG = new Group();
    jetG2 = new Group();
  
    missileG = new Group();
    missileG2 = new Group();
     
    missileBlastG = new Group();
    missileBlastG2 = new Group();

    dadMissileG = new Group();
    dadMissileG2 = new Group();

    finalWallG = new Group();
  
   
  

    camera.y = 1000;
    camera.x = -2000;


}

function draw() {
    background("black");
       


    drawSprites();
 
   
  robot.bounceOff(edge);

 robot.velocityY = 0;
 bullet.visible = false;
 spark.visible = false;

bullet.y = robot.y+61;

batteryCircle.y = robot.y;

if(gameStart.x === 500)
{
  countDown.play();
}

if(animation.x < -6000)
{
 
  animation.x = 6000;
  sky.velocityX = -8;
  gameState = PLAY;
  frameCount = 0;
  enemyBall.velocityX = -4;
  enemyBall2.velocityX = -4;
  animation.destroy();
}


if(mouseIsOver(htPlay) && mouseWentDown("left"))
    {
      camera.x = 10000;
       

    }
    

       if(mouseIsOver(back) && mouseWentDown("left"))
       {
       camera.x = -2000;
       }
    

    if(mousePressedOver(play))
    {
        music.play();
        music.setLoop(true);
        camera.y = -2000;
        camera.x = -550;
        animation.velocityX = -14;
        gameStart.velocityX = 1;
        a1I.lifetime = 50;
        camera.x = 656;
        camera.y = 328;
        a1.lifetime = 85;
        a2.lifetime = 170;
        a3.lifetime = 225;
        a4.lifetime = 340;
        a5.lifetime = 425;
        a6.lifetime = 510;
    }
    
  

    if(sky.x<-40)
    {
        sky.x = sky.width/2;
    }

  
    
     if(laserScore>14)
     {
       laserState = true;
     }

  else{
     laserState = false;
   }
   if(laserScore2 === 15)
   {
     laserScore = 0;
     laserScore2 = 0;
   }

   if(gameState === PLAY || gameState === END)
   {
    textSize(19);
    fill("black");
    textFont("Broadway");
    text(robot.health, 105, 55);

if(keyWentDown("space") && laserState === true)
{
  laser = createSprite(135, 485);
  laserScore2 = laserScore2 +1;
  laser.y = robot.y-18;
  laser.addImage("laser", laserI);
  laser.rotation = 90;
  laser.velocityX = 50;
  laser.scale = 0.2;
  laser.lifetime = 40;
  laser.setCollider("rectangle", 0, -50, 50, 250);
  
  laserG.add(laser);

  laserS.play();

}


if(keyDown("s"))
{
   robot.velocityY = 10;
   
}

if(keyDown("w"))
{
    robot.velocityY = -10;
}


if(mouseDown("left") && camera.x === 656)
{
  if(frameCount%2===0)
    {
    bulletS.play();
    bullet.visible = true;

    }
    if(frameCount%4===0)
    {
    shootBall = createSprite(150, 450, 5, 5);
    shootBallG.add(shootBall);
    shootBall.velocityX = 100;
    shootBall.visible = false;
    shootBall.lifetime = 12;
    shootBall.y = robot.y+65;
    
}
}

   }
    
    if(gameState === PLAY && frameCount>0)
    {
      Batteries();

jets();

textSize(19);
fill("black");
textFont("Broadway");
text(batteryCount, 115, 82);
text("SCORE: "+ score, 100, 110);



      if(enemyBall.isTouching(enemyBounce1))
      {
        board1 = createSprite(1400, 400);
        board1.addImage("board", boardImage)
        board1.scale = 0.4;
        board1.lifetime = 300;
        bg1.add(board1);
        board1.setCollider("rectangle", 0,-20, 500, 125);
        bg1.state = 1;


        enemy1 = createSprite(1400, 200)
        enemy1.addAnimation("enemy animation", enemyAnimation);
        enemy1.scale = 0.5;
        enemy1.velocityX = -7;
        enemy1.lifetime = 300;
        enemy1.y = Math.round(random(150, 400))
        
        erHealth1 = createSprite(1400, 200, 122, 25);
        erHealth1.shapeColor = "red";
        eH1.add(erHealth1);
        erHealth1.lifetime = 300;

        health1 = createSprite(1400, 200);
        health1.addImage("healthBar", healthAImage);
        health1.scale = 0.275;
        hG1.add(health1);
        health1.lifetime = 300;

        blast1 = createSprite();
        blast1.x = enemy1.x;
        blast1.y = enemy1.y;
        blast1.velocityX = enemy1.velocityX;

        blast1.addAnimation("blast", eBlast);
        blast1.pause();
        blast1.visible = false;
        blast1.lifetime = 300;
       
        blast1g.add(blast1);
        


        eg1.add(enemy1);
        eg1.health = 30;
        
        

        board1.velocityX = enemy1.velocityX;

        board1.x = enemy1.x;
        board1.y = enemy1.y+100;

        
        health1.velocityX = board1.velocityX;
        health1.x = board1.x;
        health1.y = board1.y+50;
        
        erHealth1.velocityX = health1.velocityX;
        erHealth1.x = health1.x;
        erHealth1.y = health1.y;
      }



    if(enemyBall.isTouching(enemyBounce2))
    {

      board2 = createSprite(1400, 400);
      board2.addImage("board", boardImage)
      board2.scale = 0.6;
      board2.lifetime = 300;
      bg2.add(board2);
      board2.setCollider("rectangle", 0,-20, 500, 125);
      bg2.state = 1;

      enemy2 = createSprite(1400, 200)
      enemy2.addAnimation("enemy animation", enemyAnimation);
      enemy2.scale = 0.7;
      enemy2.velocityX = -7;
      enemy2.y = Math.round(random(150, 400))

      enemy2.lifetime = 300;

       erHealth2 = createSprite(1400, 200, 122, 25);
       erHealth2.shapeColor = "red";
       eH2.add(erHealth2);
       erHealth2.lifetime = 300;

        health2 = createSprite(1400, 200);
        health2.addImage("healthBar", healthAImage);
        health2.scale = 0.275;
        hG2.add(health2);
        health2.lifetime = 300;
        

        blast2 = createSprite();
        blast2.x = enemy2.x;
        blast2.y = enemy2.y;
        blast2.velocityX = enemy2.velocityX;
        blast2.scale = 1.2;

        blast2.addAnimation("blast", eBlast);
        blast2.pause();
        blast2.visible = false;
        blast2.lifetime = 300;

        blast2g.add(blast2);
        


        eg2.add(enemy2);
        eg2.health = 45;
        

      

      

      board2.velocityX = enemy2.velocityX;

      board2.x = enemy2.x;
      board2.y = enemy2.y+150;

      health2.velocityX = board2.velocityX;
      health2.x = board2.x;
      health2.y = board2.y+50;

      
      erHealth2.velocityX = health2.velocityX;
      erHealth2.x = health2.x;
      erHealth2.y = health2.y;
     }
      
    







      if(enemyBall2.isTouching(enemyBounce3))
      {
        board3 = createSprite(1400, 400);
        board3.addImage("board", boardImage)
        board3.scale = 0.4;
        board3.lifetime = 300;

        bg3.add(board3);
        board3.setCollider("rectangle", 0,-20, 500, 125);
        bg3.state = 1;

        enemy3 = createSprite(1400, 200)
        enemy3.addAnimation("enemy animation", enemyAnimation);
        enemy3.scale = 0.5;
        enemy3.velocityX = -7;
        enemy3.lifetime = 300;
        enemy3.y = Math.round(random(150, 400))
 
        erHealth3 = createSprite(1400, 200, 122, 25);
        erHealth3.shapeColor = "red";
        eH3.add(erHealth3);
        erHealth3.lifetime = 300;

        

        health3 = createSprite(1400, 200);
        health3.addImage("healthBar", healthAImage);
        health3.scale = 0.275;
        hG3.add(health3);
        health3.lifetime = 300;

        blast3 = createSprite();
        blast3.x = enemy3.x;
        blast3.y = enemy3.y;
        blast3.velocityX = enemy3.velocityX;

        blast3.addAnimation("blast", eBlast);
        blast3.pause();
        blast3.visible = false;
        blast3.lifetime = 300;

        blast3g.add(blast3);
        


        eg3.add(enemy3);
        eg3.health = 30;
        

        board3.velocityX = enemy3.velocityX;

        board3.x = enemy3.x;
        board3.y = enemy3.y+100;

        health3.velocityX = board3.velocityX;
        health3.x = board3.x;
        health3.y = board3.y+50;

        
       erHealth3.velocityX = health3.velocityX;
       erHealth3.x = health3.x;
       erHealth3.y = health3.y;
      }
      


    if(enemyBall2.isTouching(enemyBounce4))
    {

       board4 = createSprite(1400, 400);
       board4.addImage("board", boardImage)
       board4.scale = 0.4;
       board4.lifetime = 300;
       
       bg4.add(board4);
       board4.setCollider("rectangle", 0,-20, 500, 125);
       bg4.state = 1;

       enemy4 = createSprite(1400, 200)
       enemy4.addAnimation("enemy animation", enemyAnimation);
       enemy4.scale = 0.5;
       enemy4.velocityX = -7;
       enemy4.y = Math.round(random(150, 400))
     
       enemy4.lifetime = 300;

       

       erHealth4 = createSprite(1400, 200, 122, 25);
       erHealth4.shapeColor = "red";
       eH4.add(erHealth4);
       erHealth4.lifetime = 300;

       health4 = createSprite(1400, 200);
       health4.addImage("healthBar", healthAImage);
       health4.scale = 0.275;
       hG4.add(health4);
       health4.lifetime = 300;

        blast4 = createSprite();
        blast4.x = enemy4.x;
        blast4.y = enemy4.y;
        blast4.velocityX = enemy4.velocityX;

        blast4.addAnimation("blast", eBlast);
        blast4.pause();
        blast4.visible = false;
        blast4.lifetime = 300;

        blast4g.add(blast4);
        


        eg4.add(enemy4);
        eg4.health = 30;
        

       board4.velocityX = enemy4.velocityX;

       board4.x = enemy4.x;
       board4.y = enemy4.y+100;

       health4.velocityX = board4.velocityX;
       health4.x = board4.x;
       health4.y = board4.y+50;
       
      
       erHealth4.velocityX = health4.velocityX;
       erHealth4.x = health4.x;
       erHealth4.y = health4.y;
      }



    }
     
      robot.setCollider("circle", 0 ,0 ,150)
      
     
            enemyBall.bounceOff(enemyBounce1);
        enemyBall.bounceOff(enemyBounce2);

        enemyBall2.bounceOff(enemyBounce3);
        enemyBall2.bounceOff(enemyBounce4);






if(eg1.isTouching(shootBallG) || bg1.isTouching(shootBallG))
{
  eg1.health = eg1.health-1;
  erHealth1.width = erHealth1.width-4;
  erHealth1.x = erHealth1.x-2;
}

if(eg2.isTouching(shootBallG) || bg2.isTouching(shootBallG))
{
  eg2.health = eg2.health-1;
  erHealth2.width = erHealth2.width-2.8;
  erHealth2.x = erHealth2.x-1.4;
}

if(eg3.isTouching(shootBallG) || bg3.isTouching(shootBallG))
{
  eg3.health = eg3.health-1;
  erHealth3.width = erHealth3.width-4;
  erHealth3.x = erHealth3.x-2;
}

if(eg4.isTouching(shootBallG) || bg4.isTouching(shootBallG))
{
  eg4.health = eg4.health-1;
  erHealth4.width = erHealth4.width-4;
  erHealth4.x = erHealth4.x-2;
}



if(eg1.isTouching(laserG) || bg1.isTouching(laserG) && bg1.state ===1)
{
  bg1.state = 0;
  hG1.destroyEach();
  eH1.destroyEach();
  eg1.health = -1;
  blastSound.play();
  blast1.visible = true;
  blast1.play();
  blast1.velocityX = 0;
  blast1.lifetime = 40;
  enemy1.visible = false;
  eg1.destroyEach();
  board1.velocityY = 10;
  board1.rotation = -45;
  pBar.x = pBar.x+2.23;
  score = score+1;
  
}
    
if(eg2.isTouching(laserG) || bg2.isTouching(laserG) && bg2.state ===1)
{
  bg2.state = 0;
  hG2.destroyEach();
  eH2.destroyEach();
  eg2.health = -1;
  blastSound.play();
  blast2.visible = true;
  blast2.play();
  blast2.velocityX = 0;
  blast2.lifetime = 40;
  enemy2.visible = false;
  eg2.destroyEach();
  board2.velocityY = 10;
  board2.rotation = -45;
  pBar.x = pBar.x+2.23;
  score = score+1;
  
}
    
if(eg3.isTouching(laserG) || bg3.isTouching(laserG) && bg3.state ===1)
{
  bg3.state = 0;
  hG3.destroyEach();
  eH3.destroyEach();
  eg3.health = -1;
  blastSound.play();
  blast3.visible = true;
  blast3.play();
  blast3.velocityX = 0;
  blast3.lifetime = 40;
  enemy3.visible = false;
  eg3.destroyEach();
  board3.velocityY = 10;
  board3.rotation = -45;
  pBar.x = pBar.x+2.23;
  score = score+1;
  
}
    
if(eg4.isTouching(laserG) || bg4.isTouching(laserG) && bg4.state ===1)
{
  bg4.state = 0;
  hG4.destroyEach();
  eH4.destroyEach();
  eg4.health = -1;
  blastSound.play();
  blast4.visible = true;
  blast4.velocityX = 0;
  blast4.play();
  blast4.lifetime = 40;
  enemy4.visible = false;
  eg4.destroyEach();
  board4.velocityY = 10;
  board4.rotation = -45;
  pBar.x = pBar.x+2.23;
  score = score+1;
}
    

        shootBallG.collide(eg1);
        shootBallG.collide(eg2);
        shootBallG.collide(eg3);
        shootBallG.collide(eg4);

        shootBallG.collide(bg1);
        shootBallG.collide(bg2);
        shootBallG.collide(bg3);
        shootBallG.collide(bg4);

       
        if(eg1.health === 0)
        {
         hG1.destroyEach();
         eH1.destroyEach();
         eg1.health = -1;
         blastSound.play();
         blast1.visible = true;
         blast1.velocityX = 0;
         blast1.play();
         blast1.lifetime = 40;
         enemy1.visible = false;
         eg1.destroyEach();
         board1.velocityY = 10;
         board1.rotation = -45;
         laserScore = laserScore+1;
         pBar.x = pBar.x+2.23;
         score = score+1;

         
        }

        if(eg2.health === 0)
        {
         hG2.destroyEach();
         eH2.destroyEach();
         eg2.health = -1;
         blastSound.play();
         blast2.visible = true;
         blast2.velocityX = 0;
         blast2.play();
         blast2.lifetime = 40;
         enemy2.visible = false;
         eg2.destroyEach();
         board2.velocityY = 10;
         board2.rotation = -45;
         laserScore = laserScore+1;
         pBar.x = pBar.x+2.23;
         score = score+1;
        }

        if(eg3.health === 0)
        {
         hG3.destroyEach();
         eH3.destroyEach();
         eg3.health = -1;
         blastSound.play();
         blast3.visible = true;
         blast3.velocityX = 0;
         blast3.play();
         blast3.lifetime = 40;
         enemy3.visible = false;
         eg3.destroyEach();
         board3.velocityY = 10;
         board3.rotation = -45;
         laserScore = laserScore+1;
         pBar.x = pBar.x+2.23;
         score = score+1;
        }

        
        if(eg4.health === 0)
        {
         hG4.destroyEach();
         eH4.destroyEach();
         eg4.health = -1;
         blastSound.play();
         blast4.visible = true;
         blast4.velocityX = 0;
         blast4.play();
         blast4.lifetime = 40;
         enemy4.visible = false;
         eg4.destroyEach();
         board4.velocityY = 10;
         board4.rotation = -45;
         laserScore = laserScore+1;
         pBar.x = pBar.x+2.23;
         score = score+1;
        }

       
        if(score === 100)
        {
          pBar.x = -1000;
          score = -1;
          
          pBar.destroy();
          progressBar.destroy();
          robotIcon2.destroy();

          eg1.health = 0;
          eg2.health = 0;
          eg3.health = 0;
          eg4.health = 0;

          enemyBoss.play();
          enemyBoss.velocityX = -3;

          gameState = END;

          chargeS.play();
          chargeMove.velocityX = 1;
          chargeMove.x = 1;
          
          blueBatteryBar.velocityX = 0.81;

      
        }
        
        if(laserState === true)
        {
          laserIcon.visible = true;
        }
        if(laserState === false)
        {
          laserIcon.visible = false;
        }

   
        
        enemyBoss.setCollider("rectangle", 15, 30, 130 ,130)
      

      if(robot.isTouching(ground))
      {
        sparkS.play();
        spark.visible = true;
      }

      robot.collide(ground);

      if(batteryG.isTouching(robot))
      {
       
       batteryCount = batteryCount+1;
       batteryG.destroyEach();
      }
      

     
      chargeMove.velocityX = 1;

if(keyWentDown("c") && batteryCount>0 && chargeMove.x === 0 && rHealth.x<250)
{
  
  chargeS.play();
  chargeMove.velocityX = 1;
  chargeMove.x = 1;

  batteryCount = batteryCount-1;
  
  blueBatteryBar.velocityX = 0.81;

  
}

if(chargeMove.x>0)
{
  batteryCircle.scale = batteryCircle.scale+0.003;
  batteryCircle.rotationSpeed = batteryCircle.rotationSpeed+0.12;
}

if(chargeMove.x === 0)
{
  chargeMove.velocityX = 0;
}


if(blueBatteryBar.x>188)
{
  blueBatteryBar.x = -20;
  blueBatteryBar.velocityX = 0;
}

if(chargeMove.x>257 && gameState === PLAY)
{
  rHealth.x = rHealth.x+215;
  robot.health = robot.health+50;
  chargeMove.x = 0;
  chargeMove.velocityX = 0;
  batteryCircle.scale = 0.1;
}

if(rHealth.x>250)
{
  rHealth.x = 250;

}




if(eg1.isTouching(robot) || bg1.isTouching(robot) && bg1.state === 1)
{
  bg1.state = 0;
  explode.play();
  blast1.visible = true;
  blast1.play();
  blast1.velocityX = 0;
  blast1.lifetime = 40;
  enemy1.visible = false;
  eg1.destroyEach();
  hG1.destroyEach();
  eH1.destroyEach();
  board1.velocityY = 10;
  board1.rotation = -45;
  rHealth.x = rHealth.x-64.5;
  robot.health = robot.health-15;
 
}

if(eg2.isTouching(robot) || bg2.isTouching(robot) && bg2.state === 1)
{
  bg2.state = 0;
  explode.play();
  blast2.visible = true;
  blast2.play();
  blast2.lifetime = 40;
  blast2.velocityX = 0;
  enemy2.visible = false;
  eg2.destroyEach();
  hG2.destroyEach();
  eH2.destroyEach();
  board2.velocityY = 10;
  board2.rotation = -45;
  rHealth.x = rHealth.x-86;
  robot.health = robot.health-20;
  
}

if(eg3.isTouching(robot) || bg3.isTouching(robot) && bg3.state === 1)
{
  bg3.state = 0;
  explode.play();
  blast3.visible = true;
  blast3.play();
  blast3.velocityX = 0;
  blast3.lifetime = 40;
  enemy3.visible = false;
  eg3.destroyEach();
  hG3.destroyEach();
  eH3.destroyEach();
  board3.velocityY = 10;
  board3.rotation = -45;
  rHealth.x = rHealth.x-64.5;
  robot.health = robot.health-15;
}

if(eg4.isTouching(robot) || bg4.isTouching(robot) && bg4.state === 1)
{
  bg4.state = 0;
  explode.play();
  blast4.visible = true;
  blast4.play();
  blast4.velocityX = 0;
  blast4.lifetime = 40;
  enemy4.visible = false;
  eg4.destroyEach();
  hG4.destroyEach();
  eH4.destroyEach();
  board4.velocityY = 10;
  board4.rotation = -45;
  rHealth.x = rHealth.x-64.5;
  robot.health = robot.health-15;
}


if(missileG.isTouching(robot))
{
  missileBlast = createSprite(1400, 50);
  missileBlast.addAnimation("blast", eBlast);
  missileBlast.x = robot.x;
  missileBlast.y = robot.y;
  missileBlast.lifetime = 40;
  rHealth.x = rHealth.x-86;
  robot.health = robot.health-20;
  missileG.destroyEach();
  explode.play();

  
}


if(rHealth.x < -180)
{
 
 rHealth.x = -180;

}

if(rHealth.x === -180)
{

  rHealth.x = -171;
  rHealth.destroy();
  robot.lifetime = 40;
  gameState = START;
  robot.scale = 1.2;
  robot.changeAnimation("blast", eBlast)
  blastSound.play();
  batteryCircle.destroy();
  music.stop();
  camera.x = 11656;
 
  
  
}

if(jetG.isTouching(shootLine))
{
  missile.velocityX = -25;
  missile.velocityY = Math.round(random(1, 10));
}

if(robot.health<0)

{
  robot.health = 0;
}

if(robot.health>100)
{
 robot.health = 100;
}

if(gameState === END)
{
  sky.velocityX = 0;

score = 0;
batteryCount = 0;


if(enemyBoss.isTouching(shootLine) && shootLine.state === true)
{
  enemyBoss.velocityX = 0;
  enemyBoss.changeAnimation("eb", eb);
  shootLine.state = false;
 
}

if(chargeMove.x>257)
{
 
enemyBoss.changeAnimation("enemy 2", eb2);

enemyBoss.y = 350;

rHealth.x = rHealth.x+430;
robot.health = robot.health+100;
chargeMove.x = -10;
chargeMove.velocityX = 0;
batteryCircle.scale = 0.1;

} 

if(chargeMove.x === -10)
{
  
  wallMove.velocityX = 1;
  wallMove.velocityY = 0;
  chargeMove.velocityX = 0;
  enemyBoss.changeAnimation("enemy 2", eb2);
  wallMove.y = 200;
  siren.stop();
  enemyBoss.y = 350; 

}
if(wallMove.x === 40 || wallMove.x === 140 || wallMove.x === 240 || wallMove.x === 330)
{

  hit.play();

  wall = createSprite(1400, 328, 100, 600);
  wall.addImage("wall", wallImage);
  wall.y = Math.round(random(-200, 50));
  wall.scale = 0.6;
  wallG.add(wall);

  wall2 = createSprite(1400, 328, 100, 600);
  wall2.addImage("wall", wallImage);
  wall2.scale = 0.6;
  wallG2.add(wall2);

  wall.lifetime = 200;
  wall2.lifetime = 200;
  

  wall.setCollider("rectangle", -60, 0, 150, 950);
  wall2.setCollider("rectangle", -60, 0, 150, 950);


  wall2.x = wall.x;
  wall2.y = wall.y+750;

  
  
  wall.velocityX = -30;
  wall2.velocityX = -30;

}


if((wallMove.x === 430))
{

  hit.play();

  wall = createSprite(1400, 328, 100, 600);
  wall.addImage("wall", wallImage);
  wall.y = Math.round(random(-200, 50));
  wall.scale = 0.6;
  wallG.add(wall);

  wall2 = createSprite(1400, 328, 100, 600);
  wall2.addImage("wall", wallImage);
  wall2.scale = 0.6;
  wallG2.add(wall2);

  wall.lifetime = 200;
  wall2.lifetime = 200;
  

  wall.setCollider("rectangle", -60, 0, 150, 950);
  wall2.setCollider("rectangle", -60, 0, 150, 950);


  wall2.x = wall.x;
  wall2.y = wall.y+750;

  
  
  wall.velocityX = -30;
  wall2.velocityX = -30;

  


}

if(wallG.isTouching(edge2) && wallMove.x>400)
{
  chargeMove.x = -100;
  wallMove.x = 0;
  chargeMove.velocityX = 0;
  siren.play();
  siren.setLoop(true);
}

if(wallG.isTouching(robot) && wallMove.x>400)
{
  chargeMove.x = -100;
  wallMove.x = 0;
  chargeMove.velocityX = 0;
  siren.play();
  siren.setLoop(true);
}

if(wallG2.isTouching(edge2) && wallMove.x>400)
{
  chargeMove.x = -100;
  wallMove.x = 0;
  chargeMove.velocityX = 0;
  siren.play();
  siren.setLoop(true);
}

if(wallG2.isTouching(robot) && wallMove.x>400)
{
  chargeMove.x = -100;
  wallMove.x = 0;
  chargeMove.velocityX = 0;
  siren.play();
  siren.setLoop(true);
}



if(chargeMove.x === -100)
{
  wallMove.x = 0;
  wallMove.velocityX = 0;
  chargeMove.velocityX = 0;
  enemyBoss.y = 400;

  enemyBoss.changeAnimation("enemy 3", eb3);
  jets2();

  wallMove.velocityY = 1;
}

if(wallMove.y === 650)
{
  chargeMove.x = -1000;
  wallMove.velocityX = -1;
  wallMove.velocityY = 0;
  chargeMove.velocityX = 0;
  wall.velocityX = 0;
  
  siren.stop();
  

  enemyBoss.changeAnimation("enemy", eb);

  if(frameCount%50===0){
        laser2 = createSprite(1400, 485);
        laser2.y = Math.round(random(50, 500))
        laser2.addImage("laser 2", laserI2);
        laser2.rotation = -90;
        laser2.velocityX = -50;
        laser2.scale = 0.2;
        laser2.lifetime = 40;
        laser2.setCollider("rectangle", 0, -50, 50, 250);
        
        laserG2.add(laser2);

        laserS.play();

}
}

if(wallMove.x === -500 && chargeMove.x === -1000)
{
  chargeMove.x = -10;
  wallMove.x = 0;
  endScore = endScore+1;
}

if(wallG.isTouching(robot) || wallG2.isTouching(robot))
{
  rHealth.x = rHealth.x-43;
  robot.health = robot.health-10;
  explode.play();
  wallG.destroyEach();
  wallG2.destroyEach();
  wallScore = wallScore-1;
}

if(wallG.isTouching(edge2))
{

  wallScore = wallScore-1;
  wallG.destroyEach();
  wallG2.destroyEach();

}


if(jetG2.isTouching(shootLine))
{
  missile2.velocityX = -35;
  missile2.velocityY = Math.round(random(0, 15));
}

if(missileG2.isTouching(robot))
{
  missileBlast2 = createSprite(1400, 50);
  missileBlast2.addAnimation("blast", eBlast);
  missileBlast2.x = robot.x;
  missileBlast2.y = robot.y;
  missileBlast2.lifetime = 40;
  rHealth.x = rHealth.x-46;
  robot.health = robot.health-10;
  missileG2.destroyEach();
  explode.play();

  
}

if(laserG2.isTouching(robot))
{
  rHealth.x = rHealth.x-43;
  robot.health = robot.health-10;
  laserG2.destroyEach();
  explode.play();
}



if(endScore === 2)
{
 music.stop();
 music.play();
 enemyBoss.changeAnimation("enemy", eb);
 chargeMove.x = -5000;
 endScore = 3;
 wallMove.x = 0;
 wallMove.y = 0;
}

if(endScore === 3)
{
  endScore = 4;
 enemyBoss.changeAnimation("enemy 2", eb2);
 enemyBoss.y = 350;
 wallMove.x = -60;
 wallMove.velocityX = 1;
 wallMove.velocityY = 0;
 wallMove.y = 0;
 
}


if(wallMove.x === 0 && endScore === 4)
{

  hit.play();
  wallMove.velocityX = 0;
  endScore = 5;

finalWall = createSprite(1500, 328);
finalWall.addImage("wall", wallImage);
finalWall.setCollider("rectangle", -75, 0, 125, 1000);
finalWall.velocityX = -30;
finalWallG.add(finalWall);

}

if(endScore === 5 && finalWallG.isTouching(robot))

{
 robot.health = 1;
 rHealth.x = -177.5;

 
finalBlast = createSprite(100, 50);
finalBlast.addAnimation("blast", eBlast);
enemyBoss.changeAnimation("eb", eb);
enemyBoss.y = 400;
finalBlast.x = robot.x;
finalBlast.y = robot.y;
finalBlast.lifetime = 40;
explode.play();
lowHealth.play();
lowHealth.setLoop(true);
finalWallG.destroyEach();
endScore = 6;

wallMove.velocityY = -1;
wallMove.velocityX = 0;

}



if(endScore === 6 && wallMove.y === -100)
{
  enemyBoss.changeAnimation("enemy 2", eb2);
  enemyBoss.y = 350;
  wallMove.x = -60;
  wallMove.velocityX = 1;
  wallMove.velocityY = 0;
  endScore = 7;
}

if(wallMove.x === 0 && endScore === 7)
{
  wallMove.velocityX = 0;
  wallMove.x = -1;
  finalWall2.velocityX = -2.5;
  hit.play();
}

if(finalWall2.x < 1400)
{
 enemyBoss.changeAnimation("eb", eb);
 enemyBoss.y = 400;
}

if(finalWall2.x<900 && finalWall2.x>600 && endScore === 7)
{
  endScore = 8;
  lowHealth.stop();
}

if(endScore === 8)
{

chargeMove.velocityX = 0;


  if(frameCount%20===0){

 dadMissile = createSprite(500, -50);
 dadMissile.addImage("missile", dadMissileImage);
 dadMissile.velocityY = 30;
 dadMissile.velocityX = 30;
 dadMissile.scale = 0.5;
 dadMissile.rotation = 135;
 dadMissileG.add(dadMissile);
 

 
}


}



if(finalWall2.isTouching(mom))
{
  momMove.velocityY = 1;
  mom.velocityY = 20;
  finalWall2.velocityX = 0;
  endScore = 9;

  dad.velocityY = 20;
}


 

 if(mom.y>328)
 {
   mom.velocityY = 0;
   
 }

 if(dad.y>400)
 {
   
   dad.velocityY = 0;
 }

if(momMove.y === 275)
{
  finalWall2.velocityX = 0;
  mom.velocityX = -10;
 

  
}

if(mom.x === -100)
{
  mom.velocityX = 40;
}


if(finalWall2.x>2000)
{
  finalWall2.x = 2000;
  finalWall2.velocityX = 0;
  finalWall2.velocityY = 0;
  finalWall2.destroy();



  dadMissile2 = createSprite(700, 400);
  dadMissile2.addImage("missile", dadMissileImage);
  dadMissile2.velocityX = 5;
  dadMissile2.scale = 0.5;
  dadMissile2.rotation = 90;
  dadMissileG2.add(dadMissile2);

  
}


if(mom.velocityX === 40 && mom.isTouching(finalWall2))
{
 
  finalWall2.bounce(mom);
  finalWall2.velocityY = 40;

}

if(finalWall2.y>328)
{
 finalWall2.rotation = 45;
}

if(dadMissileG2.isTouching(enemyBoss))
{
  enemyBossBlast2 = createSprite(1000,400);
  enemyBossBlast2.addAnimation("blast", eBlast);
  enemyBossBlast2.lifetime = 40;
  enemyBoss.destroy();
  enemyBossBlast.scale = 2;
  blastSound.play();
  enemyBossBlast2.x = enemyBoss.x;
  enemyBossBlast2.y = enemyBoss.y;
  dadMissileG2.destroyEach();
  gameState = ACCOMPLISHED;

}

if(gameState === ACCOMPLISHED)
{
  camera.x = -11656;
}

if(gameStart === FAILED)
{
  camera.x = 11656;
}

if(dadMissileG.isTouching(enemyBoss))
{
  enemyBossBlast = createSprite(1000,400);
  enemyBossBlast.addAnimation("blast", eBlast);
  enemyBossBlast.lifetime = 40;
  blastSound.play();
  enemyBossBlast.x = enemyBoss.x;
  enemyBossBlast.y = enemyBoss.y;
  dadMissileG.destroyEach();
  momMove.velocityX = -1;
}
if(momMove.x === -100)
{
  momMove.velocityX = 0;
  
}

}







}

function Batteries()
{
  if(frameCount%1500 === 0)
  {
    battery = createSprite(1400, 683);
    battery.addImage("battery", batteryImage)
    battery.y = Math.round(random(100, 400));
    battery.scale = 0.15;
    battery.velocityX = -8;
    battery.rotation = -45;
    battery.lifetime = 200;
    batteryG.add(battery);

  }
}

  function jets()
  {
    if(frameCount%500 === 0)
    {
      jet = createSprite(1400, 50);
      jet.addImage("jet", jetImage);
      jet.scale = 0.3;
      jet.velocityX = -10;
      jetG.add(jet);
      jet.lifetime = 200;

      missile = createSprite(1400, 50);
      missile.addImage("missile", missileImage)
      missile.rotation = -100;
      missile.scale = 0.3;
      missile.x = jet.x;
      missile.y = jet.y;
      missile.velocityX = jet.velocityX;
      missileG.add(missile);
      missile.lifetime = 100;

    }

    
 
  }
  
  function jets2()
  {
    if(frameCount%50 === 0)
    {
      jet2 = createSprite(1400, 50);
      jet2.addImage("jet", jetImage);
      jet2.scale = 0.3;
      jet2.velocityX = -10;
      jetG2.add(jet2);
      jet2.lifetime = 300;

      missile2 = createSprite(1400, 50);
      missile2.addImage("missile", missileImage)
      missile2.rotation = -100;
      missile2.scale = 0.3;
      missile2.x = jet2.x;
      missile2.y = jet2.y;
      missile2.velocityX = jet2.velocityX;
      missileG2.add(missile2);
      missile2.lifetime = 100;

    }
  }
