let animal1, animal2, animal3;
let bearImag, catImage, monkeyImage; 

function preload() {
  
  bearImag = loadImage('/assets/bear.jpg');
  catImage = loadImage('/assets/cat.jpg');
  monkeyImage = loadImage('/assets/monkey.jpg');
}

class Animal {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
  }

  display() {
    image(this.img, this.x, this.y);
  }
  
  moveX(deltaX) {
    this.x += deltaX;
  }
  
  moveY(deltaY) {
    this.y += deltaY;
  }
}

function setup() {
  createCanvas(400, 600);
  
  animal1 = new Animal(20, 20, bearImag);
  animal2 = new Animal(50, 50, catImage);
  animal3 = new Animal(100, 100, monkeyImage);
}

function draw() {
  background(255);
  
  animal1.display();
  animal2.display();
  animal3.display();
}

function keyPressed() {
  let step = 10;

  if (key === "w" || key === "W") {
    animal1.moveY(-step);
    animal2.moveY(-step);
    animal3.moveY(-step);
  } else if (key === "s" || key === "S") {
    animal1.moveY(step);
    animal2.moveY(step);
    animal3.moveY(step);
  } else if (key === "a" || key === "A") {
    animal1.moveX(-step);
    animal2.moveX(-step);
    animal3.moveX(-step);
  } else if (key === "d" || key === "D") {
    animal1.moveX(step);
    animal2.moveX(step);
    animal3.moveX(step);
  }
}