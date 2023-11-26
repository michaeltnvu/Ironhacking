class Timer {
  constructor() {
    this.timerContainer = document.getElementById("timer-container");
    this.timerBar = document.getElementById("timer-bar");
    this.timerContainer.style.position = "absolute";
    this.timerContainer.style.top = "15%";
    this.timerContainer.style.left = "50%";
    this.timerContainer.style.transform = "translate(-50%, -50%)";
    this.timerContainer.style.width = "250px";
    this.timerContainer.style.height = "40px";
    this.timerContainer.style.backgroundColor = "black";
    this.timerContainer.style.border = "8px solid gold";
    this.timerContainer.style.boxShadow = "0 5px 50px black";
    this.timerContainer.style.zIndex = 2;
    this.timerBar.style.height = "100%";
    this.timerBar.style.backgroundColor = "red";
    this.timerContainer.appendChild(this.timerBar);
    this.timeRemaining = 500;
    this.bonusTime = 22;
    this.interval = null;
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timerBar.style.width = `${(this.timeRemaining / 500) * 100}%`;
      this.timerContainer.innerHTML = "";
      this.timerContainer.appendChild(this.timerBar);
      this.timeRemaining--;
    }, 10);
    if (this.timeRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  addBonusTime() {
    if (this.timeRemaining >= 475 && this.timeRemaining < 500) {
      this.timeRemaining = 500;
    } else {
      this.timeRemaining += this.bonusTime;
    }
  }
}
