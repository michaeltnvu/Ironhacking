class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.height = 862;
    this.width = 524;
    this.player = new Player(
      this.gameScreen,
      68.5,
      30,
      262,
      188,
      "./images/character/left/attack_0_left.png"
    );
    this.gameOver = false;
    this.frames = 0;
    // Placeholder for score
    // Placeholder for timer
    // Placeholder for score
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "inherit";
  }

  gameLoop() {}
  update() {}
  gameOver() {}
}
