var PlayerView = function(plyr) {
 this.plyr = plyr
}

PlayerView.prototype.drawSelf = function() {
  var q0 = this.plyr.moves[0];
  var q1 = this.plyr.moves[1];
  var q2 = this.plyr.moves[2];
  var q3 = this.plyr.moves[3];

  q0.clear();
  q0.lineStyle(0)
  q0.beginFill(q0.color)
  q0.arc(0, 0, 32, game.math.degToRad(225), game.math.degToRad(315), false);
  q0.endFill();
  q0.bringToFront();
  q0.beginFill(q0.color);
  q0.moveTo(-23,-23);
  q0.lineTo(23,-23);
  q0.lineTo(0,0);
  q0.lineTo(-23,-23);
  q0.endFill();

  q1.clear();
  q1.lineStyle(0)
  q1.beginFill(q1.color)
  q1.arc(0, 0, 32, game.math.degToRad(315), game.math.degToRad(45), false);
  q1.endFill();
  q1.beginFill(q1.color);
  q1.moveTo(23,-23);
  q1.lineTo(23,23);
  q1.lineTo(0,0);
  q1.lineTo(23,-23);
  q1.endFill();


  q2.clear();
  q2.lineStyle(0)
  q2.beginFill(q2.color)
  q2.arc(0, 0, 32, game.math.degToRad(45), game.math.degToRad(135), false);
  q2.endFill();
  q2.bringToFront();
  q2.beginFill(q2.color);
  q2.moveTo(23,23);
  q2.lineTo(-23,23);
  q2.lineTo(0,0);
  q2.lineTo(23,23);
  q2.endFill();

  q3.clear();
  q3.lineStyle(0)
  q3.beginFill(q3.color)
  q3.arc(0, 0, 32, game.math.degToRad(135), game.math.degToRad(225), false);
  q3.endFill();
  q3.bringToFront();
  q3.beginFill(q3.color);
  q3.moveTo(-23,23);
  q3.lineTo(-23,-23);
  q3.lineTo(0,0);
  q3.lineTo(-23,23);
  q3.endFill();

  this.plyr.graphics.clear();
  this.plyr.graphics.lineStyle(6,0xF5EBFF,1)
  this.plyr.graphics.drawCircle(0,0,64)
  this.plyr.graphics.bringToFront();
  this.plyr.graphics.lineStyle(0);
}
