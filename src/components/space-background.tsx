'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function SpaceBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    mountRef.current.appendChild(renderer.domElement);

    const createStarTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const context = canvas.getContext('2d')!;
      
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      context.fillStyle = gradient;
      context.fillRect(0, 0, 32, 32);

      return new THREE.CanvasTexture(canvas);
    };

    const createMultiLayerStars = () => {
      const starLayers = [];
      
      // Far layer - very distant stars
      const farGeometry = new THREE.BufferGeometry();
      const farCount = 20000;
      const farPositions = new Float32Array(farCount * 3);
      const farColors = new Float32Array(farCount * 3);
      const farSizes = new Float32Array(farCount);

      for (let i = 0; i < farCount; i++) {
        const i3 = i * 3;
        farPositions[i3] = (Math.random() - 0.5) * 4000;
        farPositions[i3 + 1] = (Math.random() - 0.5) * 4000;
        farPositions[i3 + 2] = (Math.random() - 0.5) * 4000;

        const colorVariation = Math.random();
        farColors[i3] = 0.6 + colorVariation * 0.2;
        farColors[i3 + 1] = 0.6 + colorVariation * 0.2;
        farColors[i3 + 2] = 0.8 + colorVariation * 0.1;

        farSizes[i] = Math.random() * 0.8 + 0.2;
      }

      farGeometry.setAttribute('position', new THREE.BufferAttribute(farPositions, 3));
      farGeometry.setAttribute('color', new THREE.BufferAttribute(farColors, 3));
      farGeometry.setAttribute('size', new THREE.BufferAttribute(farSizes, 1));

      const farMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.4,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        map: createStarTexture()
      });

      const farStars = new THREE.Points(farGeometry, farMaterial);
      starLayers.push(farStars);

      // Mid layer - medium distance stars
      const midGeometry = new THREE.BufferGeometry();
      const midCount = 10000;
      const midPositions = new Float32Array(midCount * 3);
      const midColors = new Float32Array(midCount * 3);
      const midSizes = new Float32Array(midCount);

      for (let i = 0; i < midCount; i++) {
        const i3 = i * 3;
        midPositions[i3] = (Math.random() - 0.5) * 2500;
        midPositions[i3 + 1] = (Math.random() - 0.5) * 2500;
        midPositions[i3 + 2] = (Math.random() - 0.5) * 2500;

        const colorVariation = Math.random();
        midColors[i3] = 0.7 + colorVariation * 0.2;
        midColors[i3 + 1] = 0.7 + colorVariation * 0.2;
        midColors[i3 + 2] = 0.9 + colorVariation * 0.1;

        midSizes[i] = Math.random() * 1.2 + 0.4;
      }

      midGeometry.setAttribute('position', new THREE.BufferAttribute(midPositions, 3));
      midGeometry.setAttribute('color', new THREE.BufferAttribute(midColors, 3));
      midGeometry.setAttribute('size', new THREE.BufferAttribute(midSizes, 1));

      const midMaterial = new THREE.PointsMaterial({
        size: 0.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        map: createStarTexture()
      });

      const midStars = new THREE.Points(midGeometry, midMaterial);
      starLayers.push(midStars);

      // Near layer - close bright stars
      const nearGeometry = new THREE.BufferGeometry();
      const nearCount = 3000;
      const nearPositions = new Float32Array(nearCount * 3);
      const nearColors = new Float32Array(nearCount * 3);
      const nearSizes = new Float32Array(nearCount);

      for (let i = 0; i < nearCount; i++) {
        const i3 = i * 3;
        nearPositions[i3] = (Math.random() - 0.5) * 1200;
        nearPositions[i3 + 1] = (Math.random() - 0.5) * 1200;
        nearPositions[i3 + 2] = (Math.random() - 0.5) * 1200;

        const colorVariation = Math.random();
        nearColors[i3] = 0.9 + colorVariation * 0.1;
        nearColors[i3 + 1] = 0.8 + colorVariation * 0.1;
        nearColors[i3 + 2] = 0.7 + colorVariation * 0.2;

        nearSizes[i] = Math.random() * 2.5 + 1.0;
      }

      nearGeometry.setAttribute('position', new THREE.BufferAttribute(nearPositions, 3));
      nearGeometry.setAttribute('color', new THREE.BufferAttribute(nearColors, 3));
      nearGeometry.setAttribute('size', new THREE.BufferAttribute(nearSizes, 1));

      const nearMaterial = new THREE.PointsMaterial({
        size: 1.5,
        vertexColors: true,
        transparent: true,
        opacity: 1.0,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        map: createStarTexture()
      });

      const nearStars = new THREE.Points(nearGeometry, nearMaterial);
      starLayers.push(nearStars);

      return starLayers;
    };

    const createDeepNebula = () => {
      const nebulas = [];
      
      // Far nebula - very distant
      const farNebulaGeometry = new THREE.SphereGeometry(400, 32, 32);
      const farNebulaMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(0.05, 0.02, 0.1) },
          color2: { value: new THREE.Color(0.02, 0.05, 0.08) }
        },
        vertexShader: `
          varying vec3 vPosition;
          void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec3 vPosition;

          void main() {
            float noise = sin(vPosition.x * 0.005 + time * 0.3) * cos(vPosition.y * 0.005 + time * 0.3);
            vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
            gl_FragColor = vec4(color, 0.12);
          }
        `,
        transparent: true,
        side: THREE.BackSide
      });

      const farNebula = new THREE.Mesh(farNebulaGeometry, farNebulaMaterial);
      farNebula.position.set(0, 0, -300);
      nebulas.push({ nebula: farNebula, material: farNebulaMaterial });

      // Mid nebula - medium distance
      const midNebulaGeometry = new THREE.SphereGeometry(250, 48, 48);
      const midNebulaMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(0.1, 0.05, 0.15) },
          color2: { value: new THREE.Color(0.05, 0.08, 0.12) },
          color3: { value: new THREE.Color(0.08, 0.1, 0.05) }
        },
        vertexShader: `
          varying vec3 vPosition;
          varying vec3 vNormal;
          void main() {
            vPosition = position;
            vNormal = normal;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          uniform vec3 color3;
          varying vec3 vPosition;
          varying vec3 vNormal;

          float noise(vec3 p) {
            return sin(p.x * 0.008 + time) * cos(p.y * 0.008 + time) * sin(p.z * 0.008 + time);
          }

          void main() {
            vec3 pos = vPosition;
            float n1 = noise(pos * 0.2 + time);
            float n2 = noise(pos * 0.15 + time * 0.5);
            float n3 = noise(pos * 0.08 + time * 0.2);

            vec3 color = mix(color1, color2, n1 * 0.5 + 0.5);
            color = mix(color, color3, n2 * 0.3 + 0.3);

            float alpha = (n3 * 0.5 + 0.5) * 0.2;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        side: THREE.BackSide
      });

      const midNebula = new THREE.Mesh(midNebulaGeometry, midNebulaMaterial);
      midNebula.position.set(0, 0, -150);
      nebulas.push({ nebula: midNebula, material: midNebulaMaterial });

      // Near nebula - close
      const nearNebulaGeometry = new THREE.SphereGeometry(120, 32, 32);
      const nearNebulaMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(0.15, 0.08, 0.2) },
          color2: { value: new THREE.Color(0.08, 0.12, 0.18) }
        },
        vertexShader: `
          varying vec3 vPosition;
          void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec3 vPosition;

          void main() {
            float noise = sin(vPosition.x * 0.015 + time * 0.8) * cos(vPosition.y * 0.015 + time * 0.8);
            vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
            gl_FragColor = vec4(color, 0.25);
          }
        `,
        transparent: true,
        side: THREE.BackSide
      });

      const nearNebula = new THREE.Mesh(nearNebulaGeometry, nearNebulaMaterial);
      nearNebula.position.set(0, 0, -80);
      nebulas.push({ nebula: nearNebula, material: nearNebulaMaterial });

      return nebulas;
    };

    const createParticleStreams = () => {
      const streams = [];
      
      for (let i = 0; i < 3; i++) {
        const streamGeometry = new THREE.BufferGeometry();
        const streamCount = 100;
        const streamPositions = new Float32Array(streamCount * 3);
        const streamColors = new Float32Array(streamCount * 3);
        const streamSizes = new Float32Array(streamCount);

        for (let j = 0; j < streamCount; j++) {
          const j3 = j * 3;
          streamPositions[j3] = (Math.random() - 0.5) * 300;
          streamPositions[j3 + 1] = (Math.random() - 0.5) * 300;
          streamPositions[j3 + 2] = (Math.random() - 0.5) * 300;

          streamColors[j3] = 0.2 + Math.random() * 0.3;
          streamColors[j3 + 1] = 0.4 + Math.random() * 0.3;
          streamColors[j3 + 2] = 0.8 + Math.random() * 0.2;

          streamSizes[j] = Math.random() * 1.5 + 0.3;
        }

        streamGeometry.setAttribute('position', new THREE.BufferAttribute(streamPositions, 3));
        streamGeometry.setAttribute('color', new THREE.BufferAttribute(streamColors, 3));
        streamGeometry.setAttribute('size', new THREE.BufferAttribute(streamSizes, 1));

        const streamMaterial = new THREE.PointsMaterial({
          size: 0.8,
          vertexColors: true,
          transparent: true,
          opacity: 0.6,
          sizeAttenuation: true,
          blending: THREE.AdditiveBlending,
          map: createStarTexture()
        });

        const stream = new THREE.Points(streamGeometry, streamMaterial);
        stream.position.set(
          (Math.random() - 0.5) * 500,
          (Math.random() - 0.5) * 500,
          (Math.random() - 0.5) * 500
        );

        scene.add(stream);
        streams.push(stream);
      }

      return streams;
    };

    const starLayers = createMultiLayerStars();
    const nebulas = createDeepNebula();
    const particleStreams = createParticleStreams();

    starLayers.forEach(layer => scene.add(layer));
    nebulas.forEach(({ nebula }) => scene.add(nebula));

    const animate = () => {
      const time = Date.now() * 0.001;

      // Animate star layers with different speeds for depth
      starLayers.forEach((layer, index) => {
        layer.rotation.x += 0.0001 * (index + 1);
        layer.rotation.y += 0.0003 * (index + 1);
        layer.rotation.z += 0.00005 * (index + 1);
      });

      // Animate nebulas with different speeds
      nebulas.forEach(({ nebula, material }, index) => {
        material.uniforms.time.value = time;
        nebula.rotation.x += 0.00005 * (index + 1);
        nebula.rotation.y += 0.0001 * (index + 1);
        nebula.rotation.z += 0.00002 * (index + 1);
      });

      particleStreams.forEach((stream, index) => {
        stream.rotation.x += 0.001 * (index + 1);
        stream.rotation.y += 0.002 * (index + 1);
        stream.position.x += Math.sin(time + index) * 0.05;
        stream.position.y += Math.cos(time + index) * 0.05;
      });

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(ellipse at center, #0a0a0a 0%, #080810 20%, #050510 40%, #020208 70%, #000000 100%),
          linear-gradient(135deg, #0a0a0a 0%, #0f0f15 30%, #0a0a0f 60%, #050508 100%),
          linear-gradient(45deg, #000000 0%, #0a0a0a 50%, #000000 100%)
        `
      }}
    />
  );
}
