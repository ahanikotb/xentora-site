import { cn } from "@/lib/utils";
import React from "react";

function CTAButton({ onClick, CTA, additionalClasses, href = "/apply" }: any) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "font-black  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-2 h-[50px] w-[220px] sm:p-5 mx-auto sm:h-[60px] sm:w-[220px] flex rounded-xl justify-center items-center  shadow-lg",
        additionalClasses
      )}
    >
      {CTA}
    </a>
  );
}

export default CTAButton;
