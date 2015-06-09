Circles.prototype.draw = function() {
  this.graphics.clear();

  this.graphics.lineStyle(6, 0xF5EBFF, 1);
  this.graphics.drawCircle(0, 0, this.radius)
  this.graphics.bringToFront();
}