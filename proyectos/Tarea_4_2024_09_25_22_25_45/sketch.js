let d; // almacenar ángulo de rotación
let div = 10; // segmentos en los que se divide el círculo (menos divisiones)
let sym = 360 / div; // cada segmento es más grande

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  pixelDensity(5);
}

function draw() {
  background(0, 10);
  stroke(150, 0, 255); // color morado
  strokeWeight(2);
  noFill();
  d = map(mouseX, 0, width, 0, 90);
  
  translate(width / 2, height / 2);
  
  for (let i = 0; i < 360; i += sym) {
    push();
    rotate(i);
    drawCircle(150); // círculo inicial más grande
    pop();
  }
}

function drawCircle(size) {
  ellipse(0, 0, size, size); // dibujar círculo en la posición actual

  if (size > 20) { // cambiar el tamaño mínimo a 20 para reducir recursividad
    push();
    rotate(d); // rotar en el ángulo calculado
    translate(0, -size * 0.7); // mover más lejos hacia afuera
    drawCircle(size * 0.6); // dibujar el siguiente círculo más pequeño
    pop();
    
    push();
    rotate(-d); // rotar en la dirección opuesta
    translate(0, -size * 0.7); // mover más lejos hacia afuera
    drawCircle(size * 0.6); // otro círculo más pequeño en la otra dirección
    pop();
  }
}
