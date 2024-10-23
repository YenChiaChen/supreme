import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/誠信經營.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { Image } from "../../components/ui/Image";
import WhistleblowerImage from "../../assets/img/subPage/永續經營/whistleblower-banner.png";
import AuditStructureImage from "../../assets/img/subPage/永續經營/audit-structure.png";
import { Desc, H2, H3, List, P } from "../../components/ui/Text";
import { BgSection, Container, Section } from "../../components/ui/Container";
import { faBullseye, faPlay } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { YearTabContainer } from "../../components/ui/Tab";
import {
  faArrowUpRightFromSquare,
  faBadgeCheck,
  faPaperPlane,
} from "@fortawesome/pro-light-svg-icons";
import { Table } from "../../components/ui";

const tableData4 = {
  headers: [
    { content: "日期" },
    { content: "參與人次" },
    { content: "訓練總時數" },
  ],
  rows: [
    [
      { content: "07 月 20 日、07 月 21 日" },
      { content: "123" },
      { content: "61.5" },
    ],
  ],
};
const tableData = {
  headers: [
    { content: "日期" },
    { content: "參與人次" },
    { content: "訓練總時數" },
  ],
  rows: [
    [
      { content: "02 月 14 日、02 月 21 日" },
      { content: "160" },
      { content: "80" },
    ],
  ],
};

