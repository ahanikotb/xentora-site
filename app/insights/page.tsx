import Footer from "@/components/Footer";
import NavFunnel from "@/components/NavFunnel";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Notion from "@notion-cms/client";

import "./style.css";
import "./theme.css";
import { Splide } from "@splidejs/splide";
// Default theme
import "@splidejs/react-splide/css";
import { Metadata } from "next";

const database_id = "b3b0532a-b68d-415f-b237-8d6ae1625193";
const notion = new Notion({ auth: process.env.NOTION_API_KEY });

async function page() {
  let db: NotionResponse[] = await notion.loadDatabase(database_id, {});
  console.log(db);

  // const [articles, setArticles] = useState<Article[]>();
  // // db as unknown as Article[]

  // useLayoutEffect(() => {
  //   setArticles(db as unknown as Article[]);
  // }, []);
  // useEffect(() => {
  //   mySplidejs();
  // }, []);

  return (
    <div>
      <NavFunnel useBlog dark showHome={true} />
      <div className="sm:mt-10">
        {/* =========={ MAIN }==========  */}
        <main id="content">
          {/* advertisement */}
          <div className="bg-gray-50 py-4 hidden">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
              <div className="mx-auto table text-center text-sm">
                <a className="uppercase" href="#">
                  Advertisement
                </a>
                <a href="#">
                  <img src="/img/ads/ads_728.jpg" alt="advertisement area" />
                </a>
              </div>
            </div>
          </div>
          {/* hero big grid */}
          <div className="bg-white py-6">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
              {/* big grid 1 */}
              <div className="flex flex-row flex-wrap">
                {/*Start left cover*/}
                <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                  <div className="relative hover-img max-h-98 overflow-hidden">
                    <a href="#">
                      <img
                        className="max-w-full w-full mx-auto h-auto"
                        src={db[0].props.image}
                        alt="Image description"
                      />
                    </a>
                    <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      <a
                        href={
                          db[0].props.postSlug +
                          "-" +
                          db[0].props.publicNotionPageId
                        }
                      >
                        <h2 className="text-3xl font-bold capitalize text-white mb-3">
                          {db[0].props.title}
                          {/* Amazon Shoppers Are Ditching Designer Belts for This
                          Best-Selling */}
                        </h2>
                      </a>
                      <p className="text-gray-100 hidden sm:inline-block">
                        {db[0].props.description}
                        {/* This is a wider card with supporting text below as a
                        natural lead-in to additional content. This very
                        helpfull for generate default content.. */}
                      </p>
                      <div className="pt-2">
                        <div className="text-gray-100">
                          <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          {db[0].props.tag}
                          {/* Europe */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Start box news*/}
                <div className="flex-shrink max-w-full w-full lg:w-1/2">
                  <div className="box-one flex flex-row flex-wrap">
                    <article className="flex-shrink max-w-full w-full sm:w-1/2">
                      <div className="relative hover-img max-h-48 overflow-hidden">
                        <a
                          href={
                            db[1].props.postSlug +
                            "-" +
                            db[1].props.publicNotionPageId
                          }
                        >
                          <img
                            className="max-w-full w-full mx-auto h-auto"
                            src={db[1].props.image}
                            alt={db[1].props.imageAlt}
                          />
                        </a>
                        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                          <a
                            href={
                              db[1].props.postSlug +
                              "-" +
                              db[1].props.publicNotionPageId
                            }
                          >
                            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                              {db[1].props.title}
                              {/* News magazines are becoming obsolete, replaced by
                              gadgets */}
                            </h2>
                          </a>
                          <div className="pt-1">
                            <div className="text-gray-100">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              {db[1].props.tag}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="flex-shrink max-w-full w-full sm:w-1/2">
                      <div className="relative hover-img max-h-48 overflow-hidden">
                        <a
                          href={
                            db[2].props.postSlug +
                            "-" +
                            db[2].props.publicNotionPageId
                          }
                        >
                          <img
                            className="max-w-full w-full mx-auto h-auto"
                            src={db[2].props.image}
                            alt="Image description"
                          />
                        </a>
                        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                          <a
                            href={
                              db[2].props.postSlug +
                              "-" +
                              db[2].props.publicNotionPageId
                            }
                          >
                            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                              {db[2].props.title}

                              {/* Minimalist designs are starting to be popular with
                              the next generation */}
                            </h2>
                          </a>
                          <div className="pt-1">
                            <div className="text-gray-100">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              {db[2].props.tag}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="flex-shrink max-w-full w-full sm:w-1/2">
                      <div className="relative hover-img max-h-48 overflow-hidden">
                        <a
                          href={
                            db[3].props.postSlug +
                            "-" +
                            db[3].props.publicNotionPageId
                          }
                        >
                          <img
                            className="max-w-full w-full mx-auto h-auto"
                            src={db[3].props.image}
                            alt="Image description"
                          />
                        </a>
                        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                          <a
                            href={
                              db[3].props.postSlug +
                              "-" +
                              db[3].props.publicNotionPageId
                            }
                          >
                            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                              {db[3].props.title}
                              {/* Tips for decorating the interior of the living
                              room */}
                            </h2>
                          </a>
                          <div className="pt-1">
                            <div className="text-gray-100">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              {db[3].props.tag}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="flex-shrink max-w-full w-full sm:w-1/2">
                      <div className="relative hover-img max-h-48 overflow-hidden">
                        <a
                          href={
                            db[4].props.postSlug +
                            "-" +
                            db[4].props.publicNotionPageId
                          }
                        >
                          <img
                            className="max-w-full w-full mx-auto h-auto"
                            src={db[4].props.image}
                            // src="/img/dummy/img5.jpg"
                            alt="Image description"
                          />
                        </a>
                        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                          <a
                            href={
                              db[4].props.postSlug +
                              "-" +
                              db[4].props.publicNotionPageId
                            }
                          >
                            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                              {db[4].props.title}
                              {/* Online taxi users are increasing drastically ahead
                              of the new year */}
                            </h2>
                          </a>
                          <div className="pt-1">
                            <div className="text-gray-100">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              {db[4].props.tag}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* end main */}
        <Footer />
      </div>{" "}
      {/* <script src="/splide.min.js"></script> */}
      {/* <script src="src/vendors/hc-sticky/dist/hc-sticky.js"></script>
      <script src="src/vendors/glightbox/dist/js/glightbox.min.js"></script>
      <script src="src/vendors/@splidejs/splide/dist/js/splide.min.js"></script>
      <script src="src/vendors/@splidejs/splide-extension-video/dist/js/splide-extension-video.min.js"></script> */}
    </div>
  );
}

