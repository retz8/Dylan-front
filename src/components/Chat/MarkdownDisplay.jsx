import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownDisplay({ content }) {
  return (
    <div className="overflow-x-auto">
      <ReactMarkdown>{content}</ReactMarkdown>;
    </div>
  );
}
