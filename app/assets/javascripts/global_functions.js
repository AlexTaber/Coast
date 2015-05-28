function iRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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



