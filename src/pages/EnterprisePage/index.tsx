import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBullseye,
  faCircle,
  faHandshakeAlt,
  faHeartbeat,
  faMoneyCheck,
  faPeopleArrows,
  faPeopleArrowsLeftRight,
  faPeoplePulling,
  faPersonChalkboard,
  faPlay,
  faUsersLine,
} from "@fortawesome/pro-light-svg-icons";

import BgImage01 from "../../assets/img/subPage/幸福企業/人力資源分佈.jpg";
import BgImage02 from "../../assets/img/subPage/幸福企業/福利措施與關懷.jpg";
import BgImage03 from "../../assets/img/subPage/幸福企業/員工權益保障.jpg";
import BgImage04 from "../../assets/img/subPage/幸福企業/多元化成長.jpg";
import BgImage05 from "../../assets/img/subPage/幸福企業/績效檢核與薪酬.jpg";
import BgImage06 from "../../assets/img/subPage/幸福企業/職業安全衛生.jpg";
import BgImage07 from "../../assets/img/subPage/幸福企業/健康職場.jpg";
import BgImage08 from "../../assets/img/subPage/幸福企業/人權政策.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import { HoverCard, LinkCard } from "../../components/ui/Card";
import { BgSection, Container, Section } from "../../components/ui/Container";
import StatDisplay from "../../components/ui/StatDisplay";
import { H2, P, Desc, H3, List } from "../../components/ui/Text";
import HeroSection from "../../components/ui/HeroSection";
import navItems from "../../data/nav.json";

const cards = [
  {
    title: "人力資源分佈",
    backgroundImage: BgImage01,
    url: "/enterprise/hr-distribution",
  },
];
const cards2 = [
  {
    title: "福利措施與關懷",
    backgroundImage: BgImage02,
    url: "/enterprise/welfare-care",
  },
  {
    title: "員工權益保障",
    backgroundImage: BgImage03,
    url: "/enterprise/rights-protection",
  },
];

const cards3 = [
  {
    title: "多元化成長",
    backgroundImage: BgImage04,
    url: "/enterprise/diverse-growth",
  },
  {
    title: "績效檢核與薪酬",
    backgroundImage: BgImage05,
    url: "/enterprise/performance-compensation",
  },
];

const cards4 = [
  {
    title: "職業安全衛生",
    backgroundImage: BgImage06,
    url: "/enterprise/occupational-safety",
  },
  {
    title: "健康職場",
    backgroundImage: BgImage07,
    url: "/enterprise/healthy-workplace",
  },
  {
    title: "人權政策",
    backgroundImage: BgImage08,
    url: "/enterprise/human-rights-policy",
  },
];

const cardData = [
  {
    title: "雇用政策",
    description:
      "公司制定明確的僱用政策，包括公平的招募程序、工作內容描述、工資標準、福利制度、晉升途徑、訓練方式等，以確保員工享有公平的就業機會和適當的薪酬。",
    icon: faUsersLine,
  },
  {
    title: "溝通政策",
    description:
      "公司建立良好的溝通機制，以便員工和管理層之間進行即時、開放和有效的溝通。透過會議、意見反饋及訪談等，可以瞭解員工的需求和關切事項，從而改善工作環境和勞工待遇。",
    icon: faPeopleArrows,
  },
  {
    title: "訓練政策",
    description:
      "公司提供適當的培訓和發展機會，幫助員工提升技能和知識，從而提高生產力和自信心。此外，公司還鼓勵員工參加同行業相關協會、研討會等活動，以擴大員工的人脈和知識面。",
    icon: faPersonChalkboard,
  },
  {
    title: "紛爭解決政策",
    description:
      "公司建立適當的紛爭解決機制，包括內部調解、仲裁和法律訴訟等。透過這些機制， 可以解決工作場所的爭議和糾紛，避免對勞雇 / 勞資關係造成負面影響。",
    icon: faPeoplePulling,
  },
];

