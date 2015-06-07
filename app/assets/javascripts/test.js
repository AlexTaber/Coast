window.onload = function() {

  game = new Phaser.Game(576, 576, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  function preload() {
    game.stage.backgroundColor = '#EBD6FF';
    genGlobals();
    boxQuarter = game.load.image('boxQuarter', '../assets/box_quarter.png')
    moves = game.load.spritesheet('moves', '../assets/moves.png',32,576,8)
    gameForeground = game.load.image('foreground', '../assets/foreground.png')
    setUpGraphics();

    right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);


    game.allMoves = [];
    game.turnDuration = 100;
    game.turnCountdown = game.turnDuration;
    game.id = 0;
    game.streak = 0;
    game.multiplyer = 1;
    game.score = 0;
  }

  function create() {

    player = new Player()
    player.create();

    foreground = game.add.sprite(0,0, 'foreground');
    foreground.tint = 0xF5EBFF
  }

  function update () {
    right.onUp.add(player.rotatePlayerRight, player);
    up.onUp.add(player.rotatePlayerRight, player);
    left.onUp.add(player.rotatePlayerLeft, player);
    down.onUp.add(player.rotatePlayerLeft, player);

    finishTurn();
    render();
  }

  function render () {
    player.view.drawSquare();
    foreground.bringToTop();
    graphics.bringToFront();
  }
};

function finishTurn() {
  if (game.turnCountdown <= 0) {
    var success = checkSuccess();
    addScore(success);
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

function addScore(success) {
  if(success == -1) {
    game.multiplyer = 1;
    game.streak = 0;
  } else if(success > 0) {
    game.multiplyer = Math.min(Math.floor((game.streak / 4) + 1), 4)
    game.streak += 1;
    game.score += success * game.multiplyer;
    console.log(game.streak);
    console.log(game.score);
    console.log(game.multiplyer);
  }
}

function checkSuccess() {
  var times = 0;
  for (var i = 0; i < game.allMoves.length; i++) {
    if(game.allMoves[i].position == 7){
      times += 1;
      if(checkSuccessOfMove(game.allMoves[i]) == false) return -1;
    }
  }
  return times
}

function checkSuccessOfMove(move) {
  if(move.sector[1] == 1){
    if(player.moves[0].color != move.gameObject.tint){
      return false;
    }
  } else if(move.sector[0] == -1){
    if(player.moves[1].color != move.gameObject.tint){
      return false;
    }
  } else if(move.sector[1] == -1){
    if(player.moves[2].color != move.gameObject.tint){
      return false;
    }
  } else {
    if(player.moves[3].color != move.gameObject.tint){
      return false;
    }
  }
  return true;
}