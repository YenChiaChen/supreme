import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import TabContainer from "../../components/ui/TabContainer";
import cols from "../../assets/img/testing/testcol.png";
import hakimo from "../../assets/img/testing/hakimo.png";
import hakimoPercent from "../../assets/img/testing/hakimoPercent.png";
import { faAlarmClock, faTennisBall } from "@fortawesome/pro-solid-svg-icons"
import {
  faComputer,
  faLightbulb,
  faPlugCircleXmark,
  faPowerOff,
  faStairs,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import SlideUpList from "../../components/ui/SlideUpList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EnergyManagement: React.FC = () => {
  const ShortTermGoals: React.FC = () => (
    <>
      <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
    </>
  );

  const MidTermGoals: React.FC = () => (
    <>
      <p className="mt-md content">
        2022 年各營運據點之能源消耗總量為 1,954.23
        GJ，外購電力占大宗，主要用於辦公事務設備的電力消耗占 90.15
        %；其餘為公務車之汽油使用占
        9.85%。台北總部能源消耗占90.28%，其餘新莊、龍潭及台南三處辦事處因佔地面積小及人員較少，故合計占比僅有
        6%。2022年度能源消耗量高於以往年度，能源密集度為2.48 GJ /
        新台幣億元，主要係今年新增盤查範圍，以致用電量增加，加上COVID-19疫情趨緩，商業往來恢復正常，公務車使用次數增加，故汽油耗用量大幅增加。
      </p>
      <img src={cols} className="w-full mt-md" alt="Energy " />
    </>
  );

  const LongTermGoals: React.FC = () => (
    <>
      <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
    </>
  );

  const MidTermGoals2: React.FC = () => (
    <>
      <img src={hakimoPercent} className="w-full mt-md" alt="Energy " />
    </>
  );

  const items2 = [
    {
      id: 1,
      content:
        "以省電 LED 應用產品為主，採用節能標章高效率照明燈具及電子式安定器、出口指示燈、避難方向指示燈、消防指示燈等，並宣導隨手關燈，並持續與大樓管委會合作推動更換公共區域及地下停車場照明設備。",
      title: "・汰換耗能燈具",
      icon: faLightbulb,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 2,
      content: "使用有標示一級節能標誌之電器設備等。",
      title: "・使用節能設備",
      icon: faComputer,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 3,
      content:
        "辦公事務機器設定省電模式，規定三天以上之假期，電器具或電腦資訊設備需強制關閉主機及周邊設備電源，以減少待機電力之浪費。",
      title: "・減少電力消耗",
      icon: faPlugCircleXmark,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 4,
      content: "鼓勵同仁多走樓梯，少搭電梯。",
      title: "・減少使用電梯",
      icon: faStairs,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 5,
      content: "溫度設定為26～28度，且注意門窗有無確實關閉。",
      title: "・夏日空調定溫",
      icon: faWind,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 6,
      content: "提倡午休時段辦公室關燈。",
      title: "・午休關燈節能",
      icon: faPowerOff,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
  ];

  const goals = ["2023", "2022", "2021"];

  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "公司治理" },
  ];

  return (
    <div>
      <HeroBanner
        title="能源管理"
        description={`本公司以追求能源與資源最佳使用效率作為努力目標，\n因此，持續執行節電措施及提高能源效率，同時思 考未來如何增加綠色能源的比例。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">能源管理</p>
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

          <p className="mt-xl sub-title text-center mb-12">
            減少能源消耗之具體行動方案
          </p>
          <SlideUpList items={items2} />
          <p className="mt-xl sub-title text-center">廢棄物管理</p>
          <p className="mt-md content ">
            本公司主要從事半導體相關零組件代理經銷業務，未有生產製造的營運活動，各營運據點均為辦公大樓，
            因此在營運過程中產生之廢棄物，多為員工在辦公室工作時產生之事務類廢棄物與生活廢棄物，是由辦公大樓
            管委會設置垃圾分類集中區域統一處理；內湖總部倉儲中心不定期產生棧板、包材、電子零件等相關之廢棄物，
            此類廢棄物屬於可回收廢棄物，係委託合法之廢棄物清運商，將此類物品予以回收處理。
          </p>
          <p className="mt-xl text-xl font-bold text-orange tracking-wider">
            價值鏈廢棄物流向圖：
          </p>
          <img src={hakimo} className="w-full mt-md" alt="Energy " />
          <p className="mt-xl sub-title text-center">廢棄物產出結構</p>
          <TabContainer goals={goals}>
            <div data-goal="2023">
              <ShortTermGoals />
            </div>
            <div data-goal="2022">
              <MidTermGoals2 />
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

export default EnergyManagement;
