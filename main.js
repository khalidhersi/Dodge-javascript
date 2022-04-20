const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

//object positions
let playerX = 220;
let playerY = 120;
let greeBallX = 50;
let greeBallY = 50;

//player
ctx.beginPath();
ctx.rect(playerX, playerY, 40, 40);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//green ball
ctx.beginPath();
ctx.arc(greeBallX, greeBallY, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

