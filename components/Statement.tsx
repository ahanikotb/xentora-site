import React from "react";

function Statement() {
  return (
    <div className="w-full text-white text-start mb-20  ">
      <h1 className="text-4xl sm:text-7xl font-black text-white text-center mt-10 mb-10">
        Marketing That Pays For Itself.
        {/* Marketing That Pays For Itself. */}
      </h1>
      {/* Marketing That Pays For Itself.
      <br /> */}
      <br />
      {/* <p className="leading-[6rem] text-5xl w-[80vw] mx-auto">
        Marketing That Pays For Itself.
      </p> */}
      <br />
      <div className="grid  grid-cols-1 sm:grid-cols-2 ">
        <div className="order-2 sm:order-1 leading-[3rem] text-2xl sm:w-[40vw] w-[80vw] mx-[10vw] mb-0">
          <p>
            "I was successfull in many industries, <br />
            but I was always frustrated with not being able to get more business
            when the refferals and opportunities slowed down,
            <br /> i was getting nowhere near my goals for my business when i
            wanted to find out how to get clients."
          </p>{" "}
          <p>
            It used to seriously trouble me. I was always worried about where my
            next client was coming from. so after researching everything i could
            i got started with COLD EMAILING. a way to message business owners
            you and get them to book a call with you to discuss business. then i
            discovered you can show them a video before they book a call with
            you so they can get to know you and your business. and be presold
            before ever talking to you.
          </p>
        </div>
        <img
          src="/xentora_logo.png"
          className="order-1 sm:order-2 w-[1/4] h-[100px] mx-auto"
        ></img>
      </div>
    </div>
  );
}

export default Statement;
