import React, { useEffect, useMemo, useState } from "react";
import { Listbox, ListboxItem, Spinner } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { loadProjects } from "@/services/project";
import ProjectCard from "../Sidebar/ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectList({ userid }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [projects, setProjects] = useState([]); // [ { projectid, projectName }

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  useEffect(() => {
    const fetchProjects = async () => {
      if (userid === null) return;
      const response = await loadProjects(userid);
      if (response === undefined) {
        return;
      }
      setProjects(response?.projectList);
    };
    fetchProjects();
  }, [userid]);

  if (projects === null || projects === undefined) {
    return (
      <div className="w-full h-full flex justify-center items-center py-10">
        <Spinner size="lg" />
      </div>
    );
  }

  if (projects?.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* <ListboxWrapper className="bg-yellow-300"> */}
      <Listbox
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="none"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className=""
      >
        {projects?.map((project) => (
          <ListboxItem key={project.projectid} className="w-full">
            <Link href={`/chat/${userid}/${project.projectid}`}>
              <ProjectCard
                projectName={project.projectName}
                isCurrent={false}
              />
            </Link>
          </ListboxItem>
        ))}
      </Listbox>
    </motion.div>
  );
}
