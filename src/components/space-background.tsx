'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkle: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const starsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      const stars: Star[] = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
    };

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const numParticles = 50;
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          life: Math.random() * 1000,
          maxLife: 1000,
        });
      }
      particlesRef.current = particles;
    };

    // Draw nebula background
    const drawNebula = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.2, 0,
        canvas.width * 0.3, canvas.height * 0.2, canvas.width * 0.8
      );
      
      gradient.addColorStop(0, 'rgba(80, 60, 100, 0.08)'); // Muted purple
      gradient.addColorStop(0.5, 'rgba(50, 40, 70, 0.04)'); // Dark muted purple
      gradient.addColorStop(1, 'rgba(20, 20, 30, 0.02)'); // Very dark gray
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add another nebula
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.8, 0,
        canvas.width * 0.7, canvas.height * 0.8, canvas.width * 0.6
      );
      
      gradient2.addColorStop(0, 'rgba(40, 60, 80, 0.06)'); // Muted blue-gray
      gradient2.addColorStop(0.5, 'rgba(25, 35, 50, 0.03)'); // Dark blue-gray
      gradient2.addColorStop(1, 'rgba(10, 15, 20, 0.01)'); // Very dark gray
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Draw stars
    const drawStars = (deltaTime: number) => {
      const stars = starsRef.current;
      
      stars.forEach((star) => {
        // Update star position (parallax effect)
        star.x -= star.speed * deltaTime * 0.1;
        star.twinkle += deltaTime * 0.002;
        
        // Reset star position if it goes off screen
        if (star.x < -star.size) {
          star.x = canvas.width + star.size;
          star.y = Math.random() * canvas.height;
        }

        // Calculate twinkling opacity
        const twinkleOpacity = star.opacity + Math.sin(star.twinkle) * 0.3;
        const clampedOpacity = Math.max(0.1, Math.min(1, twinkleOpacity));

        // Draw star
        ctx.save();
        ctx.globalAlpha = clampedOpacity;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect for larger stars
        if (star.size > 1.5) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#ffffff';
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });
    };

    // Draw particles
    const drawParticles = (deltaTime: number) => {
      const particles = particlesRef.current;
      
      particles.forEach((particle) => {
        // Update particle
        particle.x += particle.vx * deltaTime * 0.1;
        particle.y += particle.vy * deltaTime * 0.1;
        particle.life -= deltaTime;
        
        // Reset particle if it dies or goes off screen
        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 0.5;
          particle.vy = (Math.random() - 0.5) * 0.5;
          particle.life = particle.maxLife;
        }

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = '#6B7B8C'; // Muted blue-gray
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    // Animation loop
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background elements
      drawNebula();
      drawStars(deltaTime);
      drawParticles(deltaTime);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initStars();
    initParticles();
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #151520 50%, #121218 100%)' }}
    />
  );
}
