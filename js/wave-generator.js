function designerWaveGenerator() {

  var fillLanes = getRandomInt(1, 4);
  for (var i = 1; i <= fillLanes; i++) {
    var numOfDesigners = getRandomInt(0, 2);

    for (var j = 0; j < numOfDesigners; j++) {
      new Designer("designer", $playground, i);
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var intervalId;

function spreadDesignersWave() {
  intervalId = window.setInterval(designerWaveGenerator, getRandomInt(1000, 3000));
}
spreadDesignersWave();
