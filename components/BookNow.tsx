"use client";
import React, { useEffect, useState } from "react";
import Iframe from "iframe-resizer-react";
import useScript from "@/components/useScript";
import { Loader2 } from "lucide-react";
function Page() {
  const [loading, setLoading] = useState(true);
  useScript("https://api.leadconnectorhq.com/js/form_embed.js");
  // useEffect(() => {
  //   document.body.style.background = "#2E4057";
  // }, []);

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
        src="https://api.leadconnectorhq.com/widget/booking/zStS9mAF7vO0xQDUytz8"
        style={{
          width: "100%",
          border: "none",
          overflow: "hidden",
        }}
        scrolling={false}
        id="HKvlXSRYjO7yb3dVp4VM_1681102480893"
      />
    </div>
  );
}

export default Page;
