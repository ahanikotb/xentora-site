import Nav from "@/components/Nav";
import BlogCard from "@/components/BlogCard";
import React from "react";

const posts: Post[] = [
  {
    title: "How To Add 5 To 10 New Clients in The Next 90 Days",
    description:
      "Use Ai and Automation to get more clients for your agency while keeping your profit margins high.",
    year: "2023",
    monthDay: "Oct 10",
    image:
      "https://cdn.loom.com/sessions/thumbnails/f33eae98e8f74298932d1e9a82b3e2ac-with-play.gif",
    imageAlt: "Loom Image",
    postSlug: "/learn/add-5-to-10-new-clients-in-the-next-90-days",
  },
];

function Page() {
  return (
    <div>
      <Nav />
      <h1 className="text-center text-6xl font-black text-white mt-10">BLOG</h1>
      <div className="mx-auto w-[80vw] my-20">
        {posts.map((p, i) => (
          <BlogCard post={p} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Page;

type Post = {
  title: string;
  year: string;
  monthDay: string;
  description: string;
  image: string;
  imageAlt: string;
  postSlug: string;
};
