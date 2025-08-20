"use client";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-b from-[#232946cc] to-transparent backdrop-blur-xl rounded-b-2xl shadow-lg"
    >
      <div className="flex items-center gap-3">
        {/* Example logo, replace src if custom logo */}
        <Image
          src="/logo.svg"
          alt="Gulku"
          width={36}
          height={36}
          className="rounded-lg border border-indigo-800/40 shadow-md"
        />
        <span className="font-bold text-2xl tracking-tight text-white drop-shadow-lg">
          Gulku AI Image Editor
        </span>
      </div>
      <ModeToggle />
    </motion.nav>
  );
}