"use client";

import NavFunnel from "@/components/NavFunnel";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import weightedRandom from "ts-weighted-random";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useScript from "@/components/useScript";
import IframeResizer from "iframe-resizer-react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
const copy = new Map([
  [
    {
      preheadline: "",
      headline: "Watch This Video To Hit The Ground Running On Our Call",
      subtitle:
        "How To Add $460K Annual Revenue On Autopilot Using Automated Cold Email",
      video: "https://www.youtube.com/embed/RsFeROAuv7M",
      CTA: "👉 Schedule Demo",
    },
    1,
  ],
]);

const FunnelInput = ({
  additionalClasses,
  placeholder,
  value,
  type,
  setValue,
}: any) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      placeholder={placeholder}
      className={cn(
        " mt-5   cursor-pointer  p-4  sm:p-5 mx-auto sm:h-[60px] flex rounded-xl justify-center items-center  shadow-lg",
        additionalClasses
      )}
    ></input>
  );
};

function CTAButton({ onClick, CTA, additionalClasses, href = "" }: any) {
  const [loading, setLoading] = useState(false);
  return (
    <a
      onClick={() => {
        setLoading(true);
        onClick();
      }}
      className={cn(
        "font-black mt-5  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-2  sm:p-5 mx-auto sm:h-[60px] flex rounded-xl justify-center items-center  shadow-lg",
        additionalClasses
      )}
    >
      {loading ? <Loader2 className="animate-spin"></Loader2> : CTA}
    </a>
  );
}

function page() {
  // useEffect(() => {
  //   // document.body.style.backgroundColor = "white";
  // }, []);
  const router = useRouter();

  const copyRef = useRef(weightedRandom(copy));

  // useScript("https://fast.wistia.net/assets/external/E-v1.js");
  return (
    <div>
      <div>
        {/* <NavFunnel /> */}
        <h3
          className="text-center italic  text-white  sm:pt-5 mx-auto"
          dangerouslySetInnerHTML={{ __html: copyRef.current.preheadline }}
        ></h3>
        <h1
          className="text-center font-bold my-10 sm:my-2 text-3xl sm:text-4xl text-white  w-[80vw] mx-auto xl:w-[50vw]  "
          dangerouslySetInnerHTML={{ __html: copyRef.current.headline }}
        ></h1>
        <h2
          className="text-center text-white my-5 text-xl sm:text-2xl w-[90%] sm:w-50% mx-auto "
          dangerouslySetInnerHTML={{ __html: copyRef.current.subtitle }}
        ></h2>
        <div className="mt-10 w-[90vw] sm:w-[50vw] mx-auto mb-10">
          <IframeResizer
            src={copyRef.current.video}
            title="VSL_CTA Video"
            allow="autoplay; fullscreen"
            allowTransparency={true}
            frameBorder={0}
            scrolling={false}
            className="mx-auto w-[90vw] h-[40vh] sm:h-[420px] sm:w-[50vw]"
            allowFullScreen={true}
          ></IframeResizer>
        </div>
        <h2
          className="text-center text-white my-5 text-xl sm:text-2xl w-[90%] sm:w-50% mx-auto "
          dangerouslySetInnerHTML={{
            __html:
              "Watch This Brief 5 minute Video Before Our Call To Hit The Ground Running",
          }}
        ></h2>
        {/* <CTAButton
          onClick={() => {
            submitStep();
          }}
          additionalClasses="w-[250px] text-center sm:w-[350px]  lg:w-[70%] xl:w-[350px]"
          CTA={copyRef.current.CTA}
        ></CTAButton> */}
      </div>
    </div>
  );
}

export default page;