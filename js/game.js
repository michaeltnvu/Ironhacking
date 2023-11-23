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
    this.bambooClass = new Bamboo();
    this.score = 0;
    // Placeholder for timer
    // Placeholder for leaderboard
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "inherit";
    this.gameLoop();
  }

  gameLoop() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.bambooClass.removeBamboo();
        this.player.move("left");
        if (this.bambooClass.bambooArr[0].value === "left") {
          this.player.flattened("left");
          this.gameIsOver();
        } else {
          this.score++;
        }
        this.bambooClass.addBamboo();
      } else if (e.key === "ArrowRight") {
        this.bambooClass.removeBamboo();
        this.player.move("right");
        if (this.bambooClass.bambooArr[0].value === "right") {
          this.player.flattened("right");
          this.gameIsOver();
        } else {
          this.score++;
        }
        this.bambooClass.addBamboo();
      }
    });
  }

  gameIsOver() {
    setTimeout(() => {
      alert("Game over");
    }, 100);
  }
}
