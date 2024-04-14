import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import GitHubIcon from "../ui/icons/GitHubIcon";

export default function ProjectCard({ projectName, isCurrent }) {
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
        <h4 className="font-bold text-medium">{projectName}</h4>
        <div>
          <GitHubIcon />
        </div>
      </CardBody>
    </Card>
  );
}
