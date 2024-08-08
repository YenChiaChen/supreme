import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續共生/溫室氣體&行動方案.jpg";
import TabContainer from "../../components/ui/TabContainer";

import {
  faLightbulbOn,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BarChart from "./GasChart";
import Table from "../../components/ui/Table";
import { GasChart2 } from "./GasChart";
import { faBolt, faBus, faLeaf, faShippingFast, faTruck } from "@fortawesome/free-solid-svg-icons";

const GreenhouseGases: React.FC = () => {
  const Goal2022: React.FC = () => (
    <>
      <p className="my-6 content">
        2022 年度依循溫室氣體盤查議定書 ( GHG Protocol )
        指引進行盤查作業，溫室氣體總排放量 ( 範疇一 + 範疇二 ) 為 256.829 公噸
        CO2e，主要來自於範疇二之電力排放，占比為 94.29%，其餘溫室
        氣體排放量來源為範疇一之公務車燃料使用、冷媒、滅火器及化糞池，占比為
        5.71%。 <br />
        <br />與 2021 年相比呈現微幅增加情形，主要係因為今年新增盤查範圍及
        COVID-19
        疫情趨緩辦公室用電及營運活動增加。為了瞭解企業營運過程中，價值鏈上下游活動的碳排放，針對範疇三進行自主性盤查，期望透過完整的溫室氣體盤查作業，鑑別出最顯著的排放源，為溫室氣體減量與氣候轉型策略提供基礎數據。
        <br />
        <br />
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
      <p className="my-6 content">2023
        年度依循溫室氣體盤查議定書(GHG
        Protocol)指引進行盤查作業，溫室氣體總排放量(範疇一＋範疇二)為 299.712
        公噸 CO2e，主要來自於範疇二之電力排放，占比為
        93.51%，其餘溫室氣體排放量來源為範疇一之公務車
        燃料使用、冷媒、滅火器及化糞池，占比為 6.49%。與 2022
        年相比呈現微幅增加情形，主要係因營收成長人員相對增加，
        為因應實質需求，資訊部門擴增伺服器等硬體設備，以致用電量增加。
        <br />
        <br />
        為了瞭解企業營運過程中，價值鏈上下游活動的碳排放，針對範疇三進行自主性盤查，期望透過完整的溫室氣體盤查
        作業，鑑別出最顯著的排放源，為溫室氣體減量與氣候轉型策略提供基礎數據。2023
        年範疇三溫室氣體總量為 1，289.207 公噸
        CO2e，排放源項目包含:與燃料和能源相關活動的排放(未涵蓋在範疇一或二)、運輸產生之間接溫室氣體排放(含
        「貨物上/
        下游運輸與分配」、「商務旅行」)，其中以下游運輸和配送產生的排放為最大量，占範疇三總排放量之
        69.51%。
      </p>
    </>
  );

  const goals = ["2023", "2022"];

  const breadcrumbItems = [
    { label: "永續共生", href: "/symbiosis" },
    { label: "溫室氣體＆行動方案" },
  ];

  const columns = [
    { header: "類別", accessor: "item" },
    { header: "2021年", accessor: "year2021" },
    { header: "2022年", accessor: "year2022" },
    { header: "2023年", accessor: "year2023" },
  ];


  const data = [
    {
      item: "類別 3：與燃料和能源相關活動的排放（未涵蓋在範疇一或二）",
      year2021: "42.775",
      year2022: "47.390",
      year2023: "60.274",
    },
    {
      item: "類別 4：上游運輸和配送產生的排放",
      year2021: "(註4)",
      year2022: "53.172",
      year2023: "46.383",
    },
    {
      item: "類別 6：商務旅行產生的排放",
      year2021: "225.242",
      year2022: "306.120",
      year2023: "286.470",
    },
    {
      item: "類別 9：下游運輸和配送產生的排放",
      year2021: "1,232.375",
      year2022: "1,316.942",
      year2023: "896.080",
    },
    {
      item: "總計",
      year2021: "1,500.392",
      year2022: "1,723.624",
      year2023: "1,289.207",
    },
  ];
  const data2 = [
    {
      item: "範疇一：直接溫室氣體排放",
      year2021: "3.393",
      year2022: "14.654",
      year2023: "19.462",
    },
    {
      item: "範疇二：能源間接溫室氣體排放",
      year2021: "232.317",
      year2022: "242.175",
      year2023: "280.250",
    },
    {
      item: "總排放量",
      year2021: "235.710",
      year2022: "256.829",
      year2023: "299.712",
    },
    {
      item: "溫室氣體排放密集度(公噸CO 2 e /億元)",
      year2021: "0.259",
      year2022: "0.326",
      year2023: "0.465",
    },
  ];

  return (
    <div>
      <HeroBanner
        title="溫室氣體＆行動方案"
        description={`為了善盡地球公民的責任，響應國家淨零碳排之目標，\n自 2020 年起本公司開始自主性溫室氣體盤查，主動揭露溫室氣體排放資訊。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center mb-12">
            範疇一及範疇二溫室氣體排放統計
          </p>
          <BarChart />
          <Table columns={columns} data={data2} color="#3BC376" />

          <TabContainer goals={goals} tabColor="#3BC376">
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
            <div className="bg-light_green p-12 rounded-xl flex-1 basis-1/2">
              <div className="flex flex-col text-[18px] gap-6  text-center">
                <FontAwesomeIcon icon={faLightbulbOn} className="h-[80px] text-green  text-green " />
                <p>督促大樓公共區域採用節能設備</p>
              </div>
            </div>
            <div className="bg-light_green p-12 rounded-xl flex-1 basis-1/2">
              <div className="flex flex-col text-[18px] gap-6  text-center">
                <FontAwesomeIcon icon={faBus} className="h-[80px] text-green" />
                <p>鼓勵搭乘大眾交通運輸或共乘</p>
              </div>
            </div>
          </div>

          <p className="mt-xl sub-title text-center">
            範疇三溫室氣體排放統計（自願揭露）
          </p>
          <GasChart2 />
          <Table columns={columns} data={data} color="#3BC376" />

          <p className="mt-xl sub-title text-center mb-12">
            範疇三減量行動方案
          </p>
          <div className="flex justify-center gap-8">
            <div className="bg-light_green p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-[18px]  gap-6 text-center">
                <FontAwesomeIcon icon={faLeaf} className="h-[80px] text-green" />
                <p>持續投入尋找新綠能產業代理機會</p>
              </div>
            </div>
            <div className="bg-light_green p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-[18px]  gap-6 text-center">
                <FontAwesomeIcon icon={faTruck} className="h-[80px] text-green" />
                <p>選擇與提供綠色服務之運輸承攬業者合作</p>
              </div>
            </div>
            <div className="bg-light_green p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-[18px]  gap-6 text-center">
                <FontAwesomeIcon icon={faBolt} className="h-[80px] text-green" />
                <p>評估採購綠電或購買綠色憑證</p>
              </div>
            </div>
            <div className="bg-light_green p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-[18px]  gap-6 text-center">
                <FontAwesomeIcon icon={faShippingFast} className="h-[80px] text-green" />
                <p>產品出口合併提貨減少車輛往返</p>
              </div>
            </div>
          </div>

          <p className="mt-xl sub-title text-center mb-12">
            溫室氣體盤查外部查證
          </p>
          <TabContainer goals={["2023", "2022", "2021"]} tabColor="#3BC376">
            <div data-goal="2023">
              
          <div className="overflow-x-auto mt-md">
            <table className="min-w-full border-collapse">
              <tbody>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">查證機構</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">安侯建業會計師務所</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">盤查範圍</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">範疇一級範疇二</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">保證等級</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">有限確信等級</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">查驗準則</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">ISAE 3410</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">盤查報告</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"><a className="text-green font-semibold" target="_blank" href='http://www.supreme.com.tw/File/2022%E5%B9%B4%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E7%9B%A4%E6%9F%A5%E7%A2%BA%E4%BF%A1%E5%A0%B1%E5%91%8APwC.pdf'>檔案連結</a></td>
                </tr>
                
              </tbody>
            </table>
          </div>
            </div>
            <div data-goal="2022">
              
          <div className="overflow-x-auto mt-md">
            <table className="min-w-full border-collapse">
              <tbody>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">查證機構</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">資誠聯合會計師事務所 (Pwc)</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">盤查範圍</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">範疇一、二</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">保證等級</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">有限確信等級</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">查驗準則</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">ISAE 3410</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">盤查報告</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"><a className="text-green font-semibold" target="_blank" href='http://www.supreme.com.tw/File/2022%E5%B9%B4%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E7%9B%A4%E6%9F%A5%E7%A2%BA%E4%BF%A1%E5%A0%B1%E5%91%8APwC.pdf'>檔案連結</a></td>
                </tr>
                
              </tbody>
            </table>
          </div>
            </div>
            <div data-goal="2021">
              
          <div className="overflow-x-auto mt-md">
            <table className="min-w-full border-collapse">
              <tbody>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">查證機構</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">英國標準協會 (BSI)</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">盤查範圍</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">範疇一、二、三</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">保證等級</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">合理保證等級(類別1、2)<br />有限保證等級(類別3~6)</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">查驗準則</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">ISO 14064-1：2018<br />ISO 14064-3：2006</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">盤查報告</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"><a className="text-green font-semibold" target="_blank" href='http://www.supreme.com.tw/File/2021%E5%B9%B4BSI%E8%81%B2%E6%98%8E%E6%9B%B8.pdf'>檔案連結</a></td>
                </tr>
                
              </tbody>
            </table>
          </div>
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default GreenhouseGases;
