class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    const homeDiv = document.getElementById("home");
    const circle = this.createCircleElement();
    homeDiv.appendChild(circle);
  }

  createCircleElement() {
    const circleDiv = document.createElement("div");
    circleDiv.className = "circle";
    circleDiv.style = {
      width: this.radius,
      height: this.radius,
      background: "#000",
    };
    return circleDiv;
  }
}

function setDimentions() {
  const dimentions = [];
  for (let i = 5; i <= 35; i += 5) {
    dimentions.push(i);
  }
  return dimentions;
}
const dimentions = setDimentions();

const circles = [];

dimentions.forEach((radius) => {
  circles.push(new Circle(radius));
});
circles.forEach((circle) => circle.draw());
