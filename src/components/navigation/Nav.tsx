import React, { useEffect, useState } from "react";
import SupremeLogo from "../../assets/img/logo/supreme.png";
import SupremeWhiteLogo from "../../assets/img/logo/supreme-white.png";
import { Link } from "react-router-dom";
import classNames from "classnames";

const navItems = [
  { to: "/esg", label: "點亮永續" },
  { to: "/society", label: "社會共榮" },
  { to: "/enterprise", label: "幸福企業" },
  { to: "/sustainability", label: "永續經營" },
  { to: "/symbiosis", label: "永續共生" },
];

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        "container shadow-md rounded-full flex justify-between items-center px-8 fixed mt-8 left-1/2 transform -translate-x-1/2 z-50 transition-colors duration-300",
        {
          "bg-white text-black": !scrolled,
          "bg-orange text-white": scrolled,
        }
      )}
    >
      <div className="flex-shrink-0">
        <div className="flex gap-6">
          <a href="http://www.supreme.com.tw" target="_blank" rel="noreferrer">
            <img
              src={scrolled ? SupremeWhiteLogo : SupremeLogo}
              alt="Supreme"
              className={classNames("w-[160px]", {
                "": !scrolled,
                "pt-1": scrolled,
              })}
            />
          </a>
          <Link
            to="/"
            className={classNames("text-[18px] border-l-[1px] pl-4", {
              "border-black": !scrolled,
              "border-white": scrolled,
            })}
          >
            企業永續
          </Link>
        </div>
      </div>

      <div className="flex-grow text-center py-[20px] text-[16px] tracking-wider">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={classNames(
              "mx-2 border-b-[4px] border-transparent px-4 py-[17px] duration-300",
              {
                "hover:border-orange": !scrolled,
                "hover:border-white": scrolled,
              }
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex-shrink-0">
        <div className="flex gap-6 items-center">
          <p className="text-[16px] font-light">簡&nbsp; |&nbsp; EN</p>
          <a
            href="/download"
            className={classNames(
              "py-2 px-5 rounded-full text-[14px] duration-300",
              {
                "bg-orange text-white hover:bg-[#ff5a00]": !scrolled,
                "bg-white text-black hover:scale-[1.05]": scrolled,
              }
            )}
          >
            永續報告書下載
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
