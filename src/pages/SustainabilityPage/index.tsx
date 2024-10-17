import StatDisplay from "../../components/ui/StatDisplay";
import BgImage01 from "../../assets/img/subPage/永續經營/經營者的話.jpg";
import BgImage02 from "../../assets/img/subPage/永續經營/公司治理.jpg";
import BgImage03 from "../../assets/img/subPage/永續經營/誠信經營.jpg";
import BgImage04 from "../../assets/img/subPage/永續經營/董事會.jpg";
import BgImage05 from "../../assets/img/subPage/永續經營/永續發展委員會.jpg";
import BgImage06 from "../../assets/img/subPage/永續經營/薪酬委員會.jpg";
import BgImage07 from "../../assets/img/subPage/永續經營/審計委員會.jpg";
import BgImage08 from "../../assets/img/subPage/永續經營/利害關係人議合.jpg";
import BgImage09 from "../../assets/img/subPage/永續經營/重大主題.jpg";
import BgImage10 from "../../assets/img/subPage/永續經營/利害關係人問卷.jpg";
import BgImage11 from "../../assets/img/subPage/永續經營/風險管理.jpg";
import BgImage12 from "../../assets/img/subPage/永續經營/資訊安全管理.jpg";
import BgImage13 from "../../assets/img/subPage/永續經營/供應鏈管理.jpg";
import BgImage14 from "../../assets/img/subPage/永續經營/產品與客戶服務.jpg";
import BgImage15 from "../../assets/img/subPage/永續經營/智慧財產權管理.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCircle,
  faEarth,
  faGavel,
  faHandsHelping,
} from "@fortawesome/pro-light-svg-icons";
import navItems from "../../data/nav.json";
import { Container, Section } from "../../components/ui/Container";
import { H2, P, Desc, H3 } from "../../components/ui/Text";
import HeroSection from "../../components/ui/HeroSection";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import { ListTab } from "../../components/ui/Tab";
import { LinkCard } from "../../components/ui/Card";

const goals = {
  公司治理: [
    {
      description:
        "落實風險管理，謹慎評估市場與產業狀況，靈活的投資策略，確保年度經濟績效提升，穩定公司營運根基。",
    },
    {
      description:
        "遵守公司法、證券交易法、商業會計法、上市上櫃公司應遵循相關規章或其他商業行為有關法令，持續提昇公司治理，維護相關利害關係人權益。",
    },
    {
      description:
        "致力實現經濟、社會和環境之間的平衡，承諾在為股東創造價值的同時，兼顧永續發展，並為員工、客戶、合作夥伴和社區帶來正面的影響。",
    },
  ],
  環境: [
    {
      description:
        "致力於環境保護，承諾將積極減少溫室氣體排放、推動資源循環利用、減少廢棄物的產生，力求企業的永續發展及為環境保護盡一份力。",
    },
  ],
  社會: [
    {
      description:
        "恪守勞動法規及國際人權規範，消除各種形式之強迫勞動及不雇用16歲以下之童工。",
    },
    {
      description:
        "注重員工權益，承諾創建一個公平、安全以及健康的工作環境，同時建立有效的溝通管道，重視並聆聽員工意見。",
    },
    {
      description:
        "尊重與包容，致力於提供一個平等、無歧視和包容的工作環境，不因種族、階級、語言、宗教、黨派、性別、性傾向、年齡、婚姻、容貌等予以就業歧視，使每個人都應受到尊重和平等對待。",
    },
    {
      description:
        "注重員工發展，承諾提供員工持續學習和職業發展的機會，提供多元化培訓課程等以提升員工技能和增進員工價值。",
    },
    {
      description:
        "長期關心各式社會議題，承諾將持續投入時間和資源，支持社會公益項目，與當地社區建立合作關係，將公益熱忱轉化為實際行動，將溫馨關懷回饋予社會。",
    },
  ],
};

const cards = [
  {
    title: "經營者的話",
    backgroundImage: BgImage01,
    url: "/sustainability/message-from-chairman",
  },
  {
    title: "公司治理",
    backgroundImage: BgImage02,
    url: "/sustainability/governance",
  },
  {
    title: "誠信經營",
    backgroundImage: BgImage03,
    url: "/sustainability/ethical-management",
  },
  {
    title: "董事會",
    backgroundImage: BgImage04,
    url: "/sustainability/board",
  },
];

const cards2 = [
  {
    title: "永續發展委員會",
    backgroundImage: BgImage05,
    url: "/sustainability/sustainbility-committee",
  },
  {
    title: "薪酬委員會",
    backgroundImage: BgImage06,
    url: "/sustainability/compensation-committee",
  },
  {
    title: "審計委員會",
    backgroundImage: BgImage07,
    url: "/sustainability/audit-committee",
  },
];

const cards3 = [
  {
    title: "利害關係人議合",
    backgroundImage: BgImage08,
    url: "/sustainability/stakeholder-engagement",
  },
  {
    title: "重大主題",
    backgroundImage: BgImage09,
    url: "/sustainability/key-topics",
  },
  {
    title: "利害關係人問卷",
    backgroundImage: BgImage10,
    url: "/sustainability/survey",
  },
];

