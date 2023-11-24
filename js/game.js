class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.scoreContainer = document.getElementById("score-container");
    this.scoreContainer.style.display = "flex";
    this.scoreContainer.style.justifyContent = "center";
    this.scoreContainer.style.position = "absolute";
    this.scoreContainer.style.width = "100%";
    this.scoreContainer.style.height = "50px";
    this.scoreContainer.style.top = "88%";
    this.scoreContainer.style.left = "50%";
    this.scoreContainer.style.transform = "translate(-50%, -50%)";
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
    setInterval(() => {
      this.displayScore(this.score);
    }, this.score);
    this.displayScore(this.score);
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

  displayScore(num) {
    const scoreString = num.toString();
    this.scoreContainer.innerHTML = "";
    for (let i = 0; i < scoreString.length; i++) {
      const numImage = document.createElement("img");
      numImage.src = `./images/numbers/${scoreString[i]}.png`;
      numImage.alt = scoreString[i];
      this.scoreContainer.appendChild(numImage);
    }
  }

  gameIsOver() {
    setTimeout(() => {
      alert("Game Over");
    }, 100);
  }
}
