"use client";
import BookNow from "@/components/BookNow";
import Nav from "@/components/Nav";
import useClearbit from "@/components/useClearbit";
import useLinkedinTag from "@/components/useLinkedinTag";
import { usePixel } from "@/components/usePixel";
import useScript from "@/components/useScript";
import useTwitterPixel from "@/components/useTwitterPixel";
import SalesPage from "@/pages/funnels/SalesPage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  useClearbit(
    "https://tag.clearbitscripts.com/v1/pk_60e7c0678f1219a2a34fcf5c2b8be745/tags.js"
  );
  const pixel = usePixel();
  useLinkedinTag();
  useTwitterPixel();
  useEffect(() => {
    if (
      window.location.href.split(".com/")[0].replace("https://", "") ==
      "b2bacquisitionconsultant"
    ) {
      setShowBanner(true);
    }
    pixel?.trackCustom("salesPageViewed");
  }, []);
  const [showBanner, setShowBanner] = useState(false);
  return (
    <main>
      {showBanner ? (
        <div
          style={{ backgroundColor: "#F16B26" }}
          className="px-4 py-3 text-white"
        >
          <p className="text-center text-lg font-medium">
            B2B Acquisition Consultant is A Xentora Brand.
          </p>
        </div>
      ) : (
        <div></div>
      )}

      <Nav />
      <SalesPage />
      {/* 
      <BookNow /> */}
    </main>
  );
}
