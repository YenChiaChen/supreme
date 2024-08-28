import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續共生/能源管理.jpg";
import TabContainer from "../../components/ui/TabContainer";

import {
  faComputer,
  faLightbulb,
  faPlugCircleXmark,
  faPowerOff,
  faStairs,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

import SlideUpList from "../../components/ui/SlideUpList";
import { Table2 } from "../../components/ui";

const EnergyManagement: React.FC = () => {



  const items2 = [
    {
      id: 1,
      content:
        "以省電 LED 應用產品為主，採用節能標章高效率照明燈具及電子式安定器、出口指示燈、避難方向指示燈、消防指示燈等，並宣導隨手關燈，並持續與大樓管委會合作推動更換公共區域及地下停車場照明設備。",
      title: "汰換耗能燈具",
      icon: faLightbulb,
      iconColor: "#3BC376",
      iconSize: "30px",
    },
    {
      id: 2,
      content: "使用有標示一級節能標誌之電器設備等。",
      title: "使用節能設備",
      icon: faComputer,
      iconColor: "#3BC376",
      iconSize: "30px",
    },
    {
      id: 3,
      content:
        "辦公事務機器設定省電模式，規定三天以上之假期，電器具或電腦資訊設備需強制關閉主機及周邊設備電源，以減少待機電力之浪費。",
      title: "減少電力消耗",
      icon: faPlugCircleXmark,
      iconColor: "#3BC376",
      iconSize: "30px",
    },
    {
      id: 4,
      content: "鼓勵同仁多走樓梯，少搭電梯。",
      title: "減少使用電梯",
      icon: faStairs,
      iconColor: "#3BC376",
      iconSize: "30px",
    },
    {
      id: 5,
      content: "溫度設定為26～28度，且注意門窗有無確實關閉。",
      title: "夏日空調定溫",
      icon: faWind,
      iconColor: "#3BC376",
      iconSize: "30px",
    },
    {
      id: 6,
      content: "提倡午休時段辦公室關燈。",
      title: "午休關燈節能",
      icon: faPowerOff,
      iconColor: "#3BC376",
      iconSize: "30px",
    },
  ];

  const breadcrumbItems = [
    { label: "永續共生", href: "/symbiosis" },
    { label: "能源與廢棄物管理" },
    { label: "能源管理" },
  ];

  const tableData = {
    headers: [
      { content: "內部能源耗用總量", colSpan: 2 },
      { content: "2021年" },
      { content: "2022年" },
      { content: "2023年(合計)" },
      { content: "2023年總公司" },
      { content: "2023年3個辦事處" },
    ],
    rows: [
      [
        { content: "非再生能源" , rowSpan: 2},
        { content: "汽油 (GJ)"},
        { content: '25.15'},
        { content: '192.56' },
        { content: '250.37' },
        { content: '250.37' },
        { content: '-' },
      ],
      [
        { content: "外購電力 (GJ)"},
        { content: '1,643.48'},
        { content: '1,761.67' },
        { content: '2,042.77' },
        { content: '1,743.61 ' },
        { content: '299.16' },
      ],
      [
        { content: "總能源消耗量 (GJ)", colSpan: 2},
        { content: '1,668.63'},
        { content: '1,954.23' },
        { content: '2,293.14' },
        { content: '1,993.98' },
        { content: '299.16' },
      ],
      [
        { content: "能源密集度(GJ/新台幣億元)", colSpan: 2},
        { content: '1.83'},
        { content: '2.48' },
        { content: '3.56' },
        { content: '3.10' },
        { content: '0.46' },
      ],
     
    ],
  };



  return (
    <div>
      <HeroBanner
        title="能源管理"
        description={`本公司以追求能源與資源最佳使用效率作為努力目標，\n因此，持續執行節電措施及提高能源效率，同時思 考未來如何增加綠色能源的比例。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">能源管理</p>
        

          <Table2
                  data={tableData}
                  color="#3BC376"
                  title='能源消耗量及能源密集度'
                  unit=""
                  isCenter={true}
                  notes={[
                    {
                      text: '能源消耗量統計範圍涵蓋：台北總部及新莊、龍潭、台南3處辦事處。',
                    },
                    {
                      text: '本數據統計自2023年台電用電資料及油品採購紀錄。',
                    },
                    {
                      text: '熱值採用經濟部能源局能源產品單位熱值表： 車用汽油熱值=7,800 kcal/L、電力熱值=860 kcal/kWh；1 kcal=4.187 KJ；1 KJ=1×10 GJ。',
                    },
                    {
                      text: '2023年個體營業收入為：新台幣644.27億元。',
                    },
                    {
                      text: '能源密集度計算公式：能源總消耗量/年度營業收入(=2,293.14/644.27億)。',
                    },
                  ]}
                />
          
          <TabContainer goals={["2023", "2022"]} tabColor="#3BC376">
            <div data-goal="2023">
             <p className="content mt-6">2023 年各營運據點之能源消耗總量為 2293.14 GJ，外購電力占大宗，無採用再生能源。外購電力主要用於辦公事務設備，電力消耗占 89.08%；其餘為公務車之汽油使用為 250.37 GJ，占 10.92%。台北總部大樓能源消耗占 86.95%，其餘新莊、龍潭及台南三處辦事處因佔地面積小及人員較少，合計占比僅有 13.05%。2023 年度能源消耗量高於以往年度，能源密集度為 1.08 GJ/新台幣億元，主要係因營收成長人員相對增加，為因應實質需求，資訊部門擴增伺服器等硬體設備，以致用電量增加，而伴隨公司營收成長，商業往來趨於頻繁，公務車使用次數增加，故汽油耗用量隨之增加。</p>
            </div>
            <div data-goal="2022">
            <p className="mt-6 content">
        2022 年各營運據點之能源消耗總量為 1,954.23
        GJ，外購電力占大宗，主要用於辦公事務設備的電力消耗占 90.15
        %；其餘為公務車之汽油使用占
        9.85%。台北總部能源消耗占90.28%，其餘新莊、龍潭及台南三處辦事處因佔地面積小及人員較少，故合計占比僅有
        6%。2022年度能源消耗量高於以往年度，能源密集度為2.48 GJ /
        新台幣億元，主要係今年新增盤查範圍，以致用電量增加，加上COVID-19疫情趨緩，商業往來恢復正常，公務車使用次數增加，故汽油耗用量大幅增加。
      </p>
            </div>
          </TabContainer>

          <p className="mt-xl sub-title text-center mb-12">
            減少能源消耗之具體行動方案
          </p>
          <SlideUpList items={items2} />
        </div>
      </div>
    </div>
  );
};

export default EnergyManagement;
