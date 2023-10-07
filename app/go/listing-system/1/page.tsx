"use client";
import NavFunnel from "@/components/NavFunnel";
import { cn } from "@/lib/utils";
import React, { forwardRef, useRef, useState } from "react";
import weightedRandom from "ts-weighted-random";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/navigation";
import { Loader2, Phone } from "lucide-react";
import axios from "axios";
import { sendOptin } from "./serve";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import { useForm, Resolver } from "react-hook-form";

const copy = new Map([
  [
    {
      preheadline:
        "<span class='text-red-500'> WARNING: STOP COLD CALLING, DOOR KNOCKING, AND RUNNING FACEBOOK ADS UNTIL YOU READ THIS...  <span/>",
      headline:
        "7 Figure Real Estate Marketing Agency Exposed <br/> Rogue Media Buyer Reveals The Step By Step Listing Generation System That Top Producers Are Using To Stay At The Top of The Market",
      // '10<span class="text-red-500" >  Sales Calls </span>Per Month With <span class="text-red-500" > Ready-To-Buy </span>Leads  That<span class="text-yellow-400" >  Understand  </span>And <span class="text-yellow-400" >Need </span>Your Service',
      // subtitle: "100% DONE FOR YOU.",
      subtitle:
        "Get Access To The Exact Ads , Scripts That Generate 3 listings per month.",

      CTA: "👉  Send Me The Guide",
    },
    1,
  ],
]);

