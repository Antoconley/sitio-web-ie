let purpleCircles = [];
let greenCircles = [];
let moving = true;
let bgColor = 0; // Variable para cambiar el color del fondo

function setup() {
  createCanvas(500, 500);
  noStroke();
  pixelDensity(2); // Aumentar la densidad de píxeles para un mejor efecto de difuminado
  
  // Crear 50 círculos morados (movimiento vertical)
  for (let i = 0; i < 50; i++) {
    purpleCircles.push(new PurpleCircle(random(width), random(height)));
  }
  
  // Crear 50 círculos verdes (movimiento horizontal)
  for (let i = 0; i < 50; i++) {
    greenCircles.push(new GreenCircle(random(width), random(height)));
  }
}

function draw() {
  background(bgColor, 10); // Fondo con transparencia para crear el efecto de difuminado
  
  if (moving) {
    // Mostrar y actualizar círculos morados
    for (let circle of purpleCircles) {
      circle.update();
      circle.display();
    }

    // Mostrar y actualizar círculos verdes
    for (let circle of greenCircles) {
      circle.update();
      circle.display();
    }
  }
}


// Clase para los círculos morados (movimiento vertical)
class PurpleCircle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.ySpeed = 3;
  }
  
  update() {
    this.y += this.ySpeed;
    
    // Rebotar en los bordes superior e inferior (evitar errores en las esquinas)
    if (this.y > height - this.radius) {
      this.y = height - this.radius;
      this.ySpeed *= -1;
    } else if (this.y < this.radius) {
      this.y = this.radius;
      this.ySpeed *= -1;
    }
  }
  
  display() {
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.radius * 2);
  }
}

// Clase para los círculos verdes (movimiento horizontal)
class GreenCircle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.xSpeed = 3;
  }
  
  update() {
    this.x += this.xSpeed;
    
    // Rebotar en los bordes izquierdo y derecho (evitar errores en las esquinas)
    if (this.x > width - this.radius) {
      this.x = width - this.radius;
      this.xSpeed *= -1;
    } else if (this.x < this.radius) {
      this.x = this.radius;
      this.xSpeed *= -1;
    }
  }
  
  display() {
    fill(0, 255, 150);
    ellipse(this.x, this.y, this.radius * 2);
  }
}
