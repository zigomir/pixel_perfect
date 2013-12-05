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
    var designer = new Designer("pansy");

    $playground.addSprite(dev.type, dev.getSprite());
    $playground.addSprite(designer.type, designer.getSprite());
  });


  console.log($("#destroyer").hp);

  $playground.registerCallback(function() {
    $("#pansy").x(-10, true);
  }, REFRESH_RATE);

});
