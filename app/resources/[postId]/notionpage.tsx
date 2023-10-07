"use client";

import dynamic from "next/dynamic";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);
import Link from "next/link";
import Image from "next/image";

import { ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";
import { CTAButton } from "./PostCTA";

const BlogCTA = () => {
  return (
    <div className="py-10 space-y-5 w-[100%]">
      <p className=" w-[300px] text-center mx-auto">
        Want Us To Setup Everything For You? <br />
      </p>
      <p className="font-bold w-[300px] text-center mx-auto">
        {" "}
        Click The Button Below 👇
      </p>
      <CTAButton
        CTA="Schedule Demo"
        additionalClasses={"w-[250px]"}
        onClick={() => {}}
        href="/easy-book"
      />
    </div>
  );
};

export const NotionPage = ({
  recordMap,
  previewImagesEnabled,
  rootPageId,
  rootDomain,
}: any) => {
  if (!recordMap) {
    return null;
  }

  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        fullPage={true}
        //pageAside={true}
        // pageTitle={fals}
        darkMode={false}
        // pageTitle={false}
        disableHeader
        // pageHeader={true}
        pageAside={<BlogCTA />}
        // header={true}
        showTableOfContents={true}
        // previewImages={previewImagesEnabled}
        components={{
          nextImage: Image,
          nextLink: Link,
          Code,
          Collection,
          Equation,
          Pdf,
          Modal,
        }}
      />
    </>
  );
};
