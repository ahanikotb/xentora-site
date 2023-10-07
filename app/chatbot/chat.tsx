"use client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Check, ChevronsRight, Loader2, Plus, Send, Lock } from "lucide-react";
import { debounce } from "lodash";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import "react-phone-number-input/style.css";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { sendOptin } from "./serve";
import NavFunnel from "@/components/NavFunnel";
import { Metadata } from "next";

export default function CardsChat() {
  const router = useRouter();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [firstMessage, setFirstMessage] = useState("");
  const messageContainerRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "agent",
      content:
        "Hi, this is Emma With The Right Realtor, i saw you came in on our ad on facebook , are you looking to buy a house?",
    },
  ]);
  useEffect(() => {
    // Scroll to the bottom of the message container after rendering a new message
    if (messageContainerRef.current) {
      //@ts-ignore
      messageContainerRef.current.scrollTop =
        //@ts-ignore
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    optin: "Chatbot Funnel",
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

      await sendOptin(data);
      router.push(`/chat-bot-demo?firstMessage=${firstMessage}`);
    }
  };
  return (
    <div className="w-[90vw] mx-auto">
      {firstMessage != "" ? (
        <div
          // onClick={() => {
          //   setStep(0);
          // }}
          className="absolute bg-transparent backdrop-blur w-[93vw] mx-auto  flex justify-center items-start pt-10"
        >
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
            }}
            initial={{ y: "-100vh" }}
            transition={{ duration: 0.2 }}
            animate={{ y: 0 }}
            className="bg-white outline-4 outline-dashed animate-stripes outline-blue-700 rounded-lg p-10 w-[98%] sm:max-w-[750px]"
          >
            <div className="grid grid-cols-2 w-[90%] sm:w-[70%] mx-auto bg-blue-800">
              <div className="progress-bar w-full h-[30px] flex justify-center items-center relative overflow-hidden">
                <p className="text-white font-bold">Step 1 of 2...</p>
              </div>
              <div className="bg-gray-400 w-full h-[30px]"></div>
            </div>

            <div className="my-10 ">
              <h2 className=" text-2xl text-center text-black w-[90%] sm:w-[70%] mx-auto">
                <span className="font-black">
                  **** THIS IS FOR REAL ESTATE AGENTS ONLY IF YOU ARE NOT A REAL
                  ESTATE AGENT LEAVE NOW ****
                </span>
                <br /> Enter Your Info Below And We'll Let You Try The Bot On
                The Next Page 👇
                {/* How We'll Get You 3-5 Listings On Autopilot With
                YouTube Ads or you Don't Pay👇 */}
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
                inputComponent={customInput}
                placeHolder="Enter Your Phone Number"
                onChange={(value: any) => {
                  setData({ ...data, phone: value });
                }}
              />

              <CTAButton
                loading={buttonLoading}
                onClick={submitStep}
                additionalClasses="w-[90%] sm:w-[450px] py-5 lg:w-[70%]"
                CTA={"Test Drive Bot"}
              ></CTAButton>
            </div>
            <div className="flex justify-between items-center w-[90%] sm:w-[70%] mx-auto ">
              <Lock className="w-10 h-10" style={{ marginRight: "20px" }} />
              <h2>
                Your information is secure. We will NEVER share your details
                with anyone else.
              </h2>
            </div>
          </motion.div>
        </div>
      ) : (
        ""
      )}
      <h1 className="pt-10 text-center text-2xl font-bold">
        Real Estate Chatbot Demo
      </h1>
      <p className="p-3 pt-10 text-center ">
        The Following Conversation Starts as soon as the lead optins or submits
        information on the advertisment! try it out and even try to break it if
        you want
      </p>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium leading-none"></p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div
            ref={messageContainerRef}
            className="space-y-4 overflow-y-scroll h-[40vh]"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              setFirstMessage(event.currentTarget.message.value);
              event.currentTarget.message.value = "";
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              autoFocus
              id="message"
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

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
      {loading ? (
        <Loader2 className="animate-spin"></Loader2>
      ) : (
        <div className="flex justify-center items-center">
          {CTA}
          {/* <div dangerouslySetInnerHTML={{ __html: CTA }}></div> */}
          <ChevronsRight className="w-8 h-8" />
        </div>
      )}
    </a>
  );
}

const customInput = forwardRef<HTMLInputElement>((props, ref) => (
  <input style={{ background: "rgb(243,244,246)" }} ref={ref} {...props} />
));
const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

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

export const metadata: Metadata = {
  title:
    "Xentora - Try Our Real Estate SMS Chatbot for Automated Lead Qualification For Free.",
  description:
    "Engage and Qualify Leads 24/7 with Our Real Estate Chatbot Automate lead qualification using our intelligent SMS chatbot. This interactive tool nurtures prospects via text so you can determine their needs without phone calls. Try our customized real estate chatbot risk-free to boost conversions.",
  openGraph: {
    title:
      "Xentora - Try Our Real Estate SMS Chatbot for Automated Lead Qualification For Free.",
    description:
      "Engage and Qualify Leads 24/7 with Our Real Estate Chatbot Automate lead qualification using our intelligent SMS chatbot. This interactive tool nurtures prospects via text so you can determine their needs without phone calls. Try our customized real estate chatbot risk-free to boost conversions.",
  },
};
