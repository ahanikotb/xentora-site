import React from "react";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import Nav from "@/components/Nav";
import rehypeRaw from "rehype-raw";

type Props = {
  params: {
    postId: string;
  };
};

function Page({ params: { postId } }: Props) {
  const post = getPostBySlug(postId);

  return (
    <div>
      <Nav />
      <div className="p-10 grid place-content-center pt-20">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={post}
          className=" text-2xl prose-invert  prose xl:prose-2xl xl:text-2xl"
        ></ReactMarkdown>
      </div>
    </div>
  );
}

export default Page;

function getPostBySlug(slug: string) {
  return fs.readFileSync(`./public/posts/${slug}.mdX`, "utf-8");
}
