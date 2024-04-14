import React, { useEffect, useMemo, useState } from "react";
import { Listbox, ListboxItem, Spinner } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { loadProjects } from "@/services/project";
import ProjectCard from "../Sidebar/ProjectCard";
import Link from "next/link";

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
      setProjects(response?.projectList);
    };
    fetchProjects();
  }, [userid]);

  if (!projects) {
    return (
      <div className="w-full h-full flex justify-center items-center py-10">
        <Spinner size="lg" />
      </div>
    );
  }

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col">
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
    </div>
  );
}
