let particles = [];

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  background(0, 25);  // Fondo con opacidad para crear el eco de las partículas

  if (particles.length < 200) {  // Más partículas
    for (let i = 0; i < 10; i++) {  // Añadir más partículas en cada ciclo
      particles.push(new Particle(width / 2, height / 2));
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor(x, y) {
    this.center = createVector(x, y);
    this.angle = random(TWO_PI);
    this.radius = random(50, 300);
    this.angularSpeed = random(0.01, 0.03);
    this.alpha = random(100, 255);
    this.type = random(['circle', 'square']);  // Tipo de partícula: círculo o cuadrado
    this.r = random(10, 40);
    this.gravity = 0.1;
    this.velocity = 0;
    this.zigzag = random(-0.05, 0.05);  // Movimiento zigzag

    // Asignar color según el tipo
    if (this.type === 'circle') {
      this.color = color(10, 500, 150, this.alpha); // Celeste
    } else {
      this.color = color(147, 112, 219, this.alpha); // Morado
    }
  }

  update() {
    this.angle += this.angularSpeed + this.zigzag;  // Cambia ligeramente el ángulo para crear un movimiento zigzag
    this.velocity += this.gravity;
    this.center.y += this.velocity;

    if (this.center.y > height) {
      this.center.y = 0;
      this.velocity = 0;
    }
  }

  show() {
    let x = this.center.x + cos(this.angle) * this.radius;
    let y = this.center.y + sin(this.angle) * this.radius;

    fill(this.color);
    noStroke();

    if (this.type === 'circle') {
      ellipse(x, y, this.r, this.r);
    } else {
      rect(x, y, this.r, this.r);
    }
  }
}