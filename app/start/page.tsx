"use client";
import NavFunnel from "@/components/NavFunnel";
import { cn } from "@/lib/utils";
import React, { forwardRef, useRef, useState } from "react";
import weightedRandom from "ts-weighted-random";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/navigation";
import { ChevronsRight, Loader2, Lock, Phone } from "lucide-react";
import axios from "axios";
import { sendOptin } from "./serve";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import { useForm, Resolver } from "react-hook-form";
import { motion } from "framer-motion";

const copy = new Map([
  [
    {
      preheadline:
        "<span class='text-white'>For Recruiters , and Agency Owners  Looking To Fill Their Callendar With Qualified Appointments    <span/>",
      headline:
        "How To Generate 1-2 Inbound Leads Per Week On Autopilot Using Linkedin without having a lot of followers  or spending hours writing content",
      // '10<span class="text-red-500" >  Sales Calls </span>Per Month With <span class="text-red-500" > Ready-To-Buy </span>Leads  That<span class="text-yellow-400" >  Understand  </span>And <span class="text-yellow-400" >Need </span>Your Service',
      // subtitle: "100% DONE FOR YOU.",
      subtitle:
        "<span class='text-red-500'>Enter Your Info Below And We'll Send You A One-Pager On How This Offer Works 👇 </span>",

      CTA: "GET STARTED",
    },
    1,
  ],
]);

