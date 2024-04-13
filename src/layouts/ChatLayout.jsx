"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ChatLayout({ children }) {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center"
      initial={{ opacity: 0 }} // Initially set opacity to 0 (hidden)
      animate={{ opacity: 1 }} // Animate opacity to 1 (fully visible)
      transition={{ duration: 0.5 }} // Set transition duration to 0.5 seconds
    >
      <header className="">
        <Link
          className="w-full h-full py-4 flex items-center justify-center"
          href="/chat"
        >
          <span className="text-2xl">Dylan</span>
        </Link>
      </header>
      <main className="grow">{children}</main>
    </motion.div>
  );
}
