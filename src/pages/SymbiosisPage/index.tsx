import BgImage01 from "../../assets/img/subPage/永續共生/氣候變遷對策.jpg";
import BgImage02 from "../../assets/img/subPage/永續共生/溫室氣體&行動方案.jpg";
import BgImage03 from "../../assets/img/subPage/永續共生/綠能低碳計畫.jpg";
import BgImage04 from "../../assets/img/subPage/永續共生/能源管理.jpg";
import BgImage05 from "../../assets/img/subPage/永續共生/廢棄物.jpg";
import BgImage06 from "../../assets/img/subPage/永續共生/水資源.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatDisplay from "../../components/ui/StatDisplay";
import AOS from "aos";
import "aos/dist/aos.css";
import navItems from "../../data/nav.json";

import {
  faGraduationCap,
  faHandshakeSimple,
  faLeaf,
} from "@fortawesome/pro-light-svg-icons";
import { faBullseye, faPlay } from "@fortawesome/pro-solid-svg-icons";

import { useEffect } from "react";
import HeroSection from "../../components/ui/HeroSection";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import { HoverCard, LinkCard } from "../../components/ui/Card";
import { Container, Section, BgSection } from "../../components/ui/Container";
import { H2, P, Desc, H3, List } from "../../components/ui/Text";

const cardData = [
  {
    title: "重用人才",
    description:
      "建構至上集團成為優質的平台，對人才的培育，型塑公司文化不遺餘力，員工可以盡情發揮潛力，適才適所，讓所有『至上人』成為『人上人』隨時隨地以『至上』為榮。",
    icon: faGraduationCap,
  },
  {
    title: "客戶價值",
    description:
      "有效解決客戶所提出之任何需求，整合公司所有專屬資源，創造非凡的價值並將價值主張順利移轉至客戶，與所有利害關係人共享利潤。",
    icon: faHandshakeSimple,
  },
  {
    title: "深耕社會",
    description:
      "至上集團為落實回饋社會的企業宗旨，除以實際行動扶助貧困家庭，發展綠能產業並贊助『社會企業』，加強企業策略與社會公益，全球綠能的連結。",
    icon: faLeaf,
  },
];

const cards = [
  {
    title: "氣候變遷對策",
    backgroundImage: BgImage01,
    url: "/symbiosis/climate-change",
  },
  {
    title: "溫室氣體&行動方案",
    backgroundImage: BgImage02,
    url: "/symbiosis/greenhouse-gases",
  },
  {
    title: "綠能低碳計畫",
    backgroundImage: BgImage03,
    url: "/symbiosis/green-energy",
  },
];

const cards2 = [
  {
    title: "能源管理",
    backgroundImage: BgImage04,
    url: "/symbiosis/energy-management",
  },
  {
    title: "廢棄物管理",
    backgroundImage: BgImage05,
    url: "/symbiosis/waste-management",
  },
  {
    title: "水資源管理",
    backgroundImage: BgImage06,
    url: "/symbiosis/water-management",
  },
];

const SymbiosisPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const stats = [
    {
      label: "2023年減少用紙量約",
      num: 474526,
      suffix: "張A4紙",
      color: "#2ECF74",
    },
    {
      label: "「至上淨灘愛地球」撿拾海洋廢棄物",
      num: 37.5,
      suffix: "公斤",
      color: "#2ECF74",
    },
    {
      label: "增加棧板及包材回收再利用",
      num: 4.535,
      suffix: "公噸",
      color: "#2ECF74",
    },
  ];

  return (
    <div>
      <HeroSection
        title="永續共生"
        center={false}
        backgroundImage={BgImage05}
      />
      <div className="bg-white rounded-[2rem] mt-[-2rem] relative z-10">
        <Container className="-translate-y-[50px]">
            <StatDisplay stats={stats} />
        </Container>

        <Container>
          <Breadcrumbs items={navItems} />

          <Section>
              <H2 text={"藍圖展望 成為上至上"} />
              <P
                text={
                  "至上集團經歷過惡劣環境的淬鍊下，經過多年持續穩定的發展，在區域經濟歐、美、日、韓、台、中國等地已建立了非常堅實的基礎，今後仍持續追求更廣闊的藍圖，擴展服務範圍至其他區域。至上集團由過去單純的零件代理商，拓展業務至以市場為導向的方案提供商，系統雲端應用商並由點、線、面的企業結盟進階到板塊商業領域的領導地位。"
                }
              />
          </Section>

          <Section>
              <H2 text={"點亮永續"} />
              <div className="w-full flex mt-md justify-between gap-4">
                {cardData.map((data, index) => (
                  <HoverCard
                    key={index}
                    data={data}
                    width="33%"
                    color="#3BC376"
                  />
                ))}
              </div>
          </Section>
        </Container>

        <BgSection color="#F0FBF4" className="mt-xl">
          <Container>
            <Section>
              <div className="relative z-10 py-24 grid grid-cols-3 items-center">
                <div className="border-t-[2px] border-green h-full flex flex-col relative px-12 py-6 relative">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-green h-[30px]"
                  />
                  <p className="text-2xl font-bold text-green tracking-widest mt-12 mb-5">
                  短期目標（2026年）
                  </p>

                  <List items={[
                    {text: "更換高效照明設備：LED燈具占比100%。"},
                    {text: "節能：逐年降低用電度數，預計用電量年減少 2~4%。"},
                    {text: "減碳：逐年減少使用紙張數。"},
                  ]} title="能源效率提升："/>

                  <P text={"員工培訓：對員工進行氣候變遷和能源管理培訓，提高內部環保意識和技能。"} />


                  <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-green"></div>
                </div>
                <div className="border-t-[2px] border-green h-full flex  flex-col relative px-12 py-6 relative">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-green h-[30px]"
                  />
                  <p className="text-2xl font-bold text-green tracking-widest mt-12 mb-5">
                  中期目標（2028年）
                  </p>

                  <List items={[
                    {text: "綠色運輸：預計2028年起使用運輸業者低碳運輸服務。 "},
                    {text: "碳減排計劃：溫室氣體範疇一、二排放量密集度較基準年減少2%。"},
                    {text: "能源使用優化：透過流程改進，提升設備能源使用效率。"},
                  ]} />
                  <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-green"></div>
                </div>
                <div className="border-t-[2px] border-green h-full flex flex-col relative px-12 py-6 relative">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-green h-[30px]"
                  />
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-green h-[30px]"
                  />
                  <p className="text-2xl font-bold text-green tracking-widest mt-12 mb-5">
                  長期目標（2030年）
                  </p>

                  <List items={[
                    {text: "技術創新：持續推動公司綠電研發和創新。"},
                    {text: "循環經濟實踐：減少廢棄物， 提升資源再利用率。"},
                    {text: "供應鏈合作：與供應鏈中的其他合作伙伴協作，共同制定減排策略和可持續發展計劃，推動上下游企業的環保努力。"},
                  ]} />
                  <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-green"></div>
                </div>
              </div>
            </Section>
          </Container>
        </BgSection>

        <Container>
          <Section>
            <H2 text={"相關單元"} />
            <H3 text={"永續共生"} />
            <div className="flex flex-wrap gap-x-8 gap-y-8 mt-8">
              {cards.map((card, index) => (
                <LinkCard
                  key={index}
                  title={card.title}
                  backgroundImage={card.backgroundImage}
                  url={card.url}
                />
              ))}
            </div>

            <H3 text={"・能源與廢棄物管理"} />
            <div className="flex flex-wrap gap-x-8 gap-y-8 mt-8">
              {cards2.map((card, index) => (
                <LinkCard
                  key={index}
                  title={card.title}
                  backgroundImage={card.backgroundImage}
                  url={card.url}
                />
              ))}
            </div>
          </Section>
        </Container>
      </div>
    </div>
  );
};

export default SymbiosisPage;
