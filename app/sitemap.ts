import { MetadataRoute } from "next";
import Notion from "@notion-cms/client";

const host = "https://www.xentora.com";
const database_id = "1ef2b498-5009-423f-bd67-19c5016dd3d7";

const makeBlogRoute = (db: any): MetadataRoute.Sitemap => {
  const sitemap = db.map((x: any) => {
    return {
      url: `${host}${x.props.postSlug}.${x.props.publicNotionPageId}`,
      lastModified: new Date(`${x.props.monthDay} ${x.props.year}`),
    };
  });
  return sitemap;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notion = new Notion({ auth: process.env.NOTION_API_KEY });

  const db = await notion.loadDatabase(database_id, {});
  console.log(db);
  return [
    {
      url: host,
    },
    ...makeBlogRoute(db),
  ];
}
