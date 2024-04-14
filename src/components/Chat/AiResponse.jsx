import React, { useState } from "react";
import styles from "./chat.module.css";
import Image from "next/image";
import CopyIcon from "../ui/icons/CopyIcon";
import CheckIcon from "../ui/icons/CheckIcon";
import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react";
import MarkdownDisplay from "./MarkdownDisplay";
// top: output + copy button
// bottom: logo + mistakes

export default function AiResponse({ isLastResponse, response, isAiLoading }) {
  const lines = response?.split("\\n");
  const processedMarkdownText = lines?.join("\n");

  const [isCopied, setIsCopied] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(processedMarkdownText);
    setIsCopied(true);

    // Reset isCopied after 3 seconds
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 4000);

    // Clear timeout if component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.ai}>
      {/* top */}
      <div
        className={styles.output}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Conditionally render aiTooltips */}
        {(isLastResponse || isHovered) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.aiTooltips}
          >
            <button
              className="flex items-center justify-center"
              onClick={handleCopy}
            >
              {isCopied ? <CheckIcon /> : <CopyIcon />}
              <p className="text-xs ml-2">{isCopied ? "Copied" : "Copy"}</p>
            </button>
          </motion.div>
        )}
        {isAiLoading ? (
          <div className="flex items-center gap-4">
            <p>Dylan is thinking...</p>
            <Spinner size="sm" />
          </div>
        ) : (
          <MarkdownDisplay content={processedMarkdownText} />
        )}
      </div>
      {/* bottom */}
      <div className={styles.aiBottom}>
        <div className="relative w-8 h-8 flex">
          <Image
            src="/logo.png"
            alt="User Icon"
            fill
            className="rounded-full"
          />
        </div>

        <p className="text-xs">
          Dylan can make mistakes. Please verify the information.
        </p>
      </div>
    </div>
  );
}
