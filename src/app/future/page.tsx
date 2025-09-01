"use client";

import Navbar from "../components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
      </mesh>
    </Float>
  );
}

export default function Future() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-900 text-white overflow-hidden">
      <Navbar />

      {/* 3D Scene with Holographic Cubes */}
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} className="absolute inset-0 z-0">
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <FloatingCube position={[-3, 0, 0]} color="#00f5ff" />
        <FloatingCube position={[3, 1, -2]} color="#ff00ff" />
        <FloatingCube position={[0, -2, 2]} color="#00ff88" />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Overlay Gradient for Futuristic Feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 z-5" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold drop-shadow-[0_0_25px_rgba(0,255,255,0.8)]"
        >
          Welcome to the Future 🌌
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-2xl text-gray-300 max-w-2xl"
        >
          Experience the holographic world of Chyrp — where design meets technology in a new dimension.
        </motion.p>
      </div>
    </main>
  );
}
