const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = '100';
// context.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) 
    return;
    console.log(e)
    context.strokeStyle = `hsl(${color}, 100%, 50%)`;
    // start from
    context.beginPath();
    // move to
    context.moveTo(lastX, lastY);
    // go to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];


    color++;
    if(color >= 360) {
        color = 0;
    }

    if(context.lineWidth >= 100 || context.lineWidth <= 1) {
        direction = !direction;
    }

    if(direction) {
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }
};

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isdrawing = false);