import Nav from "@/components/Nav";
import React from "react";
import Image from "next/image";
function page() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col-reverse  sm:flex-row sm:items-center sm:justify-center mx-auto sm:w-[80%]">
        <div className="space-y-10 mx-auto">
          <h1 className="text-4xl sm:text-6xl font-black">Keep On Sailing.</h1>
          <p>The Page You Were Looking For Cannot Be Found.</p>
          <a
            className="text-black text-center underline mx-auto w-[100%]"
            href="/"
          >
            Go Back Home
          </a>
        </div>

        <Image
          className=" w-[70%] sm:w-[600px] my-10 sm:my-0 mx-auto"
          alt="Xentora Captain Page Not Found Illustration"
          width={400}
          height={1000}
          src={"/404.png"}
        ></Image>
      </div>
    </div>
  );
}

export default page;
