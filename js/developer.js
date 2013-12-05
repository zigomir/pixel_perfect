// Developer character
function Developer(type, $playground, lane) {
  GameObject.call(this, type);

  this.lane = lane;
  this.hp   = 100;
  this.ap   = 100;
  this.cost = 10;

  var that = this;
  this.checkCollision = function() {
    this.domElement.collision("[id^=designer_]").each(function(index, element) {
      that.collide(that.id, $(element).prop("id"));
    });
  };

  this.collide = function(developerId, designerId) {
    var attackedDeveloper = gameObjects.developers[developerId];
    var designer = gameObjects.designers[designerId];
    attackedDeveloper.hp -= designer.ap;

    if (attackedDeveloper.hp <= 0) {
      attackedDeveloper.remove();
    }

    // remove designer
    designer.remove();
  };

  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite.png",
    numberOfFrame: 1,
    delta: 0,
    offsetx: OPTIONS.slotWidth,
    rate: 0,
    type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE
  });

  this.shoot = function() {
    new Projectile("projectile", $playground, this);
  };

  this.getNeighboursCount = function() {
    var count = 0;

    for (var key in gameObjects.developers) {
      if (this.id !== key && gameObjects.developers[key].lane === this.lane) {
        count++;
      }
    }

    return count;
  };

  this.createSprite(
    $playground,
    null,
    OPTIONS.laneHeight,
    OPTIONS.slotWidth,
    this.getNeighboursCount() * OPTIONS.slotWidth,
    (lane - 1) * OPTIONS.laneHeight
  );
}

Developer.prototype = new GameObject();
Developer.prototype.constructor = Developer;
