$(function() {

  var $playground = $("#playground");

  $playground.playground({
    height: 800,
    width: 600,
    refreshRate: 60
  })
  .addSprite("sprite1");


  $playground.startGame(function(){
    console.log("Game started!")
  });

});
