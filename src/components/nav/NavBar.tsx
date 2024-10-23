import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowDownToLine,
  faBars,
  faCross,
  faXmark,
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

interface DropdownMenuProps {
  items: NavItem[];
  onLinkClick: () => void; 
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onLinkClick }) => {
  const { t } = useTranslation();

  // Recursive function to render the dropdown items
  const renderNavItems = (items: NavItem[]) => {
    return items.map((item, index) => (
      <div key={index} className="flex flex-col py-">
        {item.dropdown || item.children ? (
          <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title peer-checked:bg-orange duration-300 rounded-xl peer-checked:text-white">
              {t(item.title)}
            </div>
            <div className="collapse-content">
              {renderNavItems(item.dropdown || item.children || [])}
            </div>
          </div>
        ) : (
          <Link className="p-[1rem]" to={item.link} onClick={onLinkClick}>
            {t(item.title)}
          </Link>
        )}
      </div>
    ));
  };

  return <>{renderNavItems(items)}</>;
};

const NavBar: React.FC<NavbarProps> = ({ items }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const drawerCheckboxRef = useRef<HTMLInputElement>(null);

  // Function to close the drawer
  const closeDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false; // Uncheck the checkbox to close the drawer
    }
  };


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
            <div className="flex gap-4 py-6">
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

          <div className="xl:flex justify-center hidden">
            <div className="nav-links">
              <ul>
                {items.map((item, index) => (
                  <NavItemComponent key={index} item={item} />
                ))}
              </ul>
            </div>
          </div>

          <div className="items-center hidden xl:flex">
            <div className="flex gap-6 items-center">
              <label className="swap text-gray-400 font-light">
                <input
                  type="checkbox"
                  checked={isEnglish}
                  onChange={handleLanguageChange}
                />
                <div className="swap-on font-tc">繁中</div>
                <div className="swap-off font-en">EN</div>
              </label>

              <Link to="/download">
                <button className="px-4 py-2 rounded-full duration-300 bg-white border text-sm border-orange text-orange relative z-30 hover:bg-orange hover:text-white">
                  {t("common.downloadPage")}
                  <FontAwesomeIcon icon={faArrowDownToLine} className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div className="xl:hidden">
            <label htmlFor="my-drawer" className="drawer-button">
              <FontAwesomeIcon
                icon={faBars}
                className="text-2xl text-gray-500"
              />
            </label>
          </div>
        </div>
      </Container>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={drawerCheckboxRef} />
        <div className="drawer-content"></div>
        <div className="drawer-side ">
          <ul className="menu bg-white text-base-content min-h-full w-full">
            <Container>
              <div className="flex justify-end py-3">
                <label htmlFor="my-drawer" aria-label="close sidebar">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-3xl text-gray-500"
                  />
                </label>
              </div>
              <div className="flex justify-end my-3">
              <label className="swap text-gray-400 font-light text-[1rem]">
                <input
                  type="checkbox"
                  checked={isEnglish}
                  onChange={handleLanguageChange}
                />
                <div className="swap-on font-tc text-right">繁中</div>
                <div className="swap-off font-en text-right">EN</div>
              </label>
              </div>

              <div className="divider"></div>

              <DropdownMenu items={items} onLinkClick={closeDrawer} />

              <Link to="/download"  onClick={closeDrawer}>
                <button className="w-full mt-4 px-4 py-2 rounded-full duration-300 bg-white border text-sm border-orange text-orange relative z-30 hover:bg-orange hover:text-white">
                  {t("common.downloadPage")}
                  <FontAwesomeIcon icon={faArrowDownToLine} className="ml-2" />
                </button>
              </Link>
            </Container>
          </ul>
        </div>
      </div>
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
                          <Link className='p-[1rem]' to={childItem.link}>{t(childItem.title)}</Link>
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
