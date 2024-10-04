import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續共生/溫室氣體&行動方案.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, P } from "../../components/ui/Text";
import { Container, Section } from "../../components/ui/Container";
import { Table, YearTabContainer } from "../../components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulbOn,
  faBus,
  faBolt,
  faLeaf,
  faShippingFast,
  faTruck,
} from "@fortawesome/pro-light-svg-icons";
const GreenhouseGases: React.FC = () => {
  const tableData = {
    headers: [
      { content: "類別" },
      { content: "2021年" },
      { content: "2022年" },
      { content: "2023年" },
    ],
    rows: [
      [
        { content: "範疇一：直接溫室氣體排放" },
        { content: "3.393" },
        { content: "14.654" },
        { content: "19.462" },
      ],
      [
        { content: "範疇二：能源間接溫室氣體排放" },
        { content: "232.317" },
        { content: "242.175" },
        { content: "280.250" },
      ],
      [
        { content: "總排放量" },
        { content: "235.710" },
        { content: "256.829" },
        { content: "299.712" },
      ],
      [
        { content: "溫室氣體排放密集度(公噸CO 2 e /億元)" },
        { content: "0.259" },
        { content: "0.326" },
        { content: "0.465" },
      ],
    ],
  };
  const tableData2 = {
    headers: [
      { content: "類別" },
      { content: "2021年" },
      { content: "2022年" },
      { content: "2023年" },
    ],
    rows: [
      [
        { content: "類別 3：與燃料和能源相關活動的排放（未涵蓋在範疇一或二）" },
        { content: "42.775" },
        { content: "47.390" },
        { content: "60.274" },
      ],
      [
        { content: "類別 4：上游運輸和配送產生的排放" },
        { content: "(註4)" },
        { content: "53.172" },
        { content: "46.383" },
      ],
      [
        { content: "類別 6：商務旅行產生的排放" },
        { content: "225.242" },
        { content: "306.120" },
        { content: "286.470" },
      ],
      [
        { content: "類別 9：下游運輸和配送產生的排放" },
        { content: "1,232.375" },
        { content: "1,316.942" },
        { content: "896.080" },
      ],
      [
        { content: "總計" },
        { content: "1,500.392" },
        { content: "1,723.624" },
        { content: "1,289.207" },
      ],
    ],
  };

  return (
    <div className="mb-48">
      <HeroSection
        title="溫室氣體＆行動方案"
        description={`為了善盡地球公民的責任，響應國家淨零碳排之目標，自 2020 年起本公司開始自主性溫室氣體盤查，主動揭露溫室氣體排放資訊。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"範疇一及範疇二溫室氣體排放統計"} />
          <Table data={tableData} color="#3BC376" />
          <YearTabContainer years={["2023", "2022"]} tabColor="#3BC376">
            <div data-year="2023">
              <P
                text={
                  "2023 年度依循溫室氣體盤查議定書(GHG Protocol)指引進行盤查作業，溫室氣體總排放量(範疇一＋範疇二)為 299.712 公噸 CO2e，主要來自於範疇二之電力排放，占比為 93.51%，其餘溫室氣體排放量來源為範疇一之公務車 燃料使用、冷媒、滅火器及化糞池，占比為 6.49%。與 2022 年相比呈現微幅增加情形，主要係因營收成長人員相對增加， 為因應實質需求，資訊部門擴增伺服器等硬體設備，以致用電量增加。"
                }
              />
              <P
                text={
                  "為了瞭解企業營運過程中，價值鏈上下游活動的碳排放，針對範疇三進行自主性盤查，期望透過完整的溫室氣體盤查 作業，鑑別出最顯著的排放源，為溫室氣體減量與氣候轉型策略提供基礎數據。2023 年範疇三溫室氣體總量為 1，289.207 公噸 CO2e，排放源項目包含:與燃料和能源相關活動的排放(未涵蓋在範疇一或二)、運輸產生之間接溫室氣體排放(含 「貨物上/ 下游運輸與分配」、「商務旅行」)，其中以下游運輸和配送產生的排放為最大量，占範疇三總排放量之 69.51%。"
                }
              />
            </div>
            <div data-year="2022">
              <P
                text={
                  "2022 年度依循溫室氣體盤查議定書 ( GHG Protocol ) 指引進行盤查作業，溫室氣體總排放量 ( 範疇一 + 範疇二 ) 為 256.829 公噸 CO2e，主要來自於範疇二之電力排放，占比為 94.29%，其餘溫室 氣體排放量來源為範疇一之公務車燃料使用、冷媒、滅火器及化糞池，占比為 5.71%。"
                }
              />
              <P
                text={
                  "與 2021 年相比呈現微幅增加情形，主要係因為今年新增盤查範圍及 COVID-19 疫情趨緩辦公室用電及營運活動增加。為了瞭解企業營運過程中，價值鏈上下游活動的碳排放，針對範疇三進行自主性盤查，期望透過完整的溫室氣體盤查作業，鑑別出最顯著的排放源，為溫室氣體減量與氣候轉型策略提供基礎數據。"
                }
              />
              <P
                text={
                  "2022 年範疇三溫室氣體總量為 1,723.624 公噸 CO2e，排放源項目包含：與燃料和能源相關活動的排放 ( 未涵蓋在範疇一或二 )、運輸產生之間接溫室氣體排放 ( 含「貨物上 / 下游運輸與分配」、「商務旅行」)，其中以下游運輸和配送產生的排放為最 大量，占範疇三總排放量之 76.41 %。"
                }
              />
            </div>
          </YearTabContainer>
        </Section>

        <Section>
          <H2 text={"範疇一及範疇二之減量行動方案"} />
          <div className="flex justify-center gap-8 mt-8">
            <div className="bg-green-light p-12 rounded-xl flex-1 basis-1/2">
              <div className="flex flex-col text-[18px] gap-6  text-center">
                <FontAwesomeIcon
                  icon={faLightbulbOn}
                  className="h-[80px] text-green  text-green "
                />
                <p>督促大樓公共區域採用節能設備</p>
              </div>
            </div>
            <div className="bg-green-light p-12 rounded-xl flex-1 basis-1/2">
              <div className="flex flex-col text-[18px] gap-6  text-center">
                <FontAwesomeIcon icon={faBus} className="h-[80px] text-green" />
                <p>鼓勵搭乘大眾交通運輸或共乘</p>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <H2 text={"範疇三溫室氣體排放統計（自願揭露）"} />
          <Table
            data={tableData2}
            color="#3BC376"
            notes={[
              {
                text: "溫室氣體盤查邊界包括：台北總部及新莊、龍潭、台南3處辦事處。",
              },
              { text: "2.計算之溫室氣體種類包含：二氧化碳。" },
              {
                text: "3.溫室氣體排放係數引用，主要依據行政院環保署「產品碳足跡資訊網碳足跡資料庫」之排放係數；GWP值採用IPCC 第六次評估報告作為計算之依據。",
              },
              { text: "2021年未針對上游運輸和配送產生的排放進行盤查。" },
              {
                text: "至上電子自2022年依循溫室氣體盤查議定書 ( GHG Protocol ) 指引進行溫室氣體盤查作業，故以2022年為基準年。",
              },
            ]}
          />
        </Section>

        <Section>
          <H2 text={"範疇三減量行動方案"} />
          <div className="flex justify-center gap-8">
            <div className="bg-green-light p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-[18px]  gap-6 text-center">
                <FontAwesomeIcon
                  icon={faLeaf}
                  className="h-[80px] text-green"
                />
                <p>持續投入尋找新綠能產業代理機會</p>
              </div>
            </div>
            <div className="bg-green-light p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-[18px]  gap-6 text-center">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="h-[80px] text-green"
                />
                <p>選擇與提供綠色服務之運輸承攬業者合作</p>
              </div>
            </div>
            <div className="bg-green-light p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-[18px]  gap-6 text-center">
                <FontAwesomeIcon
                  icon={faBolt}
                  className="h-[80px] text-green"
                />
                <p>評估採購綠電或購買綠色憑證</p>
              </div>
            </div>
            <div className="bg-green-light p-12 rounded-xl flex-1 basis-1/4">
              <div className="flex flex-col text-[18px]  gap-6 text-center">
                <FontAwesomeIcon
                  icon={faShippingFast}
                  className="h-[80px] text-green"
                />
                <p>產品出口合併提貨減少車輛往返</p>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <H2 text={"溫室氣體盤查外部查證"} />
          <YearTabContainer years={["2023", "2022", "2021"]} tabColor="#3BC376">
            <div data-year="2023">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <tbody>
                    <tr className="hover:bg-[#e6e6e6] duration-300 bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        查證機構
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        安侯建業會計師務所
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        盤查範圍
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        範疇一、範疇二
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        保證等級
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        有限確信等級
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        查驗準則
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        ISAE 3410
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        盤查報告
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        <a
                          className="text-green font-semibold"
                          target="_blank"
                          href="https://drive.google.com/file/d/1zcmOHqjgoeu0Degoo4_fnMfTb_FmZFs8/view"
                        >
                          檔案連結
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div data-year="2022">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <tbody>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        查證機構
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        資誠聯合會計師事務所 (Pwc)
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        盤查範圍
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        範疇一、二
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        保證等級
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        有限確信等級
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        查驗準則
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        ISAE 3410
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        盤查報告
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        <a
                          className="text-green font-semibold"
                          target="_blank"
                          href="http://www.supreme.com.tw/File/2022%E5%B9%B4%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E7%9B%A4%E6%9F%A5%E7%A2%BA%E4%BF%A1%E5%A0%B1%E5%91%8APwC.pdf"
                        >
                          檔案連結
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div data-year="2021">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <tbody>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        查證機構
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        英國標準協會 (BSI)
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        盤查範圍
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        範疇一、二、三
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        保證等級
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        合理保證等級(類別1、2)
                        <br />
                        有限保證等級(類別3~6)
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        查驗準則
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        ISO 14064-1：2018
                        <br />
                        ISO 14064-3：2006
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        盤查報告
                      </td>
                      <td className="py-4 px-4 border-b border-light_gray whitespace-pre-wrap">
                        <a
                          className="text-green font-semibold"
                          target="_blank"
                          href="http://www.supreme.com.tw/File/2021%E5%B9%B4BSI%E8%81%B2%E6%98%8E%E6%9B%B8.pdf"
                        >
                          檔案連結
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </YearTabContainer>
        </Section>
      </Container>
    </div>
  );
};

export default GreenhouseGases;
