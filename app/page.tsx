import BookNow from "@/components/BookNow";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import useClearbit from "@/components/useClearbit";
import useHotJar from "@/components/useHotJar";
import useLinkedinTag from "@/components/useLinkedinTag";
import { usePixel } from "@/components/usePixel";
import usePlerdy from "@/components/usePlerdy";
import useScript from "@/components/useScript";
import useTwitterPixel from "@/components/useTwitterPixel";
import SalesPage from "@/pages/funnels/SalesPagev2";
import Image from "next/image";
import { useEffect, useState } from "react";
import Blog from "./resources/Blog";
import { Metadata } from "next";
import Banner from "@/components/Banner";
import CTAButton from "@/components/CtaButton";
import SalesPagev3 from "@/pages/funnels/SalesPagev3";
export default function Home() {
  // useClearbit(
  //   "https://tag.clearbitscripts.com/v1/pk_60e7c0678f1219a2a34fcf5c2b8be745/tags.js"
  // );
  // const pixel = usePixel();
  // useLinkedinTag();
  // useTwitterPixel();
  // // useHotJar();
  // usePlerdy();

  return (
    <main>
      {/* <Banner /> */}
      {/* <SalesPagev3 /> */}
      <Nav />
      <SalesPage />
      {/* <h1 className="text-center font-bold pt-10 text-4xl lg:text-6xl">
        Learn With Us 👇
      </h1> */}
      {/* <Blog /> */}
      {/* <section
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
      </section> */}
      {/* <Footer /> */}

      {/* <BookNow /> */}
    </main>
  );
}
export const metadata: Metadata = {
  title:
    "Xentora - Real Estate Marketing Agency - Digital Ads That Drive Results.",
  description:
    "We specialize in custom digital marketing campaigns for real estate professionals. Our YouTube, Facebook and TikTok ads are designed to boost visibility, engagement and leads. Trust our experts to manage your digital presence and growth.",
  openGraph: {
    title:
      "Xentora - Real Estate Marketing Agency - Digital Ads That Drive Results",
    description:
      "We specialize in custom digital marketing campaigns for real estate professionals. Our YouTube, Facebook and TikTok ads are designed to boost visibility, engagement and leads. Trust our experts to manage your digital presence and growth.",
  },
};
