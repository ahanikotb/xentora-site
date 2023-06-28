import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

function CTAButton({ onClick, CTA, additionalClasses, href = "/apply" }: any) {
  const [loading, setLoading] = useState(false);
  return (
    <a
      href={href}
      onClick={() => {
        setLoading(true);
        onClick();
      }}
      className={cn(
        "font-black  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-2 h-[50px] w-[220px] sm:p-5 mx-auto sm:h-[60px] sm:w-[220px] flex rounded-xl justify-center items-center  shadow-lg",
        additionalClasses
      )}
    >
      {loading ? <Loader2 className="animate-spin"></Loader2> : CTA}
    </a>
  );
}

export default CTAButton;
