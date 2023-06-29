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
        {/* <div className="text-2xl prose-invert  prose xl:prose-2xl xl:text-3xl">
          <MDXRemote source={post} />
        </div> */}

        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={post}
          className=" text-2xl prose-invert  prose xl:prose-2xl xl:text-3xl"
        ></ReactMarkdown>
      </div>
    </div>
  );
}

export default Page;

function getPostBySlug(slug: string) {
  if (slug) {
    return `
    ## **Add 5 to 10 Clients In The Next 90 Days with this Automated Outbound System**

<div
  style={{
    position: "relative",
    paddingBottom: "64.63195691202873%",
    height: 0,
  }}
>
  <iframe
    src="https://www.loom.com/embed/f33eae98e8f74298932d1e9a82b3e2ac"
    frameBorder={0}
    webkitallowfullscreen
    mozallowfullscreen
    allowFullScreen
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  />
</div>
`;
  }
  return fs.readFileSync(`./public/posts/${slug}.mdX`, "utf-8");
}
