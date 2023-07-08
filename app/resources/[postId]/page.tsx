"use client";
import React from "react";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import Nav from "@/components/Nav";
import rehypeRaw from "rehype-raw";
import { MDXRemote } from "next-mdx-remote/rsc";
import Notion, {
  DatabaseProps,
  ParsedPageWithBlocks,
} from "@notion-cms/client";
const database_id = "1ef2b498-5009-423f-bd67-19c5016dd3d7";
import CTAButton from "@/components/CtaButton";
import { Blocks } from "@notion-cms/react";

type Props = {
  params: {
    postId: string;
  };
};

async function Page({ params: { postId } }: Props) {
  const post = await getPostBySlug(postId);

  return (
    <div className="">
      <Nav />
      <div className="p-10 grid place-content-center pt-15 ">
        {/* <div className="text-lg prose-invert lg:text-2xl  prose xl:prose-2xl xl:text-3xl text-center sm:text-start">
          <MDXRemote source={post} />
        </div> */}
        <div className="w-[90%] mx-auto lg:text-xl prose-invert prose xl:prose-xl xl:text-xl sm:text-start">
          <Blocks blocks={post.blocks} />
        </div>
        {/* <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={post}
          className=" prose-invert   prose-2x "
        ></ReactMarkdown> */}
      </div>
      <div className="p-10">
        <CTAButton href="/start" CTA="Get Started"></CTAButton>
      </div>
    </div>
  );
}

export default Page;
async function getPostBySlug(
  postId: string
): Promise<ParsedPageWithBlocks<DatabaseProps>> {
  const notion = new Notion({ auth: process.env.NOTION_API_KEY });
  const id = postId.split(".").pop();
  console.log(id);
  const page = await notion.loadPage(id!);
  return page;
}
