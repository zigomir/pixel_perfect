var projectiles = {};

// Designer character
function Projectile(type, $playground, shooter) {
  var HEIGHT = 32;

  this.type            = type;
  this.damage          = 10;

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

  this.domElement = $("#" + this.id);
}
