import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import TestImage from "../../assets/img/testing/testcols3.png";
import Img01 from "../../assets/img/testing/2022-1.png";
import Img02 from "../../assets/img/testing/2022-2.png";
import Img03 from "../../assets/img/testing/2022-3.png";
import CardGrid from "../../components/ui/CardGrid";
import TabContainer from "../../components/ui/TabContainer";
import HoverCard from "../../components/ui/HoverCard";
import { faUserTie, faRankingStar, faBook, faBuilding } from "@fortawesome/free-solid-svg-icons";


const cardData = [
  {
    title: "文化發展",
    description:
      "強調組織價值觀、企業文化和倫理道德的培養，確立員工對組織的認同感，並促進積極的工作態度和合作精神。",
    icon: faBuilding,
  },
  {
    title: "職能發展",
    description:
      "提升員工專業領域技能和知識，確保員工得以勝任並不斷進步。",
    icon: faBook,
  },
  {
    title: "主管培育",
    description:
      "針對管理階層人才，培養領導能力、人際關係和決策技能。",
    icon: faUserTie,
  },
  {
    title: "競爭力發展",
    description:
      "協助員工提升職場能力和競爭力 可以解決工作場所的爭議和糾紛，避免對勞雇 / 勞資關係造成負面影響。",
    icon: faRankingStar,
  },
];



const ShortTermGoals: React.FC = () => (
  <>
    <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
  </>
);

const MidTermGoals: React.FC = () => (
  <>
    <img src={Img01} alt="testing" className="w-full mt-md" />
    <img src={Img02} alt="testing" className="w-full mt-md" />
    <img src={Img03} alt="testing" className="w-full mt-md" />
  </>
);

const LongTermGoals: React.FC = () => (
  <>
    <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
  </>
);

const TalentDevelopment: React.FC = () => {
  const stats = [
    { label: "提供人資部門專業相關之外部訓練", num: 44.5, suffix: "小時" },
    { label: "2022年平均調薪幅度", num: 5, suffix: "%" },
    { label: "提供職醫 / 職護臨場諮詢服務", num: 24, suffix: "次" },
  ];

  const breadcrumbItems = [
    { label: "幸福企業", href: "/happy-enterprise" },
    { label: "人才培育與留任" },
  ];

  const cards = [
    {
      title: "教育",
      subtitle: "訓練",
      span: 4,
      description:
        "注重「標竿學習」的精神，以開放接納的胸襟，盡情學習產業內外最佳的經驗、共通技術流程指導、管理經驗技巧教授及產品/服務發展趨勢，使學習充分發揮效益於策略目標之達成。",
    },
    {
      title: "良師",
      subtitle: "益友",
      span: 4,
      description:
        "強調「輔助教育」的精神，針對各自不同的專業領域，透過資深及專業能手加強對業務需求的深度教導及諮詢，縮短差異化及學習歷程。",
    },
    {
      title: "專家",
      subtitle: "養成",
      span: 4,
      description:
        "強調「深度發展」的精神，透過職能發展，協助同仁不斷的在專業上自我成長，以提昇工作績效，並推動公司的整體競爭優勢。",
    },
  ];

  const goals = ["2023", "2022", "2021"];

  return (
    <div>
      <HeroBanner
        title="幸福企業"
        description={`員工是公司營運最重要的資產。至上致力於打造能讓員工安心、幸福共融的工作環境。
                      遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage="https://picsum.photos/1920/1080/?blur"
      />
      <div className="bg-white rounded-t-[50px] w-full  -translate-y-[50px]">
        <div className="container mx-auto -translate-y-[50px] px-8">
          <StatDisplay stats={stats} />
        </div>

        <div className="container mx-auto px-[10%] mt-8">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">多元訓練課程</p>
          <p className="mt-md content">
            秉持「攜手學習，共同成長」的人才培育理念，本公司注重員工的專業技能和職業發展，提供多元化的內部培訓課程，包括專業技能培訓、管理培訓、語言培訓和高階主管訓練等，針對管理階層及一般員工的不同能力及專業需求設計各類課程；同時積極鼓勵員工參加外部專業課程和研討會等進修，幫助員工增加知識和技能。
          </p>
          <p className="mt-md content">
            2022 年度各層級員工受訓時數共計 1,583 小時。
            為避免教育訓練的實施流於形式，或與企業目標脫節，故以企業營運目標及發展策略為藍本，以內部同仁
            實際需求為導向，提供人才養成及教育諮詢等專業服務，透過各項教育訓練活動的推展，塑造公司為不斷創新改善的「學習型組織」。
            本公司的人才培育制度不僅關注教育訓練本身，也關注員工的職業發展和福利。因此，相關政策通常包括薪資福利、職業發展計劃、工作彈性、員工關懷和支持等方面，以確保員工在學習和發展方面得到全面的支持和保障，以貫徹「人才為本」的企業文化。
          </p>
          <p className="mt-xl text-center sub-title">人才培育之三項層次</p>
          <CardGrid cards={cards} />

          <p className="mt-xl text-center sub-title">人才培育之四大課程類別</p>
          {/* <img src={TestImage} alt="testing" className="w-full mt-md" /> */}
          
          <div className="w-full flex mt-md justify-between gap-4">
            {cardData.map((data, index) => (
              <HoverCard key={index} data={data} />
            ))}
          </div>
          <p className="mt-xl text-center sub-title">多元職涯發展</p>
          <p className="mt-md content">
            本公司十分重視員工之培訓和學習計劃，期望能和員工以長遠的目標共同成長，因此提供職業規劃和發展計劃，協助員工確立長期職業發展目標和方向。提供內部調動和轉職機會，讓員工可以在公司內部尋找新的職業發展機會，包括跨部門調動、工作輪調、跨國調動等。倘若當公司面臨需要進行組織重組或裁員時，公司會提供適應性培訓和協助，如職業轉型培訓及就業輔導等，確保員工能夠順利過渡到新的工作環境中。
          </p>
          <p className="mt-xl text-center sub-title">年度執行情形報告</p>
          <TabContainer goals={goals}>
            <div data-goal="2023">
              <ShortTermGoals />
            </div>
            <div data-goal="2022">
              <MidTermGoals />
            </div>
            <div data-goal="2021">
              <LongTermGoals />
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default TalentDevelopment;
