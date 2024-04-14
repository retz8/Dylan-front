import { Card, Chip } from "@nextui-org/react";
import React from "react";

export default function TagDisplay({ techTags }) {
  return (
    <Card
      style={{ height: "300px", width: "100%" }}
      className="py-2 grid 
      overflow-y-auto overflow-x-hidden"
    >
      {techTags.map((tag, index) => (
        <Chip
          className="ml-2 mb-2"
          key={`tag-${index}`}
          color={
            tag.type === "web"
              ? "success"
              : tag.type === "mobile"
              ? "warning"
              : tag.type === "ds_ml"
              ? "error"
              : "secondary"
          }
        >
          {tag.label}
        </Chip>
      ))}
    </Card>
  );
}
