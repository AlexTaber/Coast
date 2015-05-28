var PlayerView = function(plyr) {
 this.plyr = plyr
}

PlayerView.prototype.drawSquare = function() {
  this.plyr.moves[0].x = this.plyr.x;
  this.plyr.moves[0].y = this.plyr.y - 16;
  this.plyr.moves[0].angle = 270
  this.plyr.moves[0].tint = this.plyr.moves[0].color;

  this.plyr.moves[1].x = this.plyr.x + 16;
  this.plyr.moves[1].y = this.plyr.y;
  this.plyr.moves[1].angle = 0
  this.plyr.moves[1].tint = this.plyr.moves[1].color;

  this.plyr.moves[2].x = this.plyr.x;
  this.plyr.moves[2].y = this.plyr.y + 16;
  this.plyr.moves[2].angle = 90
  this.plyr.moves[2].tint = this.plyr.moves[2].color;

  this.plyr.moves[3].x = this.plyr.x - 16;
  this.plyr.moves[3].y = this.plyr.y;
  this.plyr.moves[3].angle = 180
  this.plyr.moves[3].tint = this.plyr.moves[3].color;
}
