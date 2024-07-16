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
import Img01 from "../../assets/img/testing/greenhouse-gases-01.png";
import Img02 from "../../assets/img/testing/greenhouse-gases-02.png";
import Img03 from "../../assets/img/testing/greenhouse-gases-03.png";
import {
  faBinBottlesRecycle,
  faBoxHeart,
  faLightbulb,
  faLightbulbOn,
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
const GreenhouseGases: React.FC = () => {
  const Goal2022: React.FC = () => (
    <>
      <p className="my-6 content">
        2022 年度依循溫室氣體盤查議定書 ( GHG Protocol )
        指引進行盤查作業，溫室氣體總排放量 ( 範疇一 + 範疇二 ) 為 256.829 公噸
        CO2e，主要來自於範疇二之電力排放，占比為 94.29%，其餘溫室
        氣體排放量來源為範疇一之公務車燃料使用、冷媒、滅火器及化糞池，占比為
        5.71%。 <br /><br />與 2021 年相比呈現微幅增加情形，主要係因為今年新增盤查範圍及
        COVID-19
        疫情趨緩辦公室用電及營運活動增加。為了瞭解企業營運過程中，價值鏈上下游活動的碳排放，針對範疇三進行自主性盤查，期望透過完整的溫室氣體盤查作業，鑑別出最顯著的排放源，為溫室氣體減量與氣候轉型策略提供基礎數據。<br /><br />
        2022 年範疇三溫室氣體總量為 1,723.624 公噸
        CO2e，排放源項目包含：與燃料和能源相關活動的排放 ( 未涵蓋在範疇一或二
        )、運輸產生之間接溫室氣體排放 ( 含「貨物上 /
        下游運輸與分配」、「商務旅行」)，其中以下游運輸和配送產生的排放為最
        大量，占範疇三總排放量之 76.41 %。
      </p>
    </>
  );

  const Goal2023: React.FC = () => (
    <>
      <p className="my-6 content">
        本公司為了善盡地球公民的責任,響應國家淨零碳排之目標,自 2021
        年起開始自主性溫室氣體盤查,主動揭露溫室氣 體排放資訊,2023
        年度依循溫室氣體盤查議定書(GHG
        Protocol)指引進行盤查作業,溫室氣體總排放量(範疇一+範疇 二)為 299.712
        公噸 CO2e,主要來自於範疇二之電力排放,占比為
        93.51%,其餘溫室氣體排放量來源為範疇一之公務車
        燃料使用、冷媒、滅火器及化糞池,占比為 6.49%。與 2022
        年相比呈現微幅增加情形,主要係因營收成長人員相對增加,
        為因應實質需求,資訊部門擴增伺服器等硬體設備,以致用電量增加。<br /><br />
        為了瞭解企業營運過程中,價值鏈上下游活動的碳排放,針對範疇三進行自主性盤查,期望透過完整的溫室氣體盤查
        作業,鑑別出最顯著的排放源,為溫室氣體減量與氣候轉型策略提供基礎數據。2023
        年範疇三溫室氣體總量為 1,289.207 公噸
        CO2e,排放源項目包含:與燃料和能源相關活動的排放(未涵蓋在範疇一或二)、運輸產生之間接溫室氣體排放(含
        「貨物上/
        下游運輸與分配」、「商務旅行」),其中以下游運輸和配送產生的排放為最大量,占範疇三總排放量之
        69.51%。
      </p>
    </>
  );
  const CC: React.FC = () => (
    <>
      <img src={Img03} className="max-w-[700px] mt-md" alt="Energy " />
    </>
  );

  const goals = ["2023", "2022"];

  const breadcrumbItems = [
    { label: "永續共生", href: "/symbiosis" },
    { label: "溫室氣體＆行動方案" },
  ];

  return (
    <div>
      <HeroBanner
        title="溫室氣體＆行動方案"
        description={`為了善盡地球公民的責任，響應國家淨零碳排之目標，\n自 2020 年起本公司開始自主性溫室氣體盤查，主動揭露溫室氣體排放資訊。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center mb-12">
            範疇一及範疇二溫室氣體排放統計
          </p>
          <img src={Img01} className="w-full mt-md" alt="Energy " />

          <TabContainer goals={goals}>
            <div data-goal="2023">
              <Goal2023 />
            </div>
            <div data-goal="2022">
              <Goal2022 />
            </div>
          </TabContainer>

          <p className="mt-xl sub-title text-center mb-12">
            範疇一及範疇二之減量行動方案
          </p>
          <div className="flex justify-center gap-8">
            <div className="bg-blue p-12 rounded-xl flex-1 basis-1/2">
              <div className="flex flex-col text-dark_blue gap-6  text-center">
                <FontAwesomeIcon icon={faLightbulbOn} className="h-[80px]" />
                <p>督促大樓公共區域採用節能設備</p>
              </div>
            </div>
            <div className="bg-blue p-12 rounded-xl flex-1 basis-1/2">
              <div className="flex flex-col text-dark_blue gap-6  text-center">
                <FontAwesomeIcon icon={faLightbulbOn} className="h-[80px]" />
                <p>鼓勵搭乘大眾交通運輸或共乘</p>
              </div>
            </div>
          </div>

          <p className="mt-xl sub-title text-center">
            範疇三溫室氣體排放統計（自願揭露）
          </p>
          <img src={Img02} className="w-full mt-md" alt="Energy " />

          <p className="mt-xl sub-title text-center mb-12">
            範疇三減量行動方案
          </p>
          <div className="flex justify-center gap-8">
            <div className="bg-blue p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-dark_blue gap-6 text-center">
                <FontAwesomeIcon icon={faLightbulbOn} className="h-[80px]" />
                <p>持續投入尋找新綠能產業代理機會</p>
              </div>
            </div>
            <div className="bg-blue p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-dark_blue gap-6 text-center">
                <FontAwesomeIcon icon={faLightbulbOn} className="h-[80px]" />
                <p>選擇與提供綠色服務之運輸承攬業者合作</p>
              </div>
            </div>
            <div className="bg-blue p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-dark_blue gap-6 text-center">
                <FontAwesomeIcon icon={faLightbulbOn} className="h-[80px]" />
                <p>評估採購綠電或購買綠色憑證</p>
              </div>
            </div>
            <div className="bg-blue p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-dark_blue gap-6 text-center">
                <FontAwesomeIcon icon={faLightbulbOn} className="h-[80px]" />
                <p>產品出口合併提貨減少車輛往返</p>
              </div>
            </div>
          </div>

          <p className="mt-xl sub-title text-center mb-12">
            溫室氣體盤查外部查證
          </p>
          <TabContainer goals={goals}>
            <div data-goal="2023">
              <CC />
            </div>
            <div data-goal="2022">
              <CC />
            </div>
            <div data-goal="2021">
              <CC />
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default GreenhouseGases;
