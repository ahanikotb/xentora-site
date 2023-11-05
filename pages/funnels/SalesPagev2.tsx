"use client";
import useScript from "@/components/useScript";
import IframeResizer from "iframe-resizer-react";
import React, { Suspense, useEffect, useRef } from "react";
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
import ImageWithCaption from "@/components/ImageWithCaption";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import LogoCloud from "@/components/LogoCloud";
import { cn } from "@/lib/utils";
import Cal, { getCalApi } from "@calcom/embed-react";

const Lead = `
You're about to discover how to  **add $30,000 Of additonal monthly reccuring revenue** every 90 days without hiring sdrs, or paying for more ads.

if you want to increase your agency's **enterprise value** then this is for you.

if you want a client acquistion system that acts as **a moat around your business** and that your competitors can't copy then this is for you.

if you want to be able to predictably  **generate sales calls** with your ideal clients with a predictable channel then this is for you.

if you plan to do a **8 figure exit** then this is for you.

if you suspect that your sales team is not performing at their best and they are blaming lead quality then this is for you.

if you suspect that your competitors are trying to  **steal your clients** then continue reading.

if you  **fear loosing a key account** and want to have a system that can replace that revenue in 30 days then this is for you.

`;
const Mechanism = `
- Really easy to find emails at scale online.
- Highly Scalable with automation.
- low time and effort investment.
- higher profit margins due to low customer acquisition costs

`;
const ExtraSpace = () => (
  <>
    <br />
    <br />
  </>
);
const SubHeadline = ({ text, noMB }: { text: string; noMB?: boolean }) => (
  <h3
    className={cn(
      "my-20 font-oswald text-5xl text-center mx-auto ",
      noMB ? "mb-0" : ""
    )}
  >
    {text}
  </h3>
);
const SubMinHeadline = ({ text }: { text: string }) => (
  <h3 className="my-5 font-oswald text-4xl text-center mx-auto ">{text}</h3>
);
const NewLine = () => <br />;
function SalesPage() {
  const copy = new Map([
    [
      {
        preheadline:
          "<span class='text-red-500'>Investors, Wholesalers and flippers<span/>",
        headline:
          "Add <b>3</b> <b>Direct-To-Seller Deals </b> Month With In-Market Precognition",
        // '10<span class="text-red-500" >  Sales Calls </span>Per Month With <span class="text-red-500" > Ready-To-Buy </span>Leads  That<span class="text-yellow-400" >  Understand  </span>And <span class="text-yellow-400" >Need </span>Your Service',
        //= subtitle: "100% DONE FOR YOU.",
        subtitle:
          "A New System To Find Motivated Sellers Without Middlemen Killing Your Margins!",
        video: "v833knipcw",
        isMobile: false,
        CTA: "LEARN MORE",
      },
      1,
    ],
    // [
    //   {
    //     preheadline: "<span class='text-red-500'>Recruiters Only<span/>",
    //     headline:
    //       "<span class='font-bold'>Add $40,000 Of Additonal Monthly Reccuring Revenue in 30 Days Without Cold Calling Or Manual Outreach</span>",
    //     // '10<span class="text-red-500" >  Sales Calls </span>Per Month With <span class="text-red-500" > Ready-To-Buy </span>Leads  That<span class="text-yellow-400" >  Understand  </span>And <span class="text-yellow-400" >Need </span>Your Service',
    //     // subtitle: "100% DONE FOR YOU.",
    //     subtitle:
    //       "Business To Business Digital Marketing and Sales System. <br/><span class='text-red-500'>100% Done For You ",
    //     video: "https://ahanikotb.wistia.com/medias/fhi8p923ml",
    //     CTA: "Get Started",
    //   },
    //   1,
    // ],
  ]);
  const subheadline = [];
  const analytics = useGoogleAnalytics();
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  useEffect(() => {
    //@ts-ignore
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "/",
        page_path: "/",
      });
    }
  }, [analytics]);

  const copyRef = useRef<any>(weightedRandom(copy));
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
      {" "}
      <section className=" ">
        <div className="">
          {" "}
          <h3
            dangerouslySetInnerHTML={{
              __html: copyRef.current.preheadline,
            }}
            className="font-oswald mt-3 leading-[1.2] text-xl  text-black text-center  w-[90%] lg:leading-[1.3] mx-auto  lg:text-2xl md:w-4/5 md:text-2xl  xl:text-3xl 2xl:text-4xl"
          ></h3>
          <h1
            dangerouslySetInnerHTML={{
              __html: copyRef.current.headline,
            }}
            className=" font-oswald mt-0  leading-[1.2] text-5xl text-black text-center w-[90%] lg:leading-[1.3] mx-auto   lg:text-5xl md:w-4/5 md:text-6xl xl:text-7xl 2xl:text-7xl "
          ></h1>
          <h3
            dangerouslySetInnerHTML={{
              __html: copyRef.current.subtitle,
            }}
            className=" font-oswald xl:mt-7 mt-2 lg:mt-1  leading-[1.2] text-2xl text-black text-center w-[90%] lg:leading-[1.3] mx-auto lg:text-2xl xl:text-3xl md:w-4/5 md:text-2xl "
          ></h3>
        </div>

        {/* <CTAButton
          additionalClasses={cn(
            "mb-5 mt-5 sm:mt-10",
            "w-[350px] sm:w-[600px]",
            "!p-0",
            "rounded-md",
            "!h-20",
            "text-4xl",
            "font-oswald"
          )}
          onClick={logClick}
          CTA={copyRef.current.CTA}
          href="#"
          data-cal-link="xentora/action-plan"
          data-cal-config='{"layout":"month_view"}'
          // href="/apply"
          //           href="/apply?disableFirstBlock
          // "
        /> */}
      </section>
      {/* 
      <section className="mt-5 p-4 rounded-xl sm:p-10  mb-10  w-[90%] sm:w-[90%] mx-auto">
        <h1 className="text-black font-black text-center  sm:text-2xl">
          Clients We've Worked With
        </h1>
        <div className=" mx-auto mt-2 sm:mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center ">
              <img
                src="/clients/3.png"
                className="sm:max-h-20 sm:max-w-20 max-h-full max-w-full"
                alt="Client 1"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/clients/4.png"
                className="sm:max-h-20 sm:max-w-20 max-h-full max-w-full"
                alt="Client 2"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* <CTAButton
        additionalClasses={"my-10 "}
        CTA={copyRef.current.CTA}
        // onClick={logClick}
        // CTA={copyRef.current.CTA}
        href="/apply?disableFirstBlock
"
      /> */}
      {/* <section
        style={
          {
            // backgroundImage: "url(/xentora_print.png)",
            // objectFit: "contain",
            // background: "rgba(0, 0,30, 1)", //"rgba(0, 0,0, 0.2)",
          }
        }
        className="my-10 w-[90vw] sm:w-[80%] sm:p-20 p-5  justify-center  mx-auto rounded-lg"
      >
        <h1 className="text-4xl sm:text-7xl font-bold text-black text-center sm:my-20 my-10">
          Who We Are
        </h1>
        <div className="lg:flex lg:flex-row">
          <div className="flex lg:flex-1 sm:m-10 items-center justify-center">
            <img
              className="w-[250px] sm:w-full"
              src="/xentora_logo_black.png"
            ></img>
          </div>

          <h3 className="text-start  lg:flex-1 text-2xl text-black mt-2">
            <br />
            Founded in 2023 with a mission to make lead generation for b2b
            companies a problem of the past.
            <br />
            In the last 3 months we’ve booked over 50 meetings and generated
            over $200k in pipeline for our clients using cold email alone.
          </h3>
        </div>
      </section> */}
      {/* <Timeline /> */}
      {/* <CTAButton
        additionalClasses={"mb-5 xl:hidden"}
        onClick={logClick}
        CTA={copyRef.current.CTA}
        href="/apply?disableFirstBlock
"
      /> */}
      {/* <PricingTable CTA={copyRef.current.CTA} /> */}
      {/* <section
        style={{
          backgroundImage:
            "url(http://www.transparenttextures.com/patterns/textured-paper.png)",
          // background: "rgba(0, 0,30, 1)", //"rgba(0, 0,0, 0.2)",
        }}
        className="my-10 w-[95%] sm:w-[70%] p-2 py-6 mx-auto rounded-lg"
      >
        <h1 className="font-black text-4xl sm:text-5xl text-black text-center">
          WANT TO TALK TO SOMEONE ?
        </h1>
        <h3 className="text-center text-2xl text-black mt-2">
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
      </section> */}
      <CTAButton
        additionalClasses={"mt-5"}
        onClick={logClick}
        CTA={copyRef.current.CTA}
        href="/apply?disableFirstBlock
"
      />
      {/* <Suspense>
        <div className="m-10">
          <Cal
            calLink="xentora/action-plan"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{
              // name: "Ahmed",
              // lastName: "Kotb",
              // email: "booker@example.org",
              layout: "month_view",
            }}
          />
        </div>
      </Suspense> */}
    </div>
  );
}

export default SalesPage;