const EnterprisePage: React.FC = () => {
  const stats = [
    {
      label: "2023 年每人平均受訓時數",
      num: 17.81,
      suffix: "小時",
      color: "#FF507C",
    },
    {
      label: "2023 年平均調薪幅度",
      num: 2.7,
      suffix: "%",
      color: "#FF507C",
    },
    {
      label: "2023 年提供職醫 / 職護臨場諮詢服務",
      num: 39,
      suffix: "次",
      color: "#FF507C",
    },
  ];
  return (
    <div>
      <HeroSection
        title="幸福企業"
        backgroundImage={BgImage03}
        center={false}
        mask={true}
      />
      <div className="bg-white rounded-[2rem] mt-[-2rem] relative z-10">
        <Container className="-translate-y-[50px]">
          <StatDisplay stats={stats} />
        </Container>

        <Container>
          <Breadcrumbs items={navItems} />
          <Section>
            <H2 text={"幸福企業 員工至上"} />
            <P
              text={
                "員工是公司營運最重要的資產。至上致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。\n\n堅決禁止任何形式的威脅、暴力或肢體恐嚇的行為，同時積極宣導「性別工作平等法」和「性騷擾防治法」，保護員工免於遭受歧視及騷擾之情形。 同樣至上重視職場環境的平等多元化，承諾員工不會因種族、階級、語言、宗教、黨派、性別、性傾向、 年齡、婚姻、容貌等原因遭受就業歧視。為了進一步滿足員工的需求及反饋，成立職工福利委員會，提供多種優渥福利措施，為員工打造一個幸福企業。"
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
                  <p className="text-xl font-semibold text-pink mb-4">
                    凝聚力提升
                  </p>
                  <Desc
                    text={
                      "人力資源部同仁參與勞資關係培訓課程，加強對勞資關係的認識和意識，提升解決紛爭之能力和效率，增進公司內部凝聚力和穩定性。"
                    }
                  />
                </div>
                <div className="col-span-3 w-full bg-gray-100 rounded-xl flex justify-center items-center aspect-square ">
                  <FontAwesomeIcon
                    icon={faPeopleArrowsLeftRight}
                    className="h-[60px]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-8 gap-8 relative group">
                <div className="border-l-[1px] border-t-[1px] border-[#D9D9D9] w-[60%] h-[50px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#D9D9D9] absolute right-0 top-0 text-sm -translate-y-1/2 translate-x-1/2"
                  />
                </div>
                <div className="col-span-3 w-full bg-[#FFEDF2] rounded-xl aspect-square flex justify-center items-center ">
                  <FontAwesomeIcon icon={faMoneyCheck} className="h-[60px]" />
                </div>
                <div className="col-span-5 content py-8">
                  <p className="text-xl font-semibold text-pink mb-4">
                    薪資福利
                  </p>
                  <Desc
                    text={
                      "給予員工公正的薪資待遇和福利，提高員工的工作滿意度，減少員工流失率，以增強公司的競爭優勢和品牌形象。"
                    }
                  />
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
                  <p className="text-xl font-semibold text-pink mb-4">
                    勞雇平等
                  </p>
                  <Desc
                    text={
                      "建立公正的勞動法制和勞資協商機制，促進勞雇雙方的尊重和平等，提高企業的社會形象和公信力。"
                    }
                  />
                </div>
                <div className="col-span-3 w-full bg-[#FFEDF2] rounded-xl aspect-square flex justify-center items-center ">
                  <FontAwesomeIcon icon={faHandshakeAlt} className="h-[60px]" />
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
                  <FontAwesomeIcon icon={faHeartbeat} className="h-[60px]" />
                </div>
                <div className="col-span-5 py-8">
                  <p className="text-xl font-semibold text-pink mb-4">
                    健康成長
                  </p>
                  <Desc
                    text={
                      "提供員工健康檢查、專業醫護諮詢及舉辦相關講座。 編訂年度訓練計劃並落實實施，以提升員工技能水平，提高工作效率。"
                    }
                  />
                </div>
              </div>
              <div className="text-pink rounded-full bg-white sub-title absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] flex items-center justify-center">
                員工
                <br />
                至上
              </div>
            </div>
          </Section>

          <Section>
            <H2 text={"幸福企業政策制度"} />

            <div className="w-full flex mt-24 justify-between gap-4">
              {cardData.map((data, index) => (
                <HoverCard key={index} data={data} color="#FF507C" />
              ))}
            </div>
          </Section>
        </Container>
        <Section>
          <H2 text={"未來規劃與目標"} />
          <BgSection color="#FFEDF2" className="mt-xl">
            <Container>
              <Section>
                <div className="relative z-10 py-24 grid grid-cols-3 items-center">
                  <div className="border-t-[2px] border-pink h-full flex flex-col relative px-12 py-6 relative">
                    <FontAwesomeIcon
                      icon={faBullseye}
                      className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-pink h-[30px]"
                    />
                    <p className="text-2xl font-bold text-pink tracking-widest mt-12 mb-5">
                      短期目標（2027年）
                    </p>

                    <List
                      items={[
                        {
                          text: "提升員工福利：視預算及實際規劃增加員工福利項目及預算。",
                        },
                        {
                          text: "提升員工能力：依照年資、職位、職務規劃適當的培訓課程及專業進修內容。",
                        },
                        {
                          text: "提升員工活動參與度：透過調 查，了解員工關注的議題，安排多元化活動內容以提升員工 參與活動人數。",
                        },
                      ]}
                      listType="disc"
                    />

                    <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-pink"></div>
                  </div>
                  <div className="border-t-[2px] border-pink h-full flex  flex-col relative px-12 py-6 relative">
                    <FontAwesomeIcon
                      icon={faBullseye}
                      className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-pink h-[30px]"
                    />
                    <p className="text-2xl font-bold text-pink tracking-widest mt-12 mb-5">
                      中期目標（2029年）
                    </p>

                    <List
                      items={[
                        {
                          text: "持續提升關注發展員工福利措施。",
                        },
                        {
                          text: "培訓和發展：持續加強培訓和發展項目，提高員工參與內部和外部培訓的人數比例。",
                        },
                        {
                          text: "善盡企業社會責任：持續推行社會公益活動，每2年辦理一場以上之社會公益活動。",
                        },
                      ]}
                      listType="disc"
                    />
                    <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-pink"></div>
                  </div>
                  <div className="border-t-[2px] border-pink h-full flex flex-col relative px-12 py-6 relative">
                    <FontAwesomeIcon
                      icon={faBullseye}
                      className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-pink h-[30px]"
                    />
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-pink h-[30px]"
                    />
                    <p className="text-2xl font-bold text-pink tracking-widest mt-12 mb-5">
                      長期目標（2034年）
                    </p>

                    <List
                      items={[
                        {
                          text: "持續提升員工保障：提供更好的醫療及失能保險和退休等福利措施。",
                        },
                        {
                          text: "建立企業文化：建立高效率企業文化，提升員工認同度，同時訂定接班人計劃培訓高階主管，以達公司永續發展之目標。",
                        },
                        {
                          text: "實現職業平等，持續提高女性主管的比例。",
                        },
                      ]}
                    />
                    <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-pink"></div>
                  </div>
                </div>
              </Section>
            </Container>
          </BgSection>
        </Section>

        <Container>
          <Section>
            <H2 text={"相關單元"} />
            <div className="flex flex-wrap gap-x-8 gap-y-8 mt-12">
              {cards.map((card, index) => (
                <LinkCard
                  key={index}
                  title={card.title}
                  backgroundImage={card.backgroundImage}
                  url={card.url}
                />
              ))}
            </div>

            <H3 text={"員工政策"} />
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
            <H3 text={"人才培育"} />
            <div className="flex flex-wrap gap-x-8 gap-y-8 mt-8">
              {cards3.map((card, index) => (
                <LinkCard
                  key={index}
                  title={card.title}
                  backgroundImage={card.backgroundImage}
                  url={card.url}
                />
              ))}
            </div>
            <H3 text={"友善職場"} />
            <div className="flex flex-wrap gap-x-8 gap-y-8 mt-8">
              {cards4.map((card, index) => (
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

export default EnterprisePage;
