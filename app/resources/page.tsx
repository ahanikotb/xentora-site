import Nav from "@/components/Nav";
import BlogCard from "@/components/BlogCard";
import React from "react";
import Notion from "@notion-cms/client";
import Footer from "@/components/Footer";
import Blog from "./Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Xentora - Real Estate Marketing Tips: Tutorials to Get More Listings and Buyers.",
  description:
    "Learn actionable real estate marketing tactics to get more listings and connect with motivated buyers. Xentora's step-by-step tutorials help real estate agents master digital marketing, social media, SEO, lead generation, and advertising to grow their business.",
  openGraph: {
    title:
      "Xentora - Real Estate Marketing Tips: Tutorials to Get More Listings and Buyers.",
    description:
      "Learn actionable real estate marketing tactics to get more listings and connect with motivated buyers. Xentora's step-by-step tutorials help real estate agents master digital marketing, social media, SEO, lead generation, and advertising to grow their business.",
  },
};

async function Page() {
  return (
    <div>
      <Nav />
      <h1 className="text-center text-6xl font-black text-black mt-10">
        Resources
      </h1>
      <Blog />
      <Footer />
    </div>
  );
}

export default Page;
