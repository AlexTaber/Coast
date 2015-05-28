var Player = function() {
  this.x = 288
  this.y = 288
}

Player.prototype.create = function () {
  this.moves = []
  this.moves[0] = game.add.sprite(this.x, this.y - 16, 'boxQuarter');
  this.moves[0].angle = 270
  this.moves[1] = game.add.sprite(this.x + 16, this.y, 'boxQuarter');
  this.moves[1].angle = 0
  this.moves[2] = game.add.sprite(this.x, this.y + 16, 'boxQuarter');
  this.moves[2].angle = 90
  this.moves[3] = game.add.sprite(this.x - 16, this.y, 'boxQuarter');
  this.moves[3].angle = 180

  for(var i = 0; i < 4; i++) {
    this.moves[i].color = COLORS[i];
    this.moves[i].anchor.set(.5,.5);
  }

  this.view = new PlayerView(this);
}

Player.prototype.rotatePlayerRight = function() {
  var tempMove = this.moves[3];
  for(var i = 2; i > -1; i--){
    this.moves[i + 1] = this.moves[i];
  }
  this.moves[0] = tempMove
}

Player.prototype.rotatePlayerLeft = function() {
  if(cementTop.isDown) {
    this.cementTopLeft();
  } else {
    var tempMove = this.moves[0];
    for(var i = 1; i < 4; i++){
      this.moves[i - 1] = this.moves[i];
    }
    this.moves[3] = tempMove
  }
}

Player.prototype.cementTopLeft = function() {
  var tempMove = this.moves[1];
  for (var i = 2; i < 4; i++){
    this.moves[i - 1] = this.moves[i];
  }
  this.moves[3] = tempMove
}
