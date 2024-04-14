import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import GitHubIcon from "../ui/icons/GitHubIcon";

export default function ProjectCard({ icon, projectName }) {
  return (
    <Card className="py-4 " isBlurred>
      {/* <CardHeader className="pb-0 pt-2 px-4 flex-col items-start"></CardHeader> */}
      <CardBody
        className="overflow-visible py-0 px-4
      flex flex-row items-center gap-4"
      >
        <h4 className="font-bold text-medium">{projectName}</h4>
        <GitHubIcon />
      </CardBody>
    </Card>
  );
}
