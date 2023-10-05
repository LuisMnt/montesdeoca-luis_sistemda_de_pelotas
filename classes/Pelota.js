class Pelota {
  constructor() {
    this.posX = random(50, windowWidth - 50);
    this.posY = random(50, 70);
    this.velX = random(-1, 1);
    this.velY = 0;
    this.acelY = 0.98;

    this.diam = int(random(5, 60));
    this.rad = this.diam / 2;
    this.collor = color(random(0, 255), random(50, 255), random(30, 255));
  }
  update(_piso) {
    if (this.posY + this.rad <= _piso) {
      this.velY += this.acelY;
      this.posY += this.velY;
    } else {
      this.velY *= -1;
      this.posY += this.velY;
    }
  }

  display() {
    fill(this.collor);
    circle(this.posX, this.posY, this.diam);
  }
}
