window.onload = function() {

  game = new Phaser.Game(576, 576, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  function preload() {
    game.stage.backgroundColor = '#A7AEB4';
    genGlobals();
    boxQuarter = game.load.image('boxQuarter', '../assets/box_quarter.png')
    moves = game.load.spritesheet('moves', '../assets/moves.png',32,576,8)
    gameForeground = game.load.image('foreground', '../assets/foreground.png')

    rotateRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rotateLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    cementTop = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    cementBottom = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);


    game.allMoves = [];
    game.turnDuration = 80;
    game.turnCountdown = game.turnDuration;
    game.id = 0;
  }

  function create() {

    player = new Player()
    player.create();

    foreground = game.add.sprite(0,0, 'foreground');
    foreground.tint = 0x7C858F
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
  var colors = COLORS.slice(0);
  var moveNum = iRandomRange(1,3);
  var sectors = SECTORS.slice(0);
  for(var i = 0; i < moveNum; i++){
    var color_index = iRandomRange(0,colors.length - 1);
    var sector = sectors[iRandomRange(0,sectors.length - 1)];
    var color = colors[color_index];
    colors.splice(color_index,1);
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
