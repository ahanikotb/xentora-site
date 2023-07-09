"use client";
import React, { useEffect, useState } from "react";
import Iframe from "iframe-resizer-react";
import useScript from "@/components/useScript";
import { Loader2 } from "lucide-react";
import BookNow from "@/components/BookNow";
import ApplicationForm from "@/components/applicationfrom/ApplicationForm";
import { useRouter } from "next/navigation";
import usePlerdy from "@/components/usePlerdy";
import NavFunnel from "@/components/NavFunnel";
import { sendApplication } from "./submitApplication";
function Page() {
  const router = useRouter();
  // usePlerdy();
  return (
    <div
      style={{
        // background:
        //   "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 70) 0%, rgb(0, 0, 15) 99.4%)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <NavFunnel />
      {/* STEP 1 8vh nav  */}
      <h1 className="text-center font-bold my-2 sm:my-2 text-3xl sm:text-4xl text-white  w-[80vw] mx-auto xl:w-[50vw]  ">
        Step 1: Fill Out The Form Below. Once Complete, You Will Book Your Call
        On The Following Page
      </h1>
      <ApplicationForm
        width={"100vw"}
        height={"50vh"}
        goToThankYouPage={(params: any) => {
          router.push(`/thankyou?${params}`);
        }}
        goToBookingPage={(params: any) => {
          router.push(`/book?${params}`);
        }}
        sendApplication={sendApplication}
      />
    </div>
  );
}

export default Page;
