// Designer character
function Designer(type, $playground, lane) {
  GameObject.call(this, type);

  this.hp               = 100;
  this.ap               = 30;
  this.lane             = lane;
  this.walkSpeed        = 0;
  // the amount of money that is earned for killing this foe
  this.healthInsurance  = 10;

  this.animations = {
    walkLeft : new $.gQ.Animation({
      imageURL: "img/sprite.png",
      numberOfFrame: 3,
      delta: 64,
      rate: 150,
      offsetx: 0,
      offsety: 384,
      type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_PINGPONG
    }),

    death : new $.gQ.Animation({
      imageURL: "img/designer_death.png",
      numberOfFrame: 4,
      delta: 120,
      rate: 300,
      type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_CALLBACK
    })
  };

  this.createSprite(
    $playground,
    this.animations.walkLeft,
    128,
    64,
    500,
    (lane - 1) * OPTIONS.laneHeight
  );

  this.walkToKill = function() {
    if (this.domElement.length > 0) {
      this.domElement.x(this.walkSpeed, true);
    }
  };

  this.checkWorldDomination = function() {
    if (this.domElement.x() <= -OPTIONS.slotWidth) {
      $playground.pauseGame();
      window.clearInterval(intervalId);
      console.log("Game over!");
    }
  };
}

Designer.prototype = new GameObject();
Designer.prototype.constructor = Designer;
