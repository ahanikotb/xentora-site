"use client";
import React, { useEffect, useState } from "react";
import Iframe from "iframe-resizer-react";
import useScript from "@/components/useScript";
import { Loader2 } from "lucide-react";
function Page() {
  const [loading, setLoading] = useState(true);
  const [button, setButton] = useState<Element>();
  useScript("https://api.leadconnectorhq.com/js/form_embed.js");

  useEffect(() => {
    if (button) {
      //@ts-ignore
      console.log(button.innerText);
    }
  }, [button]);

  useEffect(() => {
    if (loading == false) {
      console.log("loaded");

      // setButton(document.querySelector(".btn.btn-schedule")!);
    }
  }, [loading]);

  return (
    <div
      id="go"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "90vw",
        height: "100vh",
      }}
    >
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Loader2 size={64} color="white" className="animate-spin" />
        </div>
      ) : null}
      <h1 className="font-bold font-oswald mt-5 mb-5 leading-[1.2] text-5xl text-black text-center w-[90%] lg:leading-[1.3] mx-auto   lg:text-5xl md:w-4/5 md:text-6xl xl:text-7xl 2xl:text-7xl ">
        Pick A Time To See How We Can Help You Add 3 More Deals Every Month
        <br />
        &#8595;
      </h1>

      <Iframe
        onLoad={() => {
          setLoading(false);
        }}
        src="https://api.leadconnectorhq.com/widget/booking/4H0Ct0e9YBiyE7QRqSMF"
        style={{
          width: "100%",
          border: "none",
          overflow: "hidden",
        }}
        scrolling={false}
        id="QzkBabm79SWIQvfbWOfB_1692443061432"
      />
    </div>
  );
}
export default Page;
