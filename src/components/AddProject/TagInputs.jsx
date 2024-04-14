import React, { useState } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  select,
} from "@nextui-org/react";
import { tags, techStackMap } from "./tags";

export default function TagInputs({ techTags, setTechTags }) {
  const [value, setValue] = useState("");
  const [selectedKey, setSelectedKey] = useState(null);
  const [disabledKeys, setDisabledKeys] = useState([]);

  const onSelectionChange = (id) => {
    console.log("id: ", id);
    setValue(id);
  };

  const onInputChange = (value) => {
    console.log("value: ", value);
    setSelectedKey(value);
  };

  const addNewTag = () => {
    if (!selectedKey) return;

    setDisabledKeys([...disabledKeys, value]);
    setTechTags([
      ...techTags,
      { label: selectedKey, type: techStackMap.get(selectedKey) },
    ]);

    // clear the input
    setValue("");
    setSelectedKey(null);

    console.log("Adding new tag", selectedKey);
  };

  return (
    <div className="flex flex-row w-full gap-4">
      <Autocomplete
        label="Select your technology stacks"
        className=""
        // labelPlacement="outside-left"
        allowsCustomValue={true}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
        disabledKeys={disabledKeys}
      >
        {tags.map((tag) => (
          <AutocompleteItem key={tag.value} value={tag.value}>
            {tag.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>

      <div className="h-full">
        <Button onClick={addNewTag} className="h-full">
          Add Tag
        </Button>
      </div>

      {/* <div>{selectedKey}</div> */}
    </div>
  );
}
