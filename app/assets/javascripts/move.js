var Move = function(x,y, type, power, color) {
  this.id = assignId();
  this.type = type;
  this.power = power;
  this.sector = [x,y];
  this.position = new Phaser.Point(x, y)
  this.graphics = game.add.graphics(player.x,player.y)
  game.allMoves.push(this);
  this.color = color;
  this.radius = 142;
  if(y == 1) this.sectorNum = 0;
  else if (x == -1) this.sectorNum = 1;
  else if (y == -1) this.sectorNum = 2;
  else this.sectorNum = 3;
}

Move.prototype.move = function() {
  this.radius -= 30/game.turnDuration
}
