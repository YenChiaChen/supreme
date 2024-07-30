import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import React from "react";
import Accident from "../../assets/img/testing/accident.png";
import Img01 from "../../assets/img/testing/2022-aci.png";
import TabContainer from "../../components/ui/TabContainer";

const MidTermGoals: React.FC = () => (
  <>
    <p className="text-pink text-[20px] font-bold">2022年職業傷害統計</p>
    <table className="min-w-full border-collapse mt-6">
      <thead>
        <tr className="bg-pink text-white content">
          <th className="border border-white px-4 py-2 rounded-tl-2xl">
            職業危害類型
          </th>
          <th className="border border-white px-4 py-2">項目</th>
          <th className="border border-white px-4 py-2">人數</th>
          <th className="border border-white px-4 py-2 rounded-tr-2xl">比率</th>
        </tr>
      </thead>
      <tbody className="content">
        <tr>
          <td className="border border-light_gray px-4 py-2" rowSpan={3}>
            職業傷害
          </td>
          <td className="border border-light_gray px-4 py-2">
            職業傷害所造成的死亡
          </td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">嚴重的職業傷害</td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">
            可記錄之職業傷害
          </td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2" rowSpan={2}>
            職業病
          </td>
          <td className="border border-light_gray px-4 py-2">
            職業病所造成的死亡
          </td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">可記錄之職業病</td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
      </tbody>
    </table>

    <p className="notes mt-6">
      註 1：
      嚴重的職業傷害意指因職業傷害而導致工作者無法或難以於六個月内恢復至受傷前健康狀態的傷害。
    </p>
    <p className="notes mt-1">
      註 2： 2022 年度全職員工 ( 共計 196 人 ) 之總工作時數為 412,664 小時。
    </p>
    <p className="notes mt-1">
      註 3： 職業傷害所造成的死亡比率 = 職業傷害所造成的死亡人數 / 工作小時
      *1,000,000。
    </p>
    <p className="notes mt-1">
      註 4： 嚴重的職業傷害比率 = 嚴重的職業傷害數 / 工作小時 *1,000,000。
    </p>
    <p className="notes mt-1">
      註 5： 可記錄之職業傷害比率 = 可記錄之職業傷害數 / 工作小時 *1,000,000。
    </p>

    <p className="text-pink text-[20px] font-bold mt-md">2022 年缺勤統計</p>
    <table className="min-w-full border-collapse mt-6">
      <thead>
        <tr className="bg-pink text-white content">
          <th className="border border-white px-4 py-2 rounded-tl-2xl">
            &nbsp;
          </th>
          <th className="border border-white px-4 py-2">2020</th>
          <th className="border border-white px-4 py-2">2021</th>
          <th className="border border-white px-4 py-2 rounded-tr-2xl">2022</th>
        </tr>
      </thead>
      <tbody className="content">
        <tr>
          <td className="border border-light_gray px-4 py-2">缺勤日</td>
          <td className="border border-light_gray px-4 py-2">263.5</td>
          <td className="border border-light_gray px-4 py-2">118.6</td>
          <td className="border border-light_gray px-4 py-2">151.7</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">
            年底在職員工人數
          </td>
          <td className="border border-light_gray px-4 py-2">179 </td>
          <td className="border border-light_gray px-4 py-2">196</td>
          <td className="border border-light_gray px-4 py-2">196</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">工作天數</td>
          <td className="border border-light_gray px-4 py-2">251</td>
          <td className="border border-light_gray px-4 py-2">248</td>
          <td className="border border-light_gray px-4 py-2">249</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">缺勤率</td>
          <td className="border border-light_gray px-4 py-2">0.59%</td>
          <td className="border border-light_gray px-4 py-2">0.24%</td>
          <td className="border border-light_gray px-4 py-2">0.31%</td>
        </tr>
      </tbody>
    </table>
    <p className="notes mt-6">
      註 1：缺勤日 = 病假 + 公傷假；應上工日數 = 工作天數 ( 未扣除特休 )=
      年底在職員工人數 * 人事行政局公告工作天數。
    </p>
  </>
);

const LongTermGoals: React.FC = () => (
  <>
    <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
  </>
);

