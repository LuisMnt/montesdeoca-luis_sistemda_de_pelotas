class Pelota {
  constructor() {
    this.posX = random(50, windowWidth - 50);
    this.posY = random(50, 130);
    this.velX = random(-8, 8);
    this.velY = 0.0;
    this.acelY = 0.98;

    this.diam = int(random(5, 50));
    this.rad = this.diam / 2;

    // Establece un color con opacidad aleatoria
    this.colorin = color(
      random(255),
      random(255),
      random(255),
      random(100, 255)
    );
  }

  update(_piso) {
    if (this.posY + this.rad <= _piso) {
      this.velY += this.acelY;
      this.posY += this.velY;
    } else {
      this.velY *= -1.0;
      this.posY += this.velY;
      this.colorin = color(
        random(255),
        random(255),
        random(255),
        random(100, 255)
      );
      this.diam = int(random(20, 500));
    }

    if (this.posX > windowWidth) {
      this.velX *= -1;
    }
    if (this.posX < 30) {
      this.velX *= -1;
    }
    this.posX += this.velX;
  }

  display() {
    fill(this.colorin);
    circle(this.posX, this.posY, this.diam);
  }
}
