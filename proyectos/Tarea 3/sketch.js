let scaleActive = true; // Variable para controlar si la escala está activa

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(0);
  noFill();
  translate(width / 2, height / 2);
  let radio = 200;

  for (let i = 0; i < 200; i++) {
    push();
    rotate(sin(frameCount / 5 + i) * 300);

    
    // con chatgpt se probó que la figura dejase de cambiar su escala con los clicks del mouse
    
    // Solo cambiar la escala si scaleActive es true
    if (scaleActive) {
      scale(mouseX / 100);
    }

    // colores rectangulos
    let r1 = map(sin(frameCount / 2), -1, 1, 100, 255); 
    let g1 = map(sin(frameCount / 2), -1, 1, 0, 100);   
    let b1 = map(sin(frameCount / 2), -1, 1, 150, 255); 

    stroke(r1, g1, b1);
    rect(0, 0, 200 - i * 4, 200 - i * 2);

   // colores circulos
    let r2 = map(sin(frameCount / 3), -1, 1, 50, 150); 
    let g2 = map(sin(frameCount / 3), -1, 1, 150, 255); 
    let b2 = map(sin(frameCount / 3), -1, 1, 200, 255);  
    stroke(r2, g2, b2);
    ellipse(0, 0, 400 - i * 4, 400 - i * 4);

    pop();
  }
}

// Cambiar el estado de scaleActive cuando se hace clic con el mouse
function mousePressed() {
  scaleActive = !scaleActive; // Alternar entre true y false
}
