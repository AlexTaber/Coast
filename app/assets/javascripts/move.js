var Move = function(x,y, type, power, color) {
  this.id = assignId();
  this.type = type;
  this.power = power;
  this.sector = [x,y];
  this.position = new Phaser.Point(x, y)
  this.graphics = game.add.graphics()
  this.graphics.x = 288 - (272 * x);
  this.graphics.y = 288 - (272 * y);
  if(y != 0) this.graphics.angle = 90;
  if(y == 1 && x == 0) this.graphics.angle +=180;
  if(y == 0 && x == 1) this.graphics.angle +=180;
  game.allMoves.push(this);
  this.color = color;
}

Move.prototype.move = function() {
  this.graphics.x += 30/game.turnDuration * this.sector[0];
  this.graphics.y += 30/game.turnDuration * this.sector[1];
}
