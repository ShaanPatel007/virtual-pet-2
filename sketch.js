var database , food , dog;
//Create variables here


function preload()
{
  //load images here
  dog1 = loadImage("dogImg.png");
  dog2 = loadImage("dogIMGT1");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20);
  dog.image(dog1,dog.x,dog.y,50,50);

  database = firebase.database();

  food = database.ref("needs");

}


function draw() {  
  background(0, 255, 255);

  if(keyCode === 32)
  {
    food = food - 1
    dog.image(dog2,dog.x,dog.y,50,50);
  }

  drawSprites();
  //add styles here

}

function writePosition(x,y){
  database.ref('needs').set({
    'food': food
  })
}

function readPosition(data){
  food1 = data.val();
  console.log(food1);
  food = food1;
}


