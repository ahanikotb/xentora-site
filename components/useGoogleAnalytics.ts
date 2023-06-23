import { firebaseConfig } from "@/lib/firebase";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";

function useGoogleAnalytics() {
  const [analytics, setAnalytics] = useState<Analytics>();
  useEffect(() => {
    isSupported().then((isSupported) => {
      if (isSupported) {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        setAnalytics(analytics);
      }
    });
  }, [analytics]);

  return analytics;
}

export default useGoogleAnalytics;
