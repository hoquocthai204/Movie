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
      style={{
        position: "fixed",
        bottom: "50px",
        width: "50px",
        height: "50px",
        right: "20px",
        color: "red",
        textAlign: "center",
        backgroundColor: "transparent",
        border: "none",
        zIndex: "10",
        display: isVisible ? "block" : "none",
      }}
    >
      <img src={scrollTopIcon} alt="" />
    </button>
  );
};

export default ScrollTopComponent;
