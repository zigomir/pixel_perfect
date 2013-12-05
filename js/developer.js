// Developer character

function Developer(type) {
  this.type = type;
  this.hp   = 100;
  this.cost = 10;


  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite.png",
    numberOfFrame: 2,
    delta: 16,
    rate: 90,
    type: $.gQ.ANIMATION_HORIZONTAL
  });

  this.getSprite = function() {
    return {
      animation: this.animation,
      height: 16,
      width: 16
    };
  }
}
