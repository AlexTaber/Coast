var Hud = function() {
  this.graphics = game.add.graphics(0,0);
  this.feedback = game.add.sprite(124,284, 'feedback');
  this.feedback.alpha = 0;
  this.multiplyerText = game.add.text(game.world.centerX, 60, this.getMultText(), {
      font: "20px Arial",
      fill: "#ff0044",
      align: "center"
  });
  this.scoreText = game.add.text(game.world.centerX, 100, this.getScoreText(), {
      font: "20px Arial",
      fill: "#ff0044",
      align: "center"
  });
}

//view
Hud.prototype.draw = function() {
  this.graphics.clear();

  this.graphics.lineStyle(0);
  this.graphics.beginFill(0x3b0760, 0.8);
  this.graphics.drawRect(0, 0, 320, 160);
  this.graphics.endFill();

  //feedback
  this.feedback.alpha = Math.max(this.feedback.alpha - .02, 0);

  //text
  this.multiplyerText.setText(this.getMultText());
  this.scoreText.setText(this.getScoreText());
}

Hud.prototype.setSuccess = function() {
  this.feedback.tint = 0x00FF00;
  this.feedback.alpha = .7;
}

Hud.prototype.setFail = function() {
  this.feedback.tint = 0xFF0000;
  this.feedback.alpha = .7;
}

Hud.prototype.getMultText = function() {
  return String(Math.floor(game.multiplyer));
}

Hud.prototype.getScoreText = function() {
  return String(game.score);
}