
import React, { useEffect, useRef } from 'react';

export const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initColumns();
    };

    window.addEventListener('resize', handleResize);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[];:+-=*&^%$#@!'.split('');
    const codeKeywords = ['const', 'let', 'async', 'await', 'function', 'return', 'import', 'export', '=>', 'null', 'void', 'true', 'false', '0x1F', 'interface', 'type'];
    const colors = ['#ff7b72', '#ffa657', '#a5d6ff', '#d2a8ff', '#79c0ff', '#3fb950'];
    
    const fontSize = 14;
    let columns: { x: number; y: number; speed: number; chars: string[]; color: string }[] = [];

    const initColumns = () => {
      const columnCount = Math.floor(width / 25);
      columns = [];
      for (let i = 0; i < columnCount; i++) {
        columns.push({
          x: i * 25,
          y: Math.random() * -height,
          speed: 1 + Math.random() * 3,
          chars: Array.from({ length: 15 }, () => 
            Math.random() > 0.7 ? codeKeywords[Math.floor(Math.random() * codeKeywords.length)] : chars[Math.floor(Math.random() * chars.length)]
          ),
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    initColumns();

    const draw = () => {
      // Create a trailing effect by using a very transparent black clear
      ctx.fillStyle = 'rgba(13, 17, 23, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px "JetBrains Mono"`;

      columns.forEach(col => {
        // Draw the characters in the stream
        col.chars.forEach((char, index) => {
          const charY = col.y - (index * fontSize * 1.5);
          if (charY < height && charY > -fontSize) {
            // Fading effect for characters further up the stream
            const alpha = 1 - (index / col.chars.length);
            ctx.fillStyle = col.color;
            ctx.globalAlpha = alpha * 0.15; // Keep it very subtle
            ctx.fillText(char, col.x, charY);
          }
        });

        // Move the stream
        col.y += col.speed;

        // Reset if it goes off screen
        if (col.y - (col.chars.length * fontSize * 1.5) > height) {
          col.y = -fontSize;
          col.speed = 1 + Math.random() * 3;
          // Occasionally change the "code" in the stream
          if (Math.random() > 0.5) {
             col.chars = Array.from({ length: 15 }, () => 
              Math.random() > 0.7 ? codeKeywords[Math.floor(Math.random() * codeKeywords.length)] : chars[Math.floor(Math.random() * chars.length)]
            );
          }
        }
      });

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};
