"use client";

import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../ui/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../ui/icons/EyeSlashFilledIcon";
import React, { useEffect, useState } from "react";
import { addProject } from "@/services/project";
import { motion } from "framer-motion";
import TagInputs from "./TagInputs";

export default function ProjectForm({
  isLoading,
  setIsLoading,
  isSuccess,
  setIsSuccess,
}) {
  const [projectName, setProjectName] = useState("");
  const [repoName, setRepoName] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [tags, setTags] = useState([]);

  const [isFormValid, setIsFormValid] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);

  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const toggleVisibility = () => setIsCodeVisible(!isCodeVisible);

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
    setTimeout(() => {
      setIsSuccess(true);
      console.log("done");
    }, 5000);

    // const data = {
    //   repoName: repoName,
    //   AuthKey: accessCode,
    // };

    // const res = await addProject(data);
    // console.log(res);
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
      <TagInputs />

      <Button
        color="primary"
        size="lg"
        variant="ghost"
        className="mt-2"
        isDisabled={!isFormValid}
        type="submit"
      >
        Ready to go!
      </Button>
    </form>
  );
}
