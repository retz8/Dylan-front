"use client";

import { Textarea } from "@nextui-org/react";
// import { Input } from "@nextui-org/react";
// ChatInput.jsx
// - user inputs their query
// - send input to the backend to get ai response

import React, { useState } from "react";
import SendIcon from "../ui/icons/SendIcon";

export default function ChatInput({
  query,
  setQuery,
  setIsChatting,
  setUserQueries,
  setChatHistories,
  setIsAiLoading,
}) {
  const sendQuery = async (query) => {
    console.log("we are sending the query");
    setIsAiLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // const data = {
    //   projectid: projectid,
    //   query: query,
    // }

    // const response = await askQuery(data);
    // continue with sending the query to the backend
    console.log("we got the response");

    const fakeResponse = {
      message: `export default function App() {
        return (
          <div className="flex gap-4">
            <Spinner label="Default" color="default" labelColor="foreground"/>
            <Spinner label="Primary" color="primary" labelColor="primary"/>
            <Spinner label="Secondary" color="secondary" labelColor="secondary"/>
            <Spinner label="Success" color="success" labelColor="success"/>
            <Spinner label="Warning" color="warning" labelColor="warning"/>
            <Spinner label="Danger" color="danger" labelColor="danger"/>
          </div> 
        );
      }`,
    };

    setChatHistories((prev) => {
      const last = prev[prev.length - 1];
      last.response = fakeResponse.message;
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
