function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);
  noStroke();
  let anchura = 30;
  let gap = 10;

  for (let x = anchura; x < windowWidth - anchura; x += anchura + gap) {
    for (let y = anchura; y < windowHeight - anchura; y += anchura + gap) {
      fill(190);
      square(x, y, anchura);
    }
  }
}

// let miPelota;
// let frutas = ["manzana", "pera", "piña"];

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   miPelota = new Pelota();
// }

// function draw() {
//   background(0);
//   circle(mouseX, mouseY, 20);
//   miPelota.update(300);
//   miPelota.display();
// }
