import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/重大主題.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, P } from "../../components/ui/Text";
import { Container, Section } from "../../components/ui/Container";
import ESGBarChart from "../../components/chart/ESGBarChart";
import {
  Table,
  YearTabContainer,
} from "../../components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faArrowUpRightFromSquare,
} from "@fortawesome/pro-solid-svg-icons";
import KeyTopicImage2023 from '../../assets/img/subPage/永續經營/key-topic-2023.png'
import KeyTopicImage2022 from '../../assets/img/subPage/永續經營/key-topic-2022.png'

const KeyTopic: React.FC = () => {


  const tableData = {
    headers: [{ content: "順序" }, { content: "執行步驟說明" }],
    rows: [
      [
        { content: "1. 掌握永續議題", nowrap: true },
        {
          content:
            "彙整國內外永續趨勢、利害關係人以及同業所關注之議題，篩選出與至上業務密切相關的永續議題。",
        },
      ],
      [
        { content: "2. 評估衝擊程度", nowrap: true },
        {
          content: (
            <>
              {
                "針對篩選歸納出的 19 項永續主題製作内部衝擊分析問卷，邀請永續發展委員會相關成員評估各議題對於公司營運之正、負面衝擊程度以及衝擊發生的可能性。"
              }
              <P
                text={
                  "共回收 16 份有效問卷。問卷結果分析方法為計算各項永續議題分別之正負面衝擊分數 ( 平均發生機率 x 平均影響程度 )，並根據正負面衝擊分數繪製長條圖進行分析、議題重大性之排序。"
                }
              />
            </>
          ),
        },
      ],
      [
        { content: "3. 決議重大議題", nowrap: true },
        {
          content:
            "依據内部衝擊評估的分析結果，並經過永續發展委員會成員、外部專家及高階主管討論後，決議出本年度重大主題共 10 項，包括環境面 1 項、產品面 3 項、治理面 4 項以及社會面 2 項。",
        },
      ],
    ],
  };


  const topic2023 = [
    { topic: "經營績效", positiveScore: 17.76, negativeScore: 12.41 },
    { topic: "誠信經營", positiveScore: 16.49, negativeScore: 10.78 },
    { topic: "風險管理", positiveScore: 14.98, negativeScore: 12.16 },
    { topic: "公司治理", positiveScore: 16.16, negativeScore: 10.87 },
    { topic: "產品與客戶服務", positiveScore: 15.77, negativeScore: 10.96 },
    { topic: "資訊安全", positiveScore: 14.65, negativeScore: 11.98 },
    { topic: "人才培育與留任", positiveScore: 14.23, negativeScore: 10.88 },
    { topic: "勞雇/勞資關係", positiveScore: 14.76, negativeScore: 10.31 },
    { topic: "能源管理", positiveScore: 14.87, negativeScore: 10.08 },
  ];
  const topic2022 = [
    { topic: "經營績效", positiveScore: 16.5, negativeScore: 11.75 },
    { topic: "資訊安全", positiveScore: 12.69, negativeScore: 10.83 },
    { topic: "誠信經營", positiveScore: 13.41, negativeScore: 10.28 },
    { topic: "風險管理", positiveScore: 9.96, negativeScore: 11.25 },
    { topic: "人才培育與留任", positiveScore: 10.97, negativeScore: 9.57 },
    { topic: "顧客隱私", positiveScore: 10.77, negativeScore: 9.28 },
    { topic: "產品與客戶服務", positiveScore: 12.66, negativeScore: 7.37 },
    { topic: "勞雇/勞資關係", positiveScore: 12.45, negativeScore: 7.39 },
    { topic: "公司治理", positiveScore: 10.56, negativeScore: 7.34 },
  ];

  return (
    <div className="mb-48">
      <HeroSection
        title="重大主題"
        description={`本公司依規劃-執行-查核-行動管理模式運作，鑑別利害關係人及蒐集檢視利害關係人所關切議題。為確保各項重大性議題之落實及目標達成情形，本公司定期辦理經濟、社會及環境面向重大議題討論、各單位目標達成情形及未來方向擬定，並彙整相關成果資料、與利害關係人議合結果及 ESG 討論建議事項給權責主管審核。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Section>
          <Breadcrumbs items={navItems} />
        </Section>

        <Section>
          <H2 text={"重大主題鑑別"} />
          <P
            text={
              "至上透過與利害關係人的溝通，蒐集其關注之永續議題，並於每年根據最新版GRI準則執行重大議題辨識作業程序。將永續議題區分為環境(E)、社會(S)、治理(G)及產品(P)四大面向，由永續發展委員會相關成員針對各項議題對於公司營運所產生之正面與負面衝擊程度以及發生可能性進行評估。"
            }
          />

          <Table data={tableData} color="#3B79E4" />
        </Section>

        <Section>
          <H2 text={"年度重大主題衝擊評估結果"} />
          <YearTabContainer years={["2023", "2022"]} tabColor="#3B79E4">
            <div data-year="2023" className="pt-8">
              <ESGBarChart data={topic2023} />
            </div>
            <div data-year="2022" className="pt-8">
              <ESGBarChart data={topic2022} />
            </div>
          </YearTabContainer>
        </Section>

        <Section>
          <H2 text={"重大議題列表"} />
          <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-blue text-white content">
                <th className="border border-white px-6 py-4 whitespace-pre">
                  排序
                </th>
                <th className="border border-white px-4 py-2  whitespace-pre">
                  重大議題
                </th>
                <th className="border border-white px-4 py-2  whitespace-pre">
                  對至上的重要性
                </th>
                <th className="border border-white px-4 py-2  whitespace-pre ">
                  相關連結
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="border-b border-light_gray px-4 py-2 text-center">
                  1
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  經營績效
                </td>
                <td className="border-b border-light_gray px-4 py-4 content">
                  公司經營理念之一為創造最大利益，若經營績效管理妥善，除能增強股東、員工及價値鏈對我們的信心，也是邁向永續經營的關鍵。持續營運績效成長可創造正向循環，提供公司繼續向上發展的動力。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link target="_blank" to="/sustainability">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-b border-light_gray px-4 py-2 text-center">
                  2
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  資訊安全
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  資訊安全之重要性在於保護公司機密資料及系統不受駭客威脅，以預防資安事件造成損失及確保公司正常營運。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link
                    target="_blank"
                    to="/sustainability/information-security"
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-b border-light_gray px-4 py-2 text-center">
                  3
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  誠信經營
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  建立誠實信用的企業文化可以強化客戶的信任度，提高服務滿意度，增加營業銷售額，創要股東最大利益，達到永續經營的目標。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link target="_blank" to="/sustainability/ethical-management">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-b border-light_gray px-4 py-2 text-center">
                  4
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  風險管理
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  「風險管理」對一家企業來說是至關重要的一個環節，無論是營運資金的運用、管理流程的管控，抑或是對大環境的變化，都需針對經濟、環境、社會及氣候變遷等風險制定整體的風險管控政策，曾能支援企業的營運與成長。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link target="_blank" to="/sustainability/risk-management">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-b border-light_gray px-4 py-2 text-center">
                  5
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  人才培育與留任
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  人才培育和留任會影響公司的長期成長和可持續發展。透過提供訓練和發展機會，可幫助員工精進技能和知識，提高員工生產力和效率；同時，公司對員工未來的投資和職涯發展的支持將强化員工對公司的忠誠度，進而促進員工的留任、減少人員流失，對公司的穩定性和經濟效益有正面積極的影響。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link target="_blank" to="/enterprise/diverse-growth">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-b border-light_gray px-4 py-2 text-center">
                  6
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  產品與客戶服務
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  優良的產品品質與技術，與提供客戶更多元的產品及完善的服務才能提昇客戶忠誠度，為公司帶來豐厚的利潤。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link
                    target="_blank"
                    to="/sustainability/product-customer-service"
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-b border-light_gray px-4 py-2 text-center">
                  7
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  勞雇 /勞資關係
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  良好的勞雇/勞資關係有助於提高員工的士氣和工作效率。公正的薪資、優渥的福利和工作條件可以增加員工積極度和生產力，進而提高公司的營運效能和利潤。再者，維護良好的勞雇/勞資關係亦有助於提升公司的社會形象，使更多的客戶、投資者願意與公司成為商業夥伴，也吸引優良求職者前來應試，成為公司重要人才資產，有益於公司永續發展。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link target="_blank" to="/enterprise/welfare-care">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-b border-light_gray px-4 py-2 text-center">
                  8
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  公司治理
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  良好的公司治理是公司穩健營運發展的基礎，優秀的企業不該只以獲利情形定義，更需要能永續經營、落實公司治理原則及善盡企業責任。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link target="_blank" to="/sustainability/governance">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-b border-light_gray px-4 py-2 text-center">
                  9
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  氣候變遷對策及溫室氣體管理
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  本公司為通路商且以進出口為主，仰賴國際運輸交通甚深，交通受天氣變化影響甚遠，如供應鏈上下游，若任一環節因極端氣候造成交通中斷，將造成公司營運負面影響。
                  <br />
                  極端氣候更對人類生存權、破壞生態環境及未知的傳染疾病造成的社會問題，經濟問題有相當程度的影響，然而危機就是轉機，此環境議題產生的負面影響威脅到基本的生存權，能促使人類進行全面的反思及利用現代的科技，開創另類商機，在經濟發展與環境保護中取得平衡。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link target="_blank" to="/symbiosis/greenhouse-gases">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section>
          <H2 text={"重大主題價值鏈邊界"} />
          <YearTabContainer years={["2023", "2022"]} tabColor="#3B79E4">
            <div data-year="2023" className="pt-8">
             <img src={KeyTopicImage2023} className="w-full" />
            </div>
            <div data-year="2022" className="pt-8">
            <img src={KeyTopicImage2022} className="w-full" />
            </div>
          </YearTabContainer>
        </Section>
      </Container>
    </div>
  );
};

export default KeyTopic;