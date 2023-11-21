window.onload = function () {
  const startBtn = document.getElementById("start-button");
  const restartBtn = document.getElementById("restart-button");
  let game;

  startBtn.addEventListener("click", () => {
    game = new Game();
    startGame();
  });

  restartBtn.addEventListener("click", () => {
    location.reload();
  });

  function startGame() {
    game.start(); // Game class
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        // move player left
      } else if (e.key === "ArrowRight") {
        // move player right
      }
    });
  }
};
