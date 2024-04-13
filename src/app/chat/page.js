import ChatLayout from "@/layouts/ChatLayout";
import React from "react";
import AddProjectButton from "@/components/Chat/AddProjectButton";

import ProjectList from "@/components/Chat/ProjectList";

export default function ChatLandingPage() {
  return (
    <ChatLayout>
      <div
        className="max-w-screen-xl mx-auto
      flex flex-col items-center justify-center h-full gap-2"
      >
        {/* Good afternoon test */}
        <h1 className="text-4xl">Good afternoon, Ian</h1>

        {/* Create new + Project List */}
        <div className="flex flex-col w-96 px-10 py-4">
          {/* button */}
          <AddProjectButton />
          {/* list */}
        </div>
      </div>
    </ChatLayout>
  );
}
