var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var height=100
var width=100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
green_x=5
green_y=225
//Set initial position for a car image.

function add() {
	background_imageTag=new Image();
background_imageTag.onload=uploadBackground;
background_imageTag.src=background_image;

greencar_imageTag=new Image();
greencar_imageTag.onload=uploadgreencar;
greencar_imageTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag,green_x,green_y,width,height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function Up(){
    if(green_y >=0){
        green_y=green_y-10
        uploadBackground()
		uploadgreencar()
    }
}
function Down(){
    if(green_y <=500){
        green_y=green_y+10
        uploadBackground()
        uploadgreencar()
    }
}
function Left(){
    if(green_x >=0){
        green_x=green_x-10
        uploadBackground()
		uploadgreencar()
    }
}
function Right(){
    if(green_x <=700){
        green_x=green_x+10
        uploadBackground()
     uploadgreencar()
    }
}