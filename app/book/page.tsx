"use client";
import React, { useEffect, useState } from "react";
import Iframe from "iframe-resizer-react";
import useScript from "@/components/useScript";
import { Loader2 } from "lucide-react";
import BookNow from "@/components/BookNow";
import ApplicationForm from "@/components/applicationfrom/ApplicationForm";
import { usePixel } from "@/components/usePixel";

function Page() {
  const pixel = usePixel();

  useEffect(() => {
    pixel?.trackCustom("bookingViewed");
  }, []);

  return <BookNow />;
}

export default Page;
