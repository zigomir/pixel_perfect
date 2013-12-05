$(function() {

  var $playground = $("#playground");

  $playground.playground({
    height: 800,
    width: 600,
    refreshRate: 60
  });

  $playground.startGame(function(){
    var dev = new Developer("destroyer");

    $playground.addSprite(dev.name, dev.getSprite());
  });

});
