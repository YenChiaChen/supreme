import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import TabContainer from "../../components/ui/TabContainer";
import cols from "../../assets/img/testing/testcol.png";
import hakimo from "../../assets/img/testing/hakimo.png";
import hakimoProcess from "../../assets/img/testing/group64.png";
import hakimoPercent from "../../assets/img/testing/hakimoPercent.png";
import energycol from "../../assets/img/testing/energycol.png";
import WaterConsumptionChart from "../../components/charts/WaterConsumptionChart";

import {
  faComputer,
  faLightbulb,
  faPlugCircleXmark,
  faPowerOff,
  faStairs,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBinBottlesRecycle,
  faBoxHeart,
  faMemoCircleCheck,
  faPalletBoxes,
} from "@fortawesome/pro-solid-svg-icons";
import SlideUpList from "../../components/ui/SlideUpList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabContainerIcon from "../../components/ui/TabContainerIcon";
const data = [
  { year: "2019", consumption: 0.532 },
  { year: "2020", consumption: 0.654 },
  { year: "2021", consumption: 0.819 },
  { year: "2022", consumption: 2.867 },
  { year: "2023", consumption: 3.111 },
];
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
    { label: "永續共生", href: "/symbiosis" },
    { label: "能源與廢棄物管理" },
    { label: "能源管理" },
  ];

  const goals2 = [
    "辦公室無紙化",
    "運輸棧板重複利用",
    "落實垃圾分類",
    "產品不過度包裝",
  ];
  const icons = [
    <FontAwesomeIcon icon={faMemoCircleCheck} className="h-[50px]" />,
    <FontAwesomeIcon icon={faPalletBoxes} className="h-[50px]" />,
    <FontAwesomeIcon icon={faBinBottlesRecycle} className="h-[50px]" />,
    <FontAwesomeIcon icon={faBoxHeart} className="h-[50px]" />,
  ];

  const A1: React.FC = () => (
    <>
      <p className="my-6 content">
        倉儲中心原使用木棧板，為減少廢棄棧板數量，於2017年改購置鐵塑棧板使廢棄棧板量大幅減少，截至2022年無再採購存儲作業所需棧板，往年進貨所乘載貨物的木製棧板也持續回收再出貨利用。
      </p>
    </>
  );

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
          
      <img src={cols} className="w-full mt-md" alt="Energy " />
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
        </div>
      </div>
    </div>
  );
};

export default EnergyManagement;
