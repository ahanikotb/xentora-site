"use client";
import React, { useEffect, useState } from "react";
import Iframe from "iframe-resizer-react";
import useScript from "@/components/useScript";
import { Loader2 } from "lucide-react";
import BookNow from "@/components/BookNow";
import ApplicationForm from "@/components/applicationfrom/ApplicationForm";
import { usePixel } from "@/components/usePixel";
import { logEvent } from "firebase/analytics";
//@ts-ignore
import { analytics } from "@/lib/firebase";
import useGoogleAnalytics from "@/components/useGoogleAnalytics";
import useLinkedinTag from "@/components/useLinkedinTag";
import useTwitterPixel from "@/components/useTwitterPixel";

function Page() {
  //@ts-ignore
  document.body.style = "background:black;overflow-x:hidden;";

  const pixel = usePixel();
  const analytics = useGoogleAnalytics();
  useLinkedinTag();
  useTwitterPixel();
  useEffect(() => {
    //@ts-ignore
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "/book",
        page_path: "/book",
      });
    }
  }, [analytics]);
  useEffect(() => {
    pixel?.trackCustom("bookingViewed");
  }, []);

  return <BookNow />;
}

export default Page;
