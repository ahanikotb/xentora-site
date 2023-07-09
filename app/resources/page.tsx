import Nav from "@/components/Nav";
import BlogCard from "@/components/BlogCard";
import React from "react";
import Notion from "@notion-cms/client";
const database_id = "1ef2b498-5009-423f-bd67-19c5016dd3d7";

async function Page() {
  const notion = new Notion({ auth: process.env.NOTION_API_KEY });

  const db = await notion.loadDatabase(database_id, {});

  return (
    <div>
      <Nav />
      <h1 className="text-center text-6xl font-black text-white mt-10">
        Resources
      </h1>
      <div className="mx-auto w-[80vw] my-20">
        {db.map((p, i) => (
          <BlogCard
            post={{ ...p.props, id: p.props.publicNotionPageId }}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;

type Post = {
  id: string;
  title: string;
  year: string;
  monthDay: string;
  description: string;
  image: string;
  imageAlt: string;
  postSlug: string;
};
