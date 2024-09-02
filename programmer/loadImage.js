/*
Billeder loades med url addressen. Det sker i funktionen "preload" som kører først, da det kan tage noget tid at loade.

Billedet bliver vist med image(img,0,0) i venstre hjørne.
*/

var img;


function preload() {

		img = createImg('https://github.com/mpsteenstrup/spilLegSamarbejde/blob/main/FN_maal/FN1.jpg?raw=true','');
		img.hide();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
}


function draw() {
    w = random(0,windowWidth);
    h = random(0,windowHeight);
		image(img,w,h,40,40);
}

function mousePressed(){
	background(0,200,200);
}
