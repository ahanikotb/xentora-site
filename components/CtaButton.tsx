"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

function CTAButton({
  onClick,
  CTA,
  additionalClasses,
  href = "/apply?disableFirstBlock",
}: any) {
  const [loading, setLoading] = useState(false);
  return (
    <a
      id="bookingButton"
      href={href}
      onClick={() => {
        setLoading(true);
        if (onClick) {
          onClick();
        }
      }}
      className={cn(
        "font-black font-oswald  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-2 h-[50px] w-[340px] sm:p-5 mx-auto sm:h-[60px] sm:w-[340px] flex rounded-md justify-center items-center  shadow-lg",
        additionalClasses
      )}
    >
      {loading ? <Loader2 className="animate-spin"></Loader2> : CTA}
    </a>
  );
}

export default CTAButton;