const bullets = `**In this Free Guide you will discover...**



⮕ **How To Establish Yourself As The Clear Local Listing Expert With A Simple 30 Second Video** (Follow these methods to showcase your unique skills and make sellers view you as the authority.)



⮕**The Mind-Blowing YouTube Ad Targeting Trick Top Agents Use To Dominate Local Markets** (This allows you to ethically "spy" on exactly who's searching for homes in any neighborhood or city.)



⮕ **The Clever Authority-Building Funnel That Sucks In Motivated Sellers Like A Magnet** (Implement this instant credibility-boosting system to stand out from the average realtor.)



⮕ **Make Assets That Presell the Homeowner On Your Expertise Before Even Talking To You** (AKA why those who don’t adopt this new approach will be left behind in 2023)`;
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

  const copyRef = useRef(weightedRandom(copy));
  const [error, setError] = useState({
    name: "",
    name2: "",
    email: "",
    email2: "",
    phone: "",
    phone2: "",
  });
  const [data, setData] = useState({
    name: "",
    name2: "",
    email: "",
    email2: "",
    phone: "",
    phone2: "",
    optin: "Listing System",
  });
  const submitStep = async (number: any) => {
    let allPass = true;
    if (number == 2) {
      if (!data.name2) {
        setError((err) => {
          return { ...err, name2: "Please Enter Your Name" };
        });
        allPass = false;
      }
      if (!data.email2) {
        setError((err) => {
          return { ...err, email2: "Please Enter Your Name" };
        });

        allPass = false;
      }
      if (!validateEmail(data.email2)) {
        setError((err) => {
          return { ...err, email2: "Please Enter Your Name" };
        });

        allPass = false;
      }
      if (!data.phone2) {
        setError((err) => {
          return { ...err, phone2: "Please Enter Your Name" };
        });
        allPass = false;
      }
      if (!isValidPhoneNumber(data.phone2)) {
        setError((err) => {
          return { ...err, phone2: "Please Enter Your Name" };
        });
        allPass = false;
      }

      if (allPass) {
        setError({
          name: "",
          name2: "",
          email: "",
          email2: "",
          phone: "",
          phone2: "",
        });
        setButtonLoading(true);
        await sendOptin({
          name: data.name2,
          email: data.email2,
          phone: data.phone2,
          optin: data.optin,
        });
        router.push(
          "/resources/how-to-get-3-new-seller-listings-in-90-days-with-youtube-ads.2a61f05611ac40538bceb9f40d9e9c46"
        );

        // router.push("/go/inbound-leads/2");
      }
      return;
    }

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
        name2: "",
        email: "",
        email2: "",
        phone: "",
        phone2: "",
      });
      setButtonLoading(true);
      await sendOptin({
        name: data.name,
        email: data.email,
        phone: data.phone,
        optin: data.optin,
      });
      // router.push("/go/inbound-leads/2");
      router.push(
        "/resources/how-to-get-3-new-seller-listings-in-90-days-with-youtube-ads.2a61f05611ac40538bceb9f40d9e9c46"
      );
    }
  };
  return (
    <div className="bg-white">
      {/* <NavFunnel /> */}
      <h3
        className="text-center italic mx-[10%] sm:pt-5"
        dangerouslySetInnerHTML={{ __html: copyRef.current.preheadline }}
      ></h3>
      <h1
        className="text-center font-bold my-10 sm:my-2 text-3xl sm:text-4xl text-black sm:w-[60%] mx-auto"
        dangerouslySetInnerHTML={{ __html: copyRef.current.headline }}
      ></h1>
      <h2
        className="text-center text-red-500 my-5 text-xl sm:text-2xl w-[90%] sm:w-50% mx-auto "
        dangerouslySetInnerHTML={{ __html: copyRef.current.subtitle }}
      ></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-5 gap-10 sm:w-[90vw] sm:mx-auto">
        <div className="sm:row-span-2	order-2 sm:order-1 flex flex-col items-center justify-start  sm:items-center  sm:grid-span-2">
          <img
            className="min-w-[600px]  h-[100%] sm:max-h-[600px] sm:w-[800px] "
            src="/funnel/listing_accelerator.png"
          ></img>
        </div>
        <div className="order-1 sm:order-2">
          <div>
            <h2 className="font-bold text-center text-black">
              Just Enter Your Details Below And I'll Send It To You 👇
            </h2>
            <form>
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
            </form>
            {/* <FunnelInput
              value={data.phone}
              setValue={(value: any) => {
                setData({ ...data, phone: value });
              }}
              type="phone"
              placeholder="Enter Your Phone Number"
              additionalClasses="w-[90%] sm:w-[450px] lg:w-[70%] outline outline-gray-300 bg-gray-100 outline-2 "
            /> */}
            <CTAButton
              loading={buttonLoading}
              onClick={() => {
                submitStep(0);
              }}
              additionalClasses="w-[90%] sm:w-[450px] py-5 lg:w-[70%]"
              CTA={copyRef.current.CTA}
            ></CTAButton>
          </div>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="w-[80%] sm:col-start-2 mx-auto order-3 leading-[1.2rem] text-black prose  prose-h1:text-5xl "
        >
          {bullets}
        </ReactMarkdown>
      </div>
      <div className="my-10 sm:hidden ">
        <h2 className=" font-bold text-center text-black">
          Just Enter Your Details Below And I'll Send It To You 👇
        </h2>
        <FunnelInput
          error={error.name2}
          value={data.name2}
          setValue={(value: any) => {
            setData({ ...data, name2: value });
            setError({ ...error, name2: "" });
          }}
          type="text"
          placeholder="Enter Your Name"
          additionalClasses="w-[90%] sm:w-[450px] lg:w-[70%] outline outline-gray-300 bg-gray-100 outline-2  "
        />
        <FunnelInput
          error={error.email2}
          type="email"
          value={data.email2}
          setValue={(value: any) => {
            setData({ ...data, email2: value });
          }}
          placeholder="Enter Your Email Address"
          additionalClasses="w-[90%] sm:w-[450px] lg:w-[70%] outline outline-gray-300 bg-gray-100 outline-2  "
        />
        <PhoneInput
          className={cn(
            " no-outline-on-focus mt-5   cursor-pointer  p-4  sm:p-5 mx-auto sm:h-[60px] flex rounded-xl justify-center items-center  shadow-lg w-[90%] sm:w-[450px] lg:w-[70%] outline outline-gray-300 bg-gray-100 outline-2  ",
            error.phone2 ? "border-red-500 border-2" : ""
          )}
          value={data.phone2}
          // style={{
          //   background: "white",
          // }}
          inputComponent={customInput}
          // inputComponent={customInput}
          placeHolder="Enter Your Phone Number"
          onChange={(value: any) => {
            setData({ ...data, phone2: value });
          }}
        />
        <CTAButton
          loading={buttonLoading}
          onClick={() => {
            submitStep(2);
          }}
          additionalClasses="w-[90%] sm:w-[450px] py-5 lg:w-[70%]"
          CTA={copyRef.current.CTA}
        ></CTAButton>
      </div>
      <div className="flex flex-row w-[80%] sm:w-[30vw] my-5 sm:mt-20 mx-auto items-center justify-between ">
        <a href="/privacy-policy" className="text-gray-500  text-center ">
          Privacy Policy
        </a>
        <a className="text-gray-500  text-center ">Terms Of Service</a>
        {/* <a className="text-white text-center ">Privacy Policy</a> */}
      </div>
      <div className="text-gray-500 text-center w-[90%] sm:w-[90%] mx-auto">
        We use cookies to help improve, promote and protect our services.
        <br /> By continuing to use this site, you agree to our privacy policy
        and terms of use.
        <br /> This site is not a part of Facebook website or Facebook, Inc.{" "}
        <br />
        This site is NOT endorsed by Facebook in any way. FACEBOOK is a
        trademark of FACEBOOK, Inc.
      </div>
    </div>
  );
}

export default page;

function CTAButton({
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
      {loading ? <Loader2 className="animate-spin"></Loader2> : CTA}
    </a>
  );
}

const customInput = forwardRef<HTMLInputElement>((props, ref) => (
  <input style={{ background: "rgb(243,244,246)" }} ref={ref} {...props} />
));
