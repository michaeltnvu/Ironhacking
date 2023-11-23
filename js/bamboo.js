class Bamboo {
  constructor() {
    this.bambooContainer = document.getElementById("bamboo-container");
    this.bambooList = [
      { value: "center1", img: "./images/bamboo/center_1.png" },
      { value: "center2", img: "./images/bamboo/center_2.png" },
      { value: "left", img: "./images/bamboo/obstacle_left.png" },
      { value: "right", img: "./images/bamboo/obstacle_right.png" },
    ];
    this.bambooArr = [this.bambooList[0]];
    this.init();
  }

  init() {
    for (let i = 1; i <= 4; i++) {
      this.bambooArr.push(
        this.bambooList[Math.floor(Math.random() * this.bambooList.length)]
      );
    }
    this.bambooArr.forEach((bamboo) => {
      const element = document.createElement("img");
      element.src = bamboo.img;
      this.bambooContainer.appendChild(element);
    });
  }

  addBamboo() {
    this.bambooArr.push(
      this.bambooList[Math.floor(Math.random() * this.bambooList.length)]
    );
    const element = document.createElement("img");
    element.src = this.bambooArr[this.bambooArr.length - 1].img;
    this.bambooContainer.appendChild(element);
  }

  removeBamboo() {
    this.bambooArr.shift();
    // consider adding classlist for animation as we remove child
    this.bambooContainer.removeChild(this.bambooContainer.firstChild);
  }
}
