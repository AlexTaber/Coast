var Move = function(sector, type, power, color) {
  this.id = assignId();
  this.type = type;
  this.power = power;
  this.sectorNum = sector;
  this.graphics = game.add.graphics(player.x,player.y)
  game.allMoves.push(this);
  this.color = color;
  this.radius = 142;
}

Move.prototype.move = function() {
  this.radius -= 30/game.turnDuration
}
