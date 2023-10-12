pelotas = [];
const NP = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NP; i++) {
    let pelota = new Pelota();
    pelotas.push(pelota);
  }
  print(pelotas);
}

function draw() {
  background(19, 103, 138);
  for (let i = 0; i < NP; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}
