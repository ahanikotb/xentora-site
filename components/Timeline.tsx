"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CTAButton from "./CtaButton";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Timeline() {
  const component = useRef<HTMLDivElement>(null); // we only need a ref for the root-level element of this component so we can use selector text for everything else.

  useEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: component.current, // The ID of the trigger element
          start: "top top",
          end: "bottom bottom",
          scrub: 0.01,

          // markers: true, // Add markers to visualize ScrollTrigger's behavior (optional)
        },
      });

      timeline.fromTo(
        "#work",
        { translateY: 0, ease: "none" },
        {
          translateY: `+${
            document.getElementById("work")!.getBoundingClientRect().height -
            window.innerHeight
          }`,
          ease: "none",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={component}
      className="xl:container xl:flex mx-auto w-[90vw] "
      id="ourprocess"
    >
      <div id="work" className={`flex-1 `}>
        <h1 className="xl:mb-5 text-center text-5xl sm:text-7xl text-white font-black mt-20 sm:mt-20">
          How We Work
        </h1>
        <h3 className="hidden xl:flex xl:text-center text-white xl:mx-auto text-3xl w-[80%] justify-center mb-5">
          Transparency and Constant Communication.
        </h3>
        <CTAButton
          href="/apply"
          additionalClasses="hidden xl:flex"
          CTA="Get Started"
        ></CTAButton>
      </div>
      <div className="  container flex-1 overflow-y-auto no-scrollbar">
        <div className="w-9/12 md:w-7/12 lg:6/12 mx-auto relative    ">
          <div className=" mt-10">
            {/* Card 1 */}
            <div className="transform transition  hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              {/* Dot Follwing the Left Vertical Line */}
              <div className="w-[6rem] h-[6rem]  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0 flex justify-items-center">
                <img src="/steps/step1.png" />
              </div>
              {/* Line that connecting the box with the vertical line */}
              {/* <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0" /> */}
              {/* Content that showing in the box */}
              <div className="flex-auto">
                <h1 className="text-lg">Step 1</h1>
                <h1 className="text-4xl sm:text-6xl font-bold">
                  FILL OUT OUR ONBOARDING FORM
                </h1>
                <h3 className="text-xl sm:text-2xl my-10">
                  After signing our proposal, we'll have you fill out an
                  onboarding form so we can understand more about you and your
                  business
                </h3>
              </div>
            </div>
            {/* Card 2 */}
            <div className="transform transition  hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              {/* Dot Follwing the Left Vertical Line */}
              <div className="flex justify-items-center w-[6rem] h-[6rem] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                <img src="/steps/step2.png" />
              </div>
              {/* Line that connecting the box with the vertical line */}
              {/* <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0" /> */}
              {/* Content that showing in the box */}
              <div className="flex-auto">
                <h1 className="text-xl">Step 2</h1>
                <h1 className="text-4xl sm:text-6xl font-bold">
                  SCHEDULE A KICKOFF CALL
                </h1>
                <h3 className="text-xl sm:text-2xl my-10">
                  Our account managers will go over your onboarding form on a
                  call with you to formulate an initial campaign strategy
                </h3>
              </div>
            </div>
            {/* Card 3 */}
            <div className="transform transition  hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              {/* Dot Follwing the Left Vertical Line */}
              <div className="flex justify-items-center w-[6rem] h-[6rem] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                <img src="/steps/step3.png" />
              </div>
              {/* Line that connecting the box with the vertical line */}
              {/* <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0" /> */}
              {/* Content that showing in the box */}
              <div className="flex-auto">
                <h1 className="text-lg">STEP 3</h1>
                <h1 className="text-4xl sm:text-6xl font-bold">
                  ONBOARDING SETUP
                </h1>
                <h3 className="text-xl sm:text-2xl my-10">
                  We'll take all the information from the kickoff call to set up
                  your inboxes, build your lead list, and write your campaign
                  cadence.
                </h3>
              </div>
            </div>
            {/* Card 4 */}
            <div className="transform transition  hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              {/* Dot Follwing the Left Vertical Line */}
              <div className="flex justify-items-center w-[6rem] h-[6rem]  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                <img src="/steps/step4.png" />
              </div>
              {/* Line that connecting the box with the vertical line */}
              {/* <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0" /> */}
              {/* Content that showing in the box */}
              <div className="flex-auto">
                <h1 className="text-lg">STEP 4</h1>
                <h1 className="text-4xl sm:text-6xl font-bold">
                  CAMPAIGN LAUNCH
                </h1>
                <h3 className="text-xl sm:text-2xl my-10">
                  After the campaign cadence and lead list has been approved,
                  our team will launch your campaign
                </h3>
              </div>
            </div>
            {/* Card 5 */}
            <div className="transform transition  hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 text-white rounded mb-10 flex-col md:flex-row">
              {/* Dot Follwing the Left Vertical Line */}
              <div className="flex justify-items-center w-[6rem] h-[6rem] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0">
                <img src="/steps/step5.png" />
              </div>
              {/* Line that connecting the box with the vertical line */}
              {/* <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0" /> */}
              {/* Content that showing in the box */}
              <div className="flex-auto">
                <h1 className="text-lg">STEP 5</h1>
                <h1 className="text-4xl sm:text-6xl font-bold">
                  MEETING-READY-LEADS DELIVERED
                </h1>
                <h3 className="text-xl sm:text-2xl my-10">
                  Once we've identified a meeting-ready-lead, we'll deliver it
                  straight to your inbox with our seamless email integration
                </h3>
              </div>
            </div>{" "}
            {/* Card 5 */}
            <div className="transform transition  hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  text-white rounded mb-10 flex-col md:flex-row">
              {/* Dot Follwing the Left Vertical Line */}
              <div className="flex justify-items-center w-[6rem] h-[6rem]  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0">
                <img src="/steps/step6.png" />
              </div>
              {/* Line that connecting the box with the vertical line */}
              {/* Content that showing in the box */}
              <div className="flex-auto">
                <h1 className="text-lg">STEP 6</h1>
                <h1 className="text-4xl sm:text-6xl font-bold">
                  CAMPAIGN ADJUSTMENTS
                </h1>
                <h3 className="text-xl sm:text-2xl my-10">
                  Aside from the weekly reports, our Customer Success Managers
                  will do a monthly check-in call to go over recommended
                  adjustments to continually improve the campaign performance
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
