'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'circle' | 'star' | 'sparkle';
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function AdvancedMouseEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  // Generate random particles
  const createParticles = (x: number, y: number) => {
    const newParticles: Particle[] = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    // Create different types of particles
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const speed = 2 + Math.random() * 3;
      const life = 60 + Math.random() * 40;
      
      newParticles.push({
        id: Date.now() + i,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life,
        maxLife: life,
        size: 2 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: i % 3 === 0 ? 'star' : i % 3 === 1 ? 'sparkle' : 'circle'
      });
    }
    
    return newParticles;
  };

  // Create ripple effects
  const createRipples = (x: number, y: number) => {
    const newRipples: Ripple[] = [];
    
    // Create multiple layers of ripples
    for (let i = 0; i < 3; i++) {
      newRipples.push({
        id: Date.now() + i,
        x,
        y,
        size: 0,
        opacity: 0.8 - i * 0.2,
        life: 0,
        maxLife: 60 + i * 20
      });
    }
    
    return newRipples;
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.button === 0) { // Left mouse button click
        // Use clientX and clientY directly for fixed positioning
        const x = e.clientX;
        const y = e.clientY;
        
        // Create particles and ripples
        const newParticles = createParticles(x, y);
        const newRipples = createRipples(x, y);
        
        setParticles(prev => [...prev, ...newParticles]);
        setRipples(prev => [...prev, ...newRipples]);
      }
    };

    // Animation loop
    const animate = () => {
      setParticles(prev => {
        return prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vx: particle.vx * 0.98, // Friction
            vy: particle.vy * 0.98,
            life: particle.life - 1
          }))
          .filter(particle => particle.life > 0);
      });

      setRipples(prev => {
        return prev
          .map(ripple => ({
            ...ripple,
            size: ripple.size + 2,
            opacity: ripple.opacity * 0.95,
            life: ripple.life + 1
          }))
          .filter(ripple => ripple.life < ripple.maxLife);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('click', handleClick);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Particle effects */}
      {particles.map((particle) => {
        const alpha = particle.life / particle.maxLife;
        const scale = alpha;
        
        return (
          <div
            key={particle.id}
            className="fixed pointer-events-none z-50"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              opacity: alpha,
              transform: `scale(${scale})`,
            }}
          >
            {particle.type === 'circle' && (
              <div
                className="rounded-full"
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                }}
              />
            )}
            {particle.type === 'star' && (
              <div
                className="star"
                style={{
                  width: particle.size,
                  height: particle.size,
                  color: particle.color,
                  filter: `drop-shadow(0 0 ${particle.size}px ${particle.color})`,
                }}
              >
                ⭐
              </div>
            )}
            {particle.type === 'sparkle' && (
              <div
                className="sparkle"
                style={{
                  width: particle.size,
                  height: particle.size,
                  color: particle.color,
                  filter: `drop-shadow(0 0 ${particle.size}px ${particle.color})`,
                }}
              >
                ✨
              </div>
            )}
          </div>
        );
      })}

      {/* Ripple effects */}
      {ripples.map((ripple) => {
        const alpha = ripple.opacity * (1 - ripple.life / ripple.maxLife);
        
        return (
          <div
            key={ripple.id}
            className="fixed pointer-events-none z-40"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              opacity: alpha,
              border: '2px solid rgba(255, 107, 107, 0.6)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)',
            }}
          />
        );
      })}
    </>
  );
}
