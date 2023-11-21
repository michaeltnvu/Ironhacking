class Monster {
  constructor(amount) {
    this.amount = amount;
    this.container = document.getElementById("monster");
    this.createMonster();
  }

  createMonster() {
    for (let i = 1; i <= this.amount; i++) {
      const monsterImage = document.createElement("div");
      monsterImage.style.backgroundImage = `url(./images/center/blockerMad.png)`;
      monsterImage.style.backgroundRepeat = "no-repeat";
      monsterImage.style.backgroundSize = "cover";
      monsterImage.style.height = "100px";
      monsterImage.style.width = "100px";
      this.container.appendChild(monsterImage);
    }
    // document.body.appendchild(this.container);
  }
}
