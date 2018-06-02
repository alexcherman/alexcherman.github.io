var canvas = document.getElementById("drawOnMe");
var ctx = canvas.getContext("2d");
var balls = [];

class Ball {
  constructor(x, y, radius, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.originalX = x || 0; 
    this.originalY = y || 0; 
    this.vx = 0;
    this.vy = 0;
    this.radius = radius || 2;
    this.color = color || "#ff6600";
    this.friction = '0.9';
    this.springFactor = '0.01';
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
  };

  think(mouse) {
    // Distance between center of the and center of the mouse
    var dx = this.x - mouse.x;
    var dy = this.y - mouse.y;
    
    // Pythagorean theorem
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 30) {
      var angle = Math.atan2(dy, dx);
      var tx = mouse.x + Math.cos(angle) * 30;
      var ty = mouse.y + Math.sin(angle) * 30;

      this.vx += tx - this.x;
      this.vy += ty - this.y;
    }
    
    // Spring back
    var dx1 = - (this.x - this.originalX);
    var dy1 = - (this.y - this.originalY);

    this.vx += dx1 * this.springFactor;
    this.vy += dy1 * this.springFactor;

    // Friction
    this.vx *= this.friction;
    this.vy *= this.friction;
    
    this.x += this.vx; 
    this.y += this.vy; 
  }
  
  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  };
}
class Mouse {
  constructor(canvas) {
    this.x = 0;
    this.y = 0;

    var rect = canvas.getBoundingClientRect();

    canvas.onmousemove = e => {
      this.x = e.clientX - rect.left;
      this.y = e.clientY - rect.top;
    };
  }
}

var mouse = new Ball(0, 0, 30, "green");
var pos = new Mouse(canvas);

for (let i = 0; i < 10; i++) {
  balls.push(
    new Ball(
      200 + 100 * Math.cos(i* 2* Math.PI / 10),
      200 + 100 * Math.sin(i* 2* Math.PI / 10),
    )
  )

}

function connectDots(balls) {
  ctx.beginPath();
  ctx.moveTo(balls[0].x, balls[0].y);
  balls.forEach(ball => {
    ctx.lineTo(ball.x, ball.y)
  });
  ctx.closePath();
  ctx.stroke();
}

function connectDots1(dots) {
  ctx.beginPath();

  for (var i = 0, jlen = dots.length; i <= jlen; ++i) {
    var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];
    var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];
    ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);
  }

  ctx.closePath();
  ctx.fill();
}


function render() {
  window.requestAnimationFrame(render);
  ctx.clearRect(0, 0, 600, 600);
  
  mouse.setPos(pos.x, pos.y);
  mouse.draw(ctx);

  balls.forEach(ball => {
    ball.think(pos);
    ball.draw(ctx);
  });
  connectDots1(balls);
}

render();
