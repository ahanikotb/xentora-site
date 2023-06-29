"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function PostData({ post }: any) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      children={post}
      className=" text-2xl prose-invert  prose xl:prose-2xl xl:text-2xl"
    ></ReactMarkdown>
  );
}
