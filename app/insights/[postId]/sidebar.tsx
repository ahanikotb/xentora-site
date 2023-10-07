import React from "react";
import Notion from "@notion-cms/client";

async function Sidebar() {
  const database_id = "b3b0532a-b68d-415f-b237-8d6ae1625193";
  const notion = new Notion({ auth: process.env.NOTION_API_KEY });
  let db: NotionResponse[] = await notion.loadDatabase(database_id, {});
  //   console.log(db);
  return (
    <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
      <div className="w-full bg-white">
        <div className="mb-6">
          <div className="p-4 bg-gray-100">
            <h2 className="text-lg font-bold">Most Popular</h2>
          </div>
          <ul className="post-number">
            <li className="border-b border-gray-100 hover:bg-gray-50">
              <a
                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                href={
                  db[0].props.postSlug + "-" + db[0].props.publicNotionPageId
                }
              >
                {db[0].props.title}
                {/* Why the world would end without political polls */}
              </a>
            </li>
            <li className="border-b border-gray-100 hover:bg-gray-50">
              <a
                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                href={
                  db[1].props.postSlug + "-" + db[1].props.publicNotionPageId
                }
              >
                {" "}
                {db[1].props.title}
                {/* Meet The Man Who Designed The Ducati Monster */}
              </a>
            </li>
            <li className="border-b border-gray-100 hover:bg-gray-50">
              <a
                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                href={
                  db[2].props.postSlug + "-" + db[2].props.publicNotionPageId
                }
              >
                {db[2].props.title}
                {/* 2020 Audi R8 Spyder spy shots release */}
              </a>
            </li>
            <li className="border-b border-gray-100 hover:bg-gray-50">
              <a
                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                href={
                  db[3].props.postSlug + "-" + db[3].props.publicNotionPageId
                }
              >
                {db[3].props.title}{" "}
                {/* Lamborghini makes Huracán GT3 racer faster for 2019 */}
              </a>
            </li>
            <li className="border-b border-gray-100 hover:bg-gray-50">
              <a
                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                href={
                  db[4].props.postSlug + "-" + db[4].props.publicNotionPageId
                }
              >
                {db[4].props.title}{" "}
                {/* ZF plans $14 billion autonomous vehicle push, concept van */}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm py-6 sticky">
        <div className="w-full text-center">
          <a className="uppercase" href="#">
            Advertisement
          </a>
          <a href="#">
            <img
              className="mx-auto"
              src="/img/ads/250.jpg"
              alt="advertisement area"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
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
export default Sidebar;
