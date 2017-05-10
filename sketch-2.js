//floating clouds from left to right

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
  for (var i = 0; i < clouds.length; i++) {
  clouds[i].position.x += clouds[i].width * 0.005;
  if (clouds[i].position.x > width) {
    clouds[i].position.x = 0;
  }
}

  drawSprites();
}
