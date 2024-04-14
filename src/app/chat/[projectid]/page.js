"use client";

import ChatLayout from "@/layouts/ChatLayout";
import UserChatLayout from "@/layouts/UserChatLayout";
import React, { useEffect, useRef, useState } from "react";

// sub-ui components
import ChatBox from "@/components/Chat/ChatBox";
import ChatInput from "@/components/Chat/ChatInput";

export default function ChatPage({ params }) {
  const { projectid } = params;

  const projectName = "p1-letterman"; // fake project name

  const [query, setQuery] = useState("");
  const [isChatting, setIsChatting] = useState(false);

  // chat histories : this will be rendered directly to the chat box
  const [chatHistories, setChatHistories] = useState([
    { query: "", response: "" },
  ]);
  // isAiLoading : loading for single query response from the AI
  const [isAiLoading, setIsAiLoading] = useState(false);

  const [userQueries, setUserQueries] = useState([]);

  return (
    <UserChatLayout projectid={projectid} projectName={projectName}>
      <div
        className="w-full h-full max-w-screen-md mx-auto
      flex flex-col"
      >
        {/* Chat */}
        <div className="flex-grow py-10 ">
          <ChatBox
            userQueries={userQueries}
            chatHistories={chatHistories}
            isChatting={isChatting}
            projectName={projectName}
            isAiLoading={isAiLoading}
          />
        </div>

        {/* User input */}
        <div className="flex">
          <ChatInput
            query={query}
            setQuery={setQuery}
            setUserQueries={setUserQueries}
            setChatHistories={setChatHistories}
            setIsAiLoading={setIsAiLoading}
            setIsChatting={setIsChatting}
          />
        </div>
        {/* Alert message about llm */}
        <div className="flex justify-center mt-2">
          <p className="text-xs">
            Please note that <b>Dylan</b> is still under development and may
            occasionally provide inaccurate or incomplete information.
          </p>
        </div>
      </div>
    </UserChatLayout>
  );
}
