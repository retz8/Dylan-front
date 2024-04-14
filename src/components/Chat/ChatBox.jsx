import React from "react";
import { TypewriterEffectSmooth } from "../ui/aceternity/typewriter-effect";
import UserQuestion from "./UserQuestion";
import styles from "./chat.module.css";
import AiResponse from "./AiResponse";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";

// when isAiLoading = true, we will show the loading spinner on the last response

export default function ChatBox({
  userQueries,
  chatHistories,
  isChatting,
  projectName,
  isAiLoading,
  isLoadingChatHistories,
}) {
  const { data: session } = useSession();

  const words = [
    {
      text: "How",
    },
    {
      text: "can",
    },
    {
      text: "I",
    },
    {
      text: "help",
    },
    {
      text: "you",
    },
    {
      text: "with",
    },
    {
      text: `${projectName}?`,
    },
  ];

  if (isLoadingChatHistories) {
    return null;
  }

  if (!isChatting) {
    return (
      <div
        className="
      h-full flex flex-col justify-center text-left"
      >
        <h1 className="text-5xl font-bold">{`Hi ${
          session?.user.name.split(" ")[0]
        }`}</h1>
        <TypewriterEffectSmooth words={words} />
      </div>
    );
  }

  return (
    <div className={styles.chatBoxContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className={styles.chats}
      >
        {chatHistories?.slice(1).map(({ query, response }, index) => (
          <div key={index}>
            <UserQuestion query={query} />
            <AiResponse
              isAiLoading={isAiLoading && index === chatHistories.length - 2}
              isLastResponse={index === chatHistories.length - 2}
              response={response}
            />
            {chatHistories.length > 1 && index < chatHistories.length - 2 && (
              <Divider style={{ marginTop: "24px" }} />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
