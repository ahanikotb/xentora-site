import Nav from "@/components/Nav";
import React from "react";

function page() {
  return (
    <div>
      <Nav />
      <div className="grid sm:grid-cols-2 my-10 w-[80%] mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Contact</h1>
          <h3 className="">
            To get in touch with someone from our company, please contact the
            official representative,We look forward to hearing from you!
          </h3>
        </div>
        <div className="space-y-6 my-10 sm:my-20 sm:mx-auto">
          {" "}
          <h3 className="">
            <span className="font-bold text-xl">
              {" "}
              Xentora LLC Official Representative
            </span>
          </h3>
          <h3 className="">
            <span className="font-bold"> Contact Name :</span> Ahmed Kotb
          </h3>
          <h3 className=" ">
            {" "}
            <span className="font-bold"> Contact Address :</span> 5 street 63
            Mokkatam, 11571
          </h3>
          <h3 className=" ">
            {" "}
            <span className="font-bold"> Contact Phone :</span> +201113111149
          </h3>
          <h3 className=" ">
            {" "}
            <span className="font-bold"> Contact Email :</span>{" "}
            ahmed@xentora.com
          </h3>
        </div>
      </div>
    </div>
  );
}

export default page;
