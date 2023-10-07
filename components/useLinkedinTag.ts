import { useEffect } from "react";
const useLinkedinTag = () => {
  useEffect(() => {
    const firstScript = document.createElement("script");

    firstScript.type = "text/javascript";
    firstScript.innerHTML = `
    _linkedin_partner_id = "5666665";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);`;
    const secondScript = document.createElement("script");
    secondScript.type = "text/javascript";
    secondScript.innerHTML = `
    (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);})(window.lintrk);`;

    var noscript = document.createElement("noscript");
    var img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.alt = "";
    img.src = "https://px.ads.linkedin.com/collect/?pid=5666665&fmt=gif";
    noscript.appendChild(img);

    document.body.appendChild(firstScript);
    document.body.appendChild(secondScript);
    document.body.appendChild(noscript);
    return () => {
      document.body.removeChild(firstScript);
      document.body.removeChild(secondScript);
      document.body.removeChild(noscript);
    };
  }, []);
};

export default useLinkedinTag;
