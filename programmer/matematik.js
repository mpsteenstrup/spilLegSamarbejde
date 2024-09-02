/*
Næsten samme program som "random.js" men her er to billeder og det tilfældige er vinklen og radius i en cirkel.
*/
var img;

function preload() {
	img = createImg('https://github.com/mpsteenstrup/spilLegSamarbejde/blob/main/FN_maal/FN7.jpg?raw=true','');
	img2 = createImg('https://github.com/mpsteenstrup/spilLegSamarbejde/blob/main/FN_maal/FN12.jpg?raw=true','');
	img.hide();
	img2.hide();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
	frameRate(30);
}


function draw() {
    vinkel = random(0,2*3.141);
    radius = random(300,400);
		image(img,400+radius*cos(vinkel),400+radius*sin(vinkel),20,20);
		image(img2,800+radius*cos(vinkel),400+radius*sin(vinkel),20,20);
}

function mousePressed(){
	background(0,200,200);
}
