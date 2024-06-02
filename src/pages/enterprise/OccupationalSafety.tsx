import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Accident from "../../assets/img/testing/accident.png";
import Img01 from "../../assets/img/testing/2022-aci.png";
import TabContainer from "../../components/ui/TabContainer";

const ShortTermGoals: React.FC = () => (
  <>
    <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
  </>
);

const MidTermGoals: React.FC = () => (
  <>
    <img src={Img01} alt="testing" className="w-full mt-md" />
  </>
);

const LongTermGoals: React.FC = () => (
  <>
    <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
  </>
);

const OccupationalSafety: React.FC = () => {
  const stats = [
    { label: "提供人資部門專業相關之外部訓練", num: 44.5, suffix: "小時" },
    { label: "2022年平均調薪幅度", num: 5, suffix: "%" },
    { label: "提供職醫 / 職護臨場諮詢服務", num: 24, suffix: "次" },
  ];

  const breadcrumbItems = [
    { label: "幸福企業", href: "/happy-enterprise" },
    { label: "職業安全衛生" },
  ];

  const goals = ["2023", "2022", "2021"];

  return (
    <div>
      <HeroBanner
        title="幸福企業"
        description={`員工是公司營運最重要的資產。至上致力於打造能讓員工安心、幸福共融的工作環境。
                      遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage="https://picsum.photos/1920/1080/?blur"
      />
      <div className="bg-white rounded-t-[50px] w-full  -translate-y-[50px]">
        <div className="container mx-auto -translate-y-[50px] px-8">
          <StatDisplay stats={stats} />
        </div>

        <div className="container mx-auto px-[10%] mt-12">
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
            <div className="col-span-9 p-6 pl-12 content">
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
            <div className="col-span-9 p-6 pl-12 content border-t-[1px] border-pink">
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
          <img src={Accident} className="mt-md w-full" alt="accident" />
          <p className="mt-xl sub-title text-center">
            年度職安衛生相關統計報告
          </p>
          <TabContainer goals={goals}>
            <div data-goal="2023">
              <ShortTermGoals />
            </div>
            <div data-goal="2022">
              <MidTermGoals />
            </div>
            <div data-goal="2021">
              <LongTermGoals />
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default OccupationalSafety;
