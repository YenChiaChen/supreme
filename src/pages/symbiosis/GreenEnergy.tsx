import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import Table from "../../components/ui/Table";


const GreenEnergy: React.FC = () => {

  const breadcrumbItems = [
    { label: "永續共生", href: "/symbiosis" },
    { label: "綠能低碳計畫" },
  ];

  const columns = [
    { header: '年度', accessor: 'year' },
    { header: '公司名稱', accessor: 'company' },
    { header: '計畫名稱', accessor: 'project' },
    { header: '領域別', accessor: 'area' },
    { header: '核定日期', accessor: 'date' },
  ];

  const data = [
    { year: '102', company: '高達能源科技股份有限公司', project: '電動二輪車電池與車輛的車電分離應用服務計畫', area: '金屬機電', date: '2013-10-22'  },
  ];
  const columnsList = [
    { header: '專利名稱', accessor: 'name' },
    { header: '專利編號(證書號)', accessor: 'number' },
    { header: '專利註冊地', accessor: 'location' },
    { header: '專利取得日', accessor: 'date' },
  ];

  const patentList = [
    {
      name: "顯示電動車輛充電式電池資訊的顯示裝置和具有顯示裝置的充電模組 (DISPLAY DEVICE FOR DISPLAYING INFORMATION OF RECHARGEABLE BATTERY OF ELECTRIC VEHICLE AND CHARGING MODULE HAVING THE DISPLAY DEVICE)",
      number: "8928273\nI516389",
      location: "美國\n中華民國",
      date: "2015/01/06\n2016/01/11"
    },
    {
      name: "電動車輛的充電系統和電動車輛的充電方法 (CHARGING SYSTEM OF ELECTRIC VEHICLE AND METHOD FOR CHARGING ELECTRIC VEHICLE)",
      number: "I443030\nCN102738848B\nRE46166",
      location: "中華民國\n中國\n美國",
      date: "2014/07/01\n2015/08/26\n2016/09/27"
    },
    {
      name: "電動車輛的充電模組和充電式電池組合 (CHARGING MODULE AND RECHARGEABLE BATTERY ASSEMBLY FOR ELECTRIC VEHICLE)",
      number: "I441411\nCN102738847B\n9543783",
      location: "中華民國\n中國\n美國",
      date: "2014/06/11\n2015/01/21\n2017/01/10"
    },
    {
      name: "電池共享系統 (BATTERY SHARING SYSTEM)",
      number: "I523375",
      location: "中華民國",
      date: "2016/02/21"
    },
    {
      name: "用於電池單元間平均分佈溫度的系統 (SYSTEM FOR UNIFORMLY DISTRIBUTING TEMPERATURE ACROSS BATTERIES)",
      number: "I492437\n6333614",
      location: "中華民國\n日本",
      date: "2015/07/11\n2018/05/11"
    },
    {
      name: "用於電動車的充電系統 (CHARGING SYSTEM FOR ELECTRIC VEHICLE)",
      number: "8975773\nI501886\nCN103730918B",
      location: "美國\n中華民國\n中國",
      date: "2015/03/10\n2015/10/01\n2016/02/10"
    },
    {
      name: "用於可充電式電池具有電池管理系統的充電裝置 (CHARGING DEVICE WITH BATTERY MANAGEMENT SYSTEM FOR RECHARGEABLE BATTERY)",
      number: "9035622\nI563769",
      location: "美國\n中華民國",
      date: "2015/05/19\n2016/12/21"
    },
    {
      name: "用於充電電池的充電器及其充電方法 (CHARGER FOR RECHARGEABLE BATTERY AND CHARGING MEHTOD THEREOF)",
      number: "I519035\nCN104716698B",
      location: "中華民國\n中國",
      date: "2016/01/21\n2017/06/16"
    },
    {
      name: "用於二次電池過放電後的強制充電保護電路 (COMPULSORY CHARGING AND PROTECTIVE CIRCIUT FOR SECONDARY BATTERY AFTER BEING OVER DISCHARGED)",
      number: "I562492\n9680322\nCN106300279B",
      location: "中華民國\n美國\n中國",
      date: "2016/12/11\n2017/06/13\n2018/09/18"
    },
    {
      name: "用於再利用應用的電動車電池更換系統 (ELECTRIC VEHICLE BATTERY EXCHANGING SYSTEM FOR REUSE APPLICATIONS)",
      number: "9302592",
      location: "美國",
      date: "2016/04/05"
    },
    {
      name: "可拆卸模組化電池充電組合 (DETACHABLE MODULIZED BATTERY CHARGING ASSEMBLY)",
      number: "9096141\nCN103368218B\nEP2651002\nES2570854\nI565186",
      location: "美國\n中國\n歐盟\n西班牙\n中華民國",
      date: "2015/08/04\n2015/10/21\n2016/03/09\n2016/03/09\n2017/01/01"
    },
    {
      name: "具有電池單元平衡系統的充電站 (CHARGING STATION HAVING BATTERY CELL BALANCING SYSTEM)",
      number: "9276415\nI538345\n6612022",
      location: "美國\n中華民國\n日本",
      date: "2016/03/01\n2016/06/11\n2019/11/08"
    },
    {
      name: "具有散熱系統的電池組 (BATTERY PACK HAVING COOLING SYSTEM)",
      number: "I460902\nES2561533\nCN103700904B\n6466049",
      location: "中華民國\n西班牙\n中國\n日本",
      date: "2014/11/11\n2015/12/16\n2018/04/20\n2019/01/18"
    },
    {
      name: "具有散熱系統的電池組 (BATTERY PACK HAVING COOLING SYSTEM)",
      number: "8785027\nEP2579385",
      location: "美國\n歐盟",
      date: "2014/07/22\n2015/12/16"
    },
    {
      name: "具時間階段控制的多功能智慧型交換充電器 (MULTI-FUNCTIONED SMART SWITCHING CHARGER WITH TIME STAGE CONTROL)",
      number: "M476409",
      location: "中華民國",
      date: "2014/04/11"
    },
    {
      name: "充電電池模組 (RECARGEABLE BATTERY MODULE)",
      number: "I492439\nM511160\nCN204809358U\nCN104701912B\nI624103",
      location: "中華民國\n中國",
      date: "2015/07/11\n2015/10/21\n2015/11/25\n2017/06/20\n2018/05/11"
    },
    {
      name: "用於電池單元間平均分佈溫度的系統 (System for Uniformly Distributing Temperature Across Batteries)",
      number: "CN104979600B\nEP2945220",
      location: "中國\n歐盟",
      date: "2019/03/01\n2020/04/08"
    },
    {
      name: "用於回收再利用的電動車電池交換系統 (Electric vehicle battery exchange system for recycling)",
      number: "I535141",
      location: "中華民國",
      date: "2016/05/21"
    },
    {
      name: "Rechargeable Battery Module",
      number: "9159975",
      location: "美國",
      date: "2015/10/13"
    },
    {
      name: "可攜式快篩之體外檢測系統",
      number: "M544629\nI612306\n11049242",
      location: "中華民國\n美國",
      date: "2017/07/01\n2019/01/20\n2021/06/29"
    },
    {
      name: "可攜式快篩體外檢測系統",
      number: "ZL201621488016.2",
      location: "中國",
      date: "2018/12/30"
    },
    {
      name: "可重複使用之快篩試紙卡匣",
      number: "M576254\nZL201822010481.0",
      location: "中華民國\n中國",
      date: "2019/04/01\n2019/09/17"
    },
    {
      name: "具有自我學習可攜式快篩尿液檢測系統",
      number: "M583942\nI746991",
      location: "中華民國",
      date: "2019/09/21\n2021/11/21"
    },
    {
      name: "具辨識標籤補償功能之檢測系統",
      number: "M588797\nI699703",
      location: "中華民國",
      date: "2020/01/01\n2020/09/03"
    },
    {
      name: "一機多測之快篩檢測儀",
      number: "M614236\nZL202120443109.8\nI798620",
      location: "中華民國\n中國",
      date: "2021/07/11\n2022/01/25\n2023/04/11"
    },
    {
      name: "簡易貼心臟健康監測器",
      number: "M626124\nZL202220191745.9",
      location: "中華民國\n中國",
      date: "2022/04/21\n2022/09/02"
    },
    {
      name: "簡易貼心臟健康監測器的應用方法",
      number: "I796919",
      location: "中華民國",
      date: "2023/03/21"
    },
    {
      name: "氣壓偵測裝置、方法與雙氣壓計跌倒偵測系統",
      number: "I739336",
      location: "中華民國",
      date: "2021/09/11"
    }
  ];
  


  return (
    <div>
      <HeroBanner
        title="綠能低碳計畫"
        description={`半導體零組件代理商之競爭優勢係即時提供客戶需求及掌握關鍵技術發展趨勢，優良的產品品質與技術，\n與提供客戶更多元的產品及完善的服務才能提昇客戶忠誠度，為公司帶來豐厚的利潤。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">綠色能源低碳計畫</p>
          <p className="mt-md content ">
            為響應政府所推動的節能減碳政策及為地球發展永續的生活環境，本公司於2010年投資成立高達能源科技公司，其主要致力於研發電池管理系統，產品應用於電動車、電動巴士及儲能系統，其希望致力於推廣電動車輛之發展，以降低廢氣排放，達到節能減碳之環保效益。
            <br />
            <br />
            高達能源公司向工業局申請「電動二輪車電池與車輛的車電分離應用服務計畫」，期望打造綠色低碳旅遊，並計畫未來服務範圍擴大到其他地區及國外。
          </p>
          
          <p className="mt-xl sub-title text-center">已取得之科專計畫項目</p>
          <Table columns={columns} data={data} />

          <p className="mt-xl sub-title text-center">已取得之專利項目</p>
          <Table columns={columnsList} data={patentList} />
        </div>
      </div>
    </div>
  );
};

export default GreenEnergy;
