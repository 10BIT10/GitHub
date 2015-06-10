$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } 

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	//SCREEN
	var screen = 0;
	
	//IMAGES
	var title = new Image();
	var start = new Image();
	var bgi = new Image();
	var buttonyn = new Image(); 

	//BEGIN BUTTON
	var s1X = 350;
	var s1Y = 300;
	var s1W = 200;
	var s1H = 100;
	
	//YES BUTTON
	var y1x = 800;
	var y1y = 500;
	var y1w = 100;
	var y1h = 75;
	
	
	//NO BUTTON
	var n1x = 700;
	var n1y = 500;
	var n1w = 100;
	var n1h = 75;
	
	//MONSTER SHAPE 
	var M1w, M2w, M3w 
	var M1h, M2h, M3h 
	
	M1w = 100;
	M2w = 100;
	M3w = 100;

	
	M1h = 100;
	M2h = 100;
	M3h = 100;

	

	
	
	//ANI
	var pic1 = new Image();
	var pic2 = new Image();
	var pic3 = new Image();
	var pic4 = new Image();
	var pic5 = new Image();
	var pic6 = new Image();
	var pic7 = new Image();
	
	var frame = 1;		
	var frameSpeed = 6;	
	var frameCool = frameSpeed;	
	var maxFrame = 2;

	//STATIC ANI
	var stat01 = new Image();
	var stat02 = new Image();
	var stat03 = new Image();
	var stat04 = new Image();
	var stat05 = new Image();
	var stat06 = new Image();
	var stat07 = new Image();
	var stat08 = new Image();
	var stat09 = new Image();
	var stat10 = new Image();
	var mon01 = new Image();
	var mon02 = new Image();
	var mon03 = new Image();
	
	
	var frameS = 1;		
	var frameSpeedS = -10;	
	var frameCoolS = frameSpeedS;	
	var maxFrameS = 10;	
	
	
	var myArray = [];
	
	
	
	title.src = 'Title.png';
	start.src = 'Button01.png';
	bgi.src = 'BGImage01.jpg';
	pic2.src = 'Person02.png';
	pic3.src = 'Person03.png';
	buttonyn.src = 'Button02.png';
	stat01.src = 'Static01.png';
	stat02.src = 'Static02.png';
	stat03.src = 'Static03.png';
	stat04.src = 'Static04.png';
	stat05.src = 'Static05.png';
	stat06.src = 'Static06.png';
	stat07.src = 'Static07.png';
	stat08.src = 'Static08.png';
	stat09.src = 'Static09.png';
	stat10.src = 'Static10.png';
	mon01.src = 'Monster01.png';
	mon02.src = 'Monster02.png';
	mon03.src = 'Monster03.png';


	
	
	
	
	
	function init()
	{
		
		
	//////////
	///STATE VARIABLES
	
	
	
	

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	

	function paint()
	{
		
		ctx.fillStyle = 'black';
		ctx.drawImage(bgi, 0,0, w, h);	
		
		if(screen == 0){
		drawMonster(100, 100);
			ctx.drawImage(title, 300, 200);
			ctx.fillStyle = 'white';
			ctx.drawImage(start, s1X, s1Y, s1W, s1H);
			ctx.fillText("Begin", 425, 350, 200, 100);
		}
		
		if(screen == 1){
	
	//drawMonster(100, 100);
	
		//Function that animates the little walking dude
			Johhny();
			
			
			
			ctx.font = "40px Chiller";
			ctx.fillStyle = 'maroon';
			ctx.fillText("This is Johnny.", 200, 100);
			ctx.fillText("Johnny is you.", 200, 200);
			ctx.fillText("Johnny has a problem.", 200, 300);
			ctx.fillText("Will you help Johnny?", 200, 400);
			ctx.fillText("Will you?", 200, 500);
			ctx.drawImage(buttonyn, y1x, y1y, y1w, y1h);
			ctx.drawImage(buttonyn, n1x, n1y, n1w, n1h);
			ctx.fillStyle = 'black';
			ctx.fillText("YES", y1x + 20, y1y + 50, y1w, y1h);
			ctx.fillText("NO", n1x + 20, n1y + 50, n1w, n1h);
			
			}
		
		
		else if (screen == 2){
		ctx.fillStyle = 'maroon';
		
		//Function that animates static
		Static();
		
		ctx.font = "125px Chiller";
		ctx.fillStyle = 'maroon';
		ctx.fillText("Goodbye :) ", 50, 200);
}
		
		else if(screen == 3){
		ctx.font = "60px Chiller";
		ctx.fillStyle = 'maroon';
		ctx.fillText("First, tell me your name.", 100, 100);
		ctx.drawImage(start, s1X, s1Y, s1W, s1H);
		ctx.fillText("Okay", 425 - 20, 350 + 10, 200, 100);
		}
		
		
		else if(screen == 4){
		ctx.font = "60px Chiller";
		ctx.fillStyle = 'maroon';
		ctx.fillText("Thank you, " + myArray[0] + " " + myArray[1] + ". Have fun.", 100, 100);

			if(myArray[0] == "Johnny"){
			ctx.fillText("Congrats, you found the secret game! click to continue", 200, 200);
			}
		}
		
		
		
		
		
	}
	
	function Johhny(x){
	if (frameCool > 0)	
			{
				frameCool -= 1;
			}
			else			
			{
				frameCool = frameSpeed; 
				frame += 1;	
			}
			if (frame > maxFrame){frame = 1;}
			if(frame == 1){ctx.drawImage(pic2, 600, 100, 100, 100);}
			else if(frame == 2){ctx.drawImage(pic3, 600, 100, 100, 100);}
			}
	
	
	function Static(x){
	if (frameCoolS > 0)	
			{
				frameCoolS -= 1;
			}
			else			
			{
				frameCoolS = frameSpeedS; 
				frameS += 1;	
			}
			if (frameS > maxFrameS){frameS = 1;}
			if(frameS == 1){ctx.drawImage(stat01, 0, 0, w, h);}
			else if(frameS == 2){ctx.drawImage(stat02, 0, 0, w, h);}
			else if(frameS == 3){ctx.drawImage(stat03, 0, 0, w, h);}
			else if(frameS == 4){ctx.drawImage(stat04, 0, 0, w, h);}
			else if(frameS == 5){ctx.drawImage(stat05, 0, 0, w, h);}
			else if(frameS == 6){ctx.drawImage(stat06, 0, 0, w, h);}
			else if(frameS == 7){ctx.drawImage(stat07, 0, 0, w, h);}
			else if(frameS == 8){ctx.drawImage(stat08, 0, 0, w, h);}
			else if(frameS == 9){ctx.drawImage(stat09, 0, 0, w, h);}
			else if(frameS == 10){ctx.drawImage(stat10, 0, 0, w, h);}
			
	
	}
	
	function drawMonster(x, y){
		ctx.drawImage(mon01, 100, 100, M1w, M1h);
		}
		
	
	
	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		if(screen == 0){ 
			if(mx > s1X && mx < s1X + s1W && my > s1Y && my < s1Y + s1H){clicker = true;
			screen = 1;
			}
			}
			
			if(screen == 1){ 
			
			if(mx > n1x && mx < n1x + n1w && my > n1y && my < n1y + n1h){clicker = true;
			screen = 2;
			}
			
			if(mx > y1x && mx < y1x + y1w && my > y1y && my < y1y + y1h){clicker = true;
			screen = 3;
			
			}
			}
			
			if(screen == 3){
			if(mx > s1X && mx < s1X + s1W && my > s1Y && my < s1Y + s1H){clicker = true;
			myArray[0] = prompt("Please enter your name");
			myArray[1] = prompt("How about your last name too?");
			screen = 4;
			}
			}
			
		
	      
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		
	}, false);




})
