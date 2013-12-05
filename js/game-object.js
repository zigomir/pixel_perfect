gameObjects = {
  developers: {},
  designers: {},
  projectiles: {},
  index: 0
};

function GameObject(type) {
	this.type = type;
	this.objectCollection = gameObjects[this.type + "s"];
	this.domElement;

  if(type) {
		this.id = type + "_" + (gameObjects.index++);
    this.objectCollection[this.id] = this;
	}
}

GameObject.prototype.remove = function() {
    this.domElement.remove();
    delete this.objectCollection[this.id];
};

GameObject.prototype.createSprite = function($playground, animation, height, width, posx, posy) {
	$playground.addSprite(
		this.id, 
    {
      animation: animation || this.animation,
      height: height || 32,
      width: width || 32,
      posx: posx || 0,
      posy: posy || 0
    }
	);

	this.domElement = $("#" + this.id);
};