"use client";

import { Textarea } from "@nextui-org/react";
// import { Input } from "@nextui-org/react";
// ChatInput.jsx
// - user inputs their query
// - send input to the backend to get ai response

import React, { useState } from "react";
import SendIcon from "../ui/icons/SendIcon";
import { useSession } from "next-auth/react";
import { askQuestion } from "@/services/project";

export default function ChatInput({
  query,
  setQuery,
  setIsChatting,
  setUserQueries,
  setChatHistories,
  setIsAiLoading,
  projectid,
}) {
  const { data: session } = useSession();

  const sendQuery = async (query) => {
    console.log("we are sending the query");
    setIsAiLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 10000));

    const data = {
      userid: session?.user.email.split("@")[0],
      projectid: projectid,
      query: query,
    };

    // const response = await askQuery(data);
    // continue with sending the query to the backend
    // console.log("we got the response");

    // const fakeResponse = {
    //   message: `{# 24 MHACKS HACKATHON PROJECT FRONTEND

    //   ## Technology Stack

    //   - Framework: Next.js (^14.2.1)
    //   - UI Library: NextUI / Aceternity
    //   - HTTP Client: Axios (^1.6.8)
    //   - Styling: tailwindcss (^3.0.0)

    //   ## Project Structure

    //   - layouts: contains the layout components (sidebar, header)

    //   ## Getting Started

    //   1. install necessary packages

    //   `,
    // };

    const res = await askQuestion(data);
    if (!res) {
      console.error("error in sending query");
      setIsAiLoading(false);
    }

    setChatHistories((prev) => {
      const last = prev[prev.length - 1];

      if (!res) {
        last.response = "Sorry, I'm unable to answer that question.";
        return [...prev];
      }
      last.response = res?.geminiAnswer;
      return [...prev];
    });

    setIsAiLoading(false);
  };

  const handleQuery = async () => {
    console.log(query);

    setUserQueries((prev) => [...prev, query]);

    // set up chat histories
    setChatHistories((prev) => [...prev, { query: query, response: null }]);
    setQuery("");
    setIsChatting(true);

    // send query to the backend
    await sendQuery(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleQuery();
    }
  };

  return (
    <div className="w-full flex">
      <Textarea
        value={query}
        onValueChange={setQuery}
        minRows={1}
        maxRows={4}
        variant="flat"
        placeholder="Ask Dylan"
        endContent={
          <button className="btn btn-primary" onClick={handleQuery}>
            <SendIcon />
          </button>
        }
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
