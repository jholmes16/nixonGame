// JavaScript Document
var captions=new Array();
captions[1]="this is caption one";

function returnInit()
{
	parm = window.location.search.substring(1);
}

function pageVisit()
{
	switch (parm)
	{
	case "one" :
		sessionStorage.data="no";
	break;
	case "two" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
	break;
	case "three" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
		sessionStorage.data3="no";
	break;
	case "four" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
		sessionStorage.data3="no";
		sessionStorage.data4="no";
	break;
	case "five" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
		sessionStorage.data3="no";
		sessionStorage.data4="no";
		sessionStorage.data5="no";
	break;
	case "six" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
		sessionStorage.data3="no";
		sessionStorage.data4="no";
		sessionStorage.data5="no";
		sessionStorage.data6="no";
	break;
	case "seven" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
		sessionStorage.data3="no";
		sessionStorage.data4="no";
		sessionStorage.data5="no";
		sessionStorage.data6="no";
		sessionStorage.data7="no";
	break;
	case "eight" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
		sessionStorage.data3="no";
		sessionStorage.data4="no";
		sessionStorage.data5="no";
		sessionStorage.data6="no";
		sessionStorage.data7="no";
		sessionStorage.data8="no";
	break;
	case "nine" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
		sessionStorage.data3="no";
		sessionStorage.data4="no";
		sessionStorage.data5="no";
		sessionStorage.data6="no";
		sessionStorage.data7="no";
		sessionStorage.data8="no";
		sessionStorage.data9="no";
	break;
	case "ten" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
		sessionStorage.data3="no";
		sessionStorage.data4="no";
		sessionStorage.data5="no";
		sessionStorage.data6="no";
		sessionStorage.data7="no";
		sessionStorage.data8="no";
		sessionStorage.data9="no";
		sessionStorage.data10="no";
	break;
	case "eleven" :
		sessionStorage.data="no";
		sessionStorage.data2="no";
		sessionStorage.data3="no";
		sessionStorage.data4="no";
		sessionStorage.data5="no";
		sessionStorage.data6="no";
		sessionStorage.data7="no";
		sessionStorage.data8="no";
		sessionStorage.data9="no";
		sessionStorage.data10="no";
	break;
	}
	
	actualChangePic();
}


function actualChangePic()
{
	if(sessionStorage.data == "no")
	{
	document.getElementById("newImage").src ="Images/IconFolder.jpg";
	document.getElementById("newImage").onclick = function(){
		window.location = "Screen2.html?"+parm;
	}
	}
	if(sessionStorage.data2 == "no")
	{
	document.getElementById("newImage1").src ="Images/IconFolder.jpg";
	document.getElementById("newImageCap1").innerHTML = '[Two of men arrested involved in White House Plumbers]';
	document.getElementById("newImage1").onclick = function(){
		window.location = "Screen3.html?"+parm;
	}
	}
	if(sessionStorage.data3 == "no")
	{
	document.getElementById("newImage2").src ="Images/IconFolder.jpg";
	document.getElementById("newImageCap2").innerHTML = '[Find checks made out to the Watergate buglars]';
	document.getElementById("newImage2").onclick = function(){
		window.location = "Screen4.html?"+parm;
	}
	}
	if(sessionStorage.data4 == "no")
	{
	document.getElementById("newImage3").src ="Images/IconFolder.jpg";
	document.getElementById("newImageCap3").innerHTML = "[It's revealed CRP officials ordered checks made out to buglars]";
	document.getElementById("newImage3").onclick = function(){
		window.location = "Screen5.html?"+parm;
	}
	}
	if(sessionStorage.data5 == "no")
	{
	document.getElementById("newImage4").src ="Images/IconFolder.jpg";
	document.getElementById("newImageCap4").innerHTML = '[Notes from Presidents news conference]';
	document.getElementById("newImage4").onclick = function(){
		window.location = "Screen6.html?"+parm;
	}
	}
	if(sessionStorage.data6 == "no")
	{
	document.getElementById("newImage5").src ="Images/IconFolder.jpg";
	document.getElementById("newImageCap5").innerHTML = '[Deep Throat findings]';
	document.getElementById("newImage5").onclick = function(){
		window.location = "Screen7.html?"+parm;
	}
	}
	if(sessionStorage.data7 == "no")
	{
	document.getElementById("newImage6").src ="Images/IconFolder.jpg";
	document.getElementById("newImageCap6").innerHTML = '[President wins re-election]';
	document.getElementById("newImage6").onclick = function(){
		window.location = "Screen8.html?"+parm;
	}
	}
	if(sessionStorage.data8 == "no")
	{
	document.getElementById("newImage7").src ="Images/IconFolder.jpg";
	document.getElementById("newImageCap7").innerHTML = '[Ruckelshaus resign as special prosecutor]';
	document.getElementById("newImage7").onclick = function(){
		window.location = "Screen9.html?"+parm;
	}
	}
	if(sessionStorage.data9 == "no")
	{
	document.getElementById("newImage8").src ="Images/IconFolder.jpg";
	document.getElementById("newImageCap8").innerHTML = '[Nixon former aids indicted. Nixon named as coconspirator]';
	document.getElementById("newImage8").onclick = function(){
		window.location = "Screen10.html?"+parm;
	}
	}
	if(sessionStorage.data10 == "no")
	{
	document.getElementById("newImage9").src ="Images/IconFolder.jpg";
	document.getElementById("newImageCap9").innerHTML = '[Smoking gun tape]';
	document.getElementById("newImage9").onclick = function(){
		window.location = "Screen11.html?"+parm;
	}
	}
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
	}

}