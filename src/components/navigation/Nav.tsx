import React from "react";
import SupremeLogo from "../../assets/img/logo/supreme.png";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div className="bg-white container shadow-md rounded-full flex justify-between items-center px-8 fixed mt-8 left-[50%] -translate-x-[50%] z-50">
      <div className="flex-shrink-0">
        <div className="flex gap-6">
          <a href="http://www.supreme.com.tw" target="_blank" rel="noreferrer">
            <img src={SupremeLogo} alt="Supreme" className="w-[160px]" />
          </a>
          <Link
            to="/"
            className=" text-[18px] border-l-[1px] border-black pl-4"
          >
            企業永續
          </Link>
        </div>
      </div>

      <div className="flex-grow text-center py-[20px] text-[16px] text-gray tracking-wider">
        <Link
          to="/sustainability"
          className="mx-4 border-b-[4px] border-transparent px-4 py-[17px] duration-300 hover:border-orange"
        >
          點亮永續
        </Link>
        <Link
          to="/social-inclusion"
          className="mx-4 border-b-[4px] border-transparent px-4 py-[17px] duration-300 hover:border-orange"
        >
          社會共榮
        </Link>
        <Link
          to="/enterprise"
          className="mx-4 border-b-[4px] border-transparent px-4 py-[17px] duration-300 hover:border-orange"
        >
          幸福企業
        </Link>
        <Link
          to="/operate"
          className="mx-4 border-b-[4px] border-transparent px-4 py-[17px] duration-300 hover:border-orange"
        >
          永續經營
        </Link>
        <Link
          to="/symbiosis"
          className="mx-4 border-b-[4px] border-transparent px-4 py-[17px] duration-300 hover:border-orange"
        >
          永續共生
        </Link>
      </div>

      <div className="flex-shrink-0">
        <div className="flex gap-6 items-center">
          <p className="text-[16px] font-light">簡&nbsp; |&nbsp; EN</p>
          <a
            href="/download"
            className="bg-orange text-white py-2 px-5 rounded-full text-[14px] duration-300 hover:bg-[#ff5a00]"
          >
            永續報告書下載
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
