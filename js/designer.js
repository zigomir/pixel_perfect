var designers = {};

// Designer character
function Designer(type, $playground, lane) {
  this.type = type;
  this.hp   = 100;
  this.ap   = 10;
  this.cost = 10;

  this.id   = type + "_" + (Object.keys(designers).length + 1);
  designers[this.id] = this;

  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite.png",
    numberOfFrame: 3,
    delta: 64,
    rate: 150,
    offsetx: 0,
    offsety: 384,
    type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_PINGPONG
  });

  $playground.addSprite(this.id, {
    animation: this.animation,
    height: 128,
    width: 64,
    posx: 500,
    posy: (lane - 1) * OPTIONS.laneHeight
  });

  this.walkToKill = function() {
    if (this.domElement.length > 0) {
      this.domElement.x(-5, true);
    }
  };

  this.domElement = $("#" + this.id);
}
