import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const windowResizeCallback = () =>
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  const cancelWindowResizeListner = () =>
    window.removeEventListener("resize", windowResizeCallback);
  useEffect(() => {
    window.addEventListener("resize", windowResizeCallback);
    return cancelWindowResizeListner;
  });
  return windowDimensions;
};
