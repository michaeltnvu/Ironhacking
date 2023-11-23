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

  move(direction) {
    const audio = new Audio();
    audio.src = "./audio/cut.wav";
    audio.playbackRate = 2;
    audio.play();
    if (direction === "left") {
      this.element.src = "./images/character/left/attack_0_left.png";
      this.element.classList.add("samurai_attack_left");
      this.element.style.left = "30%";
      setTimeout(() => {
        this.element.classList.remove("samurai_attack_left");
      }, 100);
    } else if (direction === "right") {
      this.element.src = "./images/character/right/attack_0_right.png";
      this.element.classList.add("samurai_attack_right");
      this.element.style.left = "70%";
      setTimeout(() => {
        this.element.classList.remove("samurai_attack_right");
      }, 100);
    }
  }

  flattened(direction) {
    const audio = new Audio();
    audio.src = "./audio/bonk.mp3";
    audio.playbackRate = 3;
    audio.play();
    switch (direction) {
      case "left":
        this.element.src = "./images/character/left/duck_left.png";
        break;
      case "right":
        this.element.src = "./images/character/right/duck_right.png";
        break;
    }
  }
}
