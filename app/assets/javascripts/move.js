var Move = function(x,y, type, power, color) {
  this.id = assignId();
  this.type = type;
  this.power = power;
  this.position = 0
  this.sector = [x,y]
  this.gameObject = game.add.sprite(288 - (x * 272), 288 - (y * 272), 'moves');
  this.gameObject.anchor.set(.5,.5);
  if(y != 0) this.gameObject.angle = 90;
  if(y == 1 && x == 0) this.gameObject.angle +=180;
  if(y == 0 && x == 1) this.gameObject.angle +=180;
  game.allMoves.push(this);
  this.gameObject.tint = color;
  this.gameObject.frame = 7
}

Move.prototype.move = function() {
  this.position += 1;
  this.gameObject.frame -= 1
  this.gameObject.x += 32 * this.sector[0];
  this.gameObject.y += 32 * this.sector[1];
}
