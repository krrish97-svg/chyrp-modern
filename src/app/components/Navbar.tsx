"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center 
      backdrop-blur-xl bg-gradient-to-r from-black/60 via-gray-900/50 to-black/60 shadow-lg 
      animate-pulse-glow"
    >
      {/* Brand */}
      <motion.div
        whileHover={{
          scale: 1.12,
          textShadow: "0px 0px 35px rgba(255,255,255,1)",
        }}
        transition={{ type: "spring", stiffness: 250 }}
        className="text-3xl font-light cursor-pointer tracking-wider 
        text-white drop-shadow-[0_0_10px_#ffffff] animate-flicker"
      >
        <Link href="/">Chyrp ⚡</Link>
      </motion.div>

      {/* Nav Links */}
      <div className="flex items-center space-x-8 text-lg font-medium text-white">
        <Link href="/about" className="hover:text-white hover:drop-shadow-[0_0_8px_#ffffff] transition">
          About
        </Link>
        <Link href="/login" className="hover:text-white hover:drop-shadow-[0_0_8px_#ffffff] transition">
          Login
        </Link>
      </div>
    </nav>
  );
}
