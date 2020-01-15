var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
	var cWidth,cHeight;
  resize();
  window.onresize = resize;
  function resize() {
    cWidth = canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    cHeight = canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }
  // 鼠标活动时，获取鼠标坐标
  var mouse = {x: null, y: null, max: 20000};
  window.onmousemove = function(e) {
    e = e || window.event;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };
  window.onmouseout = function(e) {
    mouse.x = null;
    mouse.y = null;
  };
  // 添加粒子
  // x，y为粒子坐标，moveX, moveY为粒子xy轴加速度，max为连线的最大距离
  var dots = [];
  for (var i = 0; i < 300; i++) {
    var x = Math.random() * cWidth;
    var y = Math.random() * cHeight;
    var moveX = Math.random() * 2 - 1;
    var moveY = Math.random() * 2 - 1;
    dots.push({
      x: x,
      y: y,
      moveX: moveX,
      moveY: moveY,
      max: 6000
    })
  }
  // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
  setTimeout(function() {
    animate();
  }, 100);
  // 每一帧循环的逻辑
  function animate() {
    ctx.clearRect(0, 0, cWidth, cHeight);
    // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
    var allDots = [mouse].concat(dots);
    dots.forEach(function(dot) {
      // 粒子位移
      dot.x += dot.moveX;
      dot.y += dot.moveY;
      // 遇到边界将加速度反向
      dot.moveX *= (dot.x > cWidth || dot.x < 0) ? -1 : 1;
      dot.moveY *= (dot.y > cHeight || dot.y < 0) ? -1 : 1;
      // 绘制点
      ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);
      // 循环比对粒子间的距离
      for (var i = 0; i < allDots.length; i++) {
        var tempDot = allDots[i];
        if (dot === tempDot || tempDot.x === null || tempDot.y === null) continue;
        var _x = dot.x - tempDot.x;
        var _y = dot.y - tempDot.y;
        // 两个粒子之间的距离
        var dis = _x * _x + _y * _y;
        // 距离比
        var ratio;
        // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
        if (dis < tempDot.max) {
          // 如果是鼠标，则让粒子向鼠标的位置移动
          if (tempDot === mouse && dis > (tempDot.max / 2)) {
            dot.x -= _x * 0.03;
            dot.y -= _y * 0.03;
          }
          // 计算距离比
          ratio = (tempDot.max - dis) / tempDot.max;
          // 画线
          ctx.beginPath();
          ctx.lineWidth = ratio / 2;
          ctx.strokeStyle = 'rgba(0,0,0,' + (ratio + 0.2) + ')';
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(tempDot.x, tempDot.y);
          ctx.stroke();
        }
      }
      // 将已经计算过的粒子从数组中删除
      allDots.splice(allDots.indexOf(dot), 1);
    });
   setTimeout(function() {
   	animate();
   }, 1000/60);
  }