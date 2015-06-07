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
    0xdd004e,
    0x0cb4d8,
    0x53b436,
    0xfff700
  ]

  SECTORS = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1]
  ]
}



