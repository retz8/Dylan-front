import React from "react";
import { Spinner } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function ProjectLoading() {
  const formVariants = {
    initial: { opacity: 0 },
    loading: { opacity: 1, transition: { duration: 1 } },
  };

  return <Spinner className="" size="lg" />;
}