export default page;
type NotionResponse = {
  id: string;
  // meta: { icon: string | null; cover: string | null };
  props: Article;
};

type Article = {
  // id: string;
  title: string;
  year: string;
  monthDay: string;
  description: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  postSlug: string;
  author: string;
  publicNotionPageId: string;
  tag: string;
};

// splidejs
const mySplidejs = function () {
  // mySplidejs
  const postslider_class = document.querySelector("#post-carousel");
  if (postslider_class != null) {
    const postslider = new Splide("#post-carousel", {
      rewind: true,
      pagination: true,
      arrows: true,
      type: "loop",
      drag: "free",
      perPage: 3,
      perMove: 1,
      gap: 24,
      breakpoints: {
        768: {
          perPage: 2,
        },
        500: {
          perPage: 1,
        },
      },
    });
    postslider.mount();
  }
};

// splide video
const mySplidevideo = function () {
  // mySplidevideo
  const postvideo_class = document.querySelector("#main-carousel");
  if (postvideo_class != null) {
    const postvideo = new Splide("#main-carousel", {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
    });

    const thumbnails = new Splide("#thumbnail-carousel", {
      fixedWidth: 150,
      fixedHeight: 120,
      gap: 24,
      rewind: true,
      pagination: false,
      isNavigation: true,
    });

    postvideo.sync(thumbnails);
    //@ts-ignore
    postvideo.mount(window.splide.Extensions);
    thumbnails.mount();
  }
};
export const metadata: Metadata = {
  title:
    "Real Estate Insights: Your Trusted Resource for Success | Xentora Marketing Agency",
  description:
    "Discover Xentora's Insights – Your Trusted Resource for Real Estate Professionals. Explore a wealth of industry knowledge, trends, and expert perspectives tailored for real estate agents. Stay ahead in the dynamic real estate landscape with our thoughtfully curated insights and expert analysis. Elevate your expertise and succeed in today's competitive market.",
  openGraph: {
    title:
      "Real Estate Insights: Your Trusted Resource for Success | Xentora Marketing Agency",
    description:
      "Discover Xentora's Insights – Your Trusted Resource for Real Estate Professionals. Explore a wealth of industry knowledge, trends, and expert perspectives tailored for real estate agents. Stay ahead in the dynamic real estate landscape with our thoughtfully curated insights and expert analysis. Elevate your expertise and succeed in today's competitive market.",
  },
};
