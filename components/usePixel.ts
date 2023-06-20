import { useEffect, useState } from "react";

export const usePixel = () => {
  const [pixel, setPixel] = useState<typeof import("react-facebook-pixel")>();
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("281609857695148");
        ReactPixel.pageView();

        setPixel(ReactPixel);
      });
  }, []);

  return pixel;
};
