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
const WaterManagement: React.FC = () => {
  const ShortTermGoals: React.FC = () => (
    <>
      <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
    </>
  );

  const MidTermGoals: React.FC = () => (
    <>
      <p className="mt-md content">
        各營運據點水資源主要用途為辦公區域空調循環用水及員工生活用水，排放水主要為員工生活污水，經由辦公大樓污水管線後進入公共下水道，空調用水之蒸散則為主要耗用原因，因排水量及耗水量無有效的統計方式，故僅揭露取水量。2022
        年取水量為2.867百萬公升，相較2021年增加2.048百萬公升，主要原因係今年增加盤查範圍及因COVID-19
        疫情趨緩減少居家辦公天數，故取水量隨之增加。
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
    { label: "水資源管理" },
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
        title="水資源管理"
        description={`本公司以追求能源與資源最佳使用效率作為努力目標，\n因此，持續執行節電措施及提高能源效率，同時思 考未來如何增加綠色能源的比例。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">水資源管理</p>
          <p className="mt-md content ">
            本公司共有四個營運據點，分別為台北總部、新莊、龍潭及台南三個辦事處，各營運據點取水來源均為各地所屬自來水公司，未取得地表水、地下水、海水、產出水等，也無自具有水資源壓力的地區取水。本公司採用Aqueduct
            Water Risk
            Atlas工具，三個辦事處之水資源壓力分析結果皆屬「Low-Medium(1-2)」。
            <br />
            <br />
            註：WATERRISKATLAS：https://reurl.cc/yyjme2
          </p>
          <p className="mt-xl sub-title text-center">水資源使用統計</p>
          <p className="note text-[#a6a6a6] text-right mt-md">
            單位：百萬公升 ( Million Litres )
          </p>
          <div style={{ height: "400px" }}>
            <WaterConsumptionChart data={data} />
          </div>
          <p className="note text-[#a6a6a6] mt-md">
            註 1：盤查邊界涵蓋台北總部、新莊、龍潭及台南三處辦事處。
          </p>

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

export default WaterManagement;
