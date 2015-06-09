var Player = function() {
  this.x = 160
  this.y = 320
  this.position = new Phaser.Point(this.x, this.y)
  this.lastCementMove = false;
  this.graphics = game.add.graphics(this.x, this.y)
}

Player.prototype.create = function () {
  this.moves = []
  this.moves[0] = game.add.graphics(this.x, this.y);
  //this.moves[0].angle = 270
  this.moves[1] = game.add.graphics(this.x, this.y);
  //this.moves[1].angle = 0
  this.moves[2] = game.add.graphics(this.x, this.y);
  //this.moves[2].angle = 90
  this.moves[3] = game.add.graphics(this.x, this.y);
  //this.moves[3].angle = 180

  for(var i = 0; i < 4; i++) {
    this.moves[i].color = COLORS[i];
    //this.moves[i].anchor.set(.5,.5);
  }

  this.view = new PlayerView(this);
}

Player.prototype.rotatePlayerRight = function() {
  if(up.isDown) {
    this.cementTopRight();
    this.lastCementMove = true;
  } else if(down.isDown) {
    this.cementBottomRight();
    this.lastCementMove = true;
  } else if(left.isDown) {
    this.cementLeftUp();
    this.lastCementMove = true;
  } else if(right.isDown) {
    this.cementRightUp();
    this.lastCementMove = true;
  } else {
    if(this.lastCementMove == false) {
      var tempMove = this.moves[3];
      for(var i = 2; i > -1; i--){
        this.moves[i + 1] = this.moves[i];
      }
      this.moves[0] = tempMove
    } else {
      this.lastCementMove = false;
    }
  }
}

Player.prototype.rotatePlayerLeft = function() {
  if(up.isDown) {
    this.cementTopLeft();
    this.lastCementMove = true;
  } else if(down.isDown) {
    this.cementBottomLeft();
    this.lastCementMove = true;
  } else if(left.isDown) {
    this.cementLeftDown();
    this.lastCementMove = true;
  } else if(right.isDown) {
    this.cementRightDown();
    this.lastCementMove = true;
  } else {
    if(this.lastCementMove == false) {
      var tempMove = this.moves[0];
      for(var i = 1; i < 4; i++){
        this.moves[i - 1] = this.moves[i];
      }
      this.moves[3] = tempMove
    } else {
      this.lastCementMove = false;
    }
  }
}

Player.prototype.cementTopLeft = function() {
  var tempMove = this.moves[1];
  for (var i = 2; i < 4; i++){
    this.moves[i - 1] = this.moves[i];
  }
  this.moves[3] = tempMove
}

Player.prototype.cementTopRight = function() {
  var tempMove = this.moves[3];
  for (var i = 2; i > 0; i--){
    this.moves[i + 1] = this.moves[i];
  }
  this.moves[1] = tempMove;
}

Player.prototype.cementBottomRight = function() {
  var tempMove = this.moves[1];
  this.moves[1] = this.moves[0];
  this.moves[0] = this.moves[3];
  this.moves[3] = tempMove;
}

Player.prototype.cementBottomLeft = function() {
  var tempMove = this.moves[1];
  this.moves[1] = this.moves[3];
  this.moves[3] = this.moves[0];
  this.moves[0] = tempMove;
}

Player.prototype.cementLeftDown = function() {
  var tempMove = this.moves[0];
  this.moves[0] = this.moves[1];
  this.moves[1] = this.moves[2];
  this.moves[2] = tempMove;
}

Player.prototype.cementLeftUp = function() {
  var tempMove = this.moves[2];
  this.moves[2] = this.moves[1];
  this.moves[1] = this.moves[0];
  this.moves[0] = tempMove;
}

Player.prototype.cementRightDown = function() {
  var tempMove = this.moves[0];
  this.moves[0] = this.moves[2];
  this.moves[2] = this.moves[3];
  this.moves[3] = tempMove;
}

Player.prototype.cementRightUp = function() {
  var tempMove = this.moves[2];
  this.moves[2] = this.moves[0];
  this.moves[0] = this.moves[3];
  this.moves[3] = tempMove;
}

Player.prototype.switchHorizontal = function() {
  console.log("HERE");
  var tempMove = this.moves[3];
  this.moves[3] = this.moves[1];
  this.moves[1] = tempMove;
}
