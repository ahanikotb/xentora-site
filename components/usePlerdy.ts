// <!-- BEGIN PLERDY CODE -->
// <script type="text/javascript" defer data-plerdy_code='1'>
//     var _protocol="https:"==document.location.protocol?" https://":" http://";
//     _site_hash_code = "d9ec9bd1c0dbb833bb3ff26d9f2c9ce9",_suid=39561, plerdyScript=document.createElement("script");
//     plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
//     plerdyScript.src="https://d.plerdy.com/public/js/click/main.js?v="+Math.random();
//     var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
//     plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
//     try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}
// </script>
// <!-- END PLERDY CODE -->
import exp from "constants";
import { useEffect } from "react";

const usePlerdy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    script.setAttribute("data-plerdy_code", "1");
    script.innerHTML = `
    var _protocol="https:"==document.location.protocol?" https://":" http://";
    _site_hash_code = "d9ec9bd1c0dbb833bb3ff26d9f2c9ce9",_suid=39561, plerdyScript=document.createElement("script");
    plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
    plerdyScript.src="https://d.plerdy.com/public/js/click/main.js?v="+Math.random();
    var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
    plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
    try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}
`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default usePlerdy;

export const PlerdyComponent = () => {
  usePlerdy();
};
