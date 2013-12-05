var developers = {};

// Developer character
function Developer(type, $playground, lane) {
  this.type           = type;
  this.hp             = 100;
  this.ap             = 100;
  this.cost           = 10;
  this.id             = type + "_" + (Object.keys(developers).length + 1);

  developers[this.id] = this;

  var that = this;
  this.checkCollision = function() {
    $("#" + this.id).collision("[id^=designer_]").each(function(index, element) {
      that.collide(that.id, $(element).prop("id"));
    });
  };

  this.collide = function(developerId, designerId) {
    var attackedDeveloper = developers[developerId];
    var designer = designers[designerId];
    attackedDeveloper.hp -= designer.ap;

    if (attackedDeveloper.hp <= 0) {
      attackedDeveloper.getDomElement().remove();
    }

    // remove designer
    designer.domElement.setAnimation();
    designer.domElement.remove();
  };

  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite.png",
    numberOfFrame: 3,
    delta: 64,
    rate: 150,
    type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_PINGPONG
  });

  this.shoot = function() {
    new Projectile("bit", $playground, this);
  }

  $playground.addSprite(this.id, {
    animation: this.animation,
    height: OPTIONS.laneHeight,
    width: 64,
    posy: (lane - 1) * OPTIONS.laneHeight
  });

  this.domElement = $("#" + this.id);
}
