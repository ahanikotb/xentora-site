import { useEffect } from "react";

const useClearbit = (url: string) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script.referrerPolicy = "strict-origin-when-cross-origin";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useClearbit;
