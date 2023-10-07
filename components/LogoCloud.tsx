import Image from "next/image";
function LogoCloud() {
  const width = "316"; // "158";
  const height = "96"; //"48";
  const imageStyles = {
    width: "100%", // Set the width to 100% to make the logos expand to their container's width
    height: "auto", // Let the height adjust proportionally based on the width
    // You can add other styles here if needed
  };
  return (
    <div className="  text-black">
      {/* <h2 className="text-center sm:text-2xl font-semibold leading-8 text-gray-900">
        Cross Platform Ads For Realtors
      </h2> */}

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* <h2 className="text-center sm:text-2xl font-semibold leading-8 text-gray-900">
          Cross Platform Ads For Realtors
        </h2> */}

        <div className="mx-auto mt-10 grid  grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <Image
            className="col-span-1 w-full object-contain"
            src="/logocloud/1.png"
            alt="We Run Tiktok Ads"
            width={width}
            height={height}
            style={imageStyles}
            // style={{ filter: "brightness(0) invert(1)" }}
          />
          <Image
            className="col-span-1  w-full object-contain "
            src="/logocloud/2.png"
            alt="We Run Google Ads"
            width={width}
            style={imageStyles}
            height={height}
            // style={{ filter: "brightness(0) invert(1)" }}
          />
          <Image
            className="col-span-1 w-full object-contain"
            src="/logocloud/3.png"
            alt="We Run Facebook / Meta Ads"
            width={width}
            style={imageStyles}
            height={height}
            // style={{ filter: "brightness(0) invert(1)" }}
          />
          <Image
            className="col-span-1  w-full object-contain "
            src="/logocloud/4.png"
            alt="We Run Youtube Ads"
            width={width}
            style={imageStyles}
            height={height}
            // style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoCloud;
