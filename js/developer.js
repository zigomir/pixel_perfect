var developers = [];

// Developer character
function Developer(type) {
  this.type = type;
  this.hp   = 100;
  this.cost = 10;

  this.id   = type + "_" + (developers.length + 1);
  developers.push(this);

  var that = this;

  this.registerCollision = function() {
    console.log("how many times i'm called");

    $("#" + this.id).collision("[id^=designer_]").each(function(index, element) {
      console.log("#" + that.id + " was fucked up by "  +  $(element).prop("id"));
    });
  };

  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite.png",
    numberOfFrame: 3,
    delta: 64,
    rate: 150,
    type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_PINGPONG
  });

  this.getSprite = function() {
    return {
      animation: this.animation,
      height: 128,
      width: 64
    };
  };
}
