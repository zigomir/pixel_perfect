$(function() {

  var $playground = $("#playground");
  var REFRESH_RATE = 60;

  $playground.playground({
    height: 800,
    width: 600,
    refreshRate: 60
  });

  $playground.startGame(function(){
    var dev = new Developer("developer", $playground);
    var designer = new Designer("designer", $playground);
  });

  $playground.registerCallback(function() {
    $("#designer_1").x(-20, true);

    $.each(developers, function(index, developer) {
      developer.checkCollision();
    });
  }, REFRESH_RATE);

});
