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
const WasteManagement: React.FC = () => {
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
    { label: "永續共生", href: "/symbiosis" },
    { label: "能源與廢棄物管理" },
    { label: "廢棄物管理" },
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
        title="廢棄物管理"
        description={`本公司以追求能源與資源最佳使用效率作為努力目標，\n因此，持續執行節電措施及提高能源效率，同時思 考未來如何增加綠色能源的比例。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

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
          <p className="mt-md content ">
            本公司於 2021
            年因應永續議題後,同仁對於永續有更深層認知,將「永續環境」概念落實於日常作業中;2023
            年底更進一步將事業廢棄物進行更細部的分類,將組織中的廢棄物依照環境部廢棄物的分類加以區分後,由權責單位自訂週期以實秤方式取得廢棄物重量,並委外交由合規之清運公司處置;藉著上下游各盡其責,共同提升廢棄物回收的成果及效益,為了落實隨手做環保理念,於
            2023
            年第四季由物流倉庫將事業廢棄物的包材進行分類,並將積極有效控管存貨去化,減少
            電子零件報廢品,以減少混合五金廢料,針對有害廢棄物 E-0217
            所委託的甲級清運廠商,建立回報機制或監督機制,確保
            廠商安全合法的執行廢棄物處理。
          </p>
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
          <p className="mt-xl sub-title text-center">廢棄物報廢流程</p>
        </div>

        <img src={hakimoProcess} className="w-full mt-md" alt="Energy " />
        <div className="container mx-auto px-[10%]">
          <p className="mt-xl sub-title text-center">廢棄物減量</p>
          <p className="mt-md content ">
            為減少廢棄物之產生，除宣導減少資源浪費，亦積極做好垃圾分類，物流作業所需包裝材料，例如紙箱、
            填充物及泡棉等，均回收再利用於出貨包裝，落實資源回收再利用政策，對於回收之廢棄物均採集中式管理，
            定期記錄廢棄物數量與清運數據，並委託合格之廢棄物回收廠商進行處置。
          </p>

          <TabContainerIcon goals={goals2} icons={icons}>
            <div data-goal="辦公室無紙化">
              <A1 />
            </div>
            <div data-goal="運輸棧板重複利用">
              <A1 />
            </div>
            <div data-goal="落實垃圾分類">
              <A1 />
            </div>
            <div data-goal="產品不過度包裝">
              <A1 />
            </div>
          </TabContainerIcon>
          <p className="mt-xl sub-title text-center">廢棄物減量專案</p>
          <img src={energycol} className="w-full mt-md" />
        </div>
      </div>
    </div>
  );
};

export default WasteManagement;
