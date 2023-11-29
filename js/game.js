class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.scoreContainer = document.getElementById("score-container");
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
    this.timer = new Timer();
    this.score = 0;
    this.highscore = localStorage.getItem("highscore")
      ? localStorage.getItem("highscore")
      : this.score;
    this.gameOver = false;
    this.gameInterval = null;
    this.audio = document.getElementById("gameAudio");
    this.source = document.getElementById("audioSource");
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.gameEndScreen.style.display = "none";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "inherit";
    this.gameLoop();
    this.timer.startTimer();
  }

  gameLoop() {
    this.displayScore(this.score);
    this.gameInterval = setInterval(() => {
      if (this.timer.timeRemaining <= 0) {
        this.gameIsOver();
      } else if (this.timer.timeRemaining <= 100) {
        this.toggleTilt(true);
      } else {
        this.toggleTilt(false);
      }
    }, 100);
  }

  toggleTilt(bool) {
    const timeContainer = document.getElementById("timer-container");
    if (bool) {
      timeContainer.classList.add("tilt-move");
    } else {
      timeContainer.classList.remove("tilt-move");
    }
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
    clearInterval(this.gameInterval);
    clearInterval(this.timer.interval);
    this.toggleTilt(false);
    this.audio.pause();
    this.gameScreen.style.display = "none";
    this.gameScreen.innerHTML = `
    <img src="./images/backdrop-start.png" alt="backdrop game" />
    <div id="timer-container">
      <div id="timer-bar"></div>
    </div>
    <div id="bamboo-container"></div>
    <div id="animation-container"></div>
    <div id="score-container"></div>
    `;
    this.gameEndScreen.style.display = "inherit";
    const gameOverTitle = document.createElement("img");
    gameOverTitle.setAttribute("id", "game-over");
    gameOverTitle.src = "./images/game_over.png";
    this.gameEndScreen.appendChild(gameOverTitle);
    let score = document.getElementById("your-score");
    score.innerHTML = this.score;
    this.gameOver = true;
    if (this.score > this.highscore) {
      localStorage.setItem("highscore", this.score);
    }
    const highscore = document.getElementById("highscore");
    highscore.innerHTML = this.highscore;
  }
}
