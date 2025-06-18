const canvas = document.getElementById("breakout");
const ctx = canvas.getContext("2d");

const ballRadius = 8;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 3;
let dy = -3;
let speed = 3;

const paddleHeight = 12;
const paddleWidth = 90;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

const brickRowCount = 5;
const brickColumnCount = 8;
const brickWidth = 60;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 35;

let score = 0;
let lives = 3;

// Criar tijolos
let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

// Controles
document.addEventListener("keydown", (e) => {
  if (e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
  if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
  if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
});

// Colisão com tijolos
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          speed += 0.05;

          if (score === brickRowCount * brickColumnCount) {
            alert("Parabéns! Você venceu!");
            document.location.reload();
          }
        }
      }
    }
  }
}

// Desenhar elementos
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#00A0FF";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0077cc";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#FF5733";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText("Pontuação: " + score, 10, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText("Vidas: " + lives, canvas.width - 80, 20);
}

// Física de rebote no paddle
function handlePaddleCollision() {
  const paddleTop = canvas.height - paddleHeight;
  if (
    y + ballRadius >= paddleTop &&
    x >= paddleX &&
    x <= paddleX + paddleWidth
  ) {
    let relativeX = x - (paddleX + paddleWidth / 2);
    let normalized = relativeX / (paddleWidth / 2);
    let angle = normalized * (Math.PI / 3); // até 60 graus

    dx = speed * Math.sin(angle);
    dy = -Math.abs(speed * Math.cos(angle));
  }
}

// Loop principal
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  // Rebote nas bordas
  if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      handlePaddleCollision();
    } else {
      lives--;
      if (!lives) {
        alert("Fim de Jogo!");
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
        speed = 3;
      }
    }
  }

  x += dx;
  y += dy;

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  requestAnimationFrame(draw);
}

draw();
