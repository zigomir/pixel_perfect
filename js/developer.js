// Developer character
function Developer(type, $playground, lane) {
  GameObject.call(this, type);

  this.lane = lane;
  this.hp   = OPTIONS.initialDeveloperHp;
  this.ap   = 100;
  this.cost = 10;

  var that = this;
  this.checkCollision = function() {
    this.domElement.collision("[id^=designer_]").each(function(index, element) {
      if (index === 0) {
        that.collide(that.id, $(element).prop("id"));
      }
    });
  };

  this.collide = function(developerId, designerId) {
    var attackedDeveloper = gameObjects.developers[developerId];
    var designer = gameObjects.designers[designerId];
    attackedDeveloper.hp -= designer.ap;
    attackedDeveloper.healthBar.css("width", attackedDeveloper.hp / OPTIONS.initialDeveloperHp * OPTIONS.slotWidth);

    if (attackedDeveloper.hp <= 0) {
      attackedDeveloper.remove();
    } else {
      // designer lost the battle
      designer.remove();
    }
  };

  this.animation = new $.gQ.Animation({
    imageURL: "img/sprite.png",
    numberOfFrame: 1,
    delta: 0,
    offsetx: OPTIONS.slotWidth,
    rate: 0,
    type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE
  });

  this.getDesignersOnLane = function() {
    var count = 0;

    for (var key in gameObjects.designers) {
      if (gameObjects.designers[key].lane === this.lane) {
        count++;
      }
    }

    return count;
  };

  this.startShooting = function() {
    //window.setInterval(this.shoot, 500, this);
  };

  this.shoot = function(that) {
    if (that.getDesignersOnLane() > 0) {
      new Projectile("projectile", $playground, that);
    }
  };

  this.getNeighboursCount = function() {
    var count = 0;

    for (var key in gameObjects.developers) {
      if (this.id !== key && gameObjects.developers[key].lane === this.lane) {
        count++;
      }
    }

    return count;
  };

  this.createGroup(
    $playground,
    OPTIONS.laneHeight,
    OPTIONS.slotWidth,
    this.getNeighboursCount() * OPTIONS.slotWidth,
    (lane - 1) * OPTIONS.laneHeight,
    [
      {
        name: "main",
        animation: this.animation,
        height: OPTIONS.laneHeight,
        width: OPTIONS.slotWidth
      }
    ]
  );

  var healthBar = $('<div class="health-bar" id="health-bar-' + this.id + '" style="top:' + (lane - 1) * OPTIONS.laneHeight + 'px; left: ' + this.getNeighboursCount() * OPTIONS.slotWidth + 'px"></div>');
  $playground.append(healthBar);
  this.healthBar = healthBar;
}

Developer.prototype = new GameObject();
Developer.prototype.constructor = Developer;
