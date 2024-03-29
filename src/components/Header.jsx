import React, { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import logo from "../assets/infi_movie.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo" onClick={handleScrollTop}>
          <img src={logo} alt="" />
          <Link to="/">InfiMovie</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li
              key={i}
              className={`${i === active ? "active" : ""}`}
              onClick={handleScrollTop}
            >
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
