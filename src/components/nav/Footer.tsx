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
              <div className="group hover:shadow-xl cursor-pointer  flex text-lg tracking-wide items-center pl-5 py-2 pr-2 bg-white bg-opacity-20 overflow-hidden text-white rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
                利害關係人問卷
                <div className="ml-6 bg-white h-[35px] w-[35px] rounded-full flex items-center justify-center text-orange-400 duration-300 group-hover:ml-8 group-hover:bg-orange-400 group-hover:text-white">
                  <FontAwesomeIcon
                    icon={faClipboardListCheck}
                    className="transform transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="group hover:shadow-xl cursor-pointer  flex text-lg tracking-wide items-center pl-5 py-2 pr-2 bg-white bg-opacity-20 overflow-hidden text-white rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
                永續報告書下載
                <div className="ml-6 bg-white h-[35px] w-[35px] rounded-full flex items-center justify-center text-orange-400 duration-300 group-hover:ml-8 group-hover:bg-orange-400 group-hover:text-white">
                  <FontAwesomeIcon
                    icon={faCloudArrowDown}
                    className="transform transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white my-10 bg-opacity-50"></div>

          <div className="flex gap-24 tracking-wide">
            <div className="flex flex-col gap-4 ">
              <p className="font-bold text-xl cursor-pointer">最新動態</p>
              <p className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                永續專欄特別報導
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                精選故事
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                永續消息
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <p className="font-bold text-xl cursor-pointer">幸福企業</p>
              <p className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                友善職場
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                員工政策
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                人才培育
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                人力資源分布
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <p className="font-bold text-xl cursor-pointer">永續經營</p>
              <p className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                經營者的話
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                功能性委員會
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                利害關係人專區
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                科技風險
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                永續供應鏈
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <p className="font-bold text-xl cursor-pointer">永續共生</p>
              <p className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                氣候變遷對策
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                溫室氣體 & 行動方案
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                綠能低碳計畫
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                能源管理
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                廢棄物管理
              </p>
              <p className="opacity-70 duration-300 hover:opacity-100 cursor-pointer">
                水資源管理
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#224952] text-white text-center text-xs py-8 tracking-wide">
        {" "}
        © 2024 Supreme Electronics Co., Ltd.. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