const cards4 = [
  {
    title: "智慧財產權管理",
    backgroundImage: BgImage15,
    url: "/sustainability/intellectual-property",
  },
  {
    title: "風險管理",
    backgroundImage: BgImage11,
    url: "/sustainability/risk-management",
  },
  {
    title: "資訊安全管理",
    backgroundImage: BgImage12,
    url: "/sustainability/information-security",
  },
];

const cards5 = [
  {
    title: "供應鏈管理",
    backgroundImage: BgImage13,
    url: "/sustainability/supply-chain",
  },
  {
    title: "產品與客戶服務",
    backgroundImage: BgImage14,
    url: "/sustainability/product-customer-service",
  },
];

const SustainabilityPage: React.FC = () => {
  const stats = [
    {
      label: "第九屆公司治理評鑑得分",
      num: 94.5,
      suffix: "分",
      color: "#3B79E4",
    },
    {
      label: "上市公司排名列入之級距",
      num: 6,
      suffix: "%",
      staticString: "6% ~ 20%",
      color: "#3B79E4",
    },
    {
      label: "2022年設置",
      num: 24,
      suffix: "次",
      staticString: "永續發展委員會",
      color: "#3B79E4",
    },
  ];


  return (
    <div>
      <HeroSection
        title="永續經營"
        backgroundImage={BgImage04}
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
            <H2 text={"永續發展政策"} />
            <P
              text={
                "本公司於從事企業經營同時，積極實踐永續發展，以符合平衡環境，社會及公司治理發展之國際趨勢，並透過企業公民擔當，提升國家經濟貢獻，改善員工、社區及社會之生活品質，促進以企業責任為本之競爭優勢。此守則已於2022年01月24日經董事會通過訂定，並將相關規範揭露於公司網站及公開資訊觀測站中。負責統籌推動各項永續發展相關事務，並由全體員工共同執行遵守。"
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
                  <p className="text-xl font-semibold text-blue mb-4">
                    落實公司治理
                  </p>
                  <Desc
                    text={
                      "遵循法令規章，秉持誠信原則，強化董事職能，深耕企業文化，健全公司發展，實踐永續經營。"
                    }
                  />
                </div>
                <div className="col-span-3 w-full bg-gray-100 rounded-xl flex justify-center items-center aspect-square ">
                  <FontAwesomeIcon icon={faGavel} className="h-[60px]" />
                </div>
              </div>
              <div className="grid grid-cols-8 gap-8 relative group">
                <div className="border-l-[1px] border-t-[1px] border-[#D9D9D9] w-[60%] h-[50px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#D9D9D9] absolute right-0 top-0 text-sm -translate-y-1/2 translate-x-1/2"
                  />
                </div>
                <div className="col-span-3 w-full bg-[#EBF2FC] rounded-xl aspect-square flex justify-center items-center ">
                  <FontAwesomeIcon icon={faEarth} className="h-[60px]" />
                </div>
                <div className="col-span-5 content py-8">
                  <p className="text-xl font-semibold text-blue mb-4">
                  發展永續環境
                  </p>
                  <Desc
                    text={
                      "落實產業管理，響應節能減碳，提升資源再利用，降低環境負荷。"
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
                  <p className="text-xl font-semibold text-blue mb-4">
                  維護社會公益
                  </p>
                  <Desc
                    text={
                      "保障員工權益，推動公益活動，參與災難救助，贊助體育活動，提升教育文化，支持弱勢團體。"
                    }
                  />
                </div>
                <div className="col-span-3 w-full bg-[#EBF2FC] rounded-xl aspect-square flex justify-center items-center ">
                  <FontAwesomeIcon icon={faHandsHelping} className="h-[60px]" />
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
                  <FontAwesomeIcon icon={faChartBar} className="h-[60px]" />
                </div>
                <div className="col-span-5 py-8 content">
                  <p className="text-xl font-semibold  text-blue mb-4">
                  加強資訊揭露
                  </p>
                  <Desc
                    text={
                      "強化營運效率，提升財務透明，尊重利害關係，即時資訊公開，提供投資判斷，版帳股東權益，降低籌資成本，俾利國際接軌，增進企業價值。"
                    }
                  />
                </div>
              </div>
              <div className="text-blue rounded-full bg-white font-bold text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] flex items-center justify-center">
                永續
                <br />
                經營
              </div>
            </div>
          </Section>

          <Section>
            <H2 text={"永續發展聲明"} />
            <ListTab goals={goals} color="#3B79E4" />
          </Section>

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

            <H3 text={"功能性委員會"} />
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

            <H3 text={"利害關係人專區"} />
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
            <H3 text={"科技風險"} />
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
            <H3 text={"永續供應鏈"} />
            <div className="flex flex-wrap gap-x-8 gap-y-8 mt-8">
              {cards5.map((card, index) => (
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

export default SustainabilityPage;
