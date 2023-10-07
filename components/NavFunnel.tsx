import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
function NavFunnel({
  showCTA,
  showHome,
  dark,
  useBlog,
}: {
  showCTA?: boolean;
  showHome?: boolean;
  dark?: boolean;
  useBlog?: boolean;
}) {
  return (
    <div>
      {/* <div className="mx-auto sm:hidden w-[150px] sm:w-[200px] h-[8vh] text-black font-bold flex items-center justify-center">
        <a href="/">
          <img src="/xentora_logo.png" />
        </a>
      </div> */}
      <nav
        className={cn(
          " flex justify-between items-center relative py-3 lg:px-20 px-5 text-black mx-auto",
          dark ? "bg-black text-white" : ""
        )}
      >
        <div className="w-[150px] sm:w-[200px] h-[8vh] text-black font-bold flex-col items-center justify-center">
          <h3 className={cn("text-sm", dark ? "text-white" : "", "text-right")}>
            insights
          </h3>
          <a
            // className={cn("flex-col justify-normal")}
            href={useBlog ? "/insights" : "/"}
          >
            <img src={dark ? "/xentora_logo.png" : "/xentora_logo_black.png"} />
          </a>
        </div>

        <ul className="lg:flex lg:translate-x-0   lg:static  lg:basis-/5 justify-evenly font-bold peer-checked:block top-[88px] transition-transform duration-0 left-0 right-0  bg-white lg:bg-transparent">
          {showHome ? (
            <li>
              <a
                href="/"
                className={cn(
                  "p-6 text-xl  cursor-pointer flex lg:p-4 lg:hover:bg-inherit transition-colors duration-700 ease-in",
                  dark ? "bg-black text-white lg:hover:bg-black" : ""
                )}
              >
                Home
              </a>
            </li>
          ) : (
            ""
          )}
          {showCTA ? (
            <li>
              <a
                href="/easy-book"
                // href="/apply?disableFirstBlock"
                className=" p-3 sm:p-6  text-xl wrap-no text-white lg:bg-green-700 text-center  cursor-pointer rounded-xl flex lg:p-4 lg:hover:p-4 bg-green-800 hover:bg-green-800 transition-colors duration-000 ease-in"
              >
                Schedule Demo
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </div>
  );
}
export default NavFunnel;
