import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/幸福企業/績效檢核與薪酬.jpg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SalaryChart from "../../components/charts/SalaryChart";
import {
  faBullseye,
  faChartLine,
  faThumbsUp,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
const PerformanceCompensation: React.FC = () => {
  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "人才培育" },
    { label: "績效檢核與薪酬" },
  ];

  return (
    <div>
      <HeroBanner
        title="績效檢核與薪酬"
        description={`本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">員工績效檢核</p>
          <p className="mt-md content">
            每年執行一次員工績效考核，考核内容包含工作成果、技能和能力、態度和貢獻及目標達成度等四大構面，以評估和衡量員工之專業知識、技能、領導力、組織能力、溝通技巧、工作態度及發展潛力等各方面能力，並將考核結果作為晉升、調薪、獎金、分紅及員工發展等方面之參考依據。
            <br />
            <br />
            對於表現優良的員工，符合晉升標準，將由直屬主管提出晉升申請，再經部門主管進行審核，公司將會進行綜合評估，考慮員工的評核結果、工作表現以及其他相關因素，以確定是否給予晉升機會。整個流程是基於公平和全面性的評估。
          </p>
          <p className="mt-xl sub-title text-center">員工考核內容</p>
          <div className="flex justify-center flex-wrap gap-10 mt-md">
            <div
              className="box-border 
              bg-pink rounded-[20px] p-12 bg-opacity-10 border border-pink w-[500px]"
            >
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="h-[80px] text-pink"
                />
              </div>
              <p className="text-[32px] font-semibold">工作成果</p>
              <div className="h-[1px] w-[60%] bg-black my-6"></div>
              <p className="content">
                評估員工在工作中所取得的成果，例如項目完成度、銷售量、客戶滿意度等。可以通過定期的績效評估、客戶回饋、報告等方式進行評估。
              </p>
            </div>
            <div
              className="box-border 
              bg-pink rounded-[20px] p-12 bg-opacity-10 border border-pink w-[500px]"
            >
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faTools}
                  className="h-[80px] text-pink"
                />
              </div>
              <p className="text-[32px] font-semibold">技能和能力</p>
              <div className="h-[1px] w-[60%] bg-black my-6"></div>
              <p className="content">
                評估員工在工作中所展現的技能和能力，例如解決問題能力、領導力、溝通能力等。可以通過個人面談、自我評估等方式進行評估。
              </p>
            </div>
            <div
              className="box-border
              bg-pink rounded-[20px] p-12 bg-opacity-10 border border-pink w-[500px]"
            >
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="h-[80px] text-pink"
                />
              </div>
              <p className="text-[32px] font-semibold">態度和貢獻</p>
              <div className="h-[1px] w-[60%] bg-black my-6"></div>
              <p className="content">
                評估員工在工作中的態度和貢獻，例如積極性、責任感、團隊合作等。可以通過直接觀察、問卷調查、同事回饋等方式進行評估。
              </p>
            </div>
            <div
              className="box-border
              bg-pink rounded-[20px] p-12 bg-opacity-10 border border-pink w-[500px]"
            >
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="h-[80px] text-pink"
                />
              </div>
              <p className="text-[32px] font-semibold">目標達成度</p>
              <div className="h-[1px] w-[60%] bg-black my-6"></div>
              <p className="content">
                評估員工在特定期限內完成的目標和任務的達成度。可以通過定期的目標設定、回顧和評估等方式進行評估。
              </p>
            </div>
          </div>


          <p className="mt-xl sub-title text-center">員工薪酬</p>
          <p className="mt-md content">
            員工薪酬除依公司章程規定提列外，估列之基礎係參酌當年度獲利情形並衡量員工績效據以辦理相關調薪及獎酬事宜。2022年度平均調薪幅度為5.0%，較前一年度(3.2%)成長，顯示出本公司薪資待遇優渥，優於同產業。
            <br />
            <br />
            為貫徹本公司之平等薪酬政策，不論員工位階，男性和女性的基本薪資和報酬都不會因性別而有所差異，體現公司致力於實現公正平等的職場文化，確保所有員工都能夠獲得公平對待的薪酬待遇。
          </p>

          <p className="mt-xl sub-title text-center mb-6">
            非擔任主管職務之全時員工平均薪資及中位數統計
          </p>
          <SalaryChart />
          <p className="mt-xl sub-title text-center">
            基層人員標準薪資與當地最低薪資的比率
          </p>

          <table className="min-w-full border-collapse mt-md">
            <thead>
              <tr className="bg-pink text-white content">
                <th
                  className="border border-white px-4 py-2 "
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
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2">男性</th>
                <th className="border border-white px-4 py-2">比率</th>
                <th className="border border-white px-4 py-2">女性</th>
                <th className="border border-white px-4 py-2">比率</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2 text-center">2021</td>
                <td className="border border-light_gray px-4 py-2 text-center">24,000 元</td>
                <td className="border border-light_gray px-4 py-2 text-center">43,163 元</td>
                <td className="border border-light_gray px-4 py-2 text-center">180%</td>
                <td className="border border-light_gray px-4 py-2 text-center">38,530 元</td>
                <td className="border border-light_gray px-4 py-2 text-center">161%</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2 text-center">2022</td>
                <td className="border border-light_gray px-4 py-2 text-center">25,250 元</td>
                <td className="border border-light_gray px-4 py-2 text-center">44,335 元</td>
                <td className="border border-light_gray px-4 py-2 text-center">176%</td>
                <td className="border border-light_gray px-4 py-2 text-center">42,280 元</td>
                <td className="border border-light_gray px-4 py-2 text-center">167%</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2 text-center">2023</td>
                <td className="border border-light_gray px-4 py-2 text-center">26,400 元</td>
                <td className="border border-light_gray px-4 py-2 text-center">48,490 元</td>
                <td className="border border-light_gray px-4 py-2 text-center">184%</td>
                <td className="border border-light_gray px-4 py-2 text-center">42,864 元</td>
                <td className="border border-light_gray px-4 py-2 text-center">162%</td>
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
    </div>
  );
};

export default PerformanceCompensation;
