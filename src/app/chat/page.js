"use client";

import ChatLayout from "@/layouts/ChatLayout";
import React from "react";
import AddProjectButton from "@/components/Chat/AddProjectButton";

import ProjectList from "@/components/Chat/ProjectList";
import { signOut, useSession } from "next-auth/react";
import { Button, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function ChatLandingPage() {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <ChatLayout>
      <div
        className="max-w-screen-xl mx-auto
      flex flex-col items-center justify-center h-full gap-2"
      >
        {/* Good afternoon test */}
        <h1 className="text-4xl">{`Good afternoon, ${session?.user.name}`}</h1>

        {/* Create new + Project List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
          className="flex flex-col w-96 px-10 pt-6 pb-4"
        >
          {/* button */}
          <AddProjectButton />
          <Divider className="mt-6 mb-4" />
          {/* list */}
          <ProjectList userid={session?.user.email.split("@")[0]} />
        </motion.div>
        <Button
          variant="ghost"
          onClick={() => {
            signOut({ callbackUrl: "http://localhost:3000/" });
            window.location.href = "http://localhost:3000/";
          }}
        >
          Sign Out
        </Button>
      </div>
    </ChatLayout>
  );
}
