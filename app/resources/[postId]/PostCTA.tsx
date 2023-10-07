"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function PostData() {
  return (
    <div>
      <section
        style={{
          background: "rgba(0, 0,0, 0.2)",
        }}
        className="overflow-hidden  sm:grid sm:grid-cols-2 sm:mx-20 rounded-lg"
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl  text-white md:text-4xl">
              Get Access To The Cold Email Template Sequence That Generated Over
              $200k In Pipleline In 90 Days
            </h2>
            <h2 className="text-xl my-4  text-green-400 md:text-4xl">
              Free Download
            </h2>
            <p className="hidden text-white my-10 md:mt-4 md:block">
              To receive your free copy of How To Get Customers in Dubai, simply
              enter your email address in the form below. This comprehensive
              guide covers the essential strategies and tactics you need to
              attract and retain customers in the Dubai market. From
              understanding local consumer behavior to leveraging digital
              marketing channels, this book provides the insights and actionable
              advice you need to succeed.
            </p>
            <div>
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-green-600"
                />
              </div>
              <CTAButton CTA="Yes, I Want The Cold Email Templates"></CTAButton>
            </div>
          </div>
        </div>
        <img
          alt="Student"
          src="/proof/email-2.png"
          className="h-56 w-full object-contain sm:p-20 sm:h-full"
        />
      </section>

      {/* <section
        style={{
          background: "rgba(0, 0,0, 0.2)",
        }}
        className="m-10 w-[90%] sm:w-[70%] p-10   mx-auto rounded-lg"
      >
        <div className="p-10">
          <div className="mx-auto  text-center">
            <h2 className="sm:text-5xl text-xl sm:mx-20 font-bold text-white ">
              Get Access To The Cold Email Template Sequence That Generated Over
              $200k In Pipleline In 90 Days
            </h2>
            <p className="hidden text-white sm:mt-4 sm:block">
              Enter Your Email Below To Recieve A Free Download
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-green-600"
                />
              </div>
              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Sign Up </span>
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </div>
    // <section
    //   style={{
    //     background: "rgba(0, 0,0, 0.2)",
    //   }}
    //   className="my-10 w-[90%] sm:w-[70%] p-10   mx-auto rounded-lg"
    // >
    //   <h1 className="font-black text-4xl sm:text-5xl text-white text-center">
    //     WANT TO TALK TO SOMEONE ?
    //   </h1>
    //   <h3 className="text-center text-2xl text-white mt-2">
    //     Our lead generation specialists are available to answer your questions
    //     💬
    //   </h3>
    //   <CTAButton
    //     additionalClasses={"mt-5 w-full mx-auto text-center"}
    //     // onClick={logClick}
    //     CTA={"Join Newsletter"}
    //     // href="/apply"
    //   />
    // </section>
  );
}

export function CTAButton({
  onClick,
  CTA,
  additionalClasses,
  href = "/apply",
}: any) {
  const [loading, setLoading] = useState(false);
  return (
    <a
      href={href}
      onClick={() => {
        setLoading(true);
        onClick();
      }}
      className={cn(
        "font-black mt-5  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-2  sm:p-5 mx-auto sm:h-[60px] flex rounded-xl justify-center items-center  shadow-lg",
        additionalClasses
      )}
    >
      {loading ? <Loader2 className="animate-spin"></Loader2> : CTA}
    </a>
  );
}
