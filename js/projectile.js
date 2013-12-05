var projectiles = {};

// Designer character
function Projectile(type, $playground, shooter) {
  var HEIGHT = 32;

  this.type            = type;
  this.damage          = 20;

  this.id              = type + "_" + (Object.keys(projectiles).length + 1);
  projectiles[this.id] = this;

  this.animations = [
    new $.gQ.Animation({
      imageURL: "img/sprite.png",
      numberOfFrame: 1,
      delta: 0,
      rate: 0,
      offsetx: 0,
      offsety: 512,
      type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE
    }),

    new $.gQ.Animation({
      imageURL: "img/sprite.png",
      numberOfFrame: 1,
      delta: 0,
      rate: 0,
      offsetx: 20,
      offsety: 512,
      type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE
    })
  ];

  $playground.addSprite(this.id, {
    animation: this.animations[Math.round(Math.random())],
    height: HEIGHT,
    width: 20,
    posx: shooter.domElement.x() + shooter.domElement.w(),
    posy: shooter.domElement.y() + shooter.domElement.h()/2 - HEIGHT/2
  });

  this.flyToTarget = function() {
    if (this.domElement.length > 0) {
      this.domElement.x(30, true);
    }
  };

  var that = this;
  this.checkCollision = function() {
    this.domElement.collision("[id^=designer_]").each(function(index, element) {
      that.collide(that.id, $(element).prop("id"));
    });
  };

  this.collide = function(projectileId, designerId) {
    var attackedDesigner = designers[designerId];
    var projectile = projectiles[projectileId];
    attackedDesigner.hp -= projectile.damage;

    if (attackedDesigner.hp <= 0) {
      attackedDesigner.domElement.remove();
    }

    // remove designer
    //designer.domElement.setAnimation();
    projectile.remove();
  };

  this.remove = function() {
    this.domElement.remove();
    delete projectiles[this.id];
  }

  this.domElement = $("#" + this.id);
}
