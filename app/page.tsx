"use client";
import BookNow from "@/components/BookNow";
import Nav from "@/components/Nav";
import useScript from "@/components/useScript";
import SalesPage from "@/pages/funnels/SalesPage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    if (
      window.location.href.split(".com/")[0].replace("https://", "") ==
      "b2bacquisitionconsultant"
    ) {
      setShowBanner(true);
    }
  });
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
