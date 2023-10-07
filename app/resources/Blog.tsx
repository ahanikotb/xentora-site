import Nav from "@/components/Nav";
import BlogCard from "@/components/BlogCard";
import React from "react";
import Notion from "@notion-cms/client";
import Footer from "@/components/Footer";
const database_id = "1ef2b498-5009-423f-bd67-19c5016dd3d7";

async function Blog({ dropArticleId }: { dropArticleId?: string }) {
  const notion = new Notion({ auth: process.env.NOTION_API_KEY });

  let db = await notion.loadDatabase(database_id, {});

  db = db.filter((item) => item.props.publicNotionPageId !== dropArticleId);

  return (
    <div>
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

export default Blog;

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
