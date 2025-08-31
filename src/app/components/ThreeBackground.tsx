"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

// 🟢 Hologram Shader Material
const HologramMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color("#00ffff") },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;

    void main() {
      // Moving scanlines
      float scanline = sin(vUv.y * 100.0 + time * 10.0) * 0.1;

      // Gradient shimmer
      float glow = 0.5 + 0.5 * sin(time + vUv.y * 5.0);

      vec3 finalColor = color * (glow + scanline + 0.6);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ HologramMaterial });

function HologramCube({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
    if (matRef.current) {
      matRef.current.time = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      {/* hologram material */}
      <hologramMaterial ref={matRef} color={new THREE.Color(color)} />
    </mesh>
  );
}

// 🟢 Smooth Scrolling Tron Floor
function TronFloor() {
  const floorRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (floorRef.current) {
      floorRef.current.material.map.offset.y = -clock.getElapsedTime() * 0.2; // smooth scroll
    }
  });

  // Create grid texture
  const gridTex = new THREE.TextureLoader().load(
    "https://threejsfundamentals.org/threejs/resources/images/checker.png"
  );
  gridTex.wrapS = gridTex.wrapT = THREE.RepeatWrapping;
  gridTex.repeat.set(40, 40);

  return (
    <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[100, 100, 100, 100]} />
      <meshBasicMaterial
        map={gridTex}
        color="#00ffff"
        transparent
        opacity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function ParticleField() {
  const particles = Array.from({ length: 50 }, () => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 20,
    ] as [number, number, number],
  }));

  return (
    <>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas camera={{ position: [0, 2, 12], fov: 60 }}>
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={1} />

      {/* Fog */}
      <fog attach="fog" args={["#000000", 12, 30]} />

      {/* Hologram Cubes */}
      <HologramCube position={[-3, 0, -5]} color="#00ffff" />
      <HologramCube position={[3, 2, -6]} color="#ffffff" />
      <HologramCube position={[-1, -2, -4]} color="#ff00ff" />

      {/* Particle Field */}
      <ParticleField />

      {/* Tron Grid Floor */}
      <TronFloor />

      {/* Glow Effect */}
      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
      </EffectComposer>

      {/* Camera Controls */}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
