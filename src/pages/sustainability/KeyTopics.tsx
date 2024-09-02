import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續經營/重大主題.jpg";
import ESGMatrixDetail from "../../components/charts/ESGMatrix";
import ESGFactor from "../../data/ESGFactor.json";
import { ESGFactorType } from "../../types";
import TabContainer from "../../components/ui/TabContainer";
import ESGMatrixNDetail from "../../components/charts/ESGMatrixN";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const goals = ["正面衝擊矩陣", "負面衝擊矩陣"];

const KeyTopics: React.FC = () => {
  const ESGFactorData: ESGFactorType[] = ESGFactor;

  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "重大主題" },
  ];

  const columns2 = [
    { header: "項目", accessor: "item" },
    { header: "議題名稱", accessor: "name" },
    { header: "調整原因", accessor: "reason" },
  ];

  const data3 = [
    {
      item: "整併",
      name: "產品與客戶服務顧客隱私",
      reason:
        "考量國際永續發展趨勢以及呼應本公司永續策略，將主題重組以利聚焦，明確回 應利害關係人。原「顧客隱私」整併為「產品與客戶服務」。",
    },
  ];

  return (
    <div>
      <HeroBanner
        title="重大主題"
        description={`本公司依規劃-執行-查核-行動管理模式運作，鑑別利害關係人及蒐集檢視利害關係人所關切議題。為確保各項重大性議題之落實及目標達成情形，本公司定期辦理經濟、社會及環境面向重大議題討論、各單位目標達成情形及未來方向擬定，並彙整相關成果資料、與利害關係人議合結果及 ESG 討論建議事項給權責主管審核。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">重大主題鑑別</p>
          <p className="mt-md content">
            至上透過與利害關係人的溝通，蒐集其關注之永續議題，並於每年根據最新版GRI準則執行重大議題辨識作業程序。將永續議題區分為環境(E)、社會(S)、治理(G)及產品(P)四大面向，由永續發展委員會相關成員針對各項議題對於公司營運所產生之正面與負面衝擊程度以及發生可能性進行評估。
          </p>
          <div className="grid grid-cols-[auto,1fr] mt-md content">
            <div className="bg-blue text-center text-white py-2 border-r-[1px] border-white">
              順序
            </div>
            <div className="bg-blue text-center text-white py-2">
              執行步驟說明
            </div>
            <div className="border-b-[1px] border-b-blue px-4 py-4">
              1. 掌握永續議題
            </div>
            <div className="border-b-[1px] border-b-blue px-4 py-4">
              彙整國內外永續趨勢、利害關係人以及同業所關注之議題，篩選出與至上業務密切相關的永續議題。
            </div>
            <div className="border-b-[1px] border-b-blue px-4 py-4 ">
              2. 評估衝擊程度
            </div>
            <div className="border-b-[1px] border-b-blue px-4 py-4 ">
              針對篩選歸納出的 19
              項永續主題製作内部衝擊分析問卷，邀請永續發展委員會相關成員評估各議題
              對於公司營運之正、負面衝擊程度以及衝擊發生的可能性。
              <br /> <br /> 共回收 16
              份有效問卷。問卷結果分析方法為計算各項永續議題分別之正負面衝擊分數
              ( 平均發生機 率 x 平均影響程度
              )，並根據正負面衝擊分數繪製長條圖進行分析、議題重大性之排序。
            </div>
            <div className="border-b-[1px] border-b-blue px-4 py-4">
              3. 決議重大議題
            </div>
            <div className="border-b-[1px] border-b-blue px-4 py-4">
              依據内部衝擊評估的分析結果，並經過永續發展委員會成員、外部專家及高階主管討論後，決議出本
              年度重大主題共 10 項，包括環境面 1 項、產品面 3 項、治理面 4
              項以及社會面 2 項。
            </div>
          </div>

          <p className="mt-xl sub-title text-center">重大議題列表</p>

          <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-blue text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl  whitespace-pre">
                  排序
                </th>
                <th className="border border-white px-4 py-2  whitespace-pre">
                  重大議題
                </th>
                <th className="border border-white px-4 py-2  whitespace-pre">
                  對至上的重要性
                </th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl  whitespace-pre ">
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
                <td className="border-b border-light_gray px-4 py-2 content">
                  公司經營理念之一為創造最大利益，若經營績效管理妥善，除能增強股東、員工及價値鏈對我們的信心，也是邁向永續經營的關鍵。持續營運績效成長可創造正向循環，提供公司繼續向上發展的動力。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                  />
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
                  <Link
                    target="_blank"
                    to="/sustainability/ethical-management"
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
                  4
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  風險管理
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  「風險管理」對一家企業來說是至關重要的一個環節，無論是營運資金的運用、管理流程的管控，抑或是對大環境的變化，都需針對經濟、環境、社會及氣候變遷等風險制定整體的風險管控政策，曾能支援企業的營運與成長。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link
                    target="_blank"
                    to="/sustainability/risk-management"
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
                  5
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  人才培育與留任
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  人才培育和留任會影響公司的長期成長和可持續發展。透過提供訓練和發展機會，可幫助員工精進技能和知識，提高員工生產力和效率；同時，公司對員工未來的投資和職涯發展的支持將强化員工對公司的忠誠度，進而促進員工的留任、減少人員流失，對公司的穩定性和經濟效益有正面積極的影響。
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link
                    target="_blank"
                    to="/enterprise/diverse-growth"
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
                  <Link
                    target="_blank"
                    to="/enterprise/welfare-care"
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
                  8
                </td>
                <td className="border-b border-light_gray px-8 py-2 whitespace-pre font-semibold tracking-wide">
                  公司治理
                </td>
                <td className="border-b border-light_gray px-4 py-2 content">
                  良好的公司治理是公司穩健營運發展的基礎，優秀的企業不該只以獲利情形定義，更需要能永續經營、落實公司治理原則及善盡企業責任。
                
                </td>
                <td className="border-b border-light_gray px-12 py-2 text-center">
                  <Link
                    target="_blank"
                    to="/sustainability/governance"
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
                  <Link
                    target="_blank"
                    to="/symbiosis/greenhouse-gases"
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                    />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="mt-xl sub-title text-center mb-4">
            年度重大主題衝擊評估結果
          </p>
          <TabContainer goals={goals} tabColor="#3B79E4">
            <div data-goal="正面衝擊矩陣">
              <ESGMatrixDetail data={ESGFactorData} />
            </div>
            <div data-goal="負面衝擊矩陣">
              <ESGMatrixNDetail data={ESGFactorData} />
            </div>
          </TabContainer>

          <p className="mt-xl sub-title text-center mb-4">重大主題價值鏈邊界</p>
          <div className="grid grid-cols-5 mt-md text-center">
            <div className="bg-blue text-white py-2 row-span-2 flex items-center justify-center border-[1px] border-white">
              面向
            </div>
            <div className="bg-blue text-white py-2 row-span-2 flex items-center justify-center border-[1px] border-white">
              重大主題
            </div>
            <div className="col-span-3 bg-blue text-white py-2 border-[1px] border-white">
              價值鏈邊界影響
            </div>
            <div className="col-span-1 bg-blue text-white py-2 border-[1px] border-white">
              上游
            </div>
            <div className="col-span-1 bg-blue text-white py-2 border-[1px] border-white">
              至上電子營運
            </div>
            <div className="col-span-1 bg-blue text-white py-2 border-[1px] border-white">
              下游
            </div>

            <div className=" border-b-[1px] border-light_gray row-span-4 flex items-center justify-center">
              治理／經濟
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">
              誠信經營
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">
              公司治理
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">
              經營績效
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">
              風險管理
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>

            <div className=" border-b-[1px] border-light_gray row-span-2 flex items-center justify-center">
              治理
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">
              資訊安全
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue"></div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">
              產品與客戶服務
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>

            <div className=" border-b-[1px] border-light_gray row-span-2 flex items-center justify-center">
              社會
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">
              人才培育與留任
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue"></div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">
              勞雇與勞資關係
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue"></div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>

            <div className=" border-b-[1px] border-light_gray flex items-center justify-center">
              環境
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">
              氣候變遷對策及溫室氣體管理與能源管理
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-blue">
              ●
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTopics;