const OccupationalSafety: React.FC = () => {
  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "友善職場" },
    { label: "職業安全衛生" },
  ];

  return (
    <div>
      <HeroBanner
        title="職業安全衛生"
        description={`本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，\n制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">職業安全衛生政策</p>
          <p className="mt-md content">
            本公司將員工的健康與安全放在第一位，致力打造一個舒適安全、零職業災害的安心工作環境。本公司遵循
            「職業安全衛生法」及相關團體之規定訂定政策，由總務單位專責研議環境安全衛生相關事項，包含：
          </p>
          <p className="mt-4 content">
            1. 定期對辦公環境進行檢查作業，必要時須提出檢討改進事項
            <br />
            2. 不定期以郵件等方式宣導環境安全之重要性，
            鼓勵員工主動回覆表達意見。本公司職業安全衛生管理系統現階段涵蓋 178
            名員工，包含除顧問人員及海外人 員以外的全體員工。
          </p>
          <p className="mt-xl content">
            本公司辦公環境主要為辦公室以及倉儲兩類地點。針對辦公處所以及倉儲環境，制訂以下職業安全衛生規範：
          </p>
          <div className="mt-md grid grid-cols-12 border-[1px] border-pink">
            <div className="col-span-3 bg-pink text-white flex items-center justify-center p-6">
              辦公處所
            </div>
            <div className="col-span-9 p-6 pl-12 notes">
              <ul className="list-disc ">
                <li>設置符合飲水標準之飲水設備，定期清洗及維護。</li>
                <li>
                  公司位置為內湖園區大樓，依法規設定設置完整之消防系統（如：緊急電源、排煙設備、逃生指示燈、滅火器、安全逃生通道）。
                </li>
                <li>消防設備檢查：1 次 / 年 ; 消防演習： 1 次 / 半年。</li>
                <li>
                  大樓管委會：
                  <ul>
                    <li>
                      - 警衛人員：早班 07:00 ~ 19:00 三位輪值 / 夜班 1 位，20:00
                      前門關閉，統一由後門進出，並於後面設置警衛室。
                    </li>
                    <li>- 大樓巡邏、訪客登記。</li>
                    <li>- 車輛進出管制。</li>
                  </ul>
                </li>
                <li>本公司有二名員工領具消防人員證照。</li>
              </ul>
            </div>
            <div className="col-span-3 bg-pink text-white flex items-center justify-center p-6 border-t-[1px] border-white">
              倉儲環境
            </div>
            <div className="col-span-9 p-6 pl-12 notes border-t-[1px] border-pink">
              秉持工作安全至上原則，倉儲之貨運搬運、堆放係依勞動部「職業安全衛生設施規則」辦理。
              <ul className="list-disc ">
                <li>
                  貨物堆放高度不得超過 180 cm
                  或六層高度，二者限高規定取其先達標者遵守（如：疊放六層高之貨物尚未滿
                  180cm 者，即不可再往上疊放至 180cm，反之亦然）。
                </li>
                <li>貨物搬運時盡量利用機械帶體人力，例：手推車。</li>
                <li>宣導工作場所不得穿著露指型鞋款，以包鞋為佳。</li>
              </ul>
            </div>
          </div>

          <p className="mt-xl sub-title text-center">職業安全衛生教育訓練</p>
          <p className="mt-md content">
            定期辦理新進員工工安訓練、宣導課程，以提升員工對於職業安全衛生的知識以及職場安全意識，降低公安意外發生的可能性。2022
            年，指派兩名員工參與 12
            小時「防火管理人」之受訓課程，取得消防人員證照，
            負責本公司之消防防護計畫的製作與實行。
          </p>
          <p className="mt-xl sub-title text-center">相關風險衝擊管理</p>
          <p className="mt-md content">
            為將職業災害所造成的衝擊及風險降至最低，針對各營運據點進行危害鑑別，2022
            年度無鑑別出重大危害。
          </p>
          <div className="flex justify-center">
            <img
              src={Accident}
              className="mt-md w-full max-w-[1000px]"
              alt="accident"
            />
          </div>
          <p className="mt-xl sub-title text-center">
            年度職安衛生相關統計報告
          </p>
          <TabContainer goals={["2022"]}>
            <div data-goal="2022">
              <MidTermGoals />
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default OccupationalSafety;
