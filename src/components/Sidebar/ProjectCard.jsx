"use client";

import {
  Button,
  Card,
  CardBody,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import GitHubIcon from "../ui/icons/GitHubIcon";
import TrashIcon from "../ui/icons/TrashIcon";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { deleteProject } from "@/services/project";

export default function ProjectCard({
  forSideBar = false,
  userid,
  projectid,
  projectName,
  isCurrent,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDelete = async () => {
    if (!isHovered) return;

    const confirmDelete = window.confirm(
      `Are you sure you want to delete the project ${projectName}?`
    );

    const data = {
      userid: userid,
      projectid: projectid,
    };
    const res = await deleteProject(data);

    if (res) {
      // Redirect to the chat page
      window.location.href = `/chat/`;
    } else {
      // Handle error
      console.log("Failed to delete project");
    }
  };

  return (
    <Card
      className={`py-4`}
      style={{
        border: isCurrent ? "1px solid #d9d9d9" : "1px solid transparent",
        boxShadow: isCurrent ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        background: isCurrent
          ? "linear-gradient(to right, #808e95, #37474f)"
          : "",
        transition: "background 0.2s ease, box-shadow 0.2s ease", // Add transition
      }}
      isHoverable
      css={{
        "&:hover": {
          background: isCurrent
            ? "linear-gradient(to right, #808e95, #37474f)" // Darker gradient on hover
            : "",
          boxShadow: isCurrent ? "0px 4px 8px rgba(0, 0, 0, 0.15)" : "none", // Stronger shadow
        },
      }}
    >
      {/* ... CardHeader (optional) ... */}
      <CardBody
        className={`overflow-visible py-0 px-4 flex flex-row items-center justify-between gap-4`}
      >
        {forSideBar ? (
          <Link href={`/chat/${userid}/${projectid}`}>
            <h4 className="font-bold text-medium basis-[2/3]">{projectName}</h4>
          </Link>
        ) : (
          <h4 className="font-bold text-medium">{projectName}</h4>
        )}
        {/* <PopoverContent> */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleDelete}
          className="h-full z-10 pl-2"
        >
          <motion.div
            key={isHovered ? "trashIcon" : "githubIcon"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isHovered ? <TrashIcon /> : <GitHubIcon />}
          </motion.div>
        </div>

        {/* </PopoverContent> */}
      </CardBody>
    </Card>
  );
}
