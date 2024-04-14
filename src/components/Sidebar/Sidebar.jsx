"use client";

// Sidebar.jsx
// - add project button
// - list of existing projects
//    - need to load projects from the server

import React from "react";
import SideAddProjectButton from "./SideAddProjectButton";
import styles from "./sidebar.module.css";
import HorizontalDivider from "../ui/HorizontalDivider";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function Sidebar({ projectid, projectName }) {
  return (
    <div className={styles.sidebar}>
      {/* Add project button */}
      <SideAddProjectButton />
      {/* <HorizontalDivider /> */}
      {/* List of exisitng projects */}
      <ul className="flex flex-col gap-2">
        <li>
          <Link href={`/chat/${projectid}`}>
            <ProjectCard projectName={projectName} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
