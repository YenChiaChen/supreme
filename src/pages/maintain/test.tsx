import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import Bg1 from "../../assets/img/bg/bg01.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SalaryChart from "../../components/charts/SalaryChart";
import SalaryComparisonChart from "../../components/charts/SalaryComparisonChart";
import bgg from "../../assets/img/bg/bg-gradient.png";
import FooterRect from "../../components/navigation/FooterRect";
import { NavMega } from "../../components/navigation/NavMega";
import Perforamnce from "../../assets/img/testing/performance-evaluation.png"
import Salary from "../../assets/img/testing/salary.png"
import {
  faBullseye,
  faCaretRight,
  faChartLine,
  faThumbsUp,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { url } from "inspector";
import { faChartPie } from "@fortawesome/pro-solid-svg-icons";
const Test: React.FC = () => {
  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "人才培育" },
    { label: "績效檢核與薪酬" },
  ];

  return (
    <div>
      <NavMega />
      <div className="relative pb-[300px] bg-gray">
        <div className="w-[90%] mx-auto  pt-24  relative z-50">
          <div
            className="relative w-full flex flex-col gap-8 items-center justify-center text-center h-[60vh] rounded-xl text-white"
            style={{
              backgroundImage: `url(${Bg1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <p className="text-5xl font-bold tracking-wide">績效檢核與薪酬</p>
            <p className="w-[40%] font-[400] tracking-widest leading-8">
              本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。
            </p>
            <p className="absolute left-6 bottom-6 font-light tracking-wide flex gap-4 items-center p-4 bg-black rounded-[10px] bg-opacity-40">
              幸福企業
              <FontAwesomeIcon icon={faCaretRight} />
              人才培育
              <FontAwesomeIcon icon={faCaretRight} />
              績效檢核與薪酬
            </p>
          </div>

          <div className=" mt-xl grid grid-cols-2 gap-12">
            <div>
              <p className="text-3xl font-semibold tracking-wide">
                員工績效檢核
              </p>
              <p className="mt-md content">
                每年執行一次員工績效考核，考核内容包含工作成果、技能和能力、態度和貢獻及目標達成度等四大構面，以評估和衡量員工之專業知識、技能、領導力、組織能力、溝通技巧、工作態度及發展潛力等各方面能力，並將考核結果作為晉升、調薪、獎金、分紅及員工發展等方面之參考依據。
                <br />
                <br />
                對於表現優良的員工，符合晉升標準，將由直屬主管提出晉升申請，再經部門主管進行審核，公司將會進行綜合評估，考慮員工的評核結果、工作表現以及其他相關因素，以確定是否給予晉升機會。整個流程是基於公平和全面性的評估。
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-[90%] h-full bg-[#e0e0e0] rounded-tl-[50px] rounded-br-[50px] glow-shadow overflow-hidden" >
                <img src={Perforamnce} className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>

          <div className="">
            <p className="mt-64  text-center text-3xl font-semibold tracking-wide">
              員工考核內容
            </p>
            <div className="grid grid-cols-2 mt-24 relative gap-6">
              <div className="bg-white rounded-[30px] p-6 shadow">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                      icon={faChartPie}
                      className="h-[40px] text-dark_blue"
                    />
                    <p className="text-dark_blue text-2xl font-semibold">
                      工作成果
                    </p>
                  </div>
                  <p className="content">
                    {" "}
                    評估員工在工作中所取得的成果，例如項目完成度、銷售量、客戶滿意度等。可以通過定期的績效評估、客戶回饋、報告等方式進行評估。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-[30px] p-6 shadow">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                      icon={faTools}
                      className="h-[40px] text-dark_blue"
                    />
                    <p className="text-dark_blue text-2xl font-semibold">
                      技能和能力
                    </p>
                  </div>
                  <p className="content">
                    {" "}
                    評估員工在工作中所展現的技能和能力，例如解決問題能力、領導力、溝通能力等。可以通過個人面談、自我評估等方式進行評估。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-[30px] p-6 shadow">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                      icon={faBullseye}
                      className="h-[40px] text-dark_blue"
                    />
                    <p className="text-dark_blue text-2xl font-semibold">
                      目標達成度
                    </p>
                  </div>
                  <p className="content">
                    {" "}
                    評估員工在特定期限內完成的目標和任務的達成度。可以通過定期的目標設定、回顧和評估等方式進行評估。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-[30px] p-6 shadow">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="h-[40px] text-dark_blue"
                    />
                    <p className="text-dark_blue text-2xl font-semibold">
                      態度和貢獻
                    </p>
                  </div>
                  <p className="content">
                    {" "}
                    評估員工在工作中的態度和貢獻，例如積極性、責任感、團隊合作等。可以通過直接觀察、問卷調查、同事回饋等方式進行評估。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-64">
            <div>
            <p className="text-3xl font-semibold tracking-wide">
              員工薪酬
            </p>
            <p className="mt-md content">
              員工薪酬除依公司章程規定提列外，估列之基礎係參酌當年度獲利情形並衡量員工績效據以辦理相關調薪及獎酬事宜。2022年度平均調薪幅度為5.0%，較前一年度(3.2%)成長，顯示出本公司薪資待遇優渥，優於同產業。
              <br />
              <br />
              為貫徹本公司之平等薪酬政策，不論員工位階，男性和女性的基本薪資和報酬都不會因性別而有所差異，體現公司致力於實現公正平等的職場文化，確保所有員工都能夠獲得公平對待的薪酬待遇。
            </p>
            </div>
            
            <div className="flex justify-end">
            </div>
          </div>

          <p className="mt-xl sub-title text-center">
            非擔任主管職務之全時員工平均薪資及中位數統計
          </p>
          <SalaryChart />
          <p className="mt-xl sub-title text-center">
            基層人員標準薪資與當地最低薪資的比率
          </p>

          <table className="min-w-full border-collapse mt-md">
            <thead>
              <tr className="bg-orange text-white content">
                <th
                  className="border border-white px-4 py-2 rounded-tl-2xl"
                  rowSpan={2}
                >
                  年度
                </th>
                <th className="border border-white px-4 py-2" rowSpan={2}>
                  當地最低薪資標準
                </th>
                <th className="border border-white px-4 py-2" colSpan={4}>
                  基層人員
                </th>
              </tr>
              <tr className="bg-orange text-white content">
                <th className="border border-white px-4 py-2">男性</th>
                <th className="border border-white px-4 py-2">比率</th>
                <th className="border border-white px-4 py-2">女性</th>
                <th className="border border-white px-4 py-2">比率</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">2021</td>
                <td className="border border-light_gray px-4 py-2">24,000</td>
                <td className="border border-light_gray px-4 py-2">43,163</td>
                <td className="border border-light_gray px-4 py-2">180%</td>
                <td className="border border-light_gray px-4 py-2">38,530</td>
                <td className="border border-light_gray px-4 py-2">161%</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">2022</td>
                <td className="border border-light_gray px-4 py-2">25,250</td>
                <td className="border border-light_gray px-4 py-2">44,335</td>
                <td className="border border-light_gray px-4 py-2">176%</td>
                <td className="border border-light_gray px-4 py-2">42,280</td>
                <td className="border border-light_gray px-4 py-2">167%</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">2023</td>
                <td className="border border-light_gray px-4 py-2">26,400</td>
                <td className="border border-light_gray px-4 py-2">48,490</td>
                <td className="border border-light_gray px-4 py-2">184%</td>
                <td className="border border-light_gray px-4 py-2">42,864</td>
                <td className="border border-light_gray px-4 py-2">162%</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-6 notes">
            註: <br />
            1 當地最低薪資標準以勞動部公布當年度每月基本工資為準。
            <br />
            2
            基層人員為三職等(含)以下之員工,其標準薪資為底薪及伙食津貼之平均數。
            <br />
            3 平均數的計算公式為:員工月平均薪資的總和除以員工人數。
            <br />4
            以台灣地區為重要營運據點,包含台北總部及新莊、龍潭、新竹、台南 4
            處辦事處。
          </p>
        </div>
      </div>

      <div className="bg-opacity ">
        <svg
          className="waves -mt-[100px] h-[100px]  w-full"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(76,133,145,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(76,133,145,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(76,133,145,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#4C8591" />
          </g>
        </svg>
      </div>
      <FooterRect />
    </div>
  );
};

export default Test;
