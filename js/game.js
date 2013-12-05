var OPTIONS = {
  "refreshRate": 60,
  "laneHeight": 128,
  "laneCount": 6,
  "slotWidth": 64,
  "playgroundWidth": 600,
  "initialBalance": 500
};

var $playground, $purchaseObject;
var bankAccount = {
  balance: 0,

  updateBalance: function(newValue) {
    this.balance = newValue;
    $(".balance").text(this.balance);
  },
  decreaseBalance: function(decreaseValue) {
    this.updateBalance(this.balance - decreaseValue);
  },
  increaseBalance: function(increaseValue) {
    this.updateBalance(this.balance + increaseValue);
  }
};

$(function() {

  bankAccount.updateBalance(OPTIONS.initialBalance);

  $("#shop .developer").click(function(e) {
    $(e.currentTarget).addClass('purchased');
    $purchaseObject = $(e.currentTarget);
  });

  $playground = $("#playground");
  $playground.click(function() {
    if ($purchaseObject === undefined || $purchaseObject.length === 0) {
      return;
    }

    var mouseY    = $.gQ.mouseTracker.y;
    var lane      = Math.ceil(mouseY / OPTIONS.laneHeight);
    var typeCost  = parseInt($purchaseObject.data("cost"), 10);

    if (bankAccount.balance > typeCost) {
      bankAccount.decreaseBalance(typeCost);
      var newDev = new Developer($purchaseObject.data("type"), $playground, lane);
      newDev.startShooting();
    }
  });

  $playground.playground({
    height: OPTIONS.laneHeight * OPTIONS.laneCount,
    width: OPTIONS.playgroundWidth,
    refreshRate: OPTIONS.refreshRate,
    mouseTracker: true
  });

  $playground.startGame();

  $playground.registerCallback(function() {
    $.each(gameObjects.designers, function(index, designer) {
      designer.walkToKill();
      designer.checkWorldDomination();
    });

    $.each(gameObjects.developers, function(index, developer) {
      developer.checkCollision();
    });

    $.each(gameObjects.projectiles, function(index, projectile) {
      projectile.flyToTarget();
      projectile.checkCollision();
    });

  }, OPTIONS.refreshRate);

});
