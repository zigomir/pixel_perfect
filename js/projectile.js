// Projectile object
function Projectile(type, $playground, shooter) {
  GameObject.call(this, type);

  var HEIGHT = 32;

  this.damage          = 20;
  this.id              = type + "_" + (Object.keys(this.objectCollection).length + 1);
  this.objectCollection[this.id] = this;

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

  this.createSprite(
    $playground,
    this.animations[Math.round(Math.random())],
    HEIGHT,
    20,
    shooter.domElement.x() + shooter.domElement.w(),
    shooter.domElement.y() + shooter.domElement.h()/2 - HEIGHT/2
  );

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
    var attackedDesigner = gameObjects.designers[designerId];
    var projectile = gameObjects.projectiles[projectileId];
    attackedDesigner.hp -= projectile.damage;

    if (attackedDesigner.hp <= 0) {
      attackedDesigner.domElement.remove();
    }

    // remove designer
    //designer.domElement.setAnimation();
    projectile.remove();
  };

  this.domElement = $("#" + this.id);
}

Projectile.prototype = new GameObject();
Projectile.prototype.constructor = Projectile;