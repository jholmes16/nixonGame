// JavaScript Document
//Forward Navigation animation
var Forward_Navigation_canvas

var Forward_Navigation_context

var forwardImage=new Image();

var ForwardNav= new ImageDataObject(-90,0,136,90)

forwardImage.src="Images/IconBossOfficeFor.jpg";

//--------------Back Navigation---------------------

var Back_Navigation_canvas

var Back_Navigation_context

var backImage=new Image();

var backNav= new ImageDataObject(90,0,136,90)

backImage.src="Images/IconOfficeBack.jpg";

var parm;

var xClick;

var yClick;

function ImageDataObject(xcoor, ycoor, width, height)
{
	this.x = xcoor;
	this.y = ycoor;
	this.w = width;
	this.h = height;
	
}

function btrackCursor(currentEvent)
{
	cursorPositionX = currentEvent.layerX;
	
	cursorPositionY = currentEvent.layerY;
	//alert(cursorPositionY +  " " + cursorPositionX);
	
}

function trackCursor(currentEvent)
{
	cursorPositionX = currentEvent.layerX;
	
	cursorPositionY = currentEvent.layerY;
	//alert(cursorPositionY +  " " + cursorPositionX);
	
}

function bcursor_reportclick(currentEvent)
{
	xClick = currentEvent.layerX;
	
	yClick = currentEvent.layerY;
	//alert(xClick + " " + yClick);
	if(
	currentEvent.layerX >= ForwardNav.x && currentEvent.layerX <= (ForwardNav.x + ForwardNav.w) 
	&&
	currentEvent.layerY >= ForwardNav.y && currentEvent.layerY <= (ForwardNav.y + ForwardNav.h))
	{
	//alert(ForwardNav.y + " " + ForwardNav.x);
			setForward_NavigationDestination(0,0);
		
	}
	//---------------Back Navigation--------------------------------------


}
function cursor_reportclick(currentEvent)
{
	xClick = currentEvent.layerX;
	
	yClick = currentEvent.layerY;
	//alert(xClick + " " + yClick);
	if(
	currentEvent.layerX >= backNav.x && currentEvent.layerX <= (backNav.x + backNav.w) 
	&&
	currentEvent.layerY >= backNav.y && currentEvent.layerY <= (backNav.y + backNav.h))
	{
	//alert(backNav.y + " " + backNav.x);
			setBack_NavigationDestination(0,0);
	//alert(backNav.y + " " + backNav.x);
		
	}
}

function setForward_NavigationDestination(xcoor, ycoor)
{
	Forward_Navigation_Destination_x = xcoor;
	
	Forward_Navigation_Destination_y = ycoor;
	
	//alert(Forward_Navigation_Destination_x +  " " + Forward_Navigation_Destination_y);
}

function setBack_NavigationDestination(xcoor, ycoor)
{
	Back_Navigation_Destination_x = xcoor;
	
	Back_Navigation_Destination_y = ycoor;
	
	//alert(Back_Navigation_Destination_x +  " " + Back_Navigation_Destination_y);
}

function MoveStar()
{
	
	//alert("move() star works")
		
	if(ForwardNav.x != Forward_Navigation_Destination_x)
	{
		
		if(ForwardNav.x < Forward_Navigation_Destination_x)
		{
			ForwardNav.x +=3;
		}
		
		if(ForwardNav.x > Forward_Navigation_Destination_x)
		{
			ForwardNav.x -=3;
		}
		
	}
	
	if(ForwardNav.y != Forward_Navigation_Destination_y)
	{
		if(ForwardNav.y < Forward_Navigation_Destination_y)
		{
			ForwardNav.y +=3;
		}
		
		if(ForwardNav.y > Forward_Navigation_Destination_y)
		{
			ForwardNav.y -=3;
		}
	}
	
	if((ForwardNav.x != Forward_Navigation_Destination_x) || (ForwardNav.y != 			Forward_Navigation_Destination_y))
	{
		
		Forward_Navigation_context.clearRect(0,0,136,90);
		
		
		Forward_Navigation_context.drawImage(forwardImage, ForwardNav.x,ForwardNav.y,136,90);
	}
}
	//--------------------Back Navigation----------------------------------

