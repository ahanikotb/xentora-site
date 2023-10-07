"use client";

import React, { useEffect, useState } from "react";

function Banner() {
  //   useEffect(() => {
  //     if (
  //       window.location.href.split(".com/")[0].replace("https://", "") ==
  //       "b2bacquisitionconsultant"
  //     ) {
  //       setShowBanner(true);
  //     }
  //   }, []);
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div>
      {showBanner ? (
        <div
          //   style={{
          //     background:
          //       "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
          //   }}
          style={{ backgroundColor: "#F16B26" }}
          className="px-4 py-3 text-white"
        >
          <p className="text-center text-lg font-medium">
            We Are Now Providing Pretrained 5$/hr Cold Callers{" "}
            <a href="/easy-book" className="underline">
              Learn More
            </a>
            .
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Banner;
