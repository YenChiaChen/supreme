import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SupremeLogo from "../../assets/img/logo/supreme.png";
import './nav.css'
import { faArrowDownToLine } from '@fortawesome/pro-solid-svg-icons';

type NavItem = {
  title: string;
  link: string;
  dropdown?: NavItem[];
  children?: NavItem[];
};

type NavbarProps = {
  items: NavItem[];
};

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <header className='fixed w-full shadow-xl px-24 z-50 duration-300 transform py-2 bg-white text-[#555555]'>
      <div className='flex'>
        <div className='items-center flex flex-1'>
          <div className='flex gap-6'>
            <a href='http://www.supreme.com.tw' target='_blank' rel='noreferrer'>
              <img src={SupremeLogo} alt='Supreme' className='w-[160px]' />
            </a>
          </div>
        </div>
        <div className='hidden xl:flex justify-center'>
          <div className='nav-links'>
            <ul>
              {items.map((item, index) => (
                <NavItemComponent key={index} item={item} />
              ))}
            </ul>
          </div>


          <div className="flex items-center pl-8">
            <div className="flex gap-6 items-center">
            <button className="!py-2 !px-5  text-[14px] duration-300 bg-white border border-orange text-orange  relative z-30 hover:bg-orange duration-300 hover:text-white">
                   永續報告書下載
                    <FontAwesomeIcon icon={faArrowDownToLine} className="ml-2" />
                </button>
              <p className="text-[16px] font-light text-[#555555]">繁體中文</p>
           
            </div>
          </div>
        </div>

    
      </div>
    </header>
  );
};

const NavItemComponent: React.FC<{ item: NavItem }> = ({ item }) => {
    return (
      <li className='nav-link'>
        <Link to={item.link} className='flex justify-between items-center hover:bg-gray'>
          {item.title}
          {item.children && (
            <FontAwesomeIcon
              icon={faAngleRight}
              className='ml-2 text-sm text-orange'
            />
          )}
        </Link>
        {item.dropdown && (
          <div className='dropdown'>
            <ul>
              {item.dropdown.map((dropdownItem, index) => (
                <li key={index} className='dropdown-link bg-white'>
                  <NavItemComponent item={dropdownItem} />
                  {dropdownItem.children && (
                    <div className='dropdown second'>
                      <ul>
                        {dropdownItem.children.map((childItem, index) => (
                          <li key={index} className='dropdown-link'>
                            <Link to={childItem.link}>{childItem.title}</Link>
                          </li>
                        ))}
                        <div className='arrow'></div>
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              <div className='arrow'></div>
            </ul>
          </div>
        )}
      </li>
    );
  };

export default Navbar;
