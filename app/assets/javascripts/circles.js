var Circles = function() {
  this.graphics = game.add.graphics(player.x,player.y);
  this.radius = 316
  game.allCircles.push(this);
}

Circles.prototype.move = function() {
  this.radius -= 60/game.turnDuration
}