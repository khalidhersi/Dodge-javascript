const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const clock = document.querySelector(".clock");

// Player Size, Position & Movement
var playerHeight = 50;
var playerWidth = 50;
let playerX = (canvas.width - playerWidth) / 2;
let playerY = (canvas.height - playerHeight) / 2;

// Red Ball Size, Position
var redBallRadius = 30;
var redBallX = canvas.width / 2;
var redBallY = canvas.height - 30;
var redBallDX = 2;
var redBallDY = -2;

// Green Ball Size, Position
var greenBallRadius = 15;
var greenBallX = canvas.width / 2;
var greenBallY = canvas.height - 30;
var greenBallDX = -5;
var greenBallDY = 8;

// Yellow Ball Size, Position
var yellowBallRadius = 20;
var yellowBallX = 20;
var yellowBallY = canvas.height / 2 - 60;
var yellowBallDX = -5;
var yellowBallDY = 5;

// Blue Ball Size, Position
var blueBallRadius = 70;
var blueBallX = canvas.width / 3;
var blueBallY = canvas.height - 80 ;
var blueBallDX = 0.05;
var blueBallDY = 5;

// Key Pressed Boolean
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

// event listener
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/* A timer counting down 1 minute  */
let time = 0;
const updateTimer = setInterval(() => {
    time += 1;
    console.log(time);
    clock.innerHTML = time;
    // if (time === 30) {
    //   alert("YOU SURVIVED 60 SECONDS!!!");
    // }
  }, 1000);

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

// Player Draw Function
function drawPlayer() {
  ctx.beginPath();
  ctx.rect(playerX, playerY, playerWidth, playerHeight);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
  // playerX += playerDX
  // playerY += playerDY
}

// Red Ball Draw Function
function drawRedBall() {
  ctx.beginPath();
  ctx.arc(redBallX, redBallY, redBallRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}

// Green Ball Draw Function
function drawGreenBall() {
    ctx.beginPath();
    ctx.arc(greenBallX, greenBallY, greenBallRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#00ff00";
    ctx.fill();
    ctx.closePath();
  }

  // Yellow Ball Draw Function
function drawYellowBall() {
    ctx.beginPath();
    ctx.arc(yellowBallX, yellowBallY, yellowBallRadius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }
s
    // Blue Ball Draw Function
function drawBlueBall() { 
    ctx.beginPath();
    ctx.arc(blueBallX, blueBallY, blueBallRadius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }

// Calling Draw Functions
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRedBall();
  drawPlayer();
  drawGreenBall();
  drawYellowBall();
  drawBlueBall();

  // Red Ball Movement
  if (redBallX + redBallDX > canvas.width - redBallRadius || redBallX + redBallDX < redBallRadius) {
    redBallDX = -redBallDX;
  }
  if (redBallY + redBallDY > canvas.height - redBallRadius || redBallY + redBallDY < redBallRadius) {
    redBallDY = -redBallDY;
  }

  // Green Ball Movement
  if (greenBallX + greenBallDX > canvas.width - greenBallRadius || greenBallX + greenBallDX < greenBallRadius) {
    greenBallDX = -greenBallDX;
  }
  if (greenBallY + greenBallDY > canvas.height - greenBallRadius || greenBallY + greenBallDY < greenBallRadius) {
    greenBallDY = -greenBallDY;
  }

// Yellow Ball Movement
if (yellowBallX + yellowBallDX > canvas.width - yellowBallRadius || yellowBallX + yellowBallDX < yellowBallRadius) {
    yellowBallDX = -yellowBallDX;
  }
  if (yellowBallY + yellowBallDY > canvas.height - yellowBallRadius || yellowBallY + yellowBallDY < yellowBallRadius) {
    yellowBallDY = -yellowBallDY;
  }

  // Blue Ball Movement
if (blueBallX + blueBallDX > canvas.width - blueBallRadius || blueBallX + blueBallDX < blueBallRadius) {
    blueBallDX = -blueBallDX;
  }
  if (blueBallY + blueBallDY > canvas.height - blueBallRadius || blueBallY + blueBallDY < blueBallRadius) {
    blueBallDY = -blueBallDY;
  }

  // Player Movement
  if (upPressed) {
    playerY -= 3.25;
    if (playerY < 0) {
      playerY = 0;
    }
  } else if (downPressed) {
    playerY += 3.25;
    if (playerY + playerHeight > canvas.height) {
      playerY = canvas.height - playerHeight;
    }
  } else if (leftPressed) {
    playerX -= 3.25;
    if (playerX < 0) {
      playerX = 0;
    }
  } else if (rightPressed) {
    playerX += 3.25;
    if (playerX + playerWidth > canvas.width) {
      playerX = canvas.width - playerWidth;
    }
  }

// Red Ball Movement
  redBallX += redBallDX;
  redBallY += redBallDY;

// Green Ball Movement
  greenBallX += greenBallDX;
  greenBallY += greenBallDY;

  // Yellow Ball Movement
  yellowBallX += yellowBallDX;
  yellowBallY += yellowBallDY;

  // Blue Ball Movement
  blueBallX += blueBallDX;
  blueBallY += blueBallDY;
//   if(playerX.intersects(redBall)) {
//     console.log("collision")
// }
}
setInterval(draw, 10);
