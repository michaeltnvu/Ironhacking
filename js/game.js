class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      58,
      646,
      209,
      151,
      "./images/character/left/attack_0_left.png"
    );
    this.monster = new Monster(4);
    this.height = 862;
    this.width = 524;
    this.obstacles = [];
    this.score = 0;
    this.gameOver = false;
    this.frames = 0;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "inherit";
    this.monster.createMonster();
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameOver) return;
    this.update();
  }

  update() {
    this.player.updatePosition();
  }

  gameOver() {
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "inherit";
  }
}
