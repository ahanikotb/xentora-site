import { CTAButton } from "@/app/resources/[postId]/PostCTA";
import { cn } from "@/lib/utils";
import React from "react";

const ExtraSpace = () => (
  <>
    <br />
    <br />
  </>
);
const NewLine = () => <br />;
function SalesPagev3() {
  return (
    <div className="md:w-[80%] mx-auto">
      <h1
        className={cn(
          "mt-10 font-oswald text-7xl text-center ",
          "leading-[4rem]"
        )}
      >
        Realtors Can Now <b>Legally Exploit </b>The New Facebook Ads Algorithm
        To Earn Anywhere Between 10,000$ to 40,000$ In Additional GCI{" "}
        <u>Every Month</u>{" "}
      </h1>
      <h3 className="mt-10 font-oswald text-3xl text-center">
        without any <span className="underline italic">Technical Skills</span> ,
        <span className="underline italic"> Compicated CRMS</span> ,
        <span className="underline italic">or becoming a marketer</span>
      </h3>
      <div className="w-[90%] sm:w-[70%] mx-auto">
        <div className="sm:grid sm:grid-cols-4 mt-10">
          <div className="flex justify-center items-center">
            <img className="w-[200px] h-[200px]" src="/headshot.png"></img>
          </div>{" "}
          <p className="ml-10 font-lato text-2xl col-span-3  mt-10 ">
            From The Desk Of Ahmed Kotb
            <NewLine />
            Middletown, DE <ExtraSpace /> Dear Friend, <ExtraSpace />
            If are a Realtor looking to grow, this is the most important letter
            you'll read today. <ExtraSpace />
            I'll show you why in a minute.
          </p>
        </div>
        <h1 className="mt-10 font-oswald text-3xl text-center mx-auto ">
          Want To Review The Program, How It Works, How Much it Costs, And How
          You Can Get Started?
        </h1>
      </div>
      <CTAButton
        additionalClasses={cn(
          "w-[470px] sm:w-[600px]",
          "!p-0",
          "rounded-md",
          "!h-20",
          "text-4xl",
          "font-oswald"
        )}
        CTA="Yes I Want To Talk To Someone"
      ></CTAButton>
    </div>
  );
}

export default SalesPagev3;
