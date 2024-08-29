
import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import TabList from "../../components/ui/TabList";
import HoverCard from "../../components/ui/HoverCard";
import {
  faUsersLine,
  faPeopleArrows,
  faPersonChalkboard,
  faPeoplePulling,
  faHandshake,
  faHandHoldingDollar,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import Bg from '../../assets/img/bg/subPage/永續經營/公司治理.jpg'
import TempImg from '../../assets/img/testing/template.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  H2,
  H3,
  P,
  List,
  CardGrid,
  Container,
  Section,
  BgSection,
  LabeledContentTable,
  Image,
  Gallery,
  Table2,
} from "../../components/ui";

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
    { label: "2023 年每人平均受訓時數", num: 17.81, suffix: "小時", color:"#FF507C" },
    { label: "2023 年平均調薪幅度", num: 2.7, suffix: "%", color:"#FF507C"  },
    { label: "2023 年提供職醫 / 職護臨場諮詢服務", num: 39, suffix: "次", color:"#FF507C"  },
  ];
  const goals = {
    短期目標: [
      {
        title: "・員工滿意度調查",
        description: "透過員工問卷調查和反饋機制了解員工需求",
      },
      { title: "・提升員工技能", description: "訂定培訓和發展計劃" },
      {
        title: "・提升員工活動參與度",
        description:
          "透過滿意度調查，了解員工關注的議題，安排多元化活動內容以提升員工參與活動人數。",
      },
    ],
    中期目標: [
      { title: "・增強團隊合作", description: "組織團隊建設活動" },
      { title: "・優化工作流程", description: "實施新的管理系統以提升效率" },
    ],
    長期目標: [
      { title: "・企業文化建設", description: "建立和傳播企業核心價值" },
      { title: "・市場拓展", description: "擴展到新市場和地區" },
    ],
  };

  const breadcrumbItems = [
    { label: "幸福企業", href: "/happy-enterprise" },
    { label: "總覽" },
  ];

  return (
    <div>
      <HeroBanner
        title="幸福企業"
        description={`員工是公司營運最重要的資產。至上致力於打造能讓員工安心、幸福共融的工作環境。
                      遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={Bg}
      />
      <div className="bg-white rounded-t-[50px] w-full  -translate-y-[50px]">
        <div className="container mx-auto -translate-y-[50px] px-8">
          <StatDisplay stats={stats} />
        </div>

        <Container>
          <Breadcrumbs items={breadcrumbItems} />
          <H2 text={'幸福企業 員工至上'} />
          <P text={'員工是公司營運最重要的資產。至上致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。\n\n堅決禁止任何形式的威脅、暴力或肢體恐嚇的行為，同時積極宣導「性別工作平等法」和「性騷擾防治法」，保護員工免於遭受歧視及騷擾之情形。 同樣至上重視職場環境的平等多元化，承諾員工不會因種族、階級、語言、宗教、黨派、性別、性傾向、 年齡、婚姻、容貌等原因遭受就業歧視。為了進一步滿足員工的需求及反饋，成立職工福利委員會，提供多種優渥福利措施，為員工打造一個幸福企業。'} />
          <Image src={TempImg} alt='Template Image' />
        

          <p className="mt-xl text-center sub-title">政策制度</p>
          {/* <img src={TestImage} alt="testing" className="w-full mt-md" /> */}

          <div className="w-full flex mt-md justify-between gap-4">
            {cardData.map((data, index) => (
              <HoverCard key={index} data={data} />
            ))}
          </div>

          <p className="mt-xl text-center sub-title">至上給員工永遠的承諾</p>
          <p className="mt-md content">
            尊重勞工權益並遵守勞動法規，提供公平的薪資、福利、職業安全和健康環境等。同時確保每
            一位員工均有平等的工作機會；建立有效的溝通管道，重視並聆聽員工意見。我們亦承諾提供員工
            持續學習和職業發展的機會，提供多元化培訓課程以提升員工技能和增進員工價值。
          </p>

          <div className="grid grid-cols-2 mt-36 gap-4 relative  text-[#333333]">
            <div className="grid grid-cols-8 gap-8 group sss relative">
              <div className="absolute left-0 top-0 px-4 py-2 bg-orange text-white rounded-xl -translate-y-[170%] z-10 opacity-0 group-hover:opacity-100 duration-300 delay-500">勞資關係</div>
              <div className="draw-border w-[70%] h-[50px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full"></div>
              <div className="col-span-5 content pb-8 ">
                人力資源部同仁參與勞資關係培訓課程，加強對勞資關係的認識和意識，提升解決紛爭之能力和效率，增進公司內部凝聚力和穩定性。
              </div>
              <div className="col-span-3 w-full bg-gray rounded-xl flex justify-center items-center aspect-square group-hover:scale-[1.05] duration-300 group-hover:shadow-xl">
                <FontAwesomeIcon icon={faHandshake} className="h-[60px]" />
              </div>
            </div>
            <div className="grid grid-cols-8 gap-8 sss relative group">
            <div className="absolute right-0 top-0 px-4 py-2 bg-orange text-white rounded-xl -translate-y-[170%] z-10 opacity-0 group-hover:opacity-100 duration-300 delay-500">薪資待遇</div>
              <div className="draw-border w-[70%] h-[50px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full -scale-x-100 "></div>
              <div className="col-span-3 w-full bg-blue rounded-xl aspect-square flex justify-center items-center group-hover:scale-[1.05] duration-300 group-hover:shadow-xl">
                <FontAwesomeIcon icon={faHandHoldingDollar} className="h-[60px]" />
              </div>
              <div className="col-span-5 content pb-8">
              給予員工公正的薪資待遇和福利，提高員工的工作滿意度，減少員工流失率，以增強公司的競爭優勢和品牌形象。
              </div>
            </div>
            <div className="grid grid-cols-8 gap-8 sss relative group">
              <div className="absolute left-0 bottom-0 px-4 py-2 bg-orange text-white rounded-xl translate-y-[170%] z-10 opacity-0 group-hover:opacity-100 duration-300 delay-500">尊重平等</div>
              <div className="draw-border w-[70%] h-[50px] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full -scale-y-100"></div>
              <div className="col-span-5 content flex items-end">
              建立公正的勞動法制和勞資協商機制，促進勞雇雙方的尊重和平等，提高企業的社會形象和公信力。
              </div>
              <div className="col-span-3 w-full bg-blue rounded-xl aspect-square flex justify-center items-center group-hover:scale-[1.05] duration-300 group-hover:shadow-xl">
                <FontAwesomeIcon icon={faScaleBalanced} className="h-[60px]" />
              </div>
            </div>
            <div className="grid grid-cols-8 gap-8 sss relative group">
              <div className="absolute right-0 bottom-0 px-4 py-2 bg-orange text-white rounded-xl translate-y-[170%] z-10 opacity-0 group-hover:opacity-100 duration-300 delay-500">健康諮詢</div>
              <div className="draw-border w-[70%] h-[50px] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full -scale-x-100 -scale-y-100"></div>
              <div className="col-span-3 w-full bg-gray rounded-xl aspect-square  flex justify-center items-center group-hover:scale-[1.05] duration-300 group-hover:shadow-xl">
                <FontAwesomeIcon icon={faPersonChalkboard} className="h-[60px]" />
              </div>
              <div className="col-span-5 content  flex items-end">
              提供員工健康檢查、專業醫護諮詢及舉辦相關講座。 編訂年度訓練計劃並落實實施，以提升員工技能水平，提高工作效率。
              </div>
            </div>
            <div className="rounded-full bg-white sub-title absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] flex items-center justify-center">
              員工
              <br />
              至上
            </div>
            
          </div>

          <p className="mt-48 text-center sub-title">未來規劃與目標</p>
          <TabList goals={goals} />

        </Container>
        </div>
        
      </div>
      
  );
};

export default EnterprisePage;
