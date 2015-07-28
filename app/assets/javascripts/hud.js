var Hud = function() {
  this.graphics = game.add.graphics(0,0);
  this.feedback = game.add.graphics(player.x,player.y);
  this.feedback.radius = 64
  this.multiplyerText = game.add.text(game.world.centerX - 15, 30, this.getMultText(), {
      font: "28px Arial",
      fill: "#FF6961",
      align: "center"
  });
  this.scoreText = game.add.text(game.world.centerX - 6, 100, this.getScoreText(), {
      font: "20px Arial",
      fill: "#FF6961",
      align: "center"
  });
}

//view
Hud.prototype.draw = function() {
  this.graphics.clear();

  //cross lines
  if (game.sectors == 4){
    this.graphics.lineStyle(6, 0xF5EBFF);
    this.graphics.moveTo(50,210);
    this.graphics.lineTo(270,430);

    this.graphics.lineStyle(6, 0xF5EBFF);
    this.graphics.moveTo(270,210);
    this.graphics.lineTo(50,430);
  } else if(game.sectors == 3) {
    this.graphics.lineStyle(6, 0xF5EBFF);
    this.graphics.moveTo(160,160);
    this.graphics.lineTo(160,320);

    this.graphics.lineStyle(6, 0xF5EBFF);
    this.graphics.moveTo(296,396);
    this.graphics.lineTo(160,320);

    this.graphics.lineStyle(6, 0xF5EBFF);
    this.graphics.moveTo(21,396);
    this.graphics.lineTo(160,320);
  }

  //circle outline
  this.graphics.lineStyle(6, 0xF5EBFF, 1);
  this.graphics.drawCircle(160, 320, 312)
  this.graphics.bringToFront();

  //top ui
  // this.graphics.lineStyle(0);
  // this.graphics.beginFill(0x3b0760, 0.8);
  // this.graphics.drawRect(0, 0, 320, 160);
  // this.graphics.endFill();

  //feedback
  this.feedback.alpha = Math.max(this.feedback.alpha - .02, 0);
  this.feedback.radius += 4
  this.feedback.clear();
  this.feedback.lineStyle(12, this.feedback.tint);
  this.feedback.drawCircle(0,0,this.feedback.radius);
  this.feedback.bringToFront();


  //text/score gui
  this.graphics.beginFill(0xF5EBFF);
  this.graphics.drawCircle(game.world.centerX, 45, 60);
  this.graphics.endFill();
  this.multiplyerText.setText("x " + this.getMultText());
  this.multiplyerText.position.x = this.centerText(this.multiplyerText, game.world.centerX);
  this.scoreText.setText(this.getScoreText());
  this.scoreText.position.x = this.centerText(this.scoreText, game.world.centerX);
}

Hud.prototype.setSuccess = function() {
  this.feedback.radius = 64
  this.feedback.tint = 0x00FF00;
  this.feedback.alpha = .7;
}

Hud.prototype.setFail = function() {
  this.feedback.radius = 64
  this.feedback.tint = 0xFF0000;
  this.feedback.alpha = .7;
}

Hud.prototype.getMult = function() {
  return Math.floor(game.multiplyer);
}

Hud.prototype.getMultText = function() {
  return String(Math.floor(game.multiplyer));
}

Hud.prototype.getScoreText = function() {
  return String(game.score);
}

Hud.prototype.centerText = function(string, x) {
  return x - (string.width/2)
}