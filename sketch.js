let palette = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "magenta",
  "brown",
  "white",
  "black"
];

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
  background(90);

  for (let i = 0; i < palette.length; i++) {
    push();
    fill(palette[i]);
    noStroke();
    rect(0, i * 20 + i, 20, 20);
    pop();
  }
}

function draw() {
  if (mouseIsPressed) {
    if (mouseX < 25 && mouseY < 215) {
      if (mouseY < 20) {
        stroke("red");
      } else if (mouseY < 41) {
        stroke("orange");
      } else if (mouseY < 62) {
        stroke("yellow");
      } else if (mouseY < 83) {
        stroke("green");
      } else if (mouseY < 104) {
        stroke("cyan");
      } else if (mouseY < 125) {
        stroke("blue");
      } else if (mouseY < 146) {
        stroke("magenta");
      } else if (mouseY < 167) {
        stroke("brown");
      } else if (mouseY < 188) {
        stroke("white");
      } else if (mouseY < 209) {
        stroke("black");
      }
    } else {
      strokeWeight(10);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}
