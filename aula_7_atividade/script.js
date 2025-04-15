let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//Quadrado
function desenhar_quadrado(ctx, x, y, size, fillColor){
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, size, size);
    ctx.closePath();
}
  
//Retângulo
function desenhar_retangulo(ctx, x, y, width, height, fillColor){
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, width, height);
    ctx.closePath();
}
  
//Círculo
function desenhar_circulo(ctx, x, y, radius, fillColor, strokeColor = null, lineWidth = 1){
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

    if(strokeColor){
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
    }

    ctx.closePath();
}
  
//Arco
function desenhar_arco(ctx, x, y, radius, startAngle, endAngle, strokeColor, lineWidth = 1){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();
    ctx.closePath();
}
  
//Linha
function desenhar_linha(ctx, x1, y1, x2, y2, strokeColor, lineWidth = 1){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}
  
//Texto
function drawText(ctx, text, x, y, font, fillColor, strokeColor = null, align = 'center', lineWidth = 1){
    ctx.beginPath();
    ctx.font = font;
    ctx.textAlign = align;
    ctx.lineWidth = lineWidth;
    if (strokeColor) {
        ctx.strokeStyle = strokeColor;
        ctx.strokeText(text, x, y);
    }
    ctx.fillStyle = fillColor;
    ctx.fillText(text, x, y);
    ctx.closePath();
}

//Triângulo
function desenhar_triangulo(ctx, x1, y1, x2, y2, x3, y3, fillColor){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
}

//--------------------Canvas 1----------------------------------------------
desenhar_quadrado(ctx, 0, 0, 300, 'white');

desenhar_quadrado(ctx, 0, 0, 45, 'blue');

desenhar_quadrado(ctx, 255, 0, 45, 'red');

desenhar_quadrado(ctx, 0, 250, 25, 'yellow');
desenhar_quadrado(ctx, 0, 275, 25, 'yellow');
desenhar_quadrado(ctx, 25, 275, 25, 'yellow');

desenhar_quadrado(ctx, 275, 250, 25, 'black');
desenhar_quadrado(ctx, 275, 275, 25, 'black');
desenhar_quadrado(ctx, 250, 275, 25, 'black');

desenhar_quadrado(ctx, 0, 125, 25, 'aqua');
desenhar_quadrado(ctx, 0, 150, 25, 'aqua');

desenhar_quadrado(ctx, 275, 137.5, 25, 'aqua');

desenhar_quadrado(ctx, 115, 150, 35, 'red');

desenhar_linha(ctx, 45, 45, 150, 150, 'blue');

desenhar_linha(ctx, 255, 45, 150, 150, 'red');

desenhar_linha(ctx, 0, 150, 300, 150, 'green');

desenhar_linha(ctx, 150, 150, 150, 255, 'black');

desenhar_circulo(ctx, 150, 300, 45, 'aqua', 'green');

desenhar_circulo(ctx, 60, 220, 15, 'yellow', 'green');
desenhar_circulo(ctx, 240, 220, 15, 'yellow', 'green');

desenhar_circulo(ctx, 150, 110, 15, 'aqua', 'blue');

desenhar_arco(ctx, 150, 300, 60, 1.5*Math.PI, 1*Math.PI, 'green');

desenhar_arco(ctx, 150, 300, 80, 2*Math.PI, 1.5*Math.PI, 'green');

desenhar_arco(ctx, 150, 150, 65, 1*Math.PI, 0*Math.PI, 'green');

desenhar_arco(ctx, 135, 150, 70, 1*Math.PI, 1.3*Math.PI, 'green');

desenhar_arco(ctx, 165, 150, 70, 1.7*Math.PI, 2*Math.PI, 'green');

drawText(ctx, "Canvas", 150, 50, font = '20px Arial', 'black')

//--------------------Canvas 2----------------------------------------------

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

desenhar_quadrado(ctx2, 0, 0, 300, 'aquamarine');

desenhar_retangulo(ctx2, 0, 220, 300, 80, 'gray');
desenhar_retangulo(ctx2, 0, 220, 30, 80, 'dodgerblue');
desenhar_retangulo(ctx2, 0, 265, 85, 35, 'dodgerblue');
desenhar_retangulo(ctx2, 30, 175, 20, 45, 'saddlebrown');
desenhar_retangulo(ctx2, 110, 132, 80, 88, 'saddlebrown');
desenhar_retangulo(ctx2, 140, 170, 20, 50, '#684424');
desenhar_retangulo(ctx2, 245, 225, 20, 45, 'saddlebrown');

desenhar_circulo(ctx2, -20, 220, 50, 'dodgerblue');
desenhar_circulo(ctx2, 90, 300, 35, 'dodgerblue');
desenhar_circulo(ctx2, 40, 155, 25, 'green');
desenhar_circulo(ctx2, 230, 60, 35, 'yellow');
desenhar_circulo(ctx2, 255, 210, 25, 'green');

desenhar_quadrado(ctx2, 120, 150, 20, 'skyblue');
desenhar_quadrado(ctx2, 160, 150, 20, 'skyblue');

desenhar_triangulo(ctx2, 110, 132, 190, 132, 150, 90, 'salmon');