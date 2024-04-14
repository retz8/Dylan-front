"use client";

import GitHubIcon from "@/components/ui/icons/GitHubIcon";
import ProjectForm from "../../../components/AddProject/ProjectForm";
import ChatLayout from "@/layouts/ChatLayout";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectLoading from "@/components/AddProject/ProjectLoading";
import ProjectUploadSuccess from "@/components/AddProject/ProjectUploadSuccess";
import { useSession } from "next-auth/react";

// form
// Project Name: string
// GitHub repo name: string
// GitHub access code: string (hidden)

export default function AddProjectPage() {
  const { data: session } = useSession();

  const [projectName, setProjectName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [newProjectId, setNewProjectId] = useState(null);

  const formVariants = {
    initial: { opacity: 1 },
    loading: { opacity: 0, transition: { duration: 0.5 } },
  };

  const formVariants2 = {
    initial: { opacity: 0 },
    loading: { opacity: 1, transition: { duration: 0.5 } },
  };

  const formVariants3 = {
    loading: { opacity: 0 },
    success: { opacity: 1, transition: { duration: 0.5 } },
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
          <motion.div
            variants={formVariants2}
            initial="initial"
            animate={isLoading ? "loading" : "initial"}
            className="text-2xl"
          >
            <p className="flex items-center gap-3">{`Learning ${projectName}...`}</p>
          </motion.div>
        ) : isSuccess ? (
          <motion.div
            variants={formVariants3}
            initial="initial"
            animate={isSuccess ? "success" : "loading"}
            className="text-2xl"
          >
            <p className="flex items-center gap-3">
              Project added successfully!
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={formVariants}
            initial="initial"
            animate={isLoading ? "loading" : "initial"}
            className="text-2xl"
          >
            <p className="flex items-center gap-3">
              Add your project with GitHub <GitHubIcon />
            </p>
          </motion.div>
        )}

        {/* </h1> */}
        {isLoading && !isSuccess ? (
          <motion.div
            variants={formVariants2}
            initial="initial"
            animate={"loading"}
            className="flex flex-col justify-center items-center"
          >
            <ProjectLoading />
          </motion.div>
        ) : !isSuccess ? (
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
              setNewProjectId={setNewProjectId}
              projectName={projectName}
              setProjectName={setProjectName}
            />
          </motion.div>
        ) : (
          <ProjectUploadSuccess
            userid={session?.user.email.split("@")[0]}
            projectid={newProjectId}
            projectName={projectName}
          />
        )}
      </div>
    </ChatLayout>
  );
}
