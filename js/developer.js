var developers = [];

// Developer character
function Developer(type) {
  this.type = type;
  this.hp   = 100;
  this.cost = 10;

  this.id   = type + "_" + (developers.length + 1);
  developers.push(this);

  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite_developer.png",
    numberOfFrame: 3,
    delta: 16,
    rate: 90,
    type: $.gQ.ANIMATION_HORIZONTAL
  });

  this.getSprite = function() {
    return {
      animation: this.animation,
      height: 28,
      width: 16
    };
  }
}
