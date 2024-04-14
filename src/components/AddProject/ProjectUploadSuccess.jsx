import { Button } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectUploadSuccess({ userid, projectid }) {
  const formVariants = {
    initial: { opacity: 0 },
    loading: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={formVariants}
      initial="initial"
      animate={"loading"}
      className="flex flex-col gap-4 items-center"
    >
      {/* <p>Chat with your project partner Dylan!</p> */}

      <Link href={`/chat/${userid}/${projectid}`}>
        <Button>Go</Button>
      </Link>
    </motion.div>
  );
}