const tableData5 = {
  headers: [
    { content: "員工類別" },
    { content: "已進行反貪腐相關溝通人數" },
    { content: "該類人員總數" },
    { content: "已進行反貪腐相關溝通百分比" },
  ],
  rows: [
    [
      { content: "主管" },
      { content: "77" },
      { content: "77" },
      { content: "100%" },
    ],
    [
      { content: "非主管" },
      { content: "119" },
      { content: "119" },
      { content: "100%" },
    ],
    [
      { content: "合計" },
      { content: "196" },
      { content: "196" },
      { content: "100%" },
    ],
  ],
};
const tableData2 = {
  headers: [
    { content: "員工類別" },
    { content: "已進行反貪腐相關溝通人數" },
    { content: "該類人員總數" },
    { content: "已進行反貪腐相關溝通百分比" },
  ],
  rows: [
    [
      { content: "主管" },
      { content: "70" },
      { content: "70" },
      { content: "100%" },
    ],
    [
      { content: "非主管" },
      { content: "128" },
      { content: "128" },
      { content: "100%" },
    ],
    [
      { content: "合計" },
      { content: "198" },
      { content: "198" },
      { content: "100%" },
    ],
  ],
};
const tableData3 = {
  headers: [
    { content: "治理單位" },
    { content: "已進行反貪腐相關溝通人數" },
    { content: "該類人員總數" },
    { content: "已進行反貪腐相關溝通百分比" },
  ],
  rows: [
    [
      { content: "董事會" },
      { content: "7" },
      { content: "7" },
      { content: "100%" },
    ],
  ],
};
const EthicalManagement: React.FC = () => {
  return (
    <div className="mb-48">
      <HeroSection
        title="誠信經營"
        description={`建立誠實信用的企業文化可以強化客戶的信任度，提高服務滿意度，增加營業銷售額，創造股東最大利益，達到永續經營的目標。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <H2 text={"誠信經營"} />
      </Container>

      <BgSection color="#ECF2FD" className="mt-md">
        <Container>
          <Section>
            <div className="relative z-10 py-24 grid grid-cols-3 items-center">
              <div className="border-t-[2px] border-blue h-full flex flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                  短期目標（2026年）
                </p>

                <List
                  items={[
                    {
                      text: "員工培訓：持續提供誠信經營暨公平交易、反貪腐教育訓練。",
                    },
                    {
                      text: "邀請供應商簽署「人權、環境永續暨誠信經營承諾書」，持續觀察與供應商往來交易，改善誠信經營不足之處。",
                    },
                  ]}
                />

                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
              <div className="border-t-[2px] border-blue h-full flex  flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                  中期目標（2028年）
                </p>

                <List
                  items={[
                    {
                      text: "持續改進與監控：定期審查和更新誠信經營相關管理辦法並佈達給董事、員工。",
                    },
                    {
                      text: "所有供應商皆簽署「人權、環境永續暨誠信經營承諾書」，確保其能了解公司對誠信經營之承諾與理念，並確實遵守行為規範。",
                    },
                  ]}
                />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
              <div className="border-t-[2px] border-blue h-full flex flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <FontAwesomeIcon
                  icon={faPlay}
                  className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                  長期目標（2030年）
                </p>

                <List
                  items={[
                    {
                      text: "善用科技提升公司誠信經營管理效率：導入新興AI人工智慧，偵測公司內部異常交易活動，杜絕不誠信行為，達成高效益的管控成果。",
                    },
                  ]}
                />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
            </div>
          </Section>
        </Container>
      </BgSection>

      <Container>
        <Section>
          <H2 text={"誠信經營政策"} />
          <P
            text={
              "持續推動誠信經營理念，將此信念深植每位同仁心中，轉化為公司創新成長的動力。本公司堅定遵守公平交易及廉潔承諾，以誠信為最高推動公司永續經營成長。"
            }
          />
        </Section>

        <Section>
          <H2 text={"誠信經營執行情形"} />
          <YearTabContainer years={["2024", "2023", "2022"]} tabColor="#3B79E4">
            <div data-year="2024">
              <H3 text={"通知財務報告封閉期間："} className="text-blue" />

              <table className="min-w-full border-collapse mt-6">
                <thead>
                  <tr className="bg-blue text-white content">
                    <th className="border border-white px-4 py-2 whitespace-pre">
                      日期
                    </th>
                    <th className="border border-white px-4 py-2  whitespace-pre">
                      項目
                    </th>
                    <th className="border border-white px-4 py-2  whitespace-pre ">
                      連結
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2024.07.10
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      113年Q2財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/113%E5%B9%B4Q2%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2024.04.12
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      113年Q1財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/113%E5%B9%B4Q1%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2024.01.31
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      112年年度財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/112%E5%B9%B4%E5%B9%B4%E5%BA%A6%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-6 text-gray-500">
               2023年度履行誠信經營之執行情形已於2024年3月11日董事會進行報告說明。
             
              </p>
            </div>

            <div data-year="2023">
              <H3 text={"教育訓練與反貪腐溝通："} className="text-blue" />
              <Table
                data={tableData}
                color="#3B79E4"
                title="誠信經營暨防範內線交易管理教育訓練"
              />
              <Table
                data={tableData3}
                color="#3B79E4"
                title="反貪腐溝通情形（依治理單位分類）"
              />
              <Table
                data={tableData2}
                color="#3B79E4"
                title="反貪腐溝通情形（依員工類別分類）"
              />

              <H3 text={"通知財務報告封閉期間："} className="text-blue" />

              <table className="min-w-full border-collapse mt-6">
                <thead>
                  <tr className="bg-blue text-white content">
                    <th className="border border-white px-4 py-2  whitespace-pre">
                      日期
                    </th>
                    <th className="border border-white px-4 py-2  whitespace-pre">
                      項目
                    </th>
                    <th className="border border-white px-4 py-2 whitespace-pre ">
                      連結
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2023.10.13
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      112年Q3財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/112%E5%B9%B4Q3%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2023.07.17
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      112年Q2財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/112%E5%B9%B4Q2%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2023.04.19
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      112年Q1財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/112%E5%B9%B4Q1%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2023.02.07
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      111年年度財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/111%E5%B9%B4%E5%B9%B4%E5%BA%A6%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-6 text-gray-500">
                本年度履行誠信經營之執行情形已於2023年3月9日董事會進行報告說明。
              </p>
            
            </div>
            <div data-year="2022">
              <H3 text={"教育訓練與反貪腐溝通："} className="text-blue" />
              <Table
                data={tableData4}
                color="#3B79E4"
                title="誠信經營暨防範內線交易管理教育訓練"
              />
              <Table
                data={tableData3}
                color="#3B79E4"
                title="反貪腐溝通情形（依治理單位分類）"
              />
              <Table
                data={tableData5}
                color="#3B79E4"
                title="反貪腐溝通情形（依員工類別分類）"
              />

              <H3 text={"通知財務報告封閉期間："} className="text-blue" />

              <table className="min-w-full border-collapse mt-6">
                <thead>
                  <tr className="bg-blue text-white content">
                    <th className="border border-white px-4 py-2 whitespace-pre">
                      日期
                    </th>
                    <th className="border border-white px-4 py-2  whitespace-pre">
                      項目
                    </th>
                    <th className="border border-white px-4 py-2  whitespace-pre ">
                      連結
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.10.06
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      111年Q3財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5_Q3.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.07.18
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      111年Q2財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5_Q2.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.04.19
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      111年Q1財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5_Q1.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.02.15
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      年度財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5_%E5%B9%B4%E5%BA%A6.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.01.24
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre ">
                      防範內線交易宣導_財報封閉期
                      【於董事會上宣導/人次：7席董事(含獨立董事)】
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/1110124%E5%A0%B1%E5%91%8AC-%E9%98%B2%E7%AF%84%E5%85%A7%E7%B7%9A%E4%BA%A4%E6%98%93%E5%AE%A3%E5%B0%8E_%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E6%9C%9F-1.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </YearTabContainer>
        </Section>
      </Container>

      <BgSection color="#ECF2FD" className="mt-8">
        <Container>
          <div className="grid grid-cols-2 gap-x-0 gap-y-8 pb-12">
            <H3
              text={"內部稽核之稽核組織"}
              className="text-blue col-span-2 mt-0"
            />

            <div className="flex flex-col justify-center pr-24">
              <img
                src={AuditStructureImage}
                alt="Board Stru"
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <List
                items={[
                  {
                    text: " 本公司設置隸屬於董事會之稽核室，配置適任且專任之稽核人員，目前編制為稽核主管一人、稽核人員二人，共三人。其中內部稽核主管之任免，前經董事會決議通過。",
                  },
                  {
                    text: "於2020年3月12日訂定「公司治理實務守則」，本公司內部稽核人員之任免、每年執行考評乙次、薪資報酬係由稽核主管簽報至本公司董事長核定。",
                  },
                  {
                    text: "內部稽核人員均符合法令規定之適任條件，每年持續進修並參加金管會認定機構所舉辦之內部稽核講習，以提升稽核品質及能力。",
                  },
                ]}
                listType="disc"
              />
            </div>
          </div>
        </Container>
      </BgSection>

      <Container>
        <Section>
          <H2 text={"舉報管道與機制"} />
          <P
            text={
              "本公司承諾保護檢舉人不因檢舉情事而遭不當處置，檢舉情事經查證若屬實，並協助公司避免損失，將會給予適當獎勵，以鼓勵內部員工與外部其他利害關係人檢舉不誠信與不當行為。"
            }
          />
          <div className="flex justify-end mt-12">
            <a
              className="bg-orange text-white px-6 py-2 font-en rounded-full flex items-center group cursor-pointer hover-shadow"
              href="http://www.supreme.com.tw/WP/Report.aspx"
              target="_blank"
            >
              檢舉信箱
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-xl ml-2 group-hover:ml-4 duration-300"
              />
            </a>
          </div>
          {/* <dialog id="my_modal_2" className="modal">
            <div className="modal-box w-full max-w-6xl">
             
    <iframe
      src="http://www.supreme.com.tw/WP/Report.aspx"
      title="Website"
      className="w-full h-[70vh]" 
    ></iframe>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog> */}
          <Image src={WhistleblowerImage} alt="WhistleBlower Banner Image" />
        </Section>
      </Container>
    </div>
  );
};

export default EthicalManagement;
