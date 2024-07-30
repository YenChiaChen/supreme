import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import TabContainer from "../../components/ui/TabContainer";

import WaterConsumptionChart from "../../components/charts/WaterConsumptionChart";

const data = [
  { year: "2021", consumption: 0.819 },
  { year: "2022", consumption: 2.867 },
  { year: "2023", consumption: 2.932 },
];
const WaterManagement: React.FC = () => {


  const breadcrumbItems = [
    { label: "永續共生", href: "/symbiosis" },
    { label: "能源與廢棄物管理" },
    { label: "水資源管理" },
  ];


  const A1: React.FC = () => (
    <>
      <p className="my-6 content">
        倉儲中心原使用木棧板，為減少廢棄棧板數量，於2017年改購置鐵塑棧板使廢棄棧板量大幅減少，截至2022年無再採購存儲作業所需棧板，往年進貨所乘載貨物的木製棧板也持續回收再出貨利用。
      </p>
    </>
  );

  return (
    <div>
      <HeroBanner
        title="水資源管理"
        description={`本公司以追求能源與資源最佳使用效率作為努力目標，\n因此，持續執行節電措施及提高能源效率，同時思 考未來如何增加綠色能源的比例。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">水資源管理</p>
          <p className="mt-md content ">
            本公司共有四個營運據點，分別為台北總部、新莊、龍潭及台南三個辦事處，各營運據點取水來源均為各地所屬自來水公司，未取得地表水、地下水、海水、產出水等，也無自具有水資源壓力的地區取水。本公司採用Aqueduct
            Water Risk
            Atlas工具，三個辦事處之水資源壓力分析結果皆屬「Low-Medium(1-2)」。
            <br />
            <br />
            註：WATERRISKATLAS：https://reurl.cc/yyjme2
          </p>
          <p className="mt-xl sub-title text-center">水資源使用統計</p>
          <p className="note text-[#a6a6a6] text-right mt-md">
            單位：百萬公升 ( Million Litres )
          </p>
          <div style={{ height: "400px" }}>
            <WaterConsumptionChart data={data} />
          </div>
          <p className="note text-[#a6a6a6] mt-md">
            註 1：盤查邊界涵蓋台北總部、新莊、龍潭及台南三處辦事處。
          </p>

          <TabContainer goals={["2023", "2022"]} tabColor="#3BC376">
            <div data-goal="2023">
              <p className="mt-md content">
                2023年取水量為2.932百萬公升，相較2022年增加0.065百萬公升，增加主要原因係因統計數據揭露期間落差因素所致。一為龍潭辦事處2022年度設置於中研院，水費係包含在月租賃費用當中，無額外收取，直至2023年08月辦事處遷移，始有取水數據之產生；一為新莊辦事處於2022年09月增加租賃區域，其取水數據統計不足一年，2023年則完整揭露二個租賃區域之年度取水數據。
              </p>
            </div>
            <div data-goal="2022">
              <p className="mt-md content">
                各營運據點水資源主要用途為辦公區域空調循環用水及員工生活用水，排放水主要為員工生活污水，經由辦公大樓污水管線後進入公共下水道，空調用水之蒸散則為主要耗用原因，因排水量及耗水量無有效的統計方式，故僅揭露取水量。2022
                年取水量為2.867百萬公升，相較2021年增加2.048百萬公升，主要原因係今年增加盤查範圍及因COVID-19
                疫情趨緩減少居家辦公天數，故取水量隨之增加。
              </p>
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default WaterManagement;