function bMoveStar()
{
	if(backNav.x != Back_Navigation_Destination_x)
	{
		if(backNav.x < Back_Navigation_Destination_x)
		{	
			backNav.x +=3;
		}
		
		if(backNav.x > Back_Navigation_Destination_x)
		{
			backNav.x -=3;
		}
		
	}
	
	if(backNav.y != Back_Navigation_Destination_y)
	{
		if(backNav.y < Back_Navigation_Destination_y)
		{
			backNav.y +=3;
		}
		
		if(backNav.y > Back_Navigation_Destination_y)
		{
			backNav.y -=3;
		}
	}
	
	if((backNav.x != Back_Navigation_Destination_x) || (backNav.y != Back_Navigation_Destination_y))
	{
		
		Back_Navigation_context.clearRect(0,0,136,90);
		
		Back_Navigation_context.drawImage(backImage, backNav.x,backNav.y,136,90);
	}
}


function forwOut()
{
	Forward_Navigation_Destination_x = -90;
	
	Forward_Navigation_Destination_y = 0;
}
function backOut()
{
	Back_Navigation_Destination_x = 90;
	
	Back_Navigation_Destination_y = 0;
}

function bon_click(winLink)
{
	
	if(backNav.x == 0)
		{
			window.location = winLink+"?"+parm;
		}
}

function for_on_click(winLink)
{
	if(ForwardNav.x == 0)
		{
			window.location = winLink+"?"+parm;
		}
}

function init(a)
{
	forwardImage.src=a;
	
	Forward_Navigation_canvas = document.getElementById('Screen2_For-Nav');
	
	Forward_Navigation_context = Forward_Navigation_canvas.getContext('2d');
	
	Forward_Navigation_context.drawImage(forwardImage,-90,0,136,90);
		
	Forward_Navigation_canvas.addEventListener('mousemove',bcursor_reportclick,false);
	
	Forward_Navigation_canvas.addEventListener('mousemove',btrackCursor,false);
	
	Forward_Navigation_canvas.addEventListener('mouseout',forwOut,false);
	setInterval("MoveStar();", 10);
}
	
	//-----------Back Navigation-----------------------------------------------------
function binit(b)
{	
	backImage.src=b;

	Back_Navigation_canvas = document.getElementById('Screen2_Back-Nav');
	
	Back_Navigation_context = Back_Navigation_canvas.getContext('2d');
	
	Back_Navigation_context.drawImage(backImage,90,0,136,90);
	
	Back_Navigation_canvas.addEventListener('mousemove',cursor_reportclick,false);
	
	Back_Navigation_canvas.addEventListener('mousemove',trackCursor,false);
	
	Back_Navigation_canvas.addEventListener('mouseout',backOut,false);
	setInterval("bMoveStar();", 10);
}

//--------------------------Evidence Return-----------------------------------

function returnInit()
{
	parm = window.location.search.substring(1);
	//alert(parm);
}

function pageReturn()
{
	switch (parm)
	{
	case "one" :
		window.location = "Screen2.html";
	break;
	case "two" :
		window.location = "Screen3.html";
	break;
	case "three" :
		window.location = "Screen4.html";
	break;
	case "four" :
		window.location = "Screen5.html";
	break;
	case "five" :
		window.location = "Screen6.html";
	break;
	case "six" :
		window.location = "Screen7.html";
	break;
	case "seven" :
		window.location = "Screen8.html";
	break;
	case "eight" :
		window.location = "Screen9.html";
	break;
	case "nine" :
		window.location = "Screen10.html";
	break;
	case "ten" :
		window.location = "Screen11.html";
	break;
	case "eleven" :
		window.location = "Screen12.html";
	break;
	case "twelve" :
		window.location = "Screen13.html";
	break;
	}
}

function writeparm(eleven)
{
	var x=eleven;
	document.write(x);
}

//-------------------------Clear contents from text field-------------------

function clearContents(element) {
  element.value = '';
}

function submitText()
{
	//alert("submit");
	if((document.myForm.myField.value == "") || (document.myForm.myField.value.length < 20))
	{
		alert("You must submit evidence for you decision");
	}
	else
	{
		window.location = "Screen13.html";
	}
}

function showTimeLine()
{
	document.getElementById('ScreenTimeLine_Table').style.visibility = 'visible';
	document.getElementById('EvidenceClick').style.visibility = 'hidden';
	//alert("show");
}