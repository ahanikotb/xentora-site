"use client";
import React from "react";
import useTwitterPixel from "./useTwitterPixel";
import useLinkedinTag from "./useLinkedinTag";
import usePlerdy from "./usePlerdy";
import useGoogleAnalytics from "./useGoogleAnalytics";
import { usePixel } from "./usePixel";
import useClearbit from "./useClearbit";

function Trackers() {
  useClearbit(
    "https://tag.clearbitscripts.com/v1/pk_60e7c0678f1219a2a34fcf5c2b8be745/tags.js"
  );
  useTwitterPixel();
  useLinkedinTag();
  usePlerdy();
  useGoogleAnalytics();
  usePixel();

  return <div></div>;
}

export default Trackers;
