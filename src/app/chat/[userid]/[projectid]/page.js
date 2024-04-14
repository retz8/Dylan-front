"use client";

import ChatLayout from "@/layouts/ChatLayout";
import UserChatLayout from "@/layouts/UserChatLayout";
import React, { useEffect, useRef, useState } from "react";

// sub-ui components
import ChatBox from "@/components/Chat/ChatBox";
import ChatInput from "@/components/Chat/ChatInput";
import { useSession } from "next-auth/react";
import { loadChatHistory } from "@/services/project";

export default function ChatPage({ params }) {
  const { userid, projectid } = params;

  const [currentProject, setCurrentProject] = useState(null);

  const [query, setQuery] = useState("");
  const [isChatting, setIsChatting] = useState(false);
  const [isLoadingChatHistories, setIsLoadingChatHistories] = useState(true);
  // chat histories : this will be rendered directly to the chat box
  const [chatHistories, setChatHistories] = useState([
    { query: "", response: "" },
  ]);
  // isAiLoading : loading for single query response from the AI
  const [isAiLoading, setIsAiLoading] = useState(false);

  const [userQueries, setUserQueries] = useState([]);

  useEffect(() => {
    // fetch chat histories
    const fetchChatHistories = async () => {
      setIsLoadingChatHistories(true);
      const res = await loadChatHistory(userid, projectid);
      if (!res) return;
      console.log(res?.user_chat_history);
      // model: "", user: ""

      // conver to chatHistories (query (user): "", response (model): "")
      const loadedChatHistories = res?.user_chat_history.map((chat) => ({
        query: chat.user,
        response: chat.model,
      }));

      if (loadedChatHistories.length > 0) setIsChatting(true);

      setChatHistories(loadedChatHistories);

      setIsLoadingChatHistories(false);
    };
    fetchChatHistories();
  }, [userid, projectid, params]);

  return (
    <UserChatLayout
      projectid={projectid}
      projectName={currentProject?.projectName}
      userid={userid}
      currentProject={currentProject}
      setCurrentProject={setCurrentProject}
    >
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
            projectName={currentProject?.projectName}
            isAiLoading={isAiLoading}
            isLoadingChatHistories={isLoadingChatHistories}
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
            projectid={projectid}
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
