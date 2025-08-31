"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function Cube() {
  const meshRef = useRef<Mesh>(null!);

  // Rotate the cube every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function SpinningCube() {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      {/* Cube */}
      <Cube />

      {/* Camera Controls */}
      <OrbitControls />
    </Canvas>
  );
}
