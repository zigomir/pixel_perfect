// Designer character
function Designer(type) {
  this.type = type;
  this.hp   = 100;
  this.cost = 10;

  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite.png",
    numberOfFrame: 3,
    delta: 16,
    rate: 90,
    type: $.gQ.ANIMATION_HORIZONTAL
  });

  this.getSprite = function() {
    return {
      animation: this.animation,
      height: 16,
      width: 16,
      posx: 500,
      posy: 0
    };
  }
}
