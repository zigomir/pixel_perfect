var OPTIONS = {
  "refreshRate": 60,
  "laneHeight": 128,
  "laneCount": 6,
  "playgroundWidth": 600
};

$(function() {

  var $playground = $("#playground");

  $playground.playground({
    height: OPTIONS.laneHeight * OPTIONS.laneCount,
    width: OPTIONS.playgroundWidth,
    refreshRate: OPTIONS.refreshRate
  });

  $playground.startGame(function(){
    var developer = new Developer("developer", $playground, 1);
    var developer2 = new Developer("developer", $playground, 2);
    var developer3 = new Developer("developer", $playground, 3);

    var designer  = new Designer("designer", $playground, 1);
    var designer2  = new Designer("designer", $playground, 2);
    var designer3  = new Designer("designer", $playground, 3);

    var projectile = new Projectile("bit", $playground);
  });

  $playground.registerCallback(function() {
    $.each(designers, function(index, designer) {
      designer.walkToKill();
    });

    $.each(developers, function(index, developer) {
      developer.checkCollision();
    });
  }, OPTIONS.refreshRate);

});
