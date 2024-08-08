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

const EnergyManagement: React.FC = () => {

  const MidTermGoals: React.FC = () => (
    <>
      <p className="mt-md content">
        2022 年各營運據點之能源消耗總量為 1,954.23
        GJ，外購電力占大宗，主要用於辦公事務設備的電力消耗占 90.15
        %；其餘為公務車之汽油使用占
        9.85%。台北總部能源消耗占90.28%，其餘新莊、龍潭及台南三處辦事處因佔地面積小及人員較少，故合計占比僅有
        6%。2022年度能源消耗量高於以往年度，能源密集度為2.48 GJ /
        新台幣億元，主要係今年新增盤查範圍，以致用電量增加，加上COVID-19疫情趨緩，商業往來恢復正常，公務車使用次數增加，故汽油耗用量大幅增加。
      </p>
    </>
  );



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
          <p className="mt-md text-2xl font-semibold text-green">能源消耗量及能源密集度</p>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse">
              <thead className="bg-green text-white content">
                <tr>
                  <th className="py-2 px-4 border border-white rounded-tl-lg" colSpan={2}>內部能源耗用總量</th>
                  <th className="py-2 px-4 border border-white">2021年</th>
                  <th className="py-2 px-4 border border-white rounded-tr-lg">2022年</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap" rowSpan={2}>非再生能源</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">汽油(GJ)</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">25.15</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">192.56</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">外購電力(GJ)</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">1,643.48</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">1,761.67</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap" colSpan={2}>總能源消耗量(GJ)</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">1668.63</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">1954.23</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap" colSpan={2}>能源密集度(GJ/新台幣億元)</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">1.83</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">2.48</td>
                </tr>
                
              </tbody>
            </table>
          </div>
          
          <TabContainer goals={["2023", "2022"]} tabColor="#3BC376">
            <div data-goal="2023">
             <p className="content">2023 年各營運據點之能源消耗總量為 2293.14 GJ，外購電力占大宗，無採用再生能源。外購電力主要用於辦公事務設備，電力消耗占 89.08%；其餘為公務車之汽油使用為 250.37 GJ，占 10.92%。台北總部大樓能源消耗占 86.95%，其餘新莊、龍潭及台南三處辦事處因佔地面積小及人員較少，合計占比僅有 13.05%。2023 年度能源消耗量高於以往年度，能源密集度為 1.08 GJ/新台幣億元，主要係因營收成長人員相對增加，為因應實質需求，資訊部門擴增伺服器等硬體設備，以致用電量增加，而伴隨公司營收成長，商業往來趨於頻繁，公務車使用次數增加，故汽油耗用量隨之增加。</p>
            </div>
            <div data-goal="2022">
              <MidTermGoals />
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
