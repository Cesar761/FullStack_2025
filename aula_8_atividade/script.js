let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

let img = new Image();
img.src = "Basquete.png"

let largura = 80;
let altura = 80;

let x = 0;
let y = 0;

document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    x = x_mouse - largura / 2;
    y = y_mouse - altura / 2;

    x = Math.max(0, Math.min(canvas.width - largura, x));
    y = Math.max(0, Math.min(canvas.height - altura, y));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, largura, altura);
});