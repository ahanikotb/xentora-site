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
import { ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";

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
        fullPage={false}
        darkMode={true}
        header={true}
        // previewImages={previewImagesEnabled}
        components={{
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
