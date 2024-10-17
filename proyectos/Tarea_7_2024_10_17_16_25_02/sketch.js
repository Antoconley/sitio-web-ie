let cam;
let images = [];

function preload() {
  // Cargar las imágenes
  images[0] = loadImage('IMG_1.JPG');
  images[1] = loadImage('IMG_2.JPG');
  images[2] = loadImage('IMG_4.JPG'); // Tercera esfera
  images[3] = loadImage('IMG_5.JPG'); // Cuarta esfera
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  
  // Configuración de la cámara
  cam = createCamera();
  
  ambientLight(50);
  directionalLight(255, 255, 255, -1, 0, 0);
}

function draw() {
  background(255);
  
  // Mover la cámara según la posición del mouse
  let camX = map(mouseX, 0, width, -500, 500);
  let camY = map(mouseY, 0, height, -500, 500);
  cam.setPosition(camX, camY, 300); // Ajusta la posición de la cámara
  cam.lookAt(0, 0, 0); // Mantiene la cámara mirando al origen
  
  // Dibujar las esferas
  for (let i = 0; i < 4; i++) {
    push();
    let x = (i % 2 === 0 ? -100 : 100); // Alternar entre -100 y 100 para la posición X
    let z = (i < 2 ? -100 : 100); // Alternar entre -100 y 100 para la posición Z
    translate(x, 0, z); // Posicionar cada esfera
    texture(images[i]); // Aplicar la textura de la imagen correspondiente
    sphere(100); // Dibuja la esfera con un radio de 100
    pop();
  }
}