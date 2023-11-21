class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    // Placeholder for score
    this.player = new Player();
    this.gameOver = false;
    this.frames = 0;
    // Placeholder for timer
    // Placeholder for score
  }

  start() {}
  gameLoop() {}
  update() {}
  gameOver() {}
}
