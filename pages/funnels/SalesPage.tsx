"use client";
import useScript from "@/components/useScript";
import IframeResizer from "iframe-resizer-react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CalendarCheck, CircleDollarSign, Target } from "lucide-react";
import weightedRandom from "ts-weighted-random";
import { logEvent } from "firebase/analytics";
import useGoogleAnalytics from "@/components/useGoogleAnalytics";
import PricingTable from "@/components/PricingTable";
import Timeline from "@/components/Timeline";

function SalesPage() {
  const copy = new Map([
    [
      {
        headline:
          'GET 10 <span class="text-red-500" >  SALES CALLS </span>PER MONTH WITH <span class="text-red-500" > READY-TO-BUY </span>LEADS  THAT<span class="text-yellow-400" >  UNDERSTAND  </span>AND <span class="text-yellow-400" >NEED </span>YOUR SERVICE',
        subtitle: "100% DONE FOR YOU.",
        video: "https://ahanikotb.wistia.com/medias/fhi8p923ml",
        CTA: "GET STARTED",
      },
      1,
    ],
  ]);
  const analytics = useGoogleAnalytics();
  useEffect(() => {
    //@ts-ignore
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "/",
        page_path: "/",
      });
    }
  }, [analytics]);
  const copyRef = useRef(weightedRandom(copy));
  const timePageLoaded = useRef(Date.now());
  // <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/2f077f2388144573b18aac23d82bf5c2?sid=8e4ae21d-9f4a-40e7-8ec8-9ace78e8a3e8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
  // useScript("https://fast.wistia.net/assets/external/E-v1.js");

  const logClick = () => {
    if (analytics) {
      logEvent(analytics, "recpageconversion", {
        headline: copyRef.current.headline,
        page_structure: "vsl",
        videoLink: copyRef.current.video,
        timeSpentOnPage: Date.now() - timePageLoaded.current,
      });
    }
  };
  return (
    <div className="overflow-hidden">
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
        <script
          src="https://fast.wistia.net/assets/external/E-v1.js"
          async
        ></script>
      </div>
      <a
        onClick={logClick}
        href="/apply"
        className="font-black text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-5 mx-auto h-[60px] w-[220px] flex rounded-xl justify-center items-center mb-10  shadow-lg"
      >
        {copyRef.current.CTA}
      </a>
      <section className=" rounded-xl sm:p-10  w-[90%] sm:w-[90%] mx-auto">
        <h1 className="text-white font-black text-center  sm:text-2xl">
          Clients We've Worked With
        </h1>
        <div className=" mx-auto mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center ">
              <img
                src="/clients/1.png"
                className="sm:max-h-20 sm:max-w-20 max-h-full max-w-full"
                alt="Client 1"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/clients/2.png"
                className="sm:max-h-20 sm:max-w-20 max-h-full max-w-full"
                alt="Client 2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 sm:my-20  rounded-lg w-[90%] mx-auto pb-10 ">
        <div className="w-[90vw] mx-auto  flex flex-col items-center justify-center">
          <div className="flex flex-col py-5  items-center justify-center">
            <h1 className="sm:m-10  text-4xl sm:text-7xl font-black text-white text-center ">
              Tired Of Uncertainty Within Your Business?
            </h1>
          </div>
        </div>
        {
          //3 ROWS GRID
          <div className="w-[80vw] mx-auto   sm:pb-20 grid grid-cols-1 sm:grid-cols-3 gap-10 ">
            <div className=" bg-white rounded-lg p-10 flex justify-start items-center flex-col">
              <img src={"/painpoint/referrals.jpg"} />
              {/* <h1 className="text-center text-white text-3xl font-black">
                Being Over-Reliant on Referrals
              </h1> */}
            </div>
            <div className="outline bg-white  rounded-lg p-10 flex justify-start items-center flex-col">
              <img src={"/painpoint/insecurity.jpg"} />
              {/* <h1 className="text-center text-white text-3xl font-black">
                Not Knowing Where Your Next Client is Coming From
              </h1> */}
            </div>
            <div className="outline bg-white rounded-lg p-10 flex  justify-start items-center flex-col">
              <img src={"/painpoint/fillingcalendar.jpg"} />

              {/* <h1 className="text-center text-white text-3xl font-black">
                Losing Money On Paid Ads
              </h1> */}
            </div>
          </div>
        }
      </section>
      <section
        id="casestudies"
        className=" bg-[#f16b26] rounded-lg w-[90%] mx-auto pb-10 "
      >
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
          href="/apply"
          onClick={logClick}
          className="font-black  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-5 mx-auto h-[60px] w-[220px] flex rounded-xl justify-center items-center  shadow-lg"
        >
          {copyRef.current.CTA}
        </a>
      </section>{" "}
      <section className="my-10 bg-[#0147a9] rounded-lg w-[90%] mx-auto pb-10 ">
        <div className="w-[90vw] mx-auto  flex flex-col items-center justify-center">
          <div className="flex flex-col py-10  items-center justify-center">
            <h1 className="mt-10 text-5xl sm:text-7xl font-black text-white text-center ">
              CASE STUDY:
              <br /> REMOTE REP
            </h1>
            <h3 className="mt-3 text-white text-xl sm:text-2xl text-center font-bold">
              Remote Rep is A Sales Outsourcing Company in Atlanta.
            </h3>
          </div>
        </div>
        {
          //3 ROWS GRID
          <div className="w-[80vw] mx-auto  pb-20 grid grid-cols-1 sm:grid-cols-3 gap-10 ">
            <div className="outline outline-white rounded-lg p-10 flex justify-start items-center flex-col">
              <Target color="white" className="w-1/3 h-1/3 mb-5" />
              <h1 className="text-center text-white text-3xl font-black">
                70% Open-Rate and 3-4 Positive Replies Per Day
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
          href="/apply"
          onClick={logClick}
          className="font-black  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-5 mx-auto h-[60px] w-[220px] flex rounded-xl justify-center items-center  shadow-lg"
        >
          {copyRef.current.CTA}
        </a>
      </section>
      <section className=" mx-auto">
        <div className="w-[90vw] mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-7xl font-black text-white text-center mt-10 mb-10">
              A{" "}
              <span className="underline decoration-green-700">Consistent</span>{" "}
              & Repeatable System For Closing Deals
            </h1>
            <div className="bg-gray-200 rounded-xl py-10 w-[80vw] sm:w-[50vw]">
              <Image
                className="mx-auto"
                src={"/leadgen_for_marketing_agencies.drawio.png"}
                width={400}
                height={200}
                alt={""}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <a
        onClick={logClick}
        href="/apply"
        className="my-10 font-black text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-5 mx-auto h-[60px] w-[220px] flex rounded-xl justify-center items-center mb-10  shadow-lg"
      >
        {copyRef.current.CTA}
      </a>
      <Timeline />
      <a
        href="/apply"
        onClick={logClick}
        className="font-black  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-5 mx-auto h-[60px] w-[220px] flex rounded-xl justify-center items-center  shadow-lg"
      >
        {copyRef.current.CTA}
      </a>
      <PricingTable CTA={copyRef.current.CTA} />
      <section className="w-[90%] mx-auto">
        <img src="proof/email.png"></img>
        {/* <img src="proof/linkedin.png"></img> */}
      </section>
      <section className="my-10 w-[90%] sm:w-[70%] p-10  bg-blue-400 mx-auto rounded-lg">
        <h1 className="font-black text-4xl sm:text-5xl text-white text-center">
          WANT TO TALK TO SOMEONE ?
        </h1>
        <h3 className="text-center text-2xl text-white mt-2">
          Our lead generation specialists are available to answer your questions
          💬
        </h3>
        <a
          href="/apply"
          onClick={logClick}
          className="font-black mt-10   text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-5 mx-auto h-[60px] w-[220px] flex rounded-xl justify-center items-center  shadow-lg"
        >
          {copyRef.current.CTA}
        </a>
      </section>
    </div>
  );
}

export default SalesPage;
