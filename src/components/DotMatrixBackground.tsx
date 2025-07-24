import React, { useEffect, useRef } from 'react';

interface DotMatrixBackgroundProps {
  className?: string;
}

export function DotMatrixBackground({ className = '' }: DotMatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 点的配置
    const dots: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      opacityDirection: number;
      color: string;
    }> = [];

    // 极光颜色配置
    const auroraColors = [
      'rgba(59, 130, 246, ', // 蓝色
      'rgba(139, 92, 246, ', // 紫色
      'rgba(16, 185, 129, ', // 绿色
      'rgba(99, 102, 241, ', // 靛蓝
      'rgba(244, 63, 94, ',  // 粉色
    ];

    // 初始化点阵
    const initDots = () => {
      const spacing = 40; // 点之间的间距
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          // 添加一些随机偏移，让点阵看起来更自然
          const offsetX = (Math.random() - 0.5) * 20;
          const offsetY = (Math.random() - 0.5) * 20;
          
          dots.push({
            x: x + offsetX,
            y: y + offsetY,
            vx: (Math.random() - 0.5) * 0.3, // 极慢的移动速度
            vy: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.15 + 0.05, // 初始不透明度很低
            opacityDirection: Math.random() > 0.5 ? 1 : -1,
            color: auroraColors[Math.floor(Math.random() * auroraColors.length)]
          });
        }
      }
    };

    initDots();

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      dots.forEach((dot, index) => {
        // 创建极光波动效果
        const wave1 = Math.sin(time + dot.x * 0.01 + dot.y * 0.005) * 0.1;
        const wave2 = Math.cos(time * 1.5 + dot.y * 0.008) * 0.08;
        const auroraIntensity = Math.max(0, wave1 + wave2);

        // 更新位置（极慢的飘移）
        dot.x += dot.vx;
        dot.y += dot.vy;

        // 边界反弹
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // 透明度动画
        dot.opacity += dot.opacityDirection * 0.002;
        if (dot.opacity <= 0.02) {
          dot.opacityDirection = 1;
          dot.opacity = 0.02;
        } else if (dot.opacity >= 0.2) {
          dot.opacityDirection = -1;
          dot.opacity = 0.2;
        }

        // 计算最终透明度（结合极光效果）
        const finalOpacity = dot.opacity * (1 + auroraIntensity * 2);

        // 绘制点
        ctx.fillStyle = dot.color + finalOpacity.toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1 + auroraIntensity * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // 连接附近的点（极光流动效果）
        dots.slice(index + 1).forEach(otherDot => {
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const lineOpacity = (1 - distance / 80) * finalOpacity * 0.3;
            if (lineOpacity > 0.01) {
              ctx.strokeStyle = dot.color + lineOpacity.toFixed(3) + ')';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: 'transparent' }}
    />
  );
}
