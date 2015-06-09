window.onload = function() {

  game = new Phaser.Game(320, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  function preload() {
    game.stage.backgroundColor = '#EBD6FF';
    boxQuarter = game.load.image('boxQuarter', '../assets/box_quarter.png')
    //gameForeground = game.load.image('foreground', '../assets/foreground.png')
    feedback = game.load.image('feedback', '../assets/feedback.png')
    game.load.audio('awake', '../assets/awake.mp3');
    game.load.audio('see', '../assets/see.mp3');
    game.load.audio('take', '../assets/take.mp3');
    genGlobals();

    right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

    game.sectors = 4
    game.music = pickSong();
    game.allMoves = [];
    game.allCircles = [];
    game.originalTurnDuration = game.music[1];
    game.turnDuration = game.originalTurnDuration;
    game.turnCountdown = game.turnDuration;
    game.originalPlaybackRate = game.music[2];
    game.id = 0;
    game.streak = 0;
    game.multiplyer = 1;
    game.score = 0;
    game.prevCurrentTime = -1;
    game.gameOver = false;
  }

  function create() {

    music = game.music[0];
    game.sound.setDecodedCallback([ music ], function() {
      music.play();
      music._sound.playbackRate.value = game.originalPlaybackRate
    }, this);

    player = new Player()
    player.create();

    // foreground = game.add.sprite(0,160, 'foreground');
    // foreground.tint = 0xF5EBFF

    new Circles();
    hud = new Hud();
  }

  function update () {
    if(game.gameOver == false){
      right.onUp.add(player.rotatePlayerRight, player);
      up.onUp.add(player.rotatePlayerRight, player);
      left.onUp.add(player.rotatePlayerLeft, player);
      down.onUp.add(player.rotatePlayerLeft, player);

      endGame();
      finishTurn();
      moveMoves();
      moveCircles();
      render();
    }
  }

  function render () {
    player.view.drawSelf();
    for(var i = 0; i < game.allMoves.length; i++) {
      game.allMoves[i].draw();
    }

    for(var i = 0; i < game.allCircles.length; i++) {
      game.allCircles[i].draw();
    }
    hud.draw();
    hud.graphics.bringToFront();
    //foreground.bringToTop();
    hud.feedback.bringToTop();
  }
};

function finishTurn() {
  if (game.turnCountdown <= 0) {
    var success = checkSuccess();
    addScore(success);
    destroyMoves();
    generateMoves();
    game.turnCountdown = game.turnDuration;
    new Circles();
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
    var sector_index = iRandomRange(0,sectors.length - 1)
    var sector = sectors[sector_index];
    var color = colors[color_index];
    colors.splice(color_index,1);
    sectors.splice(sector_index,1);
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
    if(game.allMoves[i].radius < 64) {
      game.allMoves[i].graphics.destroy();
      game.allMoves.splice(i,1);
      i -= 1;
      console.log("DESTROYED")
    }
  }
}

function addScore(success) {
  if(success == -1) {
    hud.setFail();
    speedDownMusic();
    game.multiplyer = Math.max(1, game.multiplyer - 0.5);
    game.streak = 0;
  } else if(success > 0) {
    hud.setSuccess();
    speedUpMusic();
    game.multiplyer = game.multiplyer + 0.25;
    game.streak += 1;
    game.score += success * Math.floor(game.multiplyer);
  }
}

function checkSuccess() {
  var times = 0;
  for (var i = 0; i < game.allMoves.length; i++) {
    if(game.allMoves[i].radius < 64){
      times += 1;
      if(checkSuccessOfMove(game.allMoves[i]) == false) return -1;
    }
  }
  return times
}

function checkSuccessOfMove(move) {
  if(move.sector[1] == 1){
    if(player.moves[0].color != move.color){
      return false;
    }
  } else if(move.sector[0] == -1){
    if(player.moves[1].color != move.color){
      return false;
    }
  } else if(move.sector[1] == -1){
    if(player.moves[2].color != move.color){
      return false;
    }
  } else {
    if(player.moves[3].color != move.color){
      return false;
    }
  }
  return true;
}

function moveCircles() {
  destroyCircles();
  for(var i = 0; i < game.allCircles.length; i++) {
    game.allCircles[i].move();
  }
}

function destroyCircles() {
  for(var i = 0; i < game.allCircles.length; i++) {
    if(game.allCircles[i].radius < 72) {
      game.allCircles[i].graphics.destroy();
      game.allCircles.splice(i,1);
      i -= 1;
    }
  }
}

function speedUpMusic() {
  music._sound.playbackRate.value += 0.01;
  game.turnDuration -= game.originalTurnDuration * 0.01;
}

function speedDownMusic() {
  music._sound.playbackRate.value -= 0.02;
  music._sound.playbackRate.value = Math.max(music._sound.playbackRate.value, game.originalPlaybackRate );
  game.turnDuration += game.originalTurnDuration * 0.02;
  game.turnDuration = Math.min(game.originalTurnDuration, game.turnDuration);
}

function endGame() {
  if(music.isPlaying == false && music.isDecoding == false && music.currentTime > 0) {
    game.gameOver = true;
  }
}

function pickSong() {
  return SONGS[iRandomRange(0,SONGS.length - 0.99)];
}