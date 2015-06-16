Move.prototype.draw = function() {
  this.graphics.clear();
  var startDeg = game.sectorStartAngle + (game.sectorDegrees * this.sectorNum) % 360;
  this.graphics.lineStyle(32, this.color, 1);
  this.graphics.arc(0, 0, this.radius, game.math.degToRad(startDeg), game.math.degToRad((startDeg + game.sectorDegrees) % 360), false);
}

