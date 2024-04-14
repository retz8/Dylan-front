"use client";

import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../ui/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../ui/icons/EyeSlashFilledIcon";
import React, { useEffect, useState } from "react";
import { addProject } from "@/services/project";
import { motion } from "framer-motion";
import TagInputs from "./TagInputs";
import TagDisplay from "./TagDisplay";
import { useSession } from "next-auth/react";

export default function ProjectForm({
  isLoading,
  setIsLoading,
  isSuccess,
  setIsSuccess,
  setNewProjectId,
}) {
  const { data: session } = useSession();

  const [projectName, setProjectName] = useState("");
  const [repoName, setRepoName] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const [isFailure, setIsFailure] = useState(true);

  // user selected tags
  const [techTags, setTechTags] = useState([]);
  const [disabledKeys, setDisabledKeys] = useState([]);

  const [isFormValid, setIsFormValid] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);

  const errorMessageVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (isFailure) {
      const timer = setTimeout(() => setIsFailure(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isFailure]);

  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const toggleVisibility = () => setIsCodeVisible(!isCodeVisible);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  // form validation
  useEffect(() => {
    setIsFormValid(projectName && repoName && accessCode);
  }, [projectName, repoName, accessCode]);

  // submit logic
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", projectName, repoName, accessCode);
    setIsLoading(true);

    // set up fake timer for 10s

    // techTags
    const data = {
      repoName: repoName,
      authKey: accessCode,
      userid: session?.user.email.split("@")[0],
      projectName: projectName,
      techTags: techTags.map((tag) => tag.label),
    };

    // console.log(data);

    const res = await addProject(data);

    if (!res) {
      setIsSuccess(false);
      setIsLoading(false);
      setIsFailure(true);
      return;
    }
    // const modelData = await res.json();
    console.log(res.projectid);
    setNewProjectId(res.projectid);
    setIsLoading(false);
    setIsSuccess(true);
  };
  return (
    <form
      className="flex justify-center w-full flex-wrap md:flex-nowrap gap-4"
      onSubmit={handleFormSubmit}
    >
      <Input
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        type="text"
        label="Project Name"
        placeholder="Enter your project name"
        size="lg"
      />
      <Input
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        type="text"
        label="GitHub Repository Name"
        placeholder="Enter your repository name"
        size="lg"
      />
      <Input
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
        label="Access Token"
        placeholder="Enter your access token"
        size="lg"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isCodeVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isCodeVisible ? "text" : "password"}
        className="w-full"
      />
      <TagInputs
        techTags={techTags}
        setTechTags={setTechTags}
        disabledKeys={disabledKeys}
        setDisabledKeys={setDisabledKeys}
      />

      <TagDisplay
        techTags={techTags}
        setTechTags={setTechTags}
        setDisabledKeys={setDisabledKeys}
      />

      <Button
        color="primary"
        size="lg"
        variant="ghost"
        className="mt-2"
        isDisabled={!isFormValid}
        type="submit"
        handleKeyDown={handleKeyDown}
      >
        Ready to go!
      </Button>

      {/* alert  */}
      {isFailure && (
        <motion.div
          variants={errorMessageVariants}
          initial="initial"
          animate={isFailure ? "visible" : "exit"}
          exit="exit"
          style={{
            position: "absolute",
            top: 0,
            background: "#990000",
            padding: "1rem",
            zIndex: 100,
            borderRadius: "0.5rem",
            transition: "all 0.5s",
          }}
        >
          <span style={{ color: "white", opacity: 0.8 }}>
            Something went wrong. Please try again.
          </span>
        </motion.div>
      )}
    </form>
  );
}
