import BgImage from "../../assets/img/background/bg_society.png";
import HeroSection from "../../components/ui/HeroSection";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { Container, Section } from "../../components/ui/Container";
import { YearTabContainer } from "../../components/ui/Tab";
import StatDisplay from "../../components/ui/StatDisplay";
import { Desc, H2, P } from "../../components/ui/Text";
import { newsData } from "../../data/NewsData";
import React, { useState } from "react";
import { faCircle } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CharityTable from "../../data/ChartyData";
import {
  faEarthAsia,
  faFaceSmilingHands,
  faUserDoctor,
  faVolleyball,
} from "@fortawesome/pro-light-svg-icons";
import { Link } from "react-router-dom";
const stats = [
  {
    label: "2023年度捐款贊助總金額",
    num: 94.5,
    suffix: "分",
    color: "#A36ACA",
    staticString: "$3,636,000 元",
  },
  {
    label: "2023年公益活動參與總人數",
    num: 76,
    suffix: "人",
    color: "#A36ACA",
  },
  {
    label: "2023年社會公益總時數",
    num: 110,
    suffix: "小時",
    color: "#A36ACA",
  },
];

const SocietyPage: React.FC = () => {
  const activityNews = newsData.filter((item) => item.category === "Activity");

  const newsByYear = activityNews.reduce((acc: any, curr) => {
    const year = curr.date;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(curr);
    return acc;
  }, {});

  const years = Object.keys(newsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <HeroSection
        backgroundImage={BgImage}
        title="社會共榮"
        mask={true}
        center={false}
      />

      <div className="bg-white rounded-[2rem] mt-[-2rem] relative z-10">
        <Container className="-translate-y-[50px]">
          <StatDisplay stats={stats} />
        </Container>

        <Container className="pt-12">
          <Breadcrumbs items={navItems} />

          <Section>
            <H2 text={"包容 和諧 凝聚"} />
            <P
              text={
                "本公司長久以來關心環境保育、社會服務、教育文化、體育健康等各式社會議題，積極參與社 會公益活動以履行社會責任，除捐贈資金或物資，亦將公益熱忱轉化為實際行動，將溫馨關懷回 饋予社會。參加「台北內湖科技園區發展協會」、「台北市電子零件商業同業公會」等機構，關注 環境保育、社區關懷、消費者權益、人權、安全衛生與其他社會議題等，並對各利害關係人盡應 盡及承擔不同責任，另透過永續發展執行小組-社會關懷組持續規劃推動公司相關社會公益活動。"
              }
            />

            <div className="grid grid-cols-2 mt-36 gap-4 relative  text-[#333333]">
              <div className="grid grid-cols-8 gap-8 group relative">
                <div className="border-r-[1px] border-t-[1px] border-[#D9D9D9] w-[60%] h-[50px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#D9D9D9] absolute left-0 top-0 text-sm -translate-y-1/2 -translate-x-1/2"
                  />
                </div>
                <div className="col-span-5 content py-8 ">
                  <p className="text-2xl font-semibold text-purple mb-4">
                    教育文化、體育發展
                  </p>
                  <Desc
                    text={
                      "種子是萬物的根基，至上重視培育，以身體力行打造優質教育"
                    }
                  />
                </div>
                <div className="col-span-3 w-full bg-gray-100 rounded-xl flex justify-center items-center aspect-square ">
                  <FontAwesomeIcon icon={faVolleyball} className="h-[60px]" />
                </div>
              </div>
              <div className="grid grid-cols-8 gap-8 relative group">
                <div className="border-l-[1px] border-t-[1px] border-[#D9D9D9] w-[60%] h-[50px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#D9D9D9] absolute right-0 top-0 text-sm -translate-y-1/2 translate-x-1/2"
                  />
                </div>
                <div className="col-span-3 w-full bg-[#EAE7FB] rounded-xl aspect-square flex justify-center items-center ">
                  <FontAwesomeIcon icon={faEarthAsia} className="h-[60px]" />
                </div>
                <div className="col-span-5 content py-8">
                  <p className="text-2xl font-semibold text-purple mb-4">
                    社會關懷、永續環境
                  </p>
                  <Desc text={"本著關懷社會、愛護地球的理念，維護生物多樣化"} />
                </div>
              </div>
              <div className="grid grid-cols-8 gap-8 relative group">
                <div className="w-[60%] h-[50px] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full border-r-[1px] border-b-[1px] border-[#D9D9D9]">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#D9D9D9] absolute left-0 bottom-0 text-sm translate-y-1/2 -translate-x-1/2"
                  />
                </div>
                <div className="col-span-5 content py-8">
                  <p className="text-2xl font-semibold text-purple mb-4">
                    健康醫療、公益服務
                  </p>
                  <Desc
                    text={
                      "重視全民身心健康福祉及社會公益，化實際行動做出有效益的貢獻"
                    }
                  />
                </div>
                <div className="col-span-3 w-full bg-[#EAE7FB] rounded-xl aspect-square flex justify-center items-center ">
                  <FontAwesomeIcon icon={faUserDoctor} className="h-[60px]" />
                </div>
              </div>
              <div className="grid grid-cols-8 gap-8 relative group">
                <div className="w-[60%] h-[50px] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full border-l-[1px] border-b-[1px] border-[#D9D9D9]">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#D9D9D9] absolute right-0 bottom-0 text-sm translate-y-1/2 translate-x-1/2"
                  />
                </div>
                <div className="col-span-3 w-full bg-gray-100 rounded-xl aspect-square  flex justify-center items-center ">
                  <FontAwesomeIcon
                    icon={faFaceSmilingHands}
                    className="h-[60px]"
                  />
                </div>
                <div className="col-span-5 content py-8">
                  <p className="text-2xl font-semibold text-purple mb-4">
                    社區參與、永續發展
                  </p>
                  <Desc
                    text={
                      "服務社區提升社會幸福感，關注國際重大議題，落實企業責任"
                    }
                  />
                </div>
              </div>
              <div className="text-purple  font-bold text-3xl rounded-full bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] flex items-center justify-center">
                員工
                <br />
                至上
              </div>
            </div>
          </Section>

          <Section className="  text-[#555555]">
            <H2 text={"年度活動"} />
            <YearTabContainer years={years} tabColor="#A36ACA">
              {years.map((year) => (
                <div
                  key={year}
                  data-year={year}
                  className="mt-8 grid grid-cols-3 gap-6"
                >
                  {newsByYear[year].map((newsItem: any) => (
                    <Link
                      key={newsItem.id}
                      to={`/news/${newsItem.id}`}
                      className="w-full rounded-[1rem] bg-white shadow overflow-hidden group cursor-pointer duration-300 hover:shadow-xl"
                      target="_blank"
                    >
                      <div className="w-full overflow-hidden h-[250px]">
                        <img
                          src={newsItem.bg}
                          alt="Background Image"
                          className="object-cover w-full h-full group-hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-orange font-light text-sm mb-2">
                          {newsItem.location}
                        </div>
                        <p className="text-2xl font-semibold tracking-wider">
                          {newsItem.title}
                        </p>
                        <p className="mt-2 tracking-wider text-sm">
                          {newsItem.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </YearTabContainer>
          </Section>

          <Section className="mb-36  text-[#555555]">
            <H2 text={"執行情形報告"} />
            <CharityTable />
          </Section>
        </Container>
      </div>
    </>
  );
};

export default SocietyPage;
