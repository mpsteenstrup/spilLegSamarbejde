/*
Programmet giver en tilfældig position til et lille billede.
random(start,slut) giver tilfældige kommatal.
frameRate(10) giver at draw løkken gentages 10 gange hvert sekune.
Resetter hvis mous klicket hvor baggrunden overtegner det hele.
*/
var img;

function preload() {
	img = createImg('https://github.com/mpsteenstrup/spilLegSamarbejde/blob/main/FN_maal/FN5.jpg?raw=true','');
	img.hide();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
	frameRate(10);
}


function draw() {
    w = random(0,windowWidth);
    h = random(0,windowHeight);
		image(img,w,h,40,40);
}

function mousePressed(){
	background(0,200,200);
}
