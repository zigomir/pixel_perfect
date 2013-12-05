var designers = [];

// Designer character
function Designer(type) {
  this.type = type;
  this.hp   = 100;
  this.cost = 10;

  this.id   = type + "_" + (designers.length + 1);
  designers.push(this);

  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite.png",
    numberOfFrame: 3,
    delta: 16,
    rate: 150,
    offsetx: 0,
    offsety: 96,
    type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_PINGPONG
  });

  this.getSprite = function() {
    return {
      animation: this.animation,
      height: 32,
      width: 16,
      posx: 500,
      posy: 0
    };
  }
}
