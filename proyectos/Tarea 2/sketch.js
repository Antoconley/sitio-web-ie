let numCircles = 100;          // número de círculos
let maxSize = 100;            // tamaño máximo de los círculos
let minSize = 20;             // tamaño mínimo de los círculos
let alphaValue = 255;         // valor de transparencia máximo
let circles = [];             // almacenar las posiciones y propiedades de los círculos

function setup() {
  createCanvas(600, 400);
  noStroke();
  
  // inicio círculos con posiciones, tamaños, colores y velocidades aleatorios
  for (let i = 0; i < numCircles; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(minSize, maxSize),
      alpha: random(100, alphaValue),
      xSpeed: random(-1, 1),
      ySpeed: random(-1, 1),
      color: random() > 0.5 ? [128, 0, 128] : [102, 0, 102]  
      // morado claro y oscuro
    });
  }
}

function draw() {
  background(135, 206, 250); // fondo celeste claro
  
  for (let i = 0; i < numCircles; i++) {
    let circle = circles[i];

    // actualiza la posición del círculo
    circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;
    
    // rebote en los bordes del lienzo
    if (circle.x > width || circle.x < 0) {
      circle.xSpeed *= -1;
    }
    if (circle.y > height || circle.y < 0) {
      circle.ySpeed *= -1;
    }

    // coloca el color morado con transparencia
    fill(circle.color[0], circle.color[1], circle.color[2], circle.alpha);

    // dibuja el círculo
    ellipse(circle.x, circle.y, circle.size);
  }
}


