window.onload = function () {
  const startBtn = document.getElementById("start-button");
  const restartBtn = document.getElementById("restart-button");
  let game;

  startBtn.addEventListener("click", () => {
    game = new Game();
    game.start();
  });

  // restartBtn.addEventListener("click", () => {
  //   location.reload();
  // });
};
