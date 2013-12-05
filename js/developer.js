var developers = {};

// Developer character
function Developer(type, $playground, lane) {
  this.type = type;
  this.lane = lane;
  this.hp   = 100;
  this.ap   = 100;
  this.id   = type + "_" + (Object.keys(developers).length + 1);

  developers[this.id] = this;

  var that = this;
  this.checkCollision = function() {
    this.domElement.collision("[id^=designer_]").each(function(index, element) {
      that.collide(that.id, $(element).prop("id"));
    });
  };

  this.collide = function(developerId, designerId) {
    var attackedDeveloper = developers[developerId];
    var designer = designers[designerId];
    attackedDeveloper.hp -= designer.ap;

    if (attackedDeveloper.hp <= 0) {
      attackedDeveloper.domElement.remove();
      delete developers[developerId];
    }

    // remove designer
    designer.domElement.remove();
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
    new Projectile("bit", $playground, this);
  };

  this.getNeighboursCount = function() {
    var count = 0;

    for (var key in developers) {
      if (this.id !== key && developers[key].lane === this.lane) {
        count++;
      }
    }

    return count;
  };

  $playground.addSprite(this.id, {
    animation: this.animation,
    height: OPTIONS.laneHeight,
    width: OPTIONS.slotWidth,
    posy: (lane - 1) * OPTIONS.laneHeight,
    posx: this.getNeighboursCount() * OPTIONS.slotWidth
  });

  this.domElement = $("#" + this.id);
}
