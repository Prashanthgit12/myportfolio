import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/useTheme';

export default function BackgroundEffects() {
  const canvasRef = useRef(null);
  const { currentTheme } = useTheme();
  const themeRef = useRef(currentTheme);

  // Keep themeRef synced so the requestAnimationFrame loop has real-time access
  useEffect(() => {
    themeRef.current = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    let lastTime = performance.now();

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Particle system
    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.8 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.45;
        this.speedY = (Math.random() - 0.5) * 0.45;
        
        // Dynamic theme palette
        this.isPrimary = Math.random() > 0.4;
        this.baseAlpha = Math.random() * 0.45 + 0.2;
        this.alpha = this.baseAlpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around bounds softly
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;

        // Breathing twinkle
        this.pulse += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulse) * 0.15;

        // Mouse gentle interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.5;
          this.y -= Math.sin(angle) * force * 1.5;
        }
      }

      draw() {
        const theme = themeRef.current;
        const colorPrefix = this.isPrimary 
          ? theme.particleColors[0] 
          : theme.particleColors[1];
        const shadowCol = this.isPrimary ? theme.primaryColor : theme.secondaryColor;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${colorPrefix}${this.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = shadowCol;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const animate = (time) => {
      if (!isVisible) return;

      const delta = time - lastTime;
      lastTime = time;

      const theme = themeRef.current;

      if (delta < 200) {
        ctx.clearRect(0, 0, width, height);

        // Update and draw all particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();

          // Connect nearby particles with filament lines matching the theme
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 110;

            if (distance < maxDistance) {
              const lineAlpha = (1 - distance / maxDistance) * 0.2;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `${theme.filamentColor}${lineAlpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Ambient Glow Orbs synchronized with Active Theme */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-[130px] animate-glow-pulse transition-all duration-700"
        style={{ backgroundColor: currentTheme.orbColors[0] }}
      />
      <div 
        className="absolute top-1/4 -right-32 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-[140px] animate-glow-pulse transition-all duration-700"
        style={{ 
          backgroundColor: currentTheme.orbColors[1], 
          animationDelay: '1.5s' 
        }}
      />
      <div 
        className="absolute bottom-10 left-1/3 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full blur-[130px] animate-glow-pulse transition-all duration-700"
        style={{ 
          backgroundColor: currentTheme.orbColors[2], 
          animationDelay: '3s' 
        }}
      />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Interactive Constellation / Particle Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Radial fade mask to make content effortlessly readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme-bg-main)]/30 via-[var(--theme-bg-main)]/75 to-[var(--theme-bg-main)] transition-colors duration-500" />
    </div>
  );
}
