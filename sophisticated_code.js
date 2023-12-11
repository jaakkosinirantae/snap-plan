/* sophisticated_code.js */

// This code generates a Mandelbrot fractal and renders it on a HTML canvas

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const MAX_ITERATIONS = 200;
const ZOOM = 200;
const X_OFFSET = WIDTH / 2;
const Y_OFFSET = HEIGHT / 2;

function complexSquareAdd(real, imag, cReal, cImag) {
    const r2 = real * real - imag * imag;
    const i2 = 2 * real * imag;
    return [r2 + cReal, i2 + cImag];
}

function mandelbrot(x, y) {
    let real = 0;
    let imag = 0;
    let iteration = 0;
  
    while (iteration < MAX_ITERATIONS && (real * real + imag * imag) <= 4) {
        [real, imag] = complexSquareAdd(real, imag, x, y);
        iteration++;
    }
  
    return iteration;
}

function mapColor(iteration) {
    const hue = (360 * iteration) / MAX_ITERATIONS;
    return `hsl(${hue}, 100%, 50%)`;
}

function renderMandelbrot() {
    for (let px = 0; px < WIDTH; px++) {
        for (let py = 0; py < HEIGHT; py++) {
            const x = (px - X_OFFSET) / ZOOM;
            const y = (py - Y_OFFSET) / ZOOM;
            const iteration = mandelbrot(x, y);
            const color = mapColor(iteration);
            ctx.fillStyle = color;
            ctx.fillRect(px, py, 1, 1);
        }
    }
}

renderMandelbrot();