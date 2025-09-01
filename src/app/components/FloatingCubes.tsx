"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.6}
        wireframe
      />
    </mesh>
  );
}

export default function FloatingCubes() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.25 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 -z-10"
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Cube />
      </Canvas>
    </motion.div>
  );
}
