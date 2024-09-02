/*
Variablen scene holder styr på hvilken scene vi er i. Den bliver opdateret for hvert musseklick. Det er samme liste med FN billeder som i "lister.js".
*/


var img;
var list = [];
var scene = 0;

function preload() {
	for (i=1;i<18;i++){
		img = createImg('https://github.com/mpsteenstrup/spilLegSamarbejde/blob/main/FN_maal/FN'+ i +'.jpg?raw=true','');
		img.hide();
	  list.push(img);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
}


function draw() {
		image(list[scene],200,200,400,400);
}

function mousePressed(){
	scene = scene+1;
	if (scene>=17){
		scene=0;
	}
}
