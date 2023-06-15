"use client";
import React, { useEffect, useState } from "react";
import Iframe from "iframe-resizer-react";
import useScript from "@/components/useScript";
import { Loader2 } from "lucide-react";
import BookNow from "@/components/BookNow";
import ApplicationForm from "@/components/applicationfrom/ApplicationForm";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();

  return (
    <ApplicationForm
      goToBookingPage={(params: any) => {
        router.push(`/book?${params}`);
      }}
    />
  );
}

export default Page;
