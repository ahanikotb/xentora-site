import { cn } from "@/lib/utils";
import React, { useState } from "react";

function ImageWithCaption({ src, alt, caption, className }: any) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const imageClassName = isFullScreen ? "fullscreen-image" : className;

  return (
    <div
      onClick={toggleFullScreen}
      className={cn(
        ` flex flex-col-reverse  justify-center ${
          isFullScreen
            ? "fixed inset-0 z-50 bg-black flex-col-reverse sm:flex-col-reverse"
            : ""
        }`,
        className
      )}
    >
      <h3
        className={cn(
          "text-white text-start text-xs sm:text-lg font-medium",
          isFullScreen ? "text-center" : ""
        )}
      >
        {caption}
      </h3>

      <img
        src={src}
        className={cn(
          "hover:cursor-zoom-in",
          imageClassName,
          isFullScreen
            ? "object-contain w-full h-full hover:cursor-zoom-out"
            : ""
        )}
        alt={alt}
      />
      {isFullScreen && (
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleFullScreen}
        >
          Exit Fullscreen
        </button>
      )}
    </div>
  );
}

export default ImageWithCaption;
