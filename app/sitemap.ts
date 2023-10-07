import { MetadataRoute } from "next";
import Notion from "@notion-cms/client";

const host = "https://www.xentora.com";
const resource_database_id = "1ef2b498-5009-423f-bd67-19c5016dd3d7";
const blog_database_id = "b3b0532a-b68d-415f-b237-8d6ae1625193";
const makeResourceRoute = (db: any): MetadataRoute.Sitemap => {
  const sitemap = db.map((x: any) => {
    return {
      url: `${host}${x.props.postSlug}.${x.props.publicNotionPageId}`,
      lastModified: new Date(`${x.props.monthDay} ${x.props.year}`),
    };
  });
  return sitemap;
};
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

  const db = await notion.loadDatabase(resource_database_id, {});
  const db_2 = await notion.loadDatabase(blog_database_id, {});
  return [
    {
      url: host,
    },
    ...makeResourceRoute(db),
    // ...makeBlogRoute(db_2),
  ];
}
