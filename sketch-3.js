//floating around the page and bouncing of edges with face on hover

var cloud;
var clouds;
var img;
cloudWidth = 200;
cloudHeight = 103;

function preload() {
  img = loadImage("images/cloud.png");
  img2 = loadImage("images/cloudface.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  clouds = new Group();

  for (var i = 0; i < 10; i++) {
    var c = createSprite(random(width), random(height))
      c.addAnimation("normal", img);
      c.addAnimation("face", img2);
      c.addSpeed(1, random(0, 360));

      c.onMouseOut = function() {
        this.changeAnimation("normal");
      }

      c.onMouseOver = function() {
        this.changeAnimation("face");
      }

      clouds.add(c);
  }


}

function draw() {
  background(128,222,234);

  //collision detection for edges
  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if(s.position.x>width) {
      s.position.x = width-1;
      s.velocity.x = -abs(s.velocity.x);
      }

    if(s.position.y<0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if(s.position.y>height) {
      s.position.y = height-1;
      s.velocity.y = -abs(s.velocity.y);
      }
    }

  drawSprites();
}
