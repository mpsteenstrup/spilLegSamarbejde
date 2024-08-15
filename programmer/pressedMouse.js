/*
Interaktivt hvor et billed bliver skabt hver gang musen klickes.
*/
function preload() {
	img = createImg('https://github.com/mpsteenstrup/spilLegSamarbejde/blob/main/FN_maal/FN9.jpg?raw=true','');
	img.hide();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(91, 146, 229);
}

function mousePressed() {
  image(img,mouseX,mouseY,60,60);
}
