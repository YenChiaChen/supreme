import React from "react";
import SupremeLogo from "../../assets/img/logo/supreme-white.png";
import { Container } from "../ui/Container";
import { Link } from "react-router-dom";
import {
  faClipboardListCheck,
  faCloudArrowDown,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <>      <div>
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
    <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g className="parallax">
    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(76,133,145,0.7" />
    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(76,133,145,0.5)" />
    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(76,133,145,0.3)" />
    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#4C8591" />
    </g>
    </svg>
    </div>
      <div className="w-full bg-lake  py-20  text-white ">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <img src={SupremeLogo} alt="Supreme Logo" className="w-[230px]" />
              <div className="w-[1px] h-full bg-gray-300">&nbsp;</div>
              <Link to="/">
                <p className="font-en">ESG</p>
              </Link>
            </div>
            <div className="flex gap-6  tracking-wide text-lg">

            <Link to='/sustainability/survey'>
              <div className="group hover:shadow-xl cursor-pointer  flex text-lg tracking-wide items-center pl-5 py-2 pr-2 bg-white bg-opacity-20 overflow-hidden text-white rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
                利害關係人問卷
                <div className="ml-6 bg-white h-[35px] w-[35px] rounded-full flex items-center justify-center text-orange-400 duration-300 group-hover:ml-8 group-hover:bg-orange-400 group-hover:text-white">
                  <FontAwesomeIcon
                    icon={faClipboardListCheck}
                    className="transform transition-transform duration-500"
                  />
                </div>
              </div>
              </Link>
              <Link to='http://www.supreme.com.tw/File/ESG/2023ESG%E6%B0%B8%E7%BA%8C%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf' target="_blank">
              <div className="group hover:shadow-xl cursor-pointer  flex text-lg tracking-wide items-center pl-5 py-2 pr-2 bg-white bg-opacity-20 overflow-hidden text-white rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
                永續報告書下載
                <div className="ml-6 bg-white h-[35px] w-[35px] rounded-full flex items-center justify-center text-orange-400 duration-300 group-hover:ml-8 group-hover:bg-orange-400 group-hover:text-white">
                  <FontAwesomeIcon
                    icon={faCloudArrowDown}
                    className="transform transition-transform duration-500"
                  />
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white my-10 bg-opacity-50"></div>

          <div className="flex gap-24 tracking-wide">
            <div className="flex flex-col gap-4 ">
              <Link to={"/news"} className="font-bold text-xl cursor-pointer">最新動態</Link>
              <Link to={"/news?category=精選故事"}  className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                永續專欄特別報導
              </Link>
              <Link to={"/news?category=永續專欄特別報導"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                精選故事
              </Link>
              <Link to={"/news?category=永續消息"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                永續消息
              </Link>
            </div>
            <div className="flex flex-col gap-4 ">
              <Link to={"/enterprise"} className="font-bold text-xl cursor-pointer">幸福企業</Link>
              <Link to={"/enterprise/occupational-safety"} className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                友善職場
              </Link>
              <Link to={"/enterprise/welfare-care"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                員工政策
              </Link>
              <Link to={"/enterprise/diverse-growth"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                人才培育
              </Link>
              <Link to={"/enterprise/hr-distribution"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                人力資源分布
              </Link>
            </div>
            <div className="flex flex-col gap-4 ">
              <Link to={"/sustainability"} className="font-bold text-xl cursor-pointer">永續經營</Link>
              <Link to={"/sustainability/message-from-chairman"} className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                經營者的話
              </Link>
              <Link to={"/sustainability/compensation-committee"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                功能性委員會
              </Link>
              <Link to={"/sustainability/stakeholder-engagement"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                利害關係人專區
              </Link>
              <Link to={"/sustainability/intellectual-property"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                科技風險
              </Link>
              <Link to={"/sustainability/supply-chain"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                永續供應鏈
              </Link>
            </div>
            <div className="flex flex-col gap-4 ">
              <Link to={"/symbiosis"} className="font-bold text-xl cursor-pointer">永續共生</Link>
              <Link to={"/symbiosis/climate-change"} className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                氣候變遷對策
              </Link>
              <Link to={"/symbiosis/greenhouse-gases"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                溫室氣體 & 行動方案
              </Link>
              <Link to={"/symbiosis/green-energy"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                綠能低碳計畫
              </Link>
              <Link to={"/symbiosis/energy-management"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                能源管理
              </Link>
              <Link to={"/symbiosis/waste-management"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                廢棄物管理
              </Link>
              <Link to={"/symbiosis/water-management"} className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                水資源管理
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#224952] text-white text-center text-xs py-8 tracking-wide">
        © 2024 Supreme Electronics Co., Ltd.. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
