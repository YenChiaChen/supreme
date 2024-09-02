import {
  faAnglesDown,
  faEarthAmericas,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import earth from "../../assets/img/testing/earth.png";
import {
  faBlockBrickFire,
  faEarthAmerica,
  faHouseChimneyHeart,
} from "@fortawesome/pro-light-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "../../components/navigation/NavBar";
import navItems from "../../data/nav.json";
import Footer from "../../components/navigation/Footer";
import BgImage from "../../assets/img/bg/building.png";
import WorkImage from "../../assets/img/bg/mainpage/work.png";
import { BgSection, Container, H1, Section } from "../../components/ui";
import SectionWithSidebar from "../../components/ui/SectionWithSidebar";

const LandingPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar items={navItems} />
      <div
        className="w-full h-[80vh] bg-cover bg-center min-h-[1000px] flex items-center justify-center relative"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div
          className="flex flex-col text-center gap-8"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <H1 text="永續至上，共展未來" color="#ffffff" />
          <H1 text="Make the world better." color="#ffffff" />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-full translate-y-1/2 shadow-xl px-8 py-4 w-[90%] md:min-w-[600px] md:w-[70%]">
          <div className="flex gap-4 items-center">
            <p className="text-orange font-bold text-xl">・最新消息</p>
            <span className="text-light_gray">|</span>
            <p className="text-md trakcing-wide text-black">
              至上電子榮獲2023年幸福企業銀獎肯定
            </p>
          </div>
        </div>
      </div>

      <Container>
        <Section>
          <p className="text-center text-dark_blue text-3xl font-bold mt-12 tracking-wide">
            2025 永續目標
          </p>
          <p className="text-[#555555] text-center mt-3 text-lg tracking-wide">
            Strategy
          </p>

          <div className="flex justify-center gap-6 my-12 flex-grow">
            <div
              className="relative rounded-xl overflow-hidden bg-dark_blue w-[350px] min-w-[350px] bg-cover bg-center group h-[430px] duration-500"
              style={{ backgroundImage: `url(${BgImage})` }}
            >
              <div className="absolute inset-0 transition duration-500 backdrop-filter group-hover:backdrop-blur-md"></div>

              <div className="gap-4 transition-transform duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:transform group-hover:translate-y-[-190%] group-hover:translate-x-[-107%]">
                <FontAwesomeIcon
                  icon={faEarthAmerica}
                  className="text-white text-[50px] transition-transform duration-500 translate-x-[70%] group-hover:translate-x-[-16%] group-hover:scale-[0.7]"
                />
                <p className="text-white text-3xl font-semi-bold tracking-widest transition-transform duration-500 mt-2">
                  關心在地
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500 translate-y-full group-hover:translate-y-[-5%] px-[20px]">
                <div className="absolute delay-500 duration-500 w-[0px] bg-white h-[1px] left-0 top-[-20px] group-hover:w-[300px]"></div>
                <p className="text-white ">
                  範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字
                  範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字
                </p>
              </div>
            </div>{" "}
            <div
              className="relative rounded-xl overflow-hidden bg-dark_blue w-[350px] min-w-[350px] bg-cover bg-center group h-[430px] duration-500"
              style={{ backgroundImage: `url(${BgImage})` }}
            >
              <div className="absolute inset-0 transition duration-500 backdrop-filter group-hover:backdrop-blur-md"></div>

              <div className="gap-4 transition-transform duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:transform group-hover:translate-y-[-190%] group-hover:translate-x-[-107%]">
                <FontAwesomeIcon
                  icon={faEarthAmerica}
                  className="text-white text-[50px] transition-transform duration-500 translate-x-[70%] group-hover:translate-x-[-16%] group-hover:scale-[0.7]"
                />
                <p className="text-white text-3xl font-semi-bold tracking-widest transition-transform duration-500 mt-2">
                  關懷培力
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500 translate-y-full group-hover:translate-y-[-5%] px-[20px]">
                <div className="absolute delay-500 duration-500 w-[0px] bg-white h-[1px] left-0 top-[-20px] group-hover:w-[300px]"></div>
                <p className="text-white ">
                  範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字
                  範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字
                </p>
              </div>
            </div>{" "}
            <div
              className="relative rounded-xl overflow-hidden bg-dark_blue w-[350px] min-w-[350px] bg-cover bg-center group h-[430px] duration-500"
              style={{ backgroundImage: `url(${BgImage})` }}
            >
              <div className="absolute inset-0 transition duration-500 backdrop-filter group-hover:backdrop-blur-md"></div>

              <div className="gap-4 transition-transform duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:transform group-hover:translate-y-[-190%] group-hover:translate-x-[-107%]">
                <FontAwesomeIcon
                  icon={faEarthAmerica}
                  className="text-white text-[50px] transition-transform duration-500 translate-x-[70%] group-hover:translate-x-[-16%] group-hover:scale-[0.7]"
                />
                <p className="text-white text-3xl font-semi-bold tracking-widest transition-transform duration-500 mt-2">
                  關注根基
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500 translate-y-full group-hover:translate-y-[-5%] px-[20px]">
                <div className="absolute delay-500 duration-500 w-[0px] bg-white h-[1px] left-0 top-[-20px] group-hover:w-[300px]"></div>
                <p className="text-white ">
                  範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字
                  範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字
                </p>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      <BgSection color="#F1F1F1">
        <Container>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "auto 1fr" }}
          >
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <p className="font-bold text-2xl text-dark_blue gap-1">
                  焦點故事
                </p>
                <p>story</p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-semibold text-xl text-orange">影音區</p>
                <div className="bg-white rounded-xl p-6 flex flex-col text-[#262626] gap-1 font-bold tracking-wide text-xl w-[130%] z-10">
                  <p>至上電子 x</p>
                  <p>國立臺灣師範大學</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#262626] text-xl tracking-wide">
                「動手做STEAM多元智能晨光時間」計畫
              </p>
              <img src={WorkImage} alt="Project" className="w-[100%] mt-6" />
            </div>

            <div>&nbsp;</div>
            <div className="mt-4 text-[#262626] trackling-wide leading-8">
              本公司與國立臺灣師範大學科技應用與人力資源發展學系攜手合作，展開「動手做STEAM多元智能晨光時間」。本計畫由臺師大科技系的蔡其瑞助理教授領導，旨在啟發長安國中特教學生發展多元智能，提升其自我肯定，促進社交技巧，同時體驗動手做的樂趣。
            </div>

            <div>&nbsp;</div>
            <div className="flex justify-end mb-36">
              <div className="bg-orange rounded-full px-8 py-2 text-white mt-8">了解更多</div>
            </div>
          </div>
        </Container>
      </BgSection>

<SectionWithSidebar />


      <Footer />
    </div>
  );
};

export default LandingPage;
