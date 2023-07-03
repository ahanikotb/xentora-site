import React from "react";
import { Loader2 } from "lucide-react";

function Nav() {
  return (
    <div>
      <div className="mx-auto sm:hidden w-[150px] sm:w-[200px] h-[8vh] text-black font-bold flex items-center justify-center">
        <a href="/">
          <img src="/xentora_logo.png" />
        </a>
      </div>
      <nav className="hidden sm:flex justify-between items-center relative py-3 lg:px-20 px-5 text-white mx-auto">
        <input
          // checked={checked}
          // onClick={() => {
          //   setChecked((c) => !c);
          // }}
          type="checkbox"
          id="Navbar-2-checkbox"
          className="hidden peer"
        />
        <div className="w-[150px] sm:w-[200px] h-[8vh] text-black font-bold flex items-center justify-center">
          <a href="/">
            <img src="/xentora_logo.png" />
          </a>
        </div>
        <ul className="lg:flex lg:translate-x-0 lg:peer-checked:static absolute hidden lg:static  lg:basis-/5 justify-evenly font-bold peer-checked:block top-[88px] transition-transform duration-0 left-0 right-0  bg-black lg:bg-transparent">
          <li>
            <a
              href="#casestudies"
              className="p-6 text-xl  cursor-pointer flex lg:p-4 lg:hover:bg-inherit hover:bg-gray-500 transition-colors duration-700 ease-in"
            >
              Case Studies
              {/* AI TOOLS 🚀 */}
            </a>
          </li>
          <li>
            <a
              href="#ourprocess"
              className="p-6 text-xl  cursor-pointer flex lg:p-4 lg:hover:bg-inherit hover:bg-gray-500 transition-colors duration-700 ease-in"
            >
              Our Process
              {/* AI TOOLS 🚀 */}
            </a>
          </li>
          {/* <li>
          <a
            href="/learn"
            className="p-6 text-2xl sm:hover:text-green-300  cursor-pointer flex lg:p-4 lg:hover:bg-inherit hover:bg-gray-500 transition-colors duration-700 ease-in"
          >
            LEARN
          </a>
        </li> */}
          <li>
            <a
              href="/apply?disableFirstBlock"
              className=" p-6 sm:px-20 text-xl wrap-no  lg:bg-green-700 sm:text-center cursor-pointer lg:rounded-xl flex lg:p-4 lg:hover:p-4 hover:bg-green-800 transition-colors duration-000 ease-in"
            >
              Get Started
            </a>
          </li>
        </ul>
        <label
          htmlFor="Navbar-2-checkbox"
          className="lg:hidden w-10 h-1 relative rounded-full bg-transparent after:w-8 after:h-1 after:rounded-full after:bg-white before:w-8 before:h-1 before:rounded-full before:bg-white after:absolute after:top-1.5 before:-top-1.5 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent"
        ></label>
      </nav>
    </div>
  );
}
export default Nav;
