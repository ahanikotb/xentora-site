"use client";
import { usePixel } from "@/components/usePixel";
import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
      }}
    >
      <a
        href="https://www.linkedin.com/in/ahanikotb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin color="white" size={32} style={{ marginRight: "50px" }} />
      </a>
      <a
        href="https://twitter.com/ahmedhanykotb_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter color="white" size={32} />
      </a>
    </footer>
  );
};

function ThankYou() {
  const pixel = usePixel();
  // pixel?.trackCustom("ThankYou");
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <img
        className="mx-auto my-10 w-[20rem]"
        alt="xentora Logo"
        // style={{ width: "150px", margin: "auto", marginTop: "5vh" }}
        src={"/xentora_logo.png"}
      />
      <h1 className="font-black text-5xl sm:text-6xl text-center text-white">
        You're Booked !
      </h1>
      <img
        alt="xentora Logo"
        style={{ width: "150px", margin: "auto", marginTop: "5vh" }}
        src="/confirm_check.png"
      />
      <div
        className="text-white font-bold mx-auto text-center mt-10 text-xl sm:text-4xl sm:mt-20"
        style={{ width: "90%" }}
      >
        We sent you an email confirming the date/time. Please mark this in your
        calendar now.
      </div>
      <div
        className="text-white leading-10  mx-auto text-center mt-10 sm:text-3xl"
        style={{ width: "90vw" }}
      >
        We will meet you via Google-meet at your selected date/time.
        <br /> Please show up on-time, in a quiet room, with no distractions.
        <br /> We look forward to meeting you and serving you! <br />
        <span className="font-bold">- The team at Xentora</span>
      </div>
      <Footer />
    </div>
  );
}

export default ThankYou;
