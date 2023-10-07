"use client";

import NavFunnel from "@/components/NavFunnel";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import weightedRandom from "ts-weighted-random";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useScript from "@/components/useScript";
import IframeResizer from "iframe-resizer-react";
import { ChevronsRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
const copy = new Map([
  [
    {
      preheadline: "",
      headline:
        "Last Step: If You Haven't Make Sure To Watch This Video So We Can Hit The Ground Running With Your Call",
      subtitle: "",
      video: "qfznhm3a73",
      CTA: "Watch The Recording Now",
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
      {loading ? (
        <Loader2 className="animate-spin"></Loader2>
      ) : (
        <div className="flex justify-center items-center">
          {CTA}
          <ChevronsRight className="w-8 h-8" />
        </div>
      )}
    </a>
  );
}

function page() {
  // useEffect(() => {
  //   // document.body.style.backgroundColor = "white";
  // }, []);
  const router = useRouter();
  const submitStep = async () => {
    router.push("/precall");
  };
  const copyRef = useRef(weightedRandom(copy));

  useScript("https://fast.wistia.net/assets/external/E-v1.js");
  return (
    <div>
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

        <div className="">
          <div className="">
            <div
            // className="wistia_responsive_wrapper mx-auto sm:w-[80%]"
            // style={{
            //   height: "100%",
            // }}
            >
              <IframeResizer
                src={`https://fast.wistia.net/embed/iframe/${copyRef.current.video}?videoFoam=true`}
                title="VSL_CTA Video"
                allow="autoplay; fullscreen"
                allowTransparency={true}
                frameBorder={0}
                scrolling={false}
                // className="wistia_embed"
                className="mb-10 mx-auto mt-3 sm:mt-10 min-w-[360px] min-h-[202px] sm:min-w-[640px] sm:min-h-[360px]"
                // name=" mx-auto"
                allowFullScreen={true}
                // width="420px"
                // height="360px"
              ></IframeResizer>
            </div>
          </div>
        </div>
        {/* <CTAButton
          onClick={() => {
            submitStep();
          }}
          // href=""
          additionalClasses="w-[90%] text-center sm:w-[450px]  lg:w-[450px]"
          CTA={copyRef.current.CTA}
        ></CTAButton> */}
      </div>
    </div>
  );
}

export default page;

// "use client";
// import useLinkedinTag from "@/components/useLinkedinTag";
// import { usePixel } from "@/components/usePixel";
// import usePlerdy from "@/components/usePlerdy";
// import useTwitterPixel from "@/components/useTwitterPixel";
// import React, { useEffect } from "react";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
      }}
    >
      <a
        href="https://www.linkedin.com/in/ahanikotb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin color="white" size={32} style={{ marginRight: "50px" }} />
      </a>

      <a
        href="https://twitter.com/ahmedhanykotb_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter color="white" size={32} />
      </a>
    </footer>
  );
};

// function ThankYou() {
//   // usePlerdy();
//   // const pixel = usePixel();
//   // useLinkedinTag();
//   // useTwitterPixel();
//   // useEffect(() => {
//   //   pixel?.trackCustom("meetingBooked");
//   // }, []);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <img
//         className="mx-auto my-10 w-[20rem]"
//         alt="xentora Logo"
//         // style={{ width: "150px", margin: "auto", marginTop: "5vh" }}
//         src={"/xentora_logo.png"}
//       />
//       <h1 className="font-black text-5xl sm:text-6xl text-center text-white">
//         You're Booked !
//       </h1>
//       <img
//         alt="xentora Logo"
//         style={{ width: "150px", margin: "auto", marginTop: "5vh" }}
//         src="/confirm_check.png"
//       />
// <div
//   className="text-white font-bold mx-auto text-center mt-10 text-xl sm:text-4xl sm:mt-20"
//   style={{ width: "90%" }}
// >
//   We sent you an email confirming the date/time. Please mark this in your
//   calendar now.
// </div>
// <div
//   className="text-white leading-10  mx-auto text-center mt-10 sm:text-3xl"
//   style={{ width: "90vw" }}
// >
//   We will meet you via Google-meet at your selected date/time.
//   <br /> Please show up on-time, in a quiet room, with no distractions.
//   <br /> We look forward to meeting you and serving you! <br />
//   <span className="font-bold">- The team at Xentora</span>
// </div>
//       <Footer />
//     </div>
//   );
// }

// export default ThankYou;
