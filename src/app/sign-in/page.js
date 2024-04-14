"use client";

import { Button, Card } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { motion } from "framer-motion";

export default function SignInPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col justify-center items-center gap-6"
    >
      <Card
        className="flex flex-row items-center gap-4 w-96 p-4"
        variant="solid"
      >
        {/* Left: Sign in with google text */}
        <div className="flex flex-col items-start">
          <h1>This is Dylan</h1>
          <h1 className="text-2xl">
            Sign in with
            <span className="google-colors"> Google</span>
          </h1>
        </div>

        {/* Right: button */}
        <Button
          size="lg"
          color="primary"
          variant="solid"
          onClick={() => signIn("google")}
        >
          Sign in
        </Button>
      </Card>

      <Card
        className="flex flex-col items-center gap-4 w-96 p-4"
        variant="solid"
      >
        <p>We provide a personalized chatbot for your coding projects</p>
        <p>We provide a personalized chatbot for your coding projects</p>
        <p>We provide a personalized chatbot for your coding projects</p>
      </Card>
    </motion.main>
  );
}
