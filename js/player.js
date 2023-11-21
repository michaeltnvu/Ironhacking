class Player {
  constructor(gameScreen, left, top, width, height, image) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = `${image}`;
    this.element.style.position = "absolute";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);
  }

  moveRight() {
    this.element.src = "./images/character/right/attack_0_right.png";
    this.element.style.left = "252px";
  }

  moveLeft() {
    this.element.src = "./images/character/left/attack_0_left.png";
    this.element.style.left = "58px";
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();
  }
}
