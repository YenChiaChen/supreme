import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續共生/綠能低碳計畫.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, P } from "../../components/ui/Text";
import { Container, Section } from "../../components/ui/Container";
import { OldTable, Table } from "../../components/ui";
const GreenEnergy: React.FC = () => {
  const tableData = {
    headers: [
      { content: "年度" },
      { content: "公司名稱" },
      { content: "計畫名稱" },
      { content: "領域別" },
      { content: "核定日期" },
    ],
    rows: [
      [
        { content: "102" },
        { content: "高達能源科技股份有限公司" },
        { content: "電動二輪車電池與車輛的車電分離應用服務計畫" },
        { content: "金屬機電" },
        { content: "2013-10-22" },
      ],
    ],
  };
  const columnsList = [
    { header: "專利名稱", accessor: "name" },
    { header: "專利編號(證書號)", accessor: "number" },
    { header: "專利註冊地", accessor: "location", nowrap: true },
    { header: "專利取得日", accessor: "date" },
  ];

  const data = {
    headers: [
      { content: "專利名稱" },
      { content: "專利編號(證書號)" },
      { content: "專利註冊地" },
      { content: "專利取得日" },
    ],
    rows: [
      [
        {
          content:
            "顯示電動車輛充電式電池資訊的顯示裝置和具有顯示裝置的充電模組 (DISPLAY DEVICE FOR DISPLAYING INFORMATION OF RECHARGEABLE BATTERY OF ELECTRIC VEHICLE AND CHARGING MODULE HAVING THE DISPLAY DEVICE)",
          rowSpan: 2,
        },
        { content: "8928273" },
        { content: "美國" },
        { content: "2015/01/06" },
      ],
      [
        { content: "I516389" },
        { content: "中華民國", nowrap: true },
        { content: "2016/01/11" },
      ],
      [
        {
          content:
            "電動車輛的充電系統和電動車輛的充電方法 (CHARGING SYSTEM OF ELECTRIC VEHICLE AND METHOD FOR CHARGING ELECTRIC VEHICLE)",
          rowSpan: 3,
        },
        { content: "I443030" },
        { content: "中華民國" },
        { content: "2014/06/11" },
      ],
      [
        { content: "CN102738848B" },
        { content: "中國" },
        { content: "2015/08/26" },
      ],
      [{ content: "RE46166" }, { content: "美國" }, { content: "2016/09/27" }],

      [
        {
          content:
            "電動車輛的充電模組和充電式電池組合 (CHARGING MODULE AND RECHARGEABLE BATTERY ASSEMBLY FOR ELECTRIC VEHICLE)",
          rowSpan: 3,
        },
        { content: "I441411" },
        { content: "中華民國" },
        { content: "2014/06/11" },
      ],
      [
        { content: "CN102738847B" },
        { content: "中國" },
        { content: "2015/01/21" },
      ],
      [{ content: "9543783" }, { content: "美國" }, { content: "2017/01/10" }],
      [
        { content: "電池共享系統 (BATTERY SHARING SYSTEM)", rowSpan: 1 },
        { content: "I523375" },
        { content: "中華民國" },
        { content: "2016/02/21" },
      ],
      [
        {
          content:
            "用於電池單元間平均分佈溫度的系統 (SYSTEM FOR UNIFORMLY DISTRIBUTING TEMPERATURE ACROSS BATTERIES)",
          rowSpan: 2,
        },
        { content: "I492437" },
        { content: "中華民國" },
        { content: "2015/07/11" },
      ],
      [{ content: "6333614" }, { content: "日本" }, { content: "2018/05/11" }],
      [
        {
          content:
            "用於電動車的充電系統 (CHARGING SYSTEM FOR ELECTRIC VEHICLE)",
          rowSpan: 3,
        },
        { content: "8975773" },
        { content: "美國" },
        { content: "2015/03/10" },
      ],
      [
        { content: "I501886" },
        { content: "中華民國" },
        { content: "2015/10/01" },
      ],
      [
        { content: "CN103730918B" },
        { content: "中國" },
        { content: "2016/02/10" },
      ],
      [
        {
          content:
            "用於可充電式電池具有電池管理系統的充電裝置 (CHARGING DEVICE WITH BATTERY MANAGEMENT SYSTEM FOR RECHARGEABLE BATTERY)",
          rowSpan: 2,
        },
        { content: "9035622" },
        { content: "美國" },
        { content: "2015/05/19" },
      ],
      [
        { content: "I563769" },
        { content: "中華民國" },
        { content: "2016/12/21" },
      ],
      [
        {
          content:
            "用於充電電池的充電器及其充電方法 (CHARGER FOR RECHARGEABLE BATTERY AND CHARGING METHOD THEREOF)",
          rowSpan: 2,
        },
        { content: "I519035" },
        { content: "中華民國" },
        { content: "2016/01/21" },
      ],
      [
        { content: "CN104716698B" },
        { content: "中國" },
        { content: "2017/06/16" },
      ],
      [
        {
          content:
            "用於二次電池過放電後的強制充電保護電路 (COMPULSORY CHARGING AND PROTECTIVE CIRCUIT FOR SECONDARY BATTERY AFTER BEING OVER DISCHARGED)",
          rowSpan: 3,
        },
        { content: "I562492" },
        { content: "中華民國" },
        { content: "2016/12/11" },
      ],
      [{ content: "9680322" }, { content: "美國" }, { content: "2017/06/13" }],
      [
        { content: "CN106300279B" },
        { content: "中國" },
        { content: "2018/09/18" },
      ],
      [
        {
          content:
            "用於再利用應用的電動車電池更換系統 (ELECTRIC VEHICLE BATTERY EXCHANGING SYSTEM FOR REUSE APPLICATIONS)",
          rowSpan: 1,
        },
        { content: "9302592" },
        { content: "美國" },
        { content: "2016/04/05" },
      ],
      [
        { content: "可拆卸模組化電池充電組合 (DETACHABLE MODULIZED BATTERY CHARGING ASSEMBLY)", rowSpan: 5 },
        { content: "9096141" },
        { content: "美國" },
        { content: "2015/08/04" }
      ],
      [
        { content: "CN103368218B" },
        { content: "中國" },
        { content: "2015/10/21" }
      ],
      [
        { content: "EP2651002" },
        { content: "歐盟" },
        { content: "2016/03/09" }
      ],
      [
        { content: "ES2570854" },
        { content: "西班牙" },
        { content: "2016/03/09" }
      ],
      [
        { content: "I565186" },
        { content: "中華民國" },
        { content: "2017/01/01" }
      ],
      [
        { content: "具有電池單元平衡系統的充電站 (CHARGING STATION HAVING BATTERY CELL BALANCING SYSTEM)", rowSpan: 3 },
        { content: "9276415" },
        { content: "美國" },
        { content: "2016/03/01" }
      ],
      [
        { content: "I538345" },
        { content: "中華民國" },
        { content: "2016/06/11" }
      ],
      [
        { content: "6612022" },
        { content: "日本" },
        { content: "2019/11/08" }
      ],
      [
        { content: "具有散熱系統的電池組 (BATTERY PACK HAVING COOLING SYSTEM)", rowSpan: 4 },
        { content: "I460902" },
        { content: "中華民國" },
        { content: "2014/11/11" }
      ],
      [
        { content: "ES2561533" },
        { content: "西班牙" },
        { content: "2015/12/16" }
      ],
      [
        { content: "CN103700904B" },
        { content: "中國" },
        { content: "2018/04/20" }
      ],
      [
        { content: "6466049" },
        { content: "日本" },
        { content: "2019/01/18" }
      ],
      [
        { content: "具有散熱系統的電池組 (BATTERY PACK HAVING COOLING SYSTEM)", rowSpan: 2 },
        { content: "8785027" },
        { content: "美國" },
        { content: "2014/07/22" }
      ],
      [
        { content: "EP2579385" },
        { content: "歐盟" },
        { content: "2015/12/16" }
      ],
      [
        { content: "具時間階段控制的多功能智慧型交換充電器 (MULTI-FUNCTIONED SMART SWITCHING CHARGER WITH TIME STAGE CONTROL)", rowSpan: 1 },
        { content: "M476409" },
        { content: "中華民國" },
        { content: "2014/04/11" }
      ],
      [
        { content: "充電電池模組 (RECARGEABLE BATTERY MODULE)", rowSpan: 5 },
        { content: "I492439" },
        { content: "中華民國" },
        { content: "2015/07/11" }
      ],
      [
        { content: "M511160" },
        { content: "中華民國" },
        { content: "2015/10/21" }
      ],
      [
        { content: "CN204809358U" },
        { content: "中國" },
        { content: "2015/11/25" }
      ],
      [
        { content: "CN104701912B" },
        { content: "中國" },
        { content: "2017/06/20" }
      ],
      [
        { content: "I624103" },
        { content: "中華民國" },
        { content: "2018/05/11" }
      ],
      [
        { content: "用於電池單元間平均分佈溫度的系統 (System for Uniformly Distributing Temperature Across Batteries)", rowSpan: 2 },
        { content: "CN104979600B" },
        { content: "中國" },
        { content: "2019/03/01" }
      ],
      [
        { content: "EP2945220" },
        { content: "歐盟" },
        { content: "2020/04/08" }
      ],
      [
        { content: "用於回收再利用的電動車電池交換系統 (Electric vehicle battery exchange system for recycling)", rowSpan: 1 },
        { content: "I535141" },
        { content: "中華民國" },
        { content: "2016/05/21" }
      ],
      [
        { content: "Rechargeable Battery Module", rowSpan: 1 },
        { content: "9159975" },
        { content: "美國" },
        { content: "2015/10/13" }
      ],
      [
        { content: "可攜式快篩之體外檢測系統", rowSpan: 3 },
        { content: "M544629" },
        { content: "中華民國" },
        { content: "2017/07/01" }
      ],
      [
        { content: "I612306" },
        { content: "中華民國" },
        { content: "2019/01/20" }
      ],
      [
        { content: "11049242" },
        { content: "美國" },
        { content: "2021/06/29" }
      ],
      [
        { content: "可攜式快篩體外檢測系統", rowSpan: 1 },
        { content: "ZL201621488016.2" },
        { content: "中國" },
        { content: "2018/12/30" }
      ],
      [
        { content: "可重複使用之快篩試紙卡匣", rowSpan: 2 },
        { content: "M576254" },
        { content: "中華民國" },
        { content: "2019/04/01" }
      ],
      [
        { content: "ZL201822010481.0" },
        { content: "中國" },
        { content: "2019/09/17" }
      ],
      [
        { content: "具有自我學習可攜式快篩尿液檢測系統", rowSpan: 2 },
        { content: "M583942" },
        { content: "中華民國" },
        { content: "2019/09/21" }
      ],
      [
        { content: "I746991" },
        { content: "中華民國" },
        { content: "2021/11/21" }
      ],
      [
        { content: "具辨識標籤補償功能之檢測系統", rowSpan: 2 },
        { content: "M588797" },
        { content: "中華民國" },
        { content: "2020/01/01" }
      ],
      [
        { content: "I699703" },
        { content: "中華民國" },
        { content: "2020/09/03" }
      ],
      [
        { content: "一機多測之快篩檢測儀", rowSpan: 3 },
        { content: "M614236" },
        { content: "中華民國" },
        { content: "2021/07/11" }
      ],
      [
        { content: "ZL202120443109.8" },
        { content: "中國" },
        { content: "2022/01/25" }
      ],
      [
        { content: "I798620" },
        { content: "中華民國" },
        { content: "2023/04/11" }
      ],
      [
        { content: "簡易貼心臟健康監測器", rowSpan: 2 },
        { content: "M626124" },
        { content: "中華民國" },
        { content: "2022/04/21" }
      ],
      [
        { content: "ZL202220191745.9" },
        { content: "中國" },
        { content: "2022/09/02" }
      ],
      [
        { content: "簡易貼心臟健康監測器的應用方法", rowSpan: 1 },
        { content: "I796919" },
        { content: "中華民國" },
        { content: "2023/03/21" }
      ],
      [
        { content: "氣壓偵測裝置、方法與雙氣壓計跌倒偵測系統", rowSpan: 1 },
        { content: "I739336" },
        { content: "中華民國" },
        { content: "2021/09/11" }
      ]



      
    ],
  };

  return (
    <div className="mb-48">
      <HeroSection
        title="綠能低碳計畫"
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"綠色能源低碳計畫"} />
          <P
            text={
              "為響應政府所推動的節能減碳政策及為地球發展永續的生活環境，本公司於2010年投資成立高達能源科技公司，其主要致力於研發電池管理系統，產品應用於電動車、電動巴士及儲能系統，其希望致力於推廣電動車輛之發展，以降低廢氣排放，達到節能減碳之環保效益。"
            }
          />
          <P
            text={
              "高達能源公司向工業局申請「電動二輪車電池與車輛的車電分離應用服務計畫」，期望打造綠色低碳旅遊，並計畫未來服務範圍擴大到其他地區及國外。"
            }
          />
        </Section>
        <Section>
          <H2 text={"已取得之科專計畫項目"} />
          <Table data={tableData} color="#3BC376" />
        </Section>
        <Section>
          <H2 text={"已取得之專利項目"} />
          <Table data={data} color="#3BC376" />
        </Section>
      </Container>
    </div>
  );
};

export default GreenEnergy;
