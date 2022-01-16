var girl,room,vase,cooker,apple,painting,key,button;
var appleimg,roomimg,cookerimg,girlimg,vaseimg,paintingimg,keyimg,buttonimg;
var score=0;

function preload(){
girlimg=loadImage("girl.png");
roomimg=loadImage("room.jpg");
appleimg=loadImage("apple.png");
vaseimg=loadImage("vase.png");
paintingimg=loadImage("painting.png");
cookerimg=loadImage("cooker.png");
keyimg=loadImage("key.png");
buttonimg=loadImage("button.png");

}
function setup(){
createCanvas(windowWidth,windowHeight)
girl=createSprite(1767,625,100,100)
girl.addImage(girlimg)
girl.scale=0.5

vase=createSprite(1222,545,100,100)
vase.addImage(vaseimg)
vase.scale=0.7

apple=createSprite(847,713,100,100)
apple.addImage(appleimg)
apple.scale=0.2

painting=createSprite(111,351,100,100)
painting.addImage(paintingimg)
painting.scale=0.3

key=createSprite(497,490,100,100)
key.addImage(keyimg)
key.scale=0.1

cooker=createSprite(477,490,100,100)
cooker.addImage(cookerimg)
cooker.scale=0.3

button=createSprite(36,871,100,100)
button.addImage(buttonimg)
button.scale=0.3


}
function draw(){
background(roomimg);


if(mousePressedOver(apple)){
apple.x-=50
}
if(mousePressedOver(girl)){
   girl.x-=50
    }
    if(mousePressedOver(cooker)){
        cooker.x-=50
        }

        if(mousePressedOver(painting)){
           painting.x-=50
            }

            if(mousePressedOver(vase)){
                vase.x-=50
                }
  if(mousePressedOver(key)){
  key.destroy()
  score+=30
}   
drawSprites()
textSize(30)
text(mouseX+","+mouseY,mouseX,mouseY)
fill("white")  
text("score: "+score,846,75)     
   
if(mousePressedOver(button)){
 
    text("Items to find in this room",895,412)
    text("1-key")
    delay(10)
    
}
}
