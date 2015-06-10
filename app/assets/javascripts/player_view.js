var PlayerView = function(plyr) {
 this.plyr = plyr
}

PlayerView.prototype.drawSelf = function() {
  var q0 = this.plyr.moves[0];
  var q1 = this.plyr.moves[1];
  var q2 = this.plyr.moves[2];
  var q3 = this.plyr.moves[3];

  for(var i = 0; i < game.sectors; i++){

    this.plyr.moves[i].clear();
    this.plyr.moves[i].lineStyle(0)
    this.plyr.moves[i].beginFill(this.plyr.moves[i].color)
    this.plyr.moves[i].arc(0, 0, 32, game.math.degToRad(game.sectorStartAngle + (game.sectorDegrees * i)), game.math.degToRad(game.sectorStartAngle + (game.sectorDegrees * (i+1))), false);
    this.plyr.moves[i].endFill();
    this.plyr.moves[i].bringToFront();
  }

  if(game.sectors == 4) {
    q0.beginFill(q0.color);
    q0.moveTo(-23,-23);
    q0.lineTo(23,-23);
    q0.lineTo(0,0);
    q0.lineTo(-23,-23);
    q0.endFill();

    q1.beginFill(q1.color);
    q1.moveTo(23,-23);
    q1.lineTo(23,23);
    q1.lineTo(0,0);
    q1.lineTo(23,-23);
    q1.endFill();

    q2.beginFill(q2.color);
    q2.moveTo(23,23);
    q2.lineTo(-23,23);
    q2.lineTo(0,0);
    q2.lineTo(23,23);
    q2.endFill();

    q3.beginFill(q3.color);
    q3.moveTo(-23,23);
    q3.lineTo(-23,-23);
    q3.lineTo(0,0);
    q3.lineTo(-23,23);
    q3.endFill();
  } else if (game.sectors == 3) {

    q0.beginFill(q0.color);
    q0.moveTo(0,-32);
    q0.lineTo(0,0);
    q0.lineTo(28,16);
    q0.lineTo(0,-30);
    q0.endFill();

    q1.beginFill(q1.color);
    q1.moveTo(-29,16);
    q1.lineTo(0,0);
    q1.lineTo(29,16);
    q1.lineTo(-29,16);
    q1.endFill();

    q2.beginFill(q2.color);
    q2.moveTo(0,-32);
    q2.lineTo(0,0);
    q2.lineTo(-28,16);
    q2.lineTo(0,-32);
    q2.endFill();

  }

  this.plyr.graphics.clear();
  this.plyr.graphics.lineStyle(6,0xF5EBFF,1)
  this.plyr.graphics.drawCircle(0,0,64)
  this.plyr.graphics.bringToFront();
  this.plyr.graphics.lineStyle(0);
}
