$(function() {

  var $playground = $("#playground");
  var REFRESH_RATE = 60;

  $playground.playground({
    height: 800,
    width: 600,
    refreshRate: 60
  });

  $playground.startGame(function(){
    var developer = new Developer("developer", $playground);
    var designer = new Designer("designer", $playground);
    var projectile = new Projectile("bit", $playground);
  });

  $playground.registerCallback(function() {
    $.each(designers, function(index, designer) {
      designer.walkToKill();
    });

    $.each(developers, function(index, developer) {
      developer.checkCollision();
    });
  }, REFRESH_RATE);

});
