var PlayerView = function(plyr) {
 this.plyr = plyr
}

PlayerView.prototype.drawSquare = function() {
  var q0 = this.plyr.moves[0];
  var q1 = this.plyr.moves[1];
  var q2 = this.plyr.moves[2];
  var q3 = this.plyr.moves[3];

  q0.clear();
  q0.beginFill(q0.color)
  q0.arc(this.plyr.x, this.plyr.y, 64, game.math.degToRad(225), game.math.degToRad(315), false);
  q0.endFill();
  q0.bringToFront();

  q1.clear();
  q1.beginFill(q1.color)
  q1.arc(this.plyr.x, this.plyr.y, 64, game.math.degToRad(315), game.math.degToRad(45), false);
  q1.endFill();
  q1.bringToFront();

  q2.clear();
  q2.beginFill(q2.color)
  q2.arc(this.plyr.x, this.plyr.y, 64, game.math.degToRad(45), game.math.degToRad(135), false);
  q2.endFill();
  q2.bringToFront();

  q3.clear();
  q3.beginFill(q3.color)
  q3.arc(this.plyr.x, this.plyr.y, 64, game.math.degToRad(135), game.math.degToRad(225), false);
  q3.endFill();
  q3.bringToFront();
}
