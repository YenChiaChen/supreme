import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import TabList from "../../components/ui/TabList";
import HoverCard from "../../components/ui/HoverCard";
import Leaf from "../../assets/img/bg/green-leaf.png";
import {
  faUsersLine,
  faPeopleArrows,
  faPersonChalkboard,
  faPeoplePulling,
  faHandshake,
  faHandHoldingDollar,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

];

const SymbiosisPage: React.FC = () => {
  const stats = [
    { label: "提供人資部門專業相關之外部訓練", num: 44.5, suffix: "小時" },
    { label: "2022年平均調薪幅度", num: 5, suffix: "%" },
    { label: "提供職醫 / 職護臨場諮詢服務", num: 24, suffix: "次" },
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
    { label: "永續共生", href: "/symbiosis" },
    { label: "總覽" },
  ];

  return (
    <div>
      <HeroBanner
        title="永續共生"
        description={`致力環境保護發展，守護每位員工權益， 承諾給予社會正面價值。`}
        backgroundImage={Leaf}
      />
      <div className="bg-white rounded-t-[50px] w-full  -translate-y-[80px]">
        <div className="container mx-auto px-[10%] pt-24">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">藍圖展望 成為上至上</p>
          <p className="mt-md content">
            至上集團經歷過惡劣環境的淬鍊下，經過多年持續穩定的發展，在區域經濟歐、美、日、韓、台、中國等地已建立了非常堅實的基礎，今後仍持續追求更廣闊的藍圖，擴展服務範圍至其他區域。至上集團由過去單純的零件代理商，拓展業務至以市場為導向的方案提供商，系統雲端應用商並由點、線、面的企業結盟進階到板塊商業領域的領導地位。
          </p>
          <p className="mt-xl text-center sub-title">點亮永續</p>
          {/* <img src={TestImage} alt="testing" className="w-full mt-md" /> */}

          <div className="w-full flex mt-md justify-between gap-4">
            {cardData.map((data, index) => (
              <HoverCard key={index} data={data} width="33%" />
            ))}
          </div>


         
        </div>
      </div>
    </div>
  );
};

export default SymbiosisPage;
