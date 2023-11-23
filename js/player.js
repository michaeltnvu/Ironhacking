class Player {
  constructor(gameScreen, top, left, width, height, element) {
    this.gameScreen = gameScreen;
    this.element = document.createElement("img");
    this.element.src = `${element}`;
    this.element.style.position = "absolute";
    this.element.style.top = `${top}%`;
    this.element.style.left = `${left}%`;
    this.element.style.transform = "translate(-50%, -50%)";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.gameScreen.appendChild(this.element);
  }

  moveLeft() {
    const audio = new Audio();
    audio.src = "audio/cut.wav";
    audio.playbackRate = 2;
    audio.play();
    this.element.style.left = "30%";
    this.element.src = "./images/character/left/attack_0_left.png";
    this.element.classList.add("samurai_attack_left");
    setTimeout(() => {
      this.element.classList.remove("samurai_attack_left");
    }, 100);
  }

  moveRight() {
    const audio = new Audio();
    audio.src = "audio/cut.wav";
    audio.playbackRate = 2;
    audio.play();
    this.element.style.left = "70%";
    this.element.src = "./images/character/right/attack_0_right.png";
    this.element.classList.add("samurai_attack_right");
    setTimeout(() => {
      this.element.classList.remove("samurai_attack_right");
    }, 100);
  }
}
