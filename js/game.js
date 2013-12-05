$(function() {

  var $playground = $("#playground");
  var REFRESH_RATE = 60;

  $playground.playground({
    height: 800,
    width: 600,
    refreshRate: 60
  });

  var dev;

  $playground.startGame(function(){
    dev = new Developer("developer");
    var designer = new Designer("designer");

    $playground.addSprite(dev.id, dev.getSprite());
    $playground.addSprite(designer.id, designer.getSprite());


    dev.registerCollision();
  });

  $playground.registerCallback(function() {
    $("#designer_1").x(-20, true);


  }, REFRESH_RATE);

});
