import React from "react";
import Chat from "./chat";
import NavFunnel from "@/components/NavFunnel";
import CTAButton from "@/components/CtaButton";

function page() {
  return (
    <div>
      {/* <NavFunnel showCTA /> */}
      <div className="w-[90vw] mx-auto">
        <h1 className=" text-center text-4xl sm:text-6xl font-bold">
          Real Estate Chatbot Demo
        </h1>
        <p className="p-3 pt-2 text-center ">
          The Following Conversation Starts as soon as the lead optins or
          submits information on the advertisment! try it out and even try to
          break it if you want
        </p>
      </div>
      <Chat />
      <div className="pb-10 pt-2">
        <CTAButton
          additionalClasses="sm:p-0"
          href="/easy-book"
          // href="/apply"
          CTA="Free Growth Strategy Call"
        ></CTAButton>
      </div>
    </div>
  );
}

export default page;
