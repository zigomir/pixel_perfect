$(function() {

  var $playground = $("#playground");
  var REFRESH_RATE = 60;

  $playground.playground({
    height: 800,
    width: 600,
    refreshRate: 60
  });

  $playground.startGame(function(){
    var dev = new Developer("destroyer");
    var designer = new Designer("designer");

    $playground.addSprite(dev.id, dev.getSprite());
    $playground.addSprite(designer.id, designer.getSprite());
  });

  $playground.registerCallback(function() {
    $("#designer_1").x(-2, true);
  }, REFRESH_RATE);

});
