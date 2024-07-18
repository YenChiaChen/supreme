import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import CardGrid from "../../components/ui/CardGrid";
import TabListGoal from "../../components/ui/TabListGoal";
import Bg from "../../assets/img/bg/bg.png";
import ESGMatrixDetail from "../../components/charts/ESGMatrix";
import ESGFactor from "../../data/ESGFactor.json";
import { ESGFactorType } from "../../types";
import TabContainer from "../../components/ui/TabContainer";
import ESGMatrixNDetail from "../../components/charts/ESGMatrixN";
import Table from "../../components/ui/Table";

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

  const data3=[
    {
      item: "整併",
      name: "產品與客戶服務顧客隱私",
      reason: "考量國際永續發展趨勢以及呼應本公司永續策略，將主題重組以利聚焦，明確回 應利害關係人。原「顧客隱私」整併為「產品與客戶服務」。",
    },
  ]

  return (
    <div>
      <HeroBanner
        title="重大主題"
        description={`本公司依規劃-執行-查核-行動管理模式運作，鑑別利害關係人及蒐集檢視利害關係人所關切議題。為確保各項重大性議題之落實及目標達成情形，本公司定期辦理經濟、社會及環境面向重大議題討論、各單位目標達成情形及未來方向擬定，並彙整相關成果資料、與利害關係人議合結果及 ESG 討論建議事項給權責主管審核。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">重大主題鑑別</p>
          <p className="mt-md content">
            至上透過與利害關係人的溝通，蒐集其關注之永續議題，並於每年根據最新版GRI準則執行重大議題辨識作業程序。將永續議題區分為環境(E)、社會(S)、治理(G)及產品(P)四大面向，由永續發展委員會相關成員針對各項議題對於公司營運所產生之正面與負面衝擊程度以及發生可能性進行評估。
          </p>
          <div className="grid grid-cols-[auto,1fr] mt-md content">
            <div className="bg-orange text-center text-white py-2 border-r-[1px] border-white">
              順序
            </div>
            <div className="bg-orange text-center text-white py-2">
              執行步驟說明
            </div>
            <div className="border-b-[1px] border-b-orange px-4 py-4">
              1. 掌握永續議題
            </div>
            <div className="border-b-[1px] border-b-orange px-4 py-4">
              彙整國內外永續趨勢、利害關係人以及同業所關注之議題，篩選出與至上業務密切相關的永續議題。
            </div>
            <div className="border-b-[1px] border-b-orange px-4 py-4 bg-gray">
              2. 評估衝擊程度
            </div>
            <div className="border-b-[1px] border-b-orange px-4 py-4 bg-gray">
              針對篩選歸納出的 19
              項永續主題製作内部衝擊分析問卷，邀請永續發展委員會相關成員評估各議題
              對於公司營運之正、負面衝擊程度以及衝擊發生的可能性。
              <br /> <br /> 共回收 16
              份有效問卷。問卷結果分析方法為計算各項永續議題分別之正負面衝擊分數
              ( 平均發生機 率 x 平均影響程度
              )，並根據正負面衝擊分數繪製長條圖進行分析、議題重大性之排序。
            </div>
            <div className="border-b-[1px] border-b-orange px-4 py-4">
              3. 決議重大議題
            </div>
            <div className="border-b-[1px] border-b-orange px-4 py-4">
              依據内部衝擊評估的分析結果，並經過永續發展委員會成員、外部專家及高階主管討論後，決議出本
              年度重大主題共 10 項，包括環境面 1 項、產品面 3 項、治理面 4
              項以及社會面 2 項。
            </div>
          </div>

          <p className="mt-xl sub-title text-center mb-4">
            年度重大主題衝擊評估結果
          </p>
          <TabContainer goals={goals}>
            <div data-goal="正面衝擊矩陣">
              <ESGMatrixDetail data={ESGFactorData} />
            </div>
            <div data-goal="負面衝擊矩陣">
              <ESGMatrixNDetail data={ESGFactorData} />
            </div>
          </TabContainer>

          <p className="mt-xl sub-title text-center mb-4">重大主題變動說明</p>
         <Table columns={columns2} data={data3} />
          


          <p className="mt-xl sub-title text-center mb-4">重大主題價值鏈邊界</p>
          <div className="grid grid-cols-5 mt-md text-center">
            <div className="bg-orange text-white py-2 row-span-2 flex items-center justify-center border-[1px] border-white">面向</div>
            <div className="bg-orange text-white py-2 row-span-2 flex items-center justify-center border-[1px] border-white">重大主題</div>
            <div className="col-span-3 bg-orange text-white py-2 border-[1px] border-white">價值鏈邊界影響</div>
            <div className="col-span-1 bg-orange text-white py-2 border-[1px] border-white">上游</div>
            <div className="col-span-1 bg-orange text-white py-2 border-[1px] border-white">至上電子營運</div>
            <div className="col-span-1 bg-orange text-white py-2 border-[1px] border-white">下游</div>

            <div className=" border-b-[1px] border-light_gray row-span-4 flex items-center justify-center">治理／經濟</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">誠信經營</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">公司治理</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">經營績效</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">風險管理</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>

            
            <div className=" border-b-[1px] border-light_gray row-span-2 flex items-center justify-center">治理</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">資訊安全</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange"></div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">產品與客戶服務</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>

            
            <div className=" border-b-[1px] border-light_gray row-span-2 flex items-center justify-center">社會</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">人才培育與留任</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange"></div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">勞雇與勞資關係</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange"></div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>

            
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center">環境</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center py-4">氣候變遷對策及溫室氣體管理與能源管理</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
            <div className=" border-b-[1px] border-light_gray flex items-center justify-center text-xs text-orange">●</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KeyTopics;
