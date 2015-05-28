window.onload = function() {

  game = new Phaser.Game(576, 576, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  function preload() {
    genGlobals();
    boxQuarter = game.load.image('boxQuarter', '../assets/box_quarter.png')
    moves = game.load.spritesheet('moves', '../assets/moves.png',32,576,8)
    gameForeground = game.load.image('foreground', '../assets/foreground.png')

    rotateRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rotateLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    cementTop = game.input.keyboard.addKey(Phaser.Keyboard.UP);

    game.allMoves = [];
    game.turnDuration = 20;
    game.turnCountdown = game.turnDuration;
    game.id = 0;
  }

  function create() {

    player = new Player()
    player.create();

    foreground = game.add.sprite(0,0, 'foreground');

  }

  function update () {
    rotateRight.onDown.add(player.rotatePlayerRight, player);
    rotateLeft.onDown.add(player.rotatePlayerLeft, player);

    finishTurn();
    render();
  }

  function render () {
    player.view.drawSquare();
    foreground.bringToTop();
  }
};

function finishTurn() {
  if (game.turnCountdown <= 0) {
    moveMoves();
    destroyMoves();
    generateMoves();
    game.turnCountdown = game.turnDuration;
  } else {
    game.turnCountdown -= 1;
  }
}

function generateMoves() {
  color = COLORS[iRandomRange(0,COLORS.length - 1)];
  moveNum = iRandomRange(1,4);
  var sectors = SECTORS.slice(0);
  for(var i = 0; i < moveNum; i++){
    var sector = sectors[iRandomRange(0,sectors.length - 1)];
    sectors.splice(i,1);
    new Move(sector[0],sector[1],"Fire",10, color);
  }
}

function moveMoves() {
  for(var i = 0; i < game.allMoves.length; i++) {
    game.allMoves[i].move();
  }
}

function assignId() {
  game.id += 1;
  return game.id;
}

function destroyMoves() {
  for(var i = 0; i < game.allMoves.length; i++) {
    if(game.allMoves[i].position >= 8) {
      game.allMoves[i].gameObject.destroy();
      game.allMoves.splice(i,1);
      i -= 1;
    }
  }
}
