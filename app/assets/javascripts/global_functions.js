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
    0xFF6961,
    0x779ECB,
    //two
    // 0xdd004e,
    // 0x0cb4d8

    //four
    0xFFB347,
    0x77DD77

    //three
    // 0xdd004e,
    // 0xEAEA32
  ]

  COLORS_KEY = {
    0xdd004e: "red",
    0x0cb4d8: "blue",
    0x53b436: "green",
    0xEAEA32: "yellow"
  }


  SECTORS = [0,1,2,3]

  SONGS =[
    [game.add.audio('awake'), 146, 1.1],
    [game.add.audio('see'), 130, .86],
    [game.add.audio('take'), 138, .94],
  ]
}



