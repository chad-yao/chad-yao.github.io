'use client';

import { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
  opacity: number;
  size: number;
  color: string;
}

interface TrailLine {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
  color: string;
}

export function MouseTrail() {
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const [trailLines, setTrailLines] = useState<TrailLine[]>([]);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number>();
  const trailId = useRef(0);

  // Generate random colors
  const getRandomColor = () => {
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', 
      '#feca57', '#ff9ff3', '#a8e6cf', '#ffd3a5',
      '#fd79a8', '#6c5ce7', '#00b894', '#e17055'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const newPoint: TrailPoint = {
        id: trailId.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: now,
        opacity: 1,
        size: 3 + Math.random() * 4,
        color: getRandomColor()
      };

      // Create connection lines
      if (lastMousePos.current) {
        const distance = Math.sqrt(
          Math.pow(e.clientX - lastMousePos.current.x, 2) + 
          Math.pow(e.clientY - lastMousePos.current.y, 2)
        );
        
        // Only create connection lines when distance is large enough
        if (distance > 5) {
          const newLine: TrailLine = {
            id: trailId.current++,
            x1: lastMousePos.current.x,
            y1: lastMousePos.current.y,
            x2: e.clientX,
            y2: e.clientY,
            opacity: 0.6,
            color: newPoint.color
          };
          
          setTrailLines(prev => [...prev, newLine]);
        }
      }

      setTrailPoints(prev => [...prev, newPoint]);
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      const now = Date.now();
      
      // Update trail points
      setTrailPoints(prev => {
        return prev
          .map(point => {
            const age = now - point.timestamp;
            const maxAge = 800; // Maximum survival time
            const opacity = Math.max(0, 1 - age / maxAge);
            const size = point.size * (0.5 + opacity * 0.5);
            
            return {
              ...point,
              opacity,
              size
            };
          })
          .filter(point => point.opacity > 0.01);
      });

      // Update connection lines
      setTrailLines(prev => {
        return prev
          .map(line => {
            const age = now - line.id; // Use id as approximate timestamp
            const maxAge = 600;
            const opacity = Math.max(0, 0.6 - age / maxAge);
            
            return {
              ...line,
              opacity
            };
          })
          .filter(line => line.opacity > 0.01);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Limit the number of trail points
    const limitTrailPoints = () => {
      setTrailPoints(prev => prev.slice(-50)); // Keep only the latest 50 points
      setTrailLines(prev => prev.slice(-30)); // Keep only the latest 30 lines
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);
    
    // Periodically clean up excessive trail points
    const cleanupInterval = setInterval(limitTrailPoints, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <>
      {/* Trail connection lines */}
      {trailLines.map((line) => (
        <div
          key={line.id}
          className="fixed pointer-events-none z-30"
          style={{
            left: Math.min(line.x1, line.x2),
            top: Math.min(line.y1, line.y2),
            width: Math.abs(line.x2 - line.x1),
            height: Math.abs(line.y2 - line.y1),
            opacity: line.opacity,
            background: `linear-gradient(45deg, ${line.color}20, ${line.color}40)`,
            transformOrigin: '0 0',
            transform: `rotate(${Math.atan2(line.y2 - line.y1, line.x2 - line.x1)}rad)`,
            borderTop: `2px solid ${line.color}`,
            borderRadius: '1px',
          }}
        />
      ))}

      {/* Trail points */}
      {trailPoints.map((point) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: point.x - point.size / 2,
            top: point.y - point.size / 2,
            width: point.size,
            height: point.size,
            opacity: point.opacity,
            background: `radial-gradient(circle, ${point.color} 0%, ${point.color}80 50%, transparent 100%)`,
            borderRadius: '50%',
            boxShadow: `0 0 ${point.size * 2}px ${point.color}40`,
            transform: `scale(${point.opacity})`,
            transition: 'all 0.1s ease-out',
          }}
        />
      ))}

      {/* Additional glow effects */}
      {trailPoints.slice(-3).map((point, index) => (
        <div
          key={`glow-${point.id}`}
          className="fixed pointer-events-none z-35"
          style={{
            left: point.x - point.size,
            top: point.y - point.size,
            width: point.size * 2,
            height: point.size * 2,
            opacity: point.opacity * 0.3,
            background: `radial-gradient(circle, ${point.color}20 0%, transparent 70%)`,
            borderRadius: '50%',
            transform: `scale(${1 + index * 0.2})`,
            transition: 'all 0.2s ease-out',
          }}
        />
      ))}
    </>
  );
}
