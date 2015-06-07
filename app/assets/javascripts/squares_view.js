Squares.prototype.draw = function() {
  this.graphics.clear();

  var d = this.graphics.position.distance(player.position)
  var height = 576 * (d/288)

  this.graphics.lineStyle(8, 0xF5EBFF, 1);
  this.graphics.drawRect(-height/2, 0, height, height)
  this.graphics.bringToFront();
}