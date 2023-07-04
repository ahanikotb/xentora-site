import React from "react";
import { Loader2 } from "lucide-react";

function NavFunnel() {
  return (
    <div>
      {/* <div className="mx-auto sm:hidden w-[150px] sm:w-[200px] h-[8vh] text-black font-bold flex items-center justify-center">
        <a href="/">
          <img src="/xentora_logo.png" />
        </a>
      </div> */}
      <nav className=" flex justify-between items-center relative py-3 lg:px-20 px-5 text-white mx-auto">
        <div className="w-[150px] sm:w-[200px] h-[8vh] text-black font-bold flex items-center justify-center">
          <a>
            <img src="/xentora_logo.png" />
          </a>
        </div>
        {/* <ul className="">
          <li>
            <a
              href="/"
              className="p-6 text-xl  cursor-pointer flex lg:p-4 lg:hover:bg-inherit transition-colors duration-700 ease-in"
            >
              Home
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
}
export default NavFunnel;
