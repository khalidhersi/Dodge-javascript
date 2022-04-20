const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//object positions
let playerX = 220;
let playerY = 120;
let playerDX = 1;
let playerDY = 1;
let greeBallX = 50;
let greeBallY = 50;
let greeBallDX = 10;
let greeBallDY = 10;

var ballRadius = 20;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawPlayer() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
     
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}
setInterval(draw, 10);

// const draw = () => {
//     // drawing code
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     //player
// ctx.beginPath();
// ctx.rect(playerX, playerY, 40, 40);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();
// playerX += playerDX
// playerY += playerDY 

//green ball
// ctx.beginPath();
//  ctx.clearRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = "#0095DD";
// ctx.fill();
// ctx.closePath();    
// ctx.beginPath();
    
// ctx.arc(greeBallX, greeBallY, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();


// }
// setInterval(draw, 10);

