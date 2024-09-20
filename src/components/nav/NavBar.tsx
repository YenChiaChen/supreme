import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons";
import SupremeLogo from "../../assets/img/logo/supreme.png";
import "./NavBar.css";
import { faArrowDownToLine } from "@fortawesome/pro-solid-svg-icons";

type NavItem = {
  title: string;
  link: string;
  dropdown?: NavItem[];
  children?: NavItem[];
};

type NavbarProps = {
  items: NavItem[];
};

const NavBar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <header className="fixed w-[90%] top-6 left-1/2 -translate-x-1/2 rounded-full shadow-xl px-8 z-50 duration-300 transform bg-white text-[#555555]">
      <div className="flex items-center justify-between">
        <div className="items-center flex">
          <div className="flex gap-4">
            <a
              href="http://www.supreme.com.tw"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SupremeLogo} alt="Supreme" className="w-[140px]" />
            </a>
            <div className="w-[1px] h-full bg-gray-300">&nbsp;</div>
            <Link to="/">
              <p className="">永續至上</p>
            </Link>
          </div>
        </div>

        <div className="hidden xl:flex justify-center">
          <div className="nav-links">
            <ul>
              {items.map((item, index) => (
                <NavItemComponent key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex gap-6 items-center">
            <button className="px-4  py-2 rounded-full duration-300 bg-white border text-sm border-orange text-orange  relative z-30  hover:bg-orange duration-300 hover:text-white">
              永續報告書下載
              <FontAwesomeIcon icon={faArrowDownToLine} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItemComponent: React.FC<{ item: NavItem }> = ({ item }) => {
  return (
    <li className="nav-link">
      <Link
        to={item.link}
        className="flex justify-between items-center hover:bg-gray border-y-[3px] border-transparent hover:border-b-orange duration-300"
      >
        {item.title}
        {item.children && (
          <FontAwesomeIcon
            icon={faAngleRight}
            className="ml-2 text-sm text-orange"
          />
        )}
      </Link>
      {item.dropdown && (
        <div className="dropdown">
          <ul>
            {item.dropdown.map((dropdownItem, index) => (
              <li key={index} className="dropdown-link bg-white">
                <NavItemComponent item={dropdownItem} />
                {dropdownItem.children && (
                  <div className="dropdown second">
                    <ul>
                      {dropdownItem.children.map((childItem, index) => (
                        <li key={index} className="dropdown-link">
                          <Link to={childItem.link}>{childItem.title}</Link>
                        </li>
                      ))}
                      <div className="arrow"></div>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavBar;
