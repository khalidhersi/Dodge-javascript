const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//object positions
var playerHeight = 50;
var playerWidth = 50;
let playerX = (canvas.width - playerWidth) / 2;
let playerY = (canvas.height - playerHeight) / 2;
// let playerX = 220;
// let playerY = 120;
let playerDX = 1;
let playerDY = 1;
let greeBallX = 50;
let greeBallY = 50;
let greeBallDX = 10;
let greeBallDY = 10;

var ballRadius = 20;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

// event listener
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler (event){
  var keyCode = event.keyCode;
  switch(keyCode){
    case 87: // W key
    upPressed = true;
    break;
    case 38: // up arrow
      upPressed = true;
      break;
  case 83: // A key
    downPressed = true;
    break;
  case 40: // down arrow
    downPressed = true;
    break;
  case 65: // A key
    leftPressed = true;
    break;
  case 37:// left arrow
    leftPressed = true;
    break;
  case 68: // D key
    rightPressed = true;
    break;
  case 39: // right arrow
    rightPressed = true;
    break;
  }
}
function keyUpHandler (event){
  var keyCode = event.keyCode;
  switch(keyCode){
    case 87: // W key
    upPressed = false;
    break;
    case 38: // up arrow
      upPressed = false;
      break;
    case 83: // S key
      downPressed = false;
      break;
    case 40: // down arrow
      downPressed = false;
      break;
    case 65: // A key
      leftPressed = false;
      break;
    case 37: // left arrow
      leftPressed = false;
      break;
    case 68: // D key
      rightPressed = false;
      break;
    case 39: // right arrow
      rightPressed = false;
      break;
  }
}



// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// function keyDownHandler(e) {
//     if(e.key == "Up" || e.key == "ArrowUp" || "w" || "W") {
//         upPressed = true;
//         console.log("up")
//     }
//     else if(e.key == "Down" || e.key == "ArrowDown" || "s" || "S") {
//         downPressed = true;
//         console.log("down")
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft" || "a" || "A") {
//         leftPressed = true;
//         console.log("left")
//     }
//     else if(e.key == "Right" || e.key == "ArrowRight" || "d" || "D") {
//         rightPressed = true;
//         console.log("right")
//     }
//     else {
//         upPressed = false;
//         downPressed = false;
//         leftPressed = false;
//         rightPressed = false;
//     }
// }

// function keyUpHandler(e) {
//     if(e.key == "Up" || e.key == "ArrowUp" || "w" || "W") {
//         upPressed = false;
//     }
//     else if(e.key == "Down" || e.key == "ArrowDown" || "s" || "S") {
//         downPressed = false;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft" || "a" || "A") {
//         leftPressed = false;
//     }
//     else if(e.key == "Right" || e.key == "ArrowRight" || "d" || "D") {
//         rightPressed = false;
//     }
// }

function drawPlayer() {
  ctx.beginPath();
  ctx.rect(playerX, playerY, playerWidth, playerHeight);
  ctx.fillStyle = "#6867d3";
  ctx.fill();
  ctx.closePath();
  // playerX += playerDX
  // playerY += playerDY
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPlayer();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  if (upPressed) {
    playerY -= 2;
    if (playerY < 0) {
      playerY = 0;
    }
  } else if (downPressed) {
    playerY += 2;
    if (playerY + playerHeight > canvas.height) {
      playerY = canvas.height - playerHeight;
    }
  } else if (leftPressed) {
    playerX -= 2;
    if (playerX < 0) {
      playerX = 0;
    }
  } else if (rightPressed) {
    playerX += 2;
    if (playerX + playerWidth > canvas.width) {
      playerX = canvas.width - playerWidth;
    }
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
