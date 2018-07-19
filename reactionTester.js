// document.getElementById("shape").onClick=function(){
// 	console.log("dd");
// };

var start= new Date().getTime();
var shape=document.getElementById("shape");
var timeElapsed=document.getElementById("elapsed-time");
shape.addEventListener("click",myScript);

function makeShapeAppear(){
	shape.style.display="block";
	start= new Date().getTime();
}

function randomTimeDelay(){
	setTimeout(function(){
		shape.style.display="block";
		shape.style.left=randomPosition().X;
		shape.style.top=randomPosition().Y;
		start= new Date().getTime();		
	},Math.random()*(3000-0));
}

function myScript(){
	var end=new Date().getTime();
	shape.style.display="none";
	timeElapsed.innerHTML=(end-start)/1000 + "s";
	randomTimeDelay();
}

function randomPosition(){
	var X=Math.random()*600;
	var Y=Math.random()*600;
	return {X,Y};
}