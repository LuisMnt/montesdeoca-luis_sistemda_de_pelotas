let miPelota;
let frutas = ["manzana", "pera", "piña"];

for (let i = 0; i < 10; i++) {
  console.log(i);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  miPelota = new Pelota();
}

function draw() {
  background(0);
  circle(mouseX, mouseY, 20);
  miPelota.update(300);
  miPelota.display();
}
