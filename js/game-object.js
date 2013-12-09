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

	this.domElement = $("#" + this.id).addClass(this.type);
};

GameObject.prototype.createGroup = function($playground, height, width, posx, posy, sprites) {
  $playground.addGroup(
    this.id, 
    {
      height: height || 32,
      width: width || 32,
      posx: posx || 0,
      posy: posy || 0
    }
  );

  var newGroup = $("#" + this.id);

  var that = this;
  $.each(sprites, 
    function(index, sprite) {
      newGroup.addSprite(
        that.id + "_" + sprite.name, 
        {
          animation: sprite.animation || that.animation,
          height: sprite.height || 32,
          width: sprite.width || 32,
          posx: sprite.posx || 0,
          posy: sprite.posy || 0
        }
      ).addClass(sprite.name);
    }
  );

  this.domElement = $("#" + this.id).addClass(this.type);
};