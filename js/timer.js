class Timer {
  constructor() {
    this.timerContainer = document.getElementById("timer-container");
    this.timerBar = document.getElementById("timer-bar");
    this.audio = document.getElementById("gameAudio");
    this.source = document.getElementById("audioSource");
    this.timerContainer.appendChild(this.timerBar);
    this.timeRemaining = 400;
    this.bonusTime = 16;
    this.interval = null;
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timerBar.style.width = `${(this.timeRemaining / 400) * 100}%`;
      this.timerContainer.innerHTML = "";
      this.timerContainer.appendChild(this.timerBar);
      this.timeRemaining--;
    }, 10);
  }

  addBonusTime() {
    if (this.timeRemaining > 380 && this.timeRemaining < 400) {
      this.timeRemaining = 400;
    } else {
      this.timeRemaining += this.bonusTime;
    }
  }
}
