import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownDisplay({ content }) {
  return (
    <div className="overflow-x-auto p-2">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";

            if (!inline && language) {
              return (
                <SyntaxHighlighter
                  language={language}
                  style={vscDarkPlus}
                  showLineNumbers
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            } else {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          },
        }}
      >
        {content?.trim()}
      </ReactMarkdown>
    </div>
  );
}