const FunnelInput = ({
  registration,
  additionalClasses,
  placeholder,
  value,
  type,
  setValue,
  useCleave,
  error,
}: any) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      placeholder={placeholder}
      className={cn(
        " mt-5   cursor-pointer  p-4  sm:p-5 mx-auto sm:h-[60px] flex rounded-xl justify-center items-center  shadow-lg",
        additionalClasses,
        error ? "border-red-500 border-2" : ""
      )}
    ></input>
  );
};
const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function page() {
  const router = useRouter();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [step, setStep] = useState(0);

  const copyRef = useRef(weightedRandom(copy));
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    optin: "VSL Funnel",
  });
  const submitStep = async () => {
    let allPass = true;
    if (!data.name) {
      setError((err) => {
        return { ...err, name: "Please Enter Your Name" };
      });
      allPass = false;
    }
    if (!data.email) {
      setError((err) => {
        return { ...err, email: "Please Enter Your Name" };
      });

      allPass = false;
    }
    if (!validateEmail(data.email)) {
      setError((err) => {
        return { ...err, email: "Please Enter Your Name" };
      });

      allPass = false;
    }
    if (!data.phone) {
      setError((err) => {
        return { ...err, phone: "Please Enter Your Name" };
      });
      allPass = false;
    }
    if (!isValidPhoneNumber(data.phone)) {
      setError((err) => {
        return { ...err, phone: "Please Enter Your Name" };
      });
      allPass = false;
    }

    if (allPass) {
      setError({
        name: "",
        email: "",
        phone: "",
      });
      setButtonLoading(true);

      // await sendOptin(data);
      router.push("/vsl");
    }
  };
  if (step === 1) {
    return (
      <div className="w-screen h-screen flex justify-center items-start pt-10">
        <motion.div
          initial={{ y: "-100vh" }}
          transition={{ duration: 0.2 }}
          animate={{ y: 0 }}
          className="bg-white outline-4 outline-dashed animate-stripes outline-blue-700 rounded-lg p-10 w-[98%] sm:max-w-[750px]"
        >
          <div className="grid grid-cols-2 w-[90%] sm:w-[70%] mx-auto bg-blue-500">
            <div className="progress-bar w-full h-[30px] flex justify-center items-center relative overflow-hidden">
              <p className="text-white font-bold">Step 1 of 2...</p>
            </div>
            <div className="bg-gray-400 w-full h-[30px]"></div>
          </div>

          <div className="my-10 ">
            <h2 className=" text-2xl text-center text-black w-[90%] sm:w-[70%] mx-auto">
              Enter Your Info Below And We'll Send You A One-Pager On How This
              Offer Works👇
            </h2>
            <FunnelInput
              error={error.name}
              value={data.name}
              setValue={(value: any) => {
                setData({ ...data, name: value });
                setError({ ...error, name: "" });
              }}
              type="text"
              placeholder="Enter Your Name"
              additionalClasses="w-[90%] sm:w-[450px] lg:w-[70%] outline outline-gray-300 bg-gray-100 outline-2  "
            />
            <FunnelInput
              error={error.email}
              type="email"
              value={data.email}
              setValue={(value: any) => {
                setData({ ...data, email: value });
              }}
              placeholder="Enter Your Email Address"
              additionalClasses="w-[90%] sm:w-[450px] lg:w-[70%] outline outline-gray-300 bg-gray-100 outline-2  "
            />
            <PhoneInput
              className={cn(
                " no-outline-on-focus mt-5   cursor-pointer  p-4  sm:p-5 mx-auto sm:h-[60px] flex rounded-xl justify-center items-center  shadow-lg w-[90%] sm:w-[450px] lg:w-[70%] outline outline-gray-300 bg-gray-100 outline-2  ",
                error.phone ? "border-red-500 border-2" : ""
              )}
              value={data.phone}
              // style={{
              //   background: "white",
              // }}
              inputComponent={customInput}
              // inputComponent={customInput}
              placeHolder="Enter Your Phone Number"
              onChange={(value: any) => {
                setData({ ...data, phone: value });
              }}
            />

            <CTAButton
              loading={buttonLoading}
              onClick={submitStep}
              additionalClasses="w-[90%] sm:w-[450px] py-5 lg:w-[70%]"
              CTA={copyRef.current.CTA}
            ></CTAButton>
          </div>
          <div className="flex justify-between items-center w-[90%] sm:w-[70%] mx-auto ">
            <Lock className="w-10 h-10" style={{ marginRight: "20px" }} />
            <h2>
              Your information is secure. We will NEVER share your details with
              anyone else.
            </h2>
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="">
      <div className="w-[150px] sm:w-[200px] h-[8vh] text-black font-bold flex items-center justify-center mx-auto">
        <a>
          <img src="/xentora_logo.png" />
        </a>
      </div>
      <h3
        className="text-center italic mx-[10%] sm:pt-5"
        dangerouslySetInnerHTML={{ __html: copyRef.current.preheadline }}
      ></h3>
      <h1
        className="w-[90%] text-center font-bold my-10 sm:my-2 text-3xl sm:text-4xl text-white sm:w-[60%] mx-auto"
        dangerouslySetInnerHTML={{ __html: copyRef.current.headline }}
      ></h1>
      <h2
        className="text-center text-white my-5 text-xl sm:text-2xl w-[90%] sm:w-50% mx-auto "
        dangerouslySetInnerHTML={{ __html: copyRef.current.subtitle }}
      ></h2>
      <CTAButton
        onClick={() => {
          setStep(1);
        }}
        CTA={"GET STARTED"}
        additionalClasses="w-[300px]"
      />
    </div>
  );
}

export default page;

export function CTAButton({
  onClick,
  CTA,
  additionalClasses,
  loading,
  setLoading,
}: any) {
  // const [loading, setLoading] = useState(false);
  return (
    <a
      // href={href}
      onClick={() => {
        // setLoading(true);
        onClick();
      }}
      className={cn(
        "font-black mt-5  text-white text-2xl hover:bg-green-800 cursor-pointer bg-green-700 p-2  sm:p-5 mx-auto sm:h-[60px] flex rounded-xl justify-center items-center  shadow-lg",
        additionalClasses
      )}
    >
      {loading ? (
        <Loader2 className="animate-spin"></Loader2>
      ) : (
        <div className="flex justify-center items-center">
          {CTA}
          <ChevronsRight className="w-8 h-8" />
        </div>
      )}
    </a>
  );
}

const customInput = forwardRef<HTMLInputElement>((props, ref) => (
  <input style={{ background: "rgb(243,244,246)" }} ref={ref} {...props} />
));
