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
      headline:
        "<span class='text-black'>Step 2: Watch The Video Below To Access Your Guide + 30+ Hours Of Free Course Material<span/>",
      subtitle:
        'Access My Free "7-Figure Selling Secrets Course" By Watching The Video And Completing The Last Step',
      video: "https://ahanikotb.wistia.com/medias/fhi8p923ml",
      CTA: "👉  Access My Free Course + The Guide",
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

export function CTAButton({ onClick, CTA, additionalClasses, href = "" }: any) {
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
  useEffect(() => {
    router.push("https://google.com");
  }, []);
  const router = useRouter();
  const submitStep = async () => {
    // router.push("/go/inbound-leads/3");
  };

  return (
    <div className="bg-white">
      <style jsx global>
        {`
          body {
            background: white;
          }
        `}
      </style>
      <div className="flex w-screen h-screen items-center justify-center">
        <h1 className="text-center text-2xl text-gray-600">
          Loading Next Page.....
        </h1>
      </div>
    </div>
  );
}

export default page;
