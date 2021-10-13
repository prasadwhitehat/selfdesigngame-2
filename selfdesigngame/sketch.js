var bg;
var bgimage;
var gun,gunimage;
var bottle1,bottle2,bottle3,bottle4;
var bottle1img,bottle2img,bottle3img,bottle4img
var bottle;


function preload()
{
 bgimage=loadAnimation("images/bg2.gif");
 gunimage=loadAnimation("images/gun1.png","images/gun2.png","images/gun3.png");
bottle1img=loadImage("images/bottle1.png");
bottle2img=loadImage("images/bottle2.png");
bottle3img=loadImage("images/bottle3.png");
bottle4img=loadImage("images/bottle4.png");


}


function setup()
{
    createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    bg.addAnimation("bgimage1",bgimage);
    gun=createSprite(displayWidth/2,displayHeight/2+145);
    gun.addAnimation("gun",gunimage);
    gun.scale=0.5;
    
}


function draw()
{
    createbottle();
   drawSprites();
    

}


function createbottle()
{
    if(frameCount%60===0)
    {
        bottle=createSprite(20,200,30,30)
        bottle.x=random(500,900)
        bottle.velocityY=2
        bottle.scale=0.2
        var rand=Math.round(random(1,4))
        if(rand===1)
        {
            bottle.addImage(bottle1img)

        }

        if(rand===2)
        {
            bottle.addImage(bottle2img)

        }

        if(rand===3)
        {
            bottle.addImage(bottle3img)

        }

        if(rand===4)
        {
            bottle.addImage(bottle4img)

        }

        bottle.lifetime=150


    }
    
    
   



}