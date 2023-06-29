"use client";
import React, { useEffect } from "react";
import CTAButton from "./CtaButton";
import { CalendarCheck, CircleDollarSign, Target } from "lucide-react";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useAnimate, stagger } from "framer-motion";

function Testimonials() {
  const [scope, animate] = useAnimate();

  const [currentCaseStudy, setCurrentCaseStudy] = React.useState(0);

  function switchCaseStudy(arg0: string) {
    if (arg0 == "back")
      setCurrentCaseStudy(Math.abs((currentCaseStudy - 1) % 2));
    if (arg0 == "next")
      setCurrentCaseStudy(Math.abs((currentCaseStudy + 1) % 2));
  }
  useEffect(() => {
    animate("#box", { opacity: 1 }, { delay: stagger(0.2) });
  }, [currentCaseStudy]);
  return (
    <div ref={scope}>
      {currentCaseStudy == 0 ? (
        <section
          id="casestudies"
          className=" rounded-lg w-[90%] mx-auto pb-10  xl:flex xl:flex-row"
        >
          <div className="w-[90vw] mx-auto  flex flex-col items-center justify-center xl:justify-start xl:content-center">
            <div className="flex flex-col py-10  items-center justify-center ">
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
            <div className="w-[80vw] mx-auto   sm:py-10 grid grid-cols-2 sm:grid-cols-3 gap-10 ">
              <div
                id="box"
                className="opacity-0 sm:outline outline-white rounded-lg  sm:p-10 flex justify-center sm:justify-start items-start  sm:items-center flex-row sm:flex-col"
              >
                <Target color="white" className=" sm:w-1/3 sm:h-1/3 sm:mb-5" />

                <h1 className=" text-center text-white sm:text-3xl font-black">
                  60% Open-Rate and 2 Positive Replies Per Day
                </h1>
              </div>
              <div
                id="box"
                className="opacity-0  sm:outline outline-white rounded-lg  sm:p-10 flex justify-center  sm:justify-start items-start  sm:items-center flex-row sm:flex-col"
              >
                <CalendarCheck
                  color="white"
                  className=" sm:w-1/3 sm:h-1/3 sm:mb-5"
                />
                <h1 className="text-center text-white sm:text-3xl font-black">
                  4 Meetings Booked Per Week
                </h1>
              </div>
              <div
                id="box"
                className="opacity-0  sm:outline outline-white rounded-lg  sm:p-10 flex justify-center  sm:justify-start items-start  sm:items-center  flex-row sm:flex-col"
              >
                <CircleDollarSign
                  color="white"
                  className=" sm:w-1/3 sm:h-1/3 sm:mb-5"
                />
                <h1 className="  text-center text-white sm:text-3xl font-black">
                  Getting On 5-Figure Sales Opportunities Every Week
                </h1>
              </div>
            </div>
          }
        </section>
      ) : (
        ""
      )}
      {currentCaseStudy == 1 ? (
        <section
          id="casestudies"
          className=" rounded-lg w-[90%] mx-auto pb-10  xl:flex xl:flex-row"
        >
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
            <div className="w-[80vw] mx-auto   sm:py-10 grid grid-cols-2 sm:grid-cols-3 gap-10 ">
              <div
                id="box"
                className="opacity-0  sm:outline outline-white rounded-lg  sm:p-10 flex justify-center sm:justify-start items-start  sm:items-center flex-row sm:flex-col"
              >
                <Target color="white" className=" sm:w-1/3 sm:h-1/3 sm:mb-5" />

                <h1 className=" text-center text-white sm:text-3xl font-black">
                  70% Open-Rate and 3-4 Positive Replies Per Day
                </h1>
              </div>
              <div
                id="box"
                className="opacity-0  sm:outline outline-white rounded-lg  sm:p-10 flex justify-center  sm:justify-start items-start  sm:items-center flex-row sm:flex-col"
              >
                <CalendarCheck
                  color="white"
                  className=" sm:w-1/3 sm:h-1/3 sm:mb-5"
                />
                <h1 className="text-center text-white sm:text-3xl font-black">
                  4 Meetings Booked Per Week
                </h1>
              </div>
              <div
                id="box"
                className="opacity-0  sm:outline outline-white rounded-lg  sm:p-10 flex justify-center  sm:justify-start items-start  sm:items-center  flex-row sm:flex-col"
              >
                <CircleDollarSign
                  color="white"
                  className=" sm:w-1/3 sm:h-1/3 sm:mb-5"
                />
                <h1 className="  text-center text-white sm:text-3xl font-black">
                  Getting On 5-Figure Sales Opportunities Every Week
                </h1>
              </div>
            </div>
          }
        </section>
      ) : (
        ""
      )}
      <div className="flex w-full justify-evenly align-center mb-10">
        <div
          onClick={() => switchCaseStudy("back")}
          className="text-white cursor-pointer"
        >
          <ArrowBigLeft fill="white" className="w-10 h-10" />
        </div>
        <div
          onClick={() => switchCaseStudy("next")}
          className="text-white cursor-pointer "
        >
          <ArrowBigRight fill="white" className="w-10 h-10" />
        </div>
      </div>
      <CTAButton
        // additionalClasses={"mb-5"}
        //   onClick={logClick}
        CTA="Get Started"
        href="/apply"
      />
    </div>
  );
}

export default Testimonials;
