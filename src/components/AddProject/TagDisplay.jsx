import { Card, Chip } from "@nextui-org/react";
import React from "react";

export default function TagDisplay({ techTags, setTechTags, setDisabledKeys }) {
  const handleDeleteChip = (chip) => () => {
    console.log(chip);
    setDisabledKeys((prev) => prev.filter((key) => key !== chip.value));
    setTechTags((prev) => prev.filter((tag) => tag.label !== chip.label));
  };

  return (
    <Card
      style={{ height: "300px", width: "100%" }}
      className="py-2 
      overflow-y-auto overflow-x-hidden"
    >
      {techTags.map((tag, index) => (
        <div className="flex flex-row items-center gap-2" key={`tag-${index}`}>
          <Chip
            className="ml-2 mb-2"
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
            <button
              className="ml-1"
              type="button"
              onClick={handleDeleteChip(tag)}
            >
              x
            </button>
          </Chip>
        </div>
      ))}
    </Card>
  );
}
