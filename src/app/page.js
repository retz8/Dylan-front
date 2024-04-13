"use client";

// Hook Text
// Get Started button
// Detailed Introduction on App
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full">
      <section
        className="h-full flex flex-col justify-center items-center gap-4
    text-5xl "
      >
        <TextGenerateEffect words="Welcome to Dylan" />
        {/* Get Started Button  */}
        <motion.div
          initial={{ opacity: 0 }} // Initially set opacity to 0 (hidden)
          animate={{ opacity: 1 }} // Animate opacity to 1 (fully visible)
          transition={{ duration: 1.5 }} // Set transition duration to 0.5 seconds
        >
          <Button size="lg" color="primary" variant="flat">
            <Link className="text-xl" href="/chat">
              Get Started
            </Link>
          </Button>
        </motion.div>

        {/* Detailed Introduction */}
        <motion.div
          className="text-center text-2xl mt-2"
          initial={{ opacity: 0 }} // Initially set opacity to 0 (hidden)
          animate={{ opacity: 1 }} // Animate opacity to 1 (fully visible)
          transition={{ duration: 1.5 }} // Set transition duration to 0.5 seconds
        >
          <p>Dylan is a next generation AI assistant for your coding project</p>
        </motion.div>
      </section>
    </main>
  );
}
