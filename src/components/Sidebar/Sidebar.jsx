"use client";

// Sidebar.jsx
// - add project button
// - list of existing projects
//    - need to load projects from the server

import React, { useEffect, useState } from "react";
import SideAddProjectButton from "./SideAddProjectButton";
import styles from "./sidebar.module.css";
import HorizontalDivider from "../ui/HorizontalDivider";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Sidebar({ projects, userid, curProject }) {
  if (projects === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.sidebar}>
      {/* Add project button */}
      <SideAddProjectButton />
      <Divider />
      {/* <HorizontalDivider /> */}
      {/* List of exisitng projects */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-2"
      >
        {projects?.map(({ projectid, projectName }) => (
          <li key={projectid}>
            <Link href={`/chat/${userid}/${projectid}`}>
              <ProjectCard
                projectName={projectName}
                isCurrent={curProject?.projectid === projectid}
              />
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
