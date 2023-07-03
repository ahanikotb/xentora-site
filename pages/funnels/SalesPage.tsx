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
import CTAButton from "@/components/CtaButton";
import Testimonials from "@/components/Testimonials";
import Statement from "@/components/Statement";

function SalesPage() {
  const copy = new Map([
    [
      {
        preheadline: "<span class='text-red-500'>Founders And CEOs<span/>",
        headline:
          "<span class='font-bold'>Install A Proven Lead Generation System In Your Business And Bank A Minimum of 10X ROI BY Predictably Getting Clients Online</span>",
        // '10<span class="text-red-500" >  Sales Calls </span>Per Month With <span class="text-red-500" > Ready-To-Buy </span>Leads  That<span class="text-yellow-400" >  Understand  </span>And <span class="text-yellow-400" >Need </span>Your Service',
        // subtitle: "100% DONE FOR YOU.",
        subtitle:
          "Business To Business Digital Marketing and Sales System. <br/><span class='text-red-500'>100% Done For You ",
        video: "https://ahanikotb.wistia.com/medias/fhi8p923ml",
        CTA: "Get Started",
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
  useScript("https://fast.wistia.net/assets/external/E-v1.js");

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
    <div className="overflow-hidden ">
      <section className="xl:mt-5 xl:flex xl:w-[90vw] xl:content-center xl:justify-center xl:mx-auto">
        <div className="xl:flex-col xl:justify-center xl:content-center xl:my-auto xl:flex-1">
          {" "}
          <h1
            dangerouslySetInnerHTML={{
              __html: copyRef.current.preheadline,
            }}
            className="xl:my-0 mt-3 font-black leading-[1.2] text-lg  text-white text-center w-[90%] lg:leading-[1.3] mx-auto xl:mx-auto  lg:text-2xl md:w-4/5 md:text-2xl xl:w-3/4 xl:text-xl 2xl:text-xl"
          >
            {/* {copyRef.current.headline} */}
          </h1>
          <h1
            dangerouslySetInnerHTML={{
              __html: copyRef.current.headline,
            }}
            className="xl:my-0  mt-0 font-black leading-[1.2] text-2xl  text-white text-center w-[90%] lg:leading-[1.3] mx-auto xl:mx-auto  lg:text-4xl md:w-4/5 md:text-3xl xl:w-3/4 xl:text-4xl 2xl:text-5xl"
          >
            {/* {copyRef.current.headline} */}
          </h1>
          {/* <h1
            dangerouslySetInnerHTML={{
              __html: copyRef.current.subtitle,
            }}
            className="mt-2 xl:mb-0 text-white font-light 	 text-center w-[90%] mx-auto text-lg lg:text-xl xl:mx-auto md:w-3/4 md:text-lg xl:w-3/4 xl:text-3xl"
          ></h1> */}
          <CTAButton
            additionalClasses={"mt-5 hidden xl:flex xl:p-0"}
            onClick={logClick}
            CTA={copyRef.current.CTA}
            href="/apply?disableFirstBlock
"
          />
        </div>
        <div className="mt-3 sm:mt-10  w-[90vw] sm:w-[60vw] mx-auto mb-10 xl:flex-1">
          <div className="wistia_responsive_padding ">
            <div
              className="wistia_responsive_wrapper mx-auto xl:w-[35vw]"
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
          additionalClasses={"mb-5 xl:hidden"}
          onClick={logClick}
          CTA={copyRef.current.CTA}
          href="/apply?disableFirstBlock
"
        />
      </section>
      <section className="mt-5 rounded-xl sm:p-10  w-[90%] sm:w-[90%] mx-auto">
        <h1 className="text-white font-black text-center  sm:text-2xl">
          Clients We've Worked With
        </h1>
        <div className=" mx-auto mt-2 sm:mt-10">
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
          <div className="w-[80vw] mx-auto   sm:pb-10 grid grid-cols-2 sm:grid-cols-4 gap-10 ">
            <div className=" bg-white rounded-lg outline outline-5 sm:p-10 flex justify-start items-center flex-col">
              <img src={"/painpoint/referrals.jpg"} />
              {/* <h1 className="text-center text-white text-3xl font-black">
                Being Over-Reliant on Referrals
              </h1> */}
            </div>
            <div className="outline bg-white outline-5 rounded-lg sm:p-10 flex justify-start items-center flex-col">
              <img src={"/painpoint/insecurity.jpg"} />
              {/* <h1 className="text-center text-white text-3xl font-black">
                Not Knowing Where Your Next Client is Coming From
              </h1> */}
            </div>
            <div className="outline bg-white outline-5 rounded-lg sm:p-10 flex  justify-start items-center flex-col">
              <img src={"/painpoint/fillingcalendar.jpg"} />

              {/* <h1 className="text-center text-white text-3xl font-black">
                Losing Money On Paid Ads
              </h1> */}
            </div>{" "}
            <div className="outline bg-white outline-5 rounded-lg sm:p-10 flex  justify-start items-center flex-col">
              <img src={"/painpoint/paidads.jpg"} />

              {/* <h1 className="text-center text-white text-3xl font-black">
                Losing Money On Paid Ads
              </h1> */}
            </div>
          </div>
        }
      </section>

      {/* <Statement /> */}
      <Testimonials />

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
      <CTAButton
        additionalClasses={"mt-10 xl:hidden"}
        CTA="Get Started"
        // onClick={logClick}
        // CTA={copyRef.current.CTA}
        href="/apply?disableFirstBlock
"
      />
      <Timeline />
      <CTAButton
        additionalClasses={"mb-5 xl:hidden"}
        onClick={logClick}
        CTA={copyRef.current.CTA}
        href="/apply?disableFirstBlock
"
      />
      <PricingTable CTA={copyRef.current.CTA} />
      <section className="w-[90vw] mx-auto">
        <img src="proof/email-1.png"></img>
        <div className="grid grid-cols-1 sm:grid-cols-2  mt-10 w-[80vw]  ">
          <img className="p-10" src="proof/email-2.png"></img>
          <img
            className="py-10 px-1 overflow-hidden"
            src="proof/email-3.png"
          ></img>
        </div>
        {/* <img src="proof/email.png"></img> */}
        {/* <img src="proof/email.png"></img> */}
        {/* <img src="proof/linkedin.png"></img> */}
      </section>
      <section
        style={{
          background: "rgba(0, 0,0, 0.2)",
        }}
        className="my-10 w-[90%] sm:w-[70%] p-10   mx-auto rounded-lg"
      >
        <h1 className="font-black text-4xl sm:text-5xl text-white text-center">
          WANT TO TALK TO SOMEONE ?
        </h1>
        <h3 className="text-center text-2xl text-white mt-2">
          Our lead generation specialists are available to answer your questions
          💬
        </h3>
        <CTAButton
          additionalClasses={"mt-5"}
          onClick={logClick}
          CTA={copyRef.current.CTA}
          href="/apply?disableFirstBlock
"
        />
      </section>
    </div>
  );
}

export default SalesPage;
