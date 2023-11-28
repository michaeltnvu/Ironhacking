window.onload = function () {
  const startBtn = document.getElementById("start-button");
  const restartBtn = document.getElementById("restart-button");
  const audio = document.getElementById("gameAudio");
  const source = document.getElementById("audioSource");
  audio.volume = 0.1;
  let game;

  function startGame() {
    game = null;
    game = new Game();
    game.start();
    source.src = "./audio/level-1.wav";
    audio.load();
  }

  startBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", startGame);

  document.addEventListener("keydown", (e) => {
    if (!game.gameOver) {
      if (e.key === "ArrowLeft") {
        game.bambooClass.removeBambooRight();
        game.player.move("left");
        if (game.bambooClass.bambooArr[0].value === "left") {
          game.player.bonk("left");
          setTimeout(() => {
            game.gameIsOver();
          }, 250);
        } else {
          game.score++;
          game.displayScore(game.score);
          game.timer.addBonusTime();
        }
        game.bambooClass.addBamboo();
      } else if (e.key === "ArrowRight") {
        game.bambooClass.removeBambooLeft();
        game.player.move("right");
        if (game.bambooClass.bambooArr[0].value === "right") {
          game.player.bonk("right");
          setTimeout(() => {
            game.gameIsOver();
          }, 250);
        } else {
          game.score++;
          game.displayScore(game.score);
          game.timer.addBonusTime();
        }
        game.bambooClass.addBamboo();
      }
    }
  });
};
