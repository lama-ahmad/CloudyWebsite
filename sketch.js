// basic clouds appearing

var cloud;
var clouds;
var img;
cloudWidth = 200;
cloudHeight = 103;

function preload() {
  img = loadImage("images/cloud.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  clouds = new Group();

  for (var i = 0; i < 10; i++) {
    var c = createSprite(random(width), random(height))
      c.addImage(img);
      clouds.add(c);
  }

}

function draw() {
  background(128,222,234);

  drawSprites();
}
