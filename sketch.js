var spaceship,backgroundImg,background10;

function preload(){
 backgroundImg = loadImage("images/background.png");
}

function setup(){
 createCanvas(windowWidth,windowHeight);
 
 background10 = createSprite(width,height);
 background10.addImage("images/background.png",backgroundImg);
 background10.scale = 5;

 background10.velocityY = 5;

 spaceship = createSprite(width/2,height-100,30,30);

 edges = createEdgeSprites();
}

function draw(){
 background(0);

 if(background10.y>height){
	background10.y = height/2;
}

 if(keyDown("UP_ARROW")){
	 spaceship.y -= 10;
 }

 if(keyDown("DOWN_ARROW")){
	 spaceship.y += 10;
 }

 if(keyDown("LEFT_ARROW")){
	 spaceship.x -= 10;
 }

 if(keyDown("RIGHT_ARROW")){
	 spaceship.x += 10;
 }

 spaceship.bounceOff(edges);

 drawSprites();
}

function spawnStars(){
	for(var i=0;i<100;i++){

	}
}
