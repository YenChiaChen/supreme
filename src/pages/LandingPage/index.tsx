import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BuildingImage from "../../assets/img/background/bg_building.png";
import BuildingCardImage from "../../assets/img/background/card_building.png";
import BeachCardImage from "../../assets/img/background/card_beach.png";
import EmployeeCardImage from "../../assets/img/background/card_employee.png";
import { faCloudArrowDown } from "@fortawesome/pro-solid-svg-icons";
import EsgIcon03 from "../../assets/img/icon/ESG-03.png";
import EsgIcon04 from "../../assets/img/icon/ESG-04.png";
import EsgIcon05 from "../../assets/img/icon/ESG-05.png";
import EsgIcon10 from "../../assets/img/icon/ESG-10.png";
import EsgIcon08 from "../../assets/img/icon/ESG-08.png";
import EsgIcon12 from "../../assets/img/icon/ESG-12.png";
import EsgIcon17 from "../../assets/img/icon/ESG-17.png";
import EsgIcon13 from "../../assets/img/icon/ESG-13.png";
import EsgIcon14 from "../../assets/img/icon/ESG-14.png";
import EsgIcon15 from "../../assets/img/icon/ESG-15.png";
import { motion } from "framer-motion";
import AOS from "aos";
import PrizeSwiper from "./PrizeSwiper";
import "aos/dist/aos.css";
import Footer from "../../components/nav/Footer";
import {
  faArrowRight,
  faEarthAsia,
  faHandshakeAngle,
  faUserGear,
} from "@fortawesome/pro-light-svg-icons";
import Navbar from "../../components/nav/NavBar";
import { Container } from "../../components/ui/Container";
import React, { useState, useEffect, useRef } from "react";

import PerformanceCardImage01 from "../../assets/img/background/performanceCard_01.png";
import PerformanceCardImage02 from "../../assets/img/background/performanceCard_02.png";
import PerformanceCardImage03 from "../../assets/img/background/performanceCard_03.png";
import PerformanceCardImage04 from "../../assets/img/background/performanceCard_04.png";
import TopicHighlightsSection from "./TopicHighlightsSection";


