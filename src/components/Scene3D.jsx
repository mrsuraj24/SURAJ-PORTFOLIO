/* eslint-disable react-hooks/purity */
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ElegantSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, -2]} scale={2.2}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.15}
          emissive="#7c3aed"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef();
  const count = 150;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

function MouseCamera() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 1.5,
      0.02
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 1.0,
      0.02
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#00d4ff" />
        <pointLight position={[-5, -3, 3]} intensity={0.8} color="#7c3aed" />
        
        <ElegantSphere />
        
        <Stars
          radius={50}
          depth={50}
          count={800}
          factor={2}
          saturation={0}
          fade
          speed={0.2}
        />
        <ParticleField />
        <MouseCamera />
      </Canvas>
    </div>
  );
}
