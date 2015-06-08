Move.prototype.draw = function() {
  this.graphics.clear();
  this.graphics.beginFill(this.color);

  // draw a shape
  var d = this.graphics.position.distance(player.position)
  var height = 288 * (d/144) + 32
  var startX = 16;
  var startY = - height / 2
  this.graphics.moveTo(startX, startY);
  this.graphics.lineTo(startX, startY + height);
  this.graphics.lineTo(startX - 32, startY + height - 32);
  this.graphics.lineTo(startX - 32, startY + 32);
  this.graphics.lineTo(startX, startY);
  this.graphics.endFill();

}

