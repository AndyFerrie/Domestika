const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const randrgba = () => {
  return `rgba(${random.range(100, 255)}, ${random.range(0, 255)}, 
  ${random.range(150, 255)}, ${random.range(0.1, 1)})`
}

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cx = width * random.range(0.3, 0.6);
    const cy = height * random.range(0.3, 0.6);

    const w = width * 0.1;
    const h = width * 0.1;
    let x, y;
    
    const num = random.range(10, 50);
    const radius = width * 0.2;
    
    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

    context.fillStyle = randrgba();

    x = cx + radius * Math.sin(angle);
    y = cy + radius * Math.cos(angle);

    context.save();
    context.translate(cx, cy);
    context.rotate(-angle);

    context.lineWidth = random.range(1, 300);

    context.strokeStyle = randrgba();

    context.beginPath();
    context.arc(random.range(1, 50), random.range(3, 15), radius * random.range(0.1, 1.5), 
    slice * random.range(1, -8) , slice * random.range(1, 5));
    context.stroke();

    context.restore();

    }
  };
};

canvasSketch(sketch, settings);