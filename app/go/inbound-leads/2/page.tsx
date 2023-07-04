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
  // useEffect(() => {
  //   // document.body.style.backgroundColor = "white";
  // }, []);
  const router = useRouter();
  const submitStep = async () => {
    router.push("/go/inbound-leads/3");
  };
  const copyRef = useRef(weightedRandom(copy));

  useScript("https://fast.wistia.net/assets/external/E-v1.js");
  return (
    <div className="bg-white">
      <style jsx global>
        {`
          body {
            background: white;
          }
        `}
      </style>
      <div>
        {/* <NavFunnel /> */}
        <h3
          className="text-center italic  sm:pt-5 mx-auto"
          dangerouslySetInnerHTML={{ __html: copyRef.current.preheadline }}
        ></h3>
        <h1
          className="text-center font-bold my-10 sm:my-2 text-3xl sm:text-4xl text-black  w-[80vw] mx-auto xl:w-[50vw]  "
          dangerouslySetInnerHTML={{ __html: copyRef.current.headline }}
        ></h1>

        <h2
          className="text-center text-red-500 my-5 text-xl sm:text-2xl w-[90%] sm:w-50% mx-auto "
          dangerouslySetInnerHTML={{ __html: copyRef.current.subtitle }}
        ></h2>

        <div className="mt-10 w-[90vw] sm:w-[50vw] mx-auto mb-10">
          <div className="wistia_responsive_padding">
            <div
              className="wistia_responsive_wrapper mx-auto sm:w-[80%]"
              style={{
                height: "100%",
              }}
            >
              <IframeResizer
                src="https://fast.wistia.net/embed/iframe/fhi8p923ml?videoFoam=true"
                title="VSL_CTA Video"
                allow="autoplay; fullscreen"
                allowTransparency={true}
                frameBorder={0}
                scrolling={false}
                className="wistia_embed"
                name="wistia_embed"
                allowFullScreen={true}
                width="100%"
                height="100%"
              ></IframeResizer>
            </div>
          </div>
        </div>
        <CTAButton
          onClick={() => {
            submitStep();
          }}
          // href=""
          additionalClasses="w-[90%] text-center sm:w-[450px]  lg:w-[70%] xl:w-[600px]"
          CTA={copyRef.current.CTA}
        ></CTAButton>
      </div>
      <div>
        <div className="flex flex-row w-[80%] sm:w-[30vw] my-5 sm:mt-20 mx-auto items-center justify-between ">
          <a href="/privacy-policy" className="text-gray-500  text-center ">
            Privacy Policy
          </a>
          <a className="text-gray-500  text-center ">Terms Of Service</a>
          {/* <a className="text-white text-center ">Privacy Policy</a> */}
        </div>
        <div className="text-gray-500 text-center w-[90%] sm:w-[90%] mx-auto">
          We use cookies to help improve, promote and protect our services.
          <br /> By continuing to use this site, you agree to our privacy policy
          and terms of use.
          <br /> This site is not a part of Facebook website or Facebook, Inc.{" "}
          <br />
          This site is NOT endorsed by Facebook in any way. FACEBOOK is a
          trademark of FACEBOOK, Inc.
        </div>
      </div>
    </div>
  );
}

export default page;
