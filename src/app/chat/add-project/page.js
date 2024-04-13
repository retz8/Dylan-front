"use client";

import GitHubIcon from "@/components/ui/icons/GitHubIcon";
import ProjectForm from "../../../components/AddProject/ProjectForm";
import ChatLayout from "@/layouts/ChatLayout";
import React, { useState } from "react";
import { motion } from "framer-motion";

// form
// Project Name: string
// GitHub repo name: string
// GitHub access code: string (hidden)

export default function AddProjectPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formVariants = {
    initial: { opacity: 1 },
    loading: { opacity: 0, transition: { duration: 0.3 } },
  };

  const loadingFormVariants = {
    initial: { opacity: 0 },
    loading: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <ChatLayout>
      <div
        className="relative dark text-foreground
        max-w-screen-xl mx-auto
      flex flex-col items-center justify-center gap-8 h-full"
      >
        {/* <h1 className="text-2xl flex gap-3 items-center"> */}
        {isLoading && !isSuccess ? (
          <div>Loading...</div>
        ) : !isSuccess ? (
          <div className="text-2xl flex items-center gap-3">
            Add your project with GitHub
            <GitHubIcon />
          </div>
        ) : (
          <div>Chat with your project partner, Dylan!</div>
        )}
        {/* </h1> */}
        <motion.div
          className="w-96"
          variants={formVariants}
          initial="initial"
          animate={isLoading ? "loading" : "initial"}
        >
          <ProjectForm
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}
          />
        </motion.div>
      </div>
    </ChatLayout>
  );
}
