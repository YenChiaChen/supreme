import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BuildingImage from "../../assets/img/background/bg_building.png";
import BuildingCardImage from "../../assets/img/background/card_building.png";
import BeachCardImage from "../../assets/img/background/card_beach.png";
import EmployeeCardImage from "../../assets/img/background/card_employee.png";
import { faCloudArrowDown } from "@fortawesome/pro-solid-svg-icons";
import EsgIcon13 from "../../assets/img/icon/esg_13.png";
import EsgIcon14 from "../../assets/img/icon/esg_14.png";
import EsgIcon15 from "../../assets/img/icon/esg_15.png";
import {
  faEarthAsia,
  faHandshakeAngle,
  faUserGear,
} from "@fortawesome/pro-light-svg-icons";
import NavBar from "../../components/nav/NavBar";
import { Container } from "../../components/ui/Container";

const LandingPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div
        className="relative w-full h-[85vh] overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
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

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tc tracking-wide">
            永續至上，共展未來
          </h1>

          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 text-md md:text-2xl font-en tracking-wide mt-4">
              Make the world better.
            </h1>
          </div>

          <div className="group hover:shadow-xl cursor-pointer font-tc flex text-lg tracking-wide items-center pl-5 py-2 pr-2 mt-8 bg-white bg-opacity-20 overflow-hidden text-white rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
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

      <Container className="py-16">
        <p className="text-3xl font-tc font-semibold text-[#4C8591] text-center">
          2025年永續目標
        </p>
        <p className="text-gray-400 font-en text-center mt-1 font-light">
          Strategy
        </p>

        <div className="flex gap-6 mt-8 justify-between">
          <div
            className="group bg-black w-[33%] rounded-[2rem] hover:w-[80%] h-[400px] duration-300 bg-cover bg-center bg-no-repeat relative overflow-hidden p-4 font-tc"
            style={{ backgroundImage: `url(${BeachCardImage})` }}
          >
            <div className="z-10 w-full h-full  relative flex flex-col items-start rounded-[1.8rem] p-8 text-white">
              <FontAwesomeIcon
                icon={faEarthAsia}
                className="text-[3.5rem] mt-2"
              />
              <p className="text-3xl font-semibold mt-6">關心在地</p>
              <p className="mt-6">
                我們致力於守護自然環境，推動綠色轉型，與地球共生共榮。
              </p>
              <div className="hidden group-hover:flex text-left w-full mt-8  gap-4 items-center">
                <div>
                  <p>歷年淨灘：</p>
                  <span className="font-bold text-3xl ">24次</span>
                </div>
                <span>|</span>
                <div>
                  <p>歷年淨灘：</p>
                  <span className="font-bold text-3xl ">24次</span>
                </div>
                <span>|</span>
                <div>
                  <p>歷年淨灘：</p>
                  <span className="font-bold text-3xl ">24次</span>
                </div>
                <div className="flex gap-1">
                  <img
                    src={EsgIcon13}
                    className="w-[50px] w-[50px] object-cover"
                  />
                  <img
                    src={EsgIcon14}
                    className="w-[50px] w-[50px] object-cover"
                  />
                  <img
                    src={EsgIcon15}
                    className="w-[50px] w-[50px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
          </div>
          <div
            className="group bg-black w-[33%] rounded-[2rem] hover:w-[80%] h-[400px] duration-300 bg-cover bg-center bg-no-repeat relative overflow-hidden p-4 font-tc"
            style={{ backgroundImage: `url(${EmployeeCardImage})` }}
          >
            <div className="z-10 w-full h-full relative flex flex-col items-start rounded-[1.8rem] p-8 text-white">
              <FontAwesomeIcon
                icon={faHandshakeAngle}
                className="text-[3.5rem] mt-2"
              />
              <p className="text-3xl font-semibold mt-6">關懷培力</p>
              <p className="mt-6">
                我們致力於守護自然環境，推動綠色轉型，與地球共生共榮。
              </p>
              <div className="hidden group-hover:flex text-left w-full mt-8  gap-4 items-center">
                <div>
                  <p>歷年淨灘：</p>
                  <span className="font-bold text-3xl ">24次</span>
                </div>
                <span>|</span>
                <div>
                  <p>歷年淨灘：</p>
                  <span className="font-bold text-3xl ">24次</span>
                </div>
                <span>|</span>
                <div>
                  <p>歷年淨灘：</p>
                  <span className="font-bold text-3xl ">24次</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
          </div>
          <div
            className="group bg-black w-[33%] rounded-[2rem] hover:w-[80%] h-[400px] duration-300 bg-cover bg-center bg-no-repeat relative overflow-hidden p-4 font-tc"
            style={{ backgroundImage: `url(${BuildingCardImage})` }}
          >
            <div className="z-10 w-full h-full relative flex flex-col items-start rounded-[1.8rem] p-8 text-white">
              <FontAwesomeIcon
                icon={faUserGear}
                className="text-[3.5rem] mt-2"
              />
              <p className="text-3xl font-semibold mt-6">關注根基</p>
              <p className="mt-6">
                我們致力於守護自然環境，推動綠色轉型，與地球共生共榮。
              </p>
              <div className="hidden group-hover:flex text-left w-full mt-8  gap-4 items-center">
                <div>
                  <p>歷年淨灘：</p>
                  <span className="font-bold text-3xl ">24次</span>
                </div>
                <span>|</span>
                <div>
                  <p>歷年淨灘：</p>
                  <span className="font-bold text-3xl ">24次</span>
                </div>
                <span>|</span>
                <div>
                  <p>歷年淨灘：</p>
                  <span className="font-bold text-3xl ">24次</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
          </div>
        </div>
      </Container>

      <div className="bg-[#F1F1F1]">
        <Container className="py-16">
          <div className="grid grid-cols-11 font-tc">
            <div className="col-span-3 flex flex-col justify-between">
              <div>
                <p className="text-3xl font-tc font-semibold text-[#4C8591]">
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
              <div className="h-[400px] bg-gray-200 rounded-[2rem] mt-8 "></div>
            </div>
            <div className="col-span-3">&nbsp;</div>
            <div className="col-span-8 mt-6 font-light tracking-wide">
              本公司與國立臺灣師範大學科技應用與人力資源發展學系攜手合作，展開「動手做STEAM多元智能晨光時間」。本計畫由臺師大科技系的蔡其瑞助理教授領導，旨在啟發長安國中特教學生發展多元智能，提升其自我肯定，促進社交技巧，同時體驗動手做的樂趣。
              <div className="flex justify-end mt-8">
                More
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
