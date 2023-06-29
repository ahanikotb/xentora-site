import React from "react";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import Nav from "@/components/Nav";
import rehypeRaw from "rehype-raw";
import { MDXRemote } from "next-mdx-remote/rsc";

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
      <div className="p-10 grid place-content-center pt-15">
        <div className="text-2xl prose-invert  prose xl:prose-2xl xl:text-3xl">
          <MDXRemote source={post} />
        </div>

        {/* <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={post}
          className=" text-2xl prose-invert  prose xl:prose-2xl xl:text-3xl"
        ></ReactMarkdown> */}
      </div>
    </div>
  );
}

export default Page;

function getPostBySlug(slug: string) {
  return fs.readFileSync(`./public/posts/${slug}.mdX`, "utf-8");
}
