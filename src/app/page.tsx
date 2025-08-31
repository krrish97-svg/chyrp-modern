"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Import 3D background dynamically
const ThreeBackground = dynamic(() => import("./components/ThreeBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-white overflow-hidden">
      
      {/* 3D Futuristic Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <ThreeBackground />
      </div>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/40 z-5" />

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
        >
          Chyrp Future ⚡
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-2xl text-gray-300 tracking-wide"
        >
          Next-Gen UI with Three.js, Framer Motion & Tailwind
        </motion.p>

        {/* Call-to-Action */}
        <motion.button
          whileHover={{ scale: 1.15, boxShadow: "0px 0px 20px rgba(255,255,255,0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 rounded-2xl bg-white/90 px-8 py-3 text-lg font-semibold text-black shadow-xl hover:bg-white"
        >
          Enter the Future 🚀
        </motion.button>
      </div>
    </main>
  );
}
