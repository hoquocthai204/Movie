import React, { useEffect, useState } from "react";
import scrollTopIcon from "../../assets/top-arrow-icon.jpg";

const ScrollTopComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isTop = currentScrollPos < 200;

      setIsVisible(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="scroll-top-btn"
      style={{
        transform: isVisible ? "scale(1)" : "scale(0)",
      }}
    >
      <img src={scrollTopIcon} alt="" />
    </button>
  );
};

export default ScrollTopComponent;
