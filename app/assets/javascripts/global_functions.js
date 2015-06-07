function iRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

PIXI.Graphics.prototype.bringToFront = function() {
  if (this.parent) {
    var parent = this.parent;
    parent.removeChild(this);
    parent.addChild(this);
  }
}

function genGlobals() {
  COLORS = [
    0xFF0000,
    0x00FF00,
    0x0000FF,
    0xFFCC00
  ]

  SECTORS = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1]
  ]
}



