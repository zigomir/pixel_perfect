// Designer character
function Designer(type, $playground, lane) {
  GameObject.call(this, type);

  this.hp   = 100;
  this.ap   = 10;
  this.cost = 10;

  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite.png",
    numberOfFrame: 3,
    delta: 64,
    rate: 150,
    offsetx: 0,
    offsety: 384,
    type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_PINGPONG
  });

  this.createSprite(
    $playground,
    null,
    128,
    64,
    500,
    (lane - 1) * OPTIONS.laneHeight
  );

  this.walkToKill = function() {
    if (this.domElement.length > 0) {
      this.domElement.x(-5, true);
    }
  };

  this.domElement = $("#" + this.id);

  this.checkWorldDomination = function() {
    if (this.domElement.x() <= -OPTIONS.slotWidth) {
      $playground.pauseGame();
    }
  };
}

Designer.prototype = new GameObject();
Designer.prototype.constructor = Designer;
