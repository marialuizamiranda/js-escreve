function setup() {
  createCanvas(600, 600);
  background("pink");
}

function draw() {
  stroke("black");
  fill("lightblue");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 10, 10);
  }
}

