import React from "react";

function Timeline({ CTA }: { CTA: string }) {
  return (
    <section>
      <h1 className="text-center text-7xl text-white font-black">
        How We Work
      </h1>

      <div>
        <div className="w-9/12 md:w-7/12 lg:6/12 mx-auto relative py-10">
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
                <h1 className="text-lg">STEP 5</h1>
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
    </section>
  );
}

export default Timeline;
