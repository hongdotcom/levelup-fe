import { Breakpoints } from "../Constants/Constants";
import { useEffect, useState } from "react";
export const IsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width < Breakpoints.mobile ? true : false;
};