const LandingPage: React.FC = () => {
  const [activeDiv, setActiveDiv] = useState<string>("performanceCard01");
  const performanceCard01Ref = useRef<HTMLDivElement>(null);
  const performanceCard02Ref = useRef<HTMLDivElement>(null);
  const performanceCard03Ref = useRef<HTMLDivElement>(null);
  const performanceCard04Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveDiv(entry.target.id);
          console.log(entry.target.id);
        }
      });
    }, options);

    if (performanceCard01Ref.current)
      observer.observe(performanceCard01Ref.current);
    if (performanceCard02Ref.current)
      observer.observe(performanceCard02Ref.current);
    if (performanceCard03Ref.current)
      observer.observe(performanceCard03Ref.current);
    if (performanceCard04Ref.current)
      observer.observe(performanceCard04Ref.current);

    return () => {
      if (performanceCard01Ref.current)
        observer.unobserve(performanceCard01Ref.current);
      if (performanceCard02Ref.current)
        observer.unobserve(performanceCard02Ref.current);
      if (performanceCard03Ref.current)
        observer.unobserve(performanceCard03Ref.current);
      if (performanceCard04Ref.current)
        observer.unobserve(performanceCard04Ref.current);
    };
  }, []);

  const getPerformanceTitle = () => {
    switch (activeDiv) {
      case "performanceCard01":
        return "治理/經濟";
      case "performanceCard02":
        return "環境";
      case "performanceCard03":
        return "社會/員工";
      case "performanceCard04":
        return "產品/服務";
      default:
        return "治理/經濟";
    }
  };

  const images = [
    PerformanceCardImage01,
    PerformanceCardImage02,
    PerformanceCardImage03,
    PerformanceCardImage04,
  ];

  const getOpacity = (imageIndex: number) => {
    return activeDiv === `performanceCard0${imageIndex + 1}` ? 1 : 0;
  };

  return (
    <>
      <div
        className="relative w-full h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${BuildingImage})` }}
      >
        {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={BuildingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        {/* 
        <img
          src={BuildingImage}
          className="absolute top-0 left-0 w-full h-full object-cover"
        /> */}

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white mt-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4  tracking-wide">
            永續至上，共展未來
          </h1>

          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 text-md md:text-2xl font-en tracking-wide mt-4">
              Make the world better.
            </h1>
          </div>

          <div className="group hover:shadow-xl cursor-pointer  flex text-lg tracking-wide items-center pl-5 py-2 pr-2 mt-8 bg-white bg-opacity-20 overflow-hidden text-white rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
            永續報告書下載
            <div className="ml-6 bg-white h-[40px] w-[40px] rounded-full flex items-center justify-center text-orange-400 duration-300 group-hover:ml-8 group-hover:bg-orange-400 group-hover:text-white">
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                className="transform transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
      </div>

      <Container className="py-36">
        <p className="text-3xl  font-semibold text-lake text-center">
          2025年永續目標
        </p>
        <p className="text-gray-400 font-en text-center mt-1 font-light">
          Strategy
        </p>

        <div className="flex gap-6 mt-8 justify-between">
          <div
            className="group bg-black w-[33%] rounded-[2rem] hover:w-[80%] h-[450px] duration-300 bg-cover bg-center bg-no-repeat relative overflow-hidden p-4 "
            style={{ backgroundImage: `url(${BeachCardImage})` }}
          >
            <div className="z-10 w-full h-full relative flex flex-col items-start rounded-[1.8rem] p-10 text-white relative">
              <FontAwesomeIcon
                icon={faEarthAsia}
                className="text-[3.5rem] mt-2"
              />
              <p className="text-3xl font-semibold mt-6">關心在地</p>
              <p className="mt-6 group-hover:opacity-0 group-hover:invisible transition-opacity transition-visibility duration-500 ease-out delay-300 font-light tracking-wider">
                我們致力於守護自然環境，推動綠色轉型，並採取可持續的發展策略，確保資源的永續利用。
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-none duration-500 delay-300 group-hover:delay-300 group-hover:duration-300 group-hover:transition-opacity text-left w-full -mt-[5%] flex justify-between items-end">
                <div className="flex flex-col gap-4 items-start w-full ">
                  <div className="flex items-end gap-4 w-full">
                    <p className="">2022年淨山活動清除：</p>
                    <span className=" font-bold text-3xl text-left">
                      33<span className="ml-4 text-sm">公斤</span>
                    </span>
                  </div>
                  <div className="flex items-end gap-4 w-full">
                    <p className="">執行無紙化政策：</p>
                    <span className=" font-bold text-3xl text-left">
                      e化簽核流程<span className="ml-4 text-sm"></span>
                    </span>
                  </div>
                  <div className="flex items-end gap-4 w-full">
                    <p className="">集團減少用紙量：</p>
                    <span className=" font-bold text-3xl text-left">
                      28.7萬<span className="ml-4 text-sm">張</span>
                    </span>
                  </div>
                </div>

                <div className="absolute flex flex-col gap-2 right-4 bottom-4">
                  <img
                    src={EsgIcon13}
                    className="w-[60px] h-[60px] object-cover"
                  />
                  <img
                    src={EsgIcon14}
                    className="w-[60px] h-[60px] object-cover"
                  />
                  <img
                    src={EsgIcon15}
                    className="w-[60px] h-[60px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 duration-300 group-hover:opacity-60 z-0"></div>
          </div>

          <div
            className="group bg-black w-[33%] rounded-[2rem] hover:w-[80%] h-[450px] duration-300 bg-cover bg-center bg-no-repeat relative overflow-hidden p-4 "
            style={{ backgroundImage: `url(${EmployeeCardImage})` }}
          >
            <div className="z-10 w-full h-full relative flex flex-col items-start rounded-[1.8rem] p-10 text-white relative">
              <FontAwesomeIcon
                icon={faHandshakeAngle}
                className="text-[3.5rem] mt-2"
              />
              <p className="text-3xl font-semibold mt-6">關懷培力</p>
              <p className="mt-6 group-hover:opacity-0 group-hover:invisible transition-opacity transition-visibility duration-500 ease-out delay-300">
                注重員工發展，承諾提供員工持續學習和職業發展的機會，提供多元化培訓課程等以提升員工技能和增進員工價值。
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-none duration-500 delay-300 group-hover:delay-300 group-hover:duration-300 group-hover:transition-opacity text-left w-full -mt-[5%] flex justify-between items-end">
                <div className="flex flex-col gap-4 items-start w-full">
                  <div className="flex items-end gap-4 w-full">
                    <p className="">
                      基層人員平均薪資較最低薪資標準高於：
                    </p>
                    <span className=" font-bold text-3xl text-left">
                      200<span className="ml-4 text-sm">%</span>
                    </span>
                  </div>
                  <div className="flex items-end gap-4 w-full">
                    <p className="">平均調薪：</p>
                    <span className=" font-bold text-3xl text-left">
                      5<span className="ml-4 text-sm">%</span>
                    </span>
                  </div>
                  <div className="flex items-end gap-4 w-full">
                    <p className="">舉辦「勞工健康保護-臨場醫護諮詢」：</p>
                    <span className=" font-bold text-3xl text-left">
                      24<span className="ml-4 text-sm">次</span>
                    </span>
                  </div>
                </div>

                <div className="absolute flex flex-col gap-2 right-4 bottom-4">
                  <img
                    src={EsgIcon03}
                    className="w-[60px] h-[60px] object-cover"
                  />
                  <img
                    src={EsgIcon05}
                    className="w-[60px] h-[60px] object-cover"
                  />
                  <img
                    src={EsgIcon10}
                    className="w-[60px] h-[60px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 duration-300 group-hover:opacity-60 z-0"></div>
          </div>

          <div
            className="group bg-black w-[33%] rounded-[2rem] hover:w-[80%] h-[450px] duration-300 bg-cover bg-center bg-no-repeat relative overflow-hidden p-4 "
            style={{ backgroundImage: `url(${BuildingCardImage})` }}
          >
            <div className="z-10 w-full h-full relative flex flex-col items-start rounded-[1.8rem] p-10 text-white relative">
              <FontAwesomeIcon
                icon={faUserGear}
                className="text-[3.5rem] mt-2"
              />
              <p className="text-3xl font-semibold mt-6">關注根基</p>
              <p className="mt-6 group-hover:opacity-0 group-hover:invisible transition-opacity transition-visibility duration-500 ease-out delay-300">
                落實風險管理，謹慎評估市場與產業狀況，靈活的投資策略，確保年度經濟績效提升，穩定公司營運根基。
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-none duration-500 delay-300 group-hover:delay-300 group-hover:duration-300 group-hover:transition-opacity text-left w-full -mt-[5%] flex justify-between items-end">
                <div className="flex flex-col gap-4 items-start w-full">
                  <div className="flex items-end gap-4 w-full">
                    <p className="">第九屆公司治理評鑑上市公司排名：</p>
                    <span className=" font-bold text-3xl text-left">
                      6~20<span className="ml-4 text-sm">%</span>
                    </span>
                  </div>
                  <div className="flex items-end gap-4 w-full">
                    <p className="">誠信經營教育訓練達：</p>
                    <span className=" font-bold text-3xl text-left">
                      62<span className="ml-4 text-sm">小時</span>
                    </span>
                  </div>
                  <div className="flex items-end gap-4 w-full">
                    <p className="">董事會内部自評平均達成率：</p>
                    <span className=" font-bold text-3xl text-left">
                      94<span className="ml-4 text-sm">%</span>
                    </span>
                  </div>
                </div>

                <div className="absolute flex flex-col gap-2 right-4 bottom-4">
                  <img
                    src={EsgIcon08}
                    className="w-[60px] h-[60px] object-cover"
                  />
                  <img
                    src={EsgIcon12}
                    className="w-[60px] h-[60px] object-cover"
                  />
                  <img
                    src={EsgIcon17}
                    className="w-[60px] h-[60px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 duration-300 group-hover:opacity-60 z-0"></div>
          </div>
        </div>
      </Container>

      <div className="bg-[#F1F1F1]">
        <Container className="py-32">
          <div className="grid grid-cols-11 ">
            <div className="col-span-3 flex flex-col justify-between">
              <div>
                <p className="text-3xl  font-semibold text-lake">
                  焦點故事
                </p>
                <p className="text-gray-400 font-en mt-1 font-light">Story</p>
              </div>
              <div className="bg-white rounded-[1.5rem] w-[110%] z-10 p-8 text-xl font-semibold shadow-lg">
                至上電子 × <br />
                國立臺灣師範大學
              </div>
            </div>
            <div className="col-span-8">
              <p className="text-xl font-semibold">
                「動手做STEAM多元智能晨光時間」計畫
              </p>
              <div className="h-[400px] bg-gray-200 rounded-[2rem] mt-8 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dyzplfS4FIQ?controls=1&rel=0"
                  title="長安仿生獸工作坊 記者會"
                  allow="encrypted-media;"
                ></iframe>
              </div>
            </div>
            <div className="col-span-3">&nbsp;</div>
            <div className="col-span-8 mt-6 font-light tracking-wide">
              本公司與國立臺灣師範大學科技應用與人力資源發展學系攜手合作，展開「動手做STEAM多元智能晨光時間」。本計畫由臺師大科技系的蔡其瑞助理教授領導，旨在啟發長安國中特教學生發展多元智能，提升其自我肯定，促進社交技巧，同時體驗動手做的樂趣。
              <div className="flex justify-end mt-12">
                <div className="bg-orange text-white px-6 py-2 font-en rounded-full flex items-center group cursor-pointer hover-shadow">
                  More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xl ml-2 group-hover:ml-4 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative">
        <div className="absolute top-0 w-full h-full bg-black z-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: getOpacity(index) }}
              transition={{ duration: 1.5 }}
              className="absolute top-0 w-full h-full bg-fixed"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></motion.div>
          ))}
        </div>
        <div className="bg-black opacity-70 absolute top-0 w-full h-full"></div>
        <Container className="py-16">
          <div className="sticky top-[15%]">
            <p className="text-3xl text-white  font-semibold text-white">
              永續亮點績效
            </p>
            <p className="text-white font-en mt-1 font-light">What We Do</p>
          </div>
          <motion.div
            className="sticky top-[90%] mt-[70%]"
            key={activeDiv}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-5xl text-white  font-semibold text-white">
              {getPerformanceTitle()}
            </p>
          </motion.div>
          <div className="grid grid-cols-6 z-10 relative">
            <div className="col-span-2">&nbsp;</div>
            <div
              className="col-span-3 h-fit mt-[250px] p-10 flex flex-col gap-6 "
              ref={performanceCard01Ref}
              id="performanceCard01"
            >
              <div
                className="justify-between flex items-center border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">公司營收新台幣</p>
                <p className="text-2xl font-semibold">787.9億元</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">
                  第九屆公司治理評鑑上市公司排名
                </p>
                <p className="text-2xl font-semibold ">前6~20%</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">
                  董事會内部自評平均達成率
                </p>
                <p className="text-2xl font-semibold ">93.81%</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">董事自評平均達成率</p>
                <p className="text-2xl font-semibold ">95.46%</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">
                  全體董事出席董事會比率達
                </p>
                <p className="text-2xl font-semibold ">100%</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">誠信經營教育訓練達</p>
                <p className="text-2xl font-semibold ">61.5小時</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">董事會通過設置</p>
                <p className="text-2xl font-semibold ">永續發展委員會</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-end pb-9">
              <div
                className="h-fit flex flex-col gap-2"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img
                  src={EsgIcon08}
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={EsgIcon12}
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={EsgIcon17}
                  className="w-[100px] h-[100px] object-cover"
                />
              </div>
            </div>

            <div className="col-span-2">&nbsp;</div>
            <div
              className="col-span-3 h-fit mt-[450px] p-10 flex flex-col gap-6 "
              ref={performanceCard02Ref}
              id="performanceCard02"
            >
              <div
                className="justify-between flex items-center border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">執行無紙化政策</p>
                <p className="text-2xl font-semibold">e化簽核流程</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">執行無紙化政策</p>
                <p className="text-2xl font-semibold ">外部憑證電子化</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">全集團減少用紙量約A4紙</p>
                <p className="text-2xl font-semibold ">287,231張</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">2022淨山活動清除垃圾</p>
                <p className="text-2xl font-semibold ">32.70公斤</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">誠信經營教育訓練達</p>
                <p className="text-2xl font-semibold ">61.5小時</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">董事會通過設置</p>
                <p className="text-2xl font-semibold ">永續發展委員會</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-end pb-9">
              <div
                className="h-fit flex flex-col gap-2"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img
                  src={EsgIcon13}
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={EsgIcon15}
                  className="w-[100px] h-[100px] object-cover"
                />
              </div>
            </div>

            <div className="col-span-2">&nbsp;</div>
            <div
              className="col-span-3 h-fit mt-[450px] p-10 flex flex-col gap-6 "
              ref={performanceCard03Ref}
              id="performanceCard03"
            >
              <div
                className="justify-between flex items-center border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">
                  基層人員平均薪資較最低薪資標準高於
                </p>
                <p className="text-2xl font-semibold">200％</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">平均調薪</p>
                <p className="text-2xl font-semibold ">5％</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">員工訓練總時數</p>
                <p className="text-2xl font-semibold ">1,583小時</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">女性員工占比</p>
                <p className="text-2xl font-semibold ">32%</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">女性主管占比</p>
                <p className="text-2xl font-semibold ">18%</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">
                  舉辦「勞工健康保護-臨場醫護諮詢」
                </p>
                <p className="text-2xl font-semibold ">24次</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">
                  各項社會公益活動捐贈金額達
                </p>
                <p className="text-2xl font-semibold ">1,389,000元</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-end pb-9">
              <div
                className="h-fit flex flex-col gap-2"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img
                  src={EsgIcon03}
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={EsgIcon04}
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={EsgIcon05}
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={EsgIcon08}
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={EsgIcon10}
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src={EsgIcon17}
                  className="w-[100px] h-[100px] object-cover"
                />
              </div>
            </div>

            <div className="col-span-2">&nbsp;</div>
            <div
              className="col-span-3 h-fit mt-[450px] p-10 flex flex-col gap-6 "
              ref={performanceCard04Ref}
              id="performanceCard04"
            >
              <div
                className="justify-between flex items-center border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">研發費用支出達新台幣</p>
                <p className="text-2xl font-semibold">8,879 萬元</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">
                  侵犯客戶隱私或遺失客戶資料
                </p>
                <p className="text-2xl font-semibold ">0 件</p>
              </div>
              <div
                className="justify-between flex items-center  border border-white text-white rounded-xl p-6 shadow-xl"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg tracking-wide">違反資訊安全</p>
                <p className="text-2xl font-semibold ">0 件</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-end pb-9">
              <div
                className="h-fit flex flex-col gap-2"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img
                  src={EsgIcon12}
                  className="w-[100px] h-[100px] object-cover"
                />
              </div>
            </div>

            <div className="mt-[40vh]">&nbsp;</div>
          </div>
        </Container>
      </div>


      <TopicHighlightsSection />



      <div className="pt-36 bg-white">
        <Container>
          <div>
            <p className="text-3xl  font-semibold text-lake">
              成果與肯定
            </p>
            <p className="text-gray-400 font-en mt-1 font-light">Award</p>
          </div>
        </Container>
      </div>



      <PrizeSwiper />


    </>
  );
};

export default LandingPage;
