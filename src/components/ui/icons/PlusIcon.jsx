import { FaPlus } from "react-icons/fa6";

import React from "react";

export default function PlusIcon({ size = "medium" }) {
  return <FaPlus className={`${size === "medium" ? "w-5 h-5" : "w-4 h-4"}`} />;
}
