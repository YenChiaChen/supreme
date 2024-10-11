import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowDownToLine,
} from "@fortawesome/pro-solid-svg-icons";
import SupremeLogo from "../../assets/img/logo/supreme.png";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import { Container } from "../ui/Container";

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
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false);
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsEnglish(checked);
    const language = checked ? "en" : "zh_TW";
    i18n.changeLanguage(language);
  };
  return (
    <header
      className={`w-full fixed z-50 left-0 top-0 shadow-xl duration-300 transform bg-white text-[#555555]  ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <Container>
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
              <p className="">{t("common.esgSupreme")}</p>
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
            <label className="swap text-gray-400">
              <input
                type="checkbox"
                checked={isEnglish}
                onChange={handleLanguageChange}
              />
              <div className="swap-on font-tc">繁體中文</div>
              <div className="swap-off font-en">EN</div>
            </label>

            <Link to='http://www.supreme.com.tw/File/ESG/2023ESG%E6%B0%B8%E7%BA%8C%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf' target="_blank">
            <button className="px-4 py-2 rounded-full duration-300 bg-white border text-sm border-orange text-orange relative z-30 hover:bg-orange hover:text-white">
              {t("common.esgReportDownload")}
              <FontAwesomeIcon icon={faArrowDownToLine} className="ml-2" />
            </button>
            </Link>
          </div>
        </div>
      </div>
      </Container>
    </header>
  );
};

const NavItemComponent: React.FC<{ item: NavItem }> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <li className="nav-link">
      <Link
        to={item.link}
        className="flex justify-between items-center hover:bg-gray border-y-[3px] border-transparent hover:border-b-orange duration-300"
      >
        {t(item.title)}
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
                          <Link to={childItem.link}>{t(childItem.title)}</Link>
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
