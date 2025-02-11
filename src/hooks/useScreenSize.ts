import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    screenSize,
    isMobile: screenSize < 768,
    isTablet: screenSize >= 768 && screenSize <= 1024,
    isDesktop: screenSize > 1024,
  };
};

export default useScreenSize;
