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
