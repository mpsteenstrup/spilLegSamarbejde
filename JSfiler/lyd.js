let musik;

function preload() {
	musik = loadSound('filer/boing.mp3');
}

function setup() {
  createCanvas(400, 400);
  musik.play();
}

function mousePressed() {
  musik.stop();
}

function draw() {
  background(220);
}
