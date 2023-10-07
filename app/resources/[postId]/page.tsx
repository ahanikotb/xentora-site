import React from "react";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import Nav from "@/components/Nav";
import rehypeRaw from "rehype-raw";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getBlockIcon,
  getBlockTitle,
  getPageProperty,
  isUrl,
  parsePageId,
} from "notion-utils";

import CTAButton from "@/components/CtaButton";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import { NotionPage } from "./notionpage";
import Head from "next/head";
import Notion from "@notion-cms/client";

import type { Metadata, ResolvingMetadata } from "next";
import Blog from "../Blog";
import Footer from "@/components/Footer";
const database_id = "1ef2b498-5009-423f-bd67-19c5016dd3d7";

type Props = {
  params: {
    postId: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const notion = new Notion({ auth: process.env.NOTION_API_KEY });

  const db = await notion.loadDatabase(database_id, {});

  var id = params.postId.split(".").pop();
  const postData = db.find((article) => article.props.publicNotionPageId == id);

  return {
    title: `Xentora - ${postData?.props.title}`,
    description: `${postData?.props.seoDescription}`,
    openGraph: {
      title: `Xentora - ${postData?.props.title}`,
      description: `${postData?.props.seoDescription}`,
      images: [`${postData?.props.image}`],
    },
  } as Metadata;
}

async function Page({ params: { postId } }: Props) {
  const post = await getPostBySlug(postId);

  return (
    <div className="">
      <Nav />
      <div className="">
        <div className="">
          <NotionPage recordMap={post} />
        </div>
      </div>
      <div className="py-10 ">
        <CTAButton
          additionalClasses={"sm:p-0"}
          href="/easy-book"
          // href="/start"
          CTA="Free Growth Strategy Call"
        ></CTAButton>
      </div>
      <div>
        <h1 className="text-center font-bold pt-10 text-4xl lg:text-6xl">
          More Guides 👇
        </h1>
        <Blog dropArticleId={postId.split(".").pop()} />
      </div>{" "}
      <section
        style={{
          backgroundImage:
            "url(http://www.transparenttextures.com/patterns/textured-paper.png)",
          // background: "rgba(0, 0,30, 1)", //"rgba(0, 0,0, 0.2)",
        }}
        className="my-10 w-[95%] sm:w-[70%] p-2 py-6 mx-auto rounded-lg"
      >
        <h1 className="font-black text-4xl sm:text-5xl text-black text-center">
          WANT TO TALK TO SOMEONE ?
        </h1>
        <h3 className="text-center text-2xl text-black mt-2">
          Our lead generation specialists are available to answer your questions
          💬
        </h3>
        <CTAButton
          additionalClasses={"mt-5 sm:p-0"}
          href="/easy-book"
          // href="/start"
          CTA="Free Growth Strategy Call"
        ></CTAButton>
      </section>
      {/* <div className="p-10 ">
        <CTAButton
          additionalClasses={"sm:p-0"}
          href="/start"
          CTA="Free Growth Strategy Call"
        ></CTAButton>
      </div> */}
      <Footer />
    </div>
  );
}

export default Page;

async function getPostBySlug(postId: string): Promise<any> {
  const notion = new NotionAPI();
  var id = postId.split(".").pop();
  const recordMap = await notion.getPage(id!);
  return recordMap;
}
