//Create variables here
var dog , happyDog , database , foods , foodstock , happyDogImage,dogImage;

function preload()
{
  //load images here
  happyDogImage = loadImage("happydog.png");
  dogImage = loadImage("Dog.png")
 

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogImage);
  happyDog = addImage("happyDogImage");
  foodstock=database.ref('foods');
  foodstock.on("value",readStock);
}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)) {
    writeStock(foods);
    dog.addImage(happyDogImage);
  }
  drawSprites();
}
  }

  function readStock (data) {
    foodS = data.val();
  }

  function writeStock (x) {
    if(x<=0) {
      x=0;
  }else{
    x=x-1;
  }
    
    database.ref('/').update({
      food:x
    })
  }