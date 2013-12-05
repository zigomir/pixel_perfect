var projectiles = {};

// Designer character
function Projectile(type, $playground) {
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
      type: $.gQ.ANIMATION_HORIZONTAL
    }),

    new $.gQ.Animation({
      imageURL: "img/sprite.png",
      numberOfFrame: 1,
      delta: 0,
      rate: 0,
      offsetx: 20,
      offsety: 512,
      type: $.gQ.ANIMATION_HORIZONTAL
    })
  ]

  $playground.addSprite(this.id, {
    animation: this.animations[Math.round(Math.random())],
    height: 32,
    width: 20,
    posx: 500,
    posy: 50
  });

  this.getDomElement = function() {
    return $("#" + this.id);
  };
}
