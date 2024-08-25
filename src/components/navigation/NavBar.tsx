import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SupremeLogo from "../../assets/img/logo/supreme.png";
import './nav.css'

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
    <header className='fixed w-full shadow-xl z-50 duration-300 transform py-2 bg-white text-[#555555]'>
      <div className='flex'>
        <div className='items-center flex flex-1 pl-12'>
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


          <div className="flex items-center pr-4 pl-8">
            <div className="flex gap-6 items-center">
              <p className="text-[16px] font-light">簡&nbsp; |&nbsp; EN</p>
              <a
                href="/download"
                className=
                  "py-2 px-5 rounded-full text-[14px] duration-300 bg-orange text-white hover:bg-[#ff5a00]"
              >
                永續報告書下載
              </a>
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
        <Link to={item.link} className='flex justify-between items-center'>
          {item.title}
          {item.children && (
            <FontAwesomeIcon
              icon={faAngleRight}
              className='ml-2 text-sm text-gray-600'
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
