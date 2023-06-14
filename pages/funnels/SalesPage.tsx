"use client";
import useScript from "@/components/useScript";
import IframeResizer from "iframe-resizer-react";
import React, { useRef } from "react";
import Image from "next/image";
import { CalendarCheck, CircleDollarSign, Target } from "lucide-react";
import weightedRandom from "ts-weighted-random";

function SalesPage() {
  const copy = new Map([
    [
      {
        headline:
          'ADD <span class="text-red-500" >$20K OF SWEET TAKE HOME PROFIT</span> TO YOUR AGENCY <br/> <span class="text-yellow-400" > IN 90 DAYS OR LESS.</span>',
        subtitle: "100% DONE FOR YOU. <br/> 100% PERFORMANCE BASED.",
        video: "https://ahanikotb.wistia.com/medias/rcemhdzbg3",
        CTA: "Free Action Plan",
      },
      1,
    ],
    [
      {
        headline:
          'GET ON SALES CALLS <span class="text-red-500" >WITH READY-TO-BUY LEADS</span> <span class="text-yellow-400" > THAT UNDERSTAND AND NEED YOUR SERVICE </span>',
        subtitle: "100% DONE FOR YOU. <br/> 100% PAY PER CALL.",
        video: "https://ahanikotb.wistia.com/medias/rcemhdzbg3",
        CTA: "Free Action Plan",
      },
      1,
    ],
  ]);
  const copyRef = useRef(weightedRandom(copy));
  useScript("https://fast.wistia.net/assets/external/E-v1.js");
  return (
    <div>
      <h1
        dangerouslySetInnerHTML={{
          __html: copyRef.current.headline,
        }}
        className="mt-5 font-black leading-[1.2] text-white text-center w-[90%] lg:leading-[1.3] mx-auto text-5xl lg:text-6xl md:w-4/5 md:text-7xl xl:w-3/4 xl:text-7xl"
      >
        {/* {copyRef.current.headline} */}
      </h1>

      <h1
        dangerouslySetInnerHTML={{
          __html: copyRef.current.subtitle,
        }}
        className="mt-5 text-white font-light	 text-center w-[90%] mx-auto text-2xl lg:text-xl md:w-3/4 md:text-lg xl:w-3/4 xl:text-3xl"
      ></h1>
      <div className="mt-10 w-[90vw] sm:w-[50vw] mx-auto mb-10">
        <div className="wistia_responsive_padding">
          <div
            className="wistia_responsive_wrapper mx-auto sm:w-[80%]"
            style={{
              height: "100%",
            }}
          >
            {/* <IframeResizer
              src="https://fast.wistia.net/embed/iframe/1fox1cqmrd?videoFoam=true"
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
            ></IframeResizer> */}
          </div>
        </div>
        {/* <script
          src="https://fast.wistia.net/assets/external/E-v1.js"
          async
        ></script> */}
      </div>
      <a
        href="/book"
        className="font-black text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-5 mx-auto h-[60px] w-[220px] flex rounded-xl justify-center items-center mb-10  shadow-lg"
      >
        BOOK NOW
      </a>
      <section className=" bg-[#f16b26] rounded-lg w-[90%] mx-auto pb-10 ">
        <div className="w-[90vw] mx-auto  flex flex-col items-center justify-center">
          <div className="flex flex-col py-10  items-center justify-center">
            <h1 className="mt-10 text-5xl sm:text-7xl font-black text-white text-center ">
              CASE STUDY:
              <br /> BEACON TALENT
            </h1>
            <h3 className="mt-3 text-white text-xl sm:text-2xl text-center font-bold">
              BEACON TALENT is a Recruiting Firm in Brooklyn, New York.
            </h3>
          </div>
        </div>
        {
          //3 ROWS GRID
          <div className="w-[80vw] mx-auto  pb-20 grid grid-cols-1 sm:grid-cols-3 gap-10 ">
            <div className="outline outline-white rounded-lg p-10 flex justify-start items-center flex-col">
              <Target color="white" className="w-1/3 h-1/3 mb-5" />
              <h1 className="text-center text-white text-3xl font-black">
                60% Open-Rate and 2 Positive Replies Per Day
              </h1>
            </div>
            <div className="outline outline-white rounded-lg p-10 flex justify-start items-center flex-col">
              <CalendarCheck color="white" className="w-1/3 h-1/3 mb-5" />
              <h1 className="text-center text-white text-3xl font-black">
                4 Meetings Booked Per Week
              </h1>
            </div>
            <div className="outline outline-white rounded-lg p-10 flex  justify-start items-center flex-col">
              <CircleDollarSign color="white" className="w-1/3 h-1/3 mb-5" />
              <h1 className="text-center text-white text-3xl font-black">
                Getting On 5-Figure Sales Opportunities Every Week
              </h1>
            </div>
          </div>
        }
        <a
          href="/book"
          className="font-black  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-5 mx-auto h-[60px] w-[220px] flex rounded-xl justify-center items-center  shadow-lg"
        >
          BOOK NOW
        </a>
      </section>
      <section className=" mx-auto">
        <div className="w-[90vw] mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-7xl font-black text-white text-center mt-10 mb-10">
              ENJOY{" "}
              <span className="underline decoration-green-700">
                HIGH PROFIT MARGINS IN YOUR BUSINESS
              </span>{" "}
              WITH A CHEAP ACQUISITION COST
            </h1>
            {/* <div className="bg-orange-600">
              <Image
                src={"/leadgen_for_marketing_agencies.drawio.png"}
                width={400}
                height={200}
                alt={""}
              ></Image>
            </div> */}
          </div>
        </div>

        {/* <a
          href="/book"
          className="font-black  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-5 mx-auto h-[60px] w-[220px] flex rounded-xl justify-center items-center  shadow-lg"
        >
          BOOK NOW
        </a> */}
        {/* <div className="pb-10"></div> */}
      </section>
    </div>
  );
}

export default SalesPage;
