import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續共生/水資源.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, P } from "../../components/ui/Text";
import { Container, Section } from "../../components/ui/Container";
import { Table, YearTabContainer } from "../../components/ui";
const WaterManagement: React.FC = () => {
  const tableData = {
    headers: [
      { content: "年度" },
      { content: "2021年" },
      { content: "2022年" },
      { content: "2023年" },
    ],
    rows: [
      [
        { content: "取水量" },
        { content: "0.819" },
        { content: "2.867" },
        { content: "2.932" },
      ],
    ],
  };

  return (
    <div className="mb-48">
      <HeroSection
        title="水資源管理"
        description={`本公司以追求能源與資源最佳使用效率作為努力目標，因此，持續執行節電措施及提高能源效率，同時思 考未來如何增加綠色能源的比例。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"水資源管理"} />
          <P
            text={
              "本公司共有四個營運據點，分別為台北總部、新莊、龍潭及台南三個辦事處，各營運據點取水來源均為各地所屬自來水公司，未取得地表水、地下水、海水、產出水等，也無自具有水資源壓力的地區取水。本公司採用Aqueduct Water Risk Atlas工具，三個辦事處之水資源壓力分析結果皆屬「Low-Medium(1-2)」。"
            }
          />
          <P text={"註：WATERRISKATLAS：https://reurl.cc/yyjme2"} />
        </Section>
        <Section>
          <H2 text={"水資源使用統計"} />
          <Table
            data={tableData}
            color="#3BC376"
            unit="單位：百萬公升 ( Million Litres )"
            notes={[
              { text: "盤查邊界涵蓋台北總部、新莊、龍潭及台南三處辦事處。" },
            ]}
          />
          <YearTabContainer years={["2023", "2022"]} tabColor="#3BC376">
            <div data-year="2023">
              <P
                text={
                  "2023年取水量為2.932百萬公升，相較2022年增加0.065百萬公升，增加主要原因係因統計數據揭露期間落差因素所致。一為龍潭辦事處2022年度設置於中研院，水費係包含在月租賃費用當中，無額外收取，直至2023年08月辦事處遷移，始有取水數據之產生；一為新莊辦事處於2022年09月增加租賃區域，其取水數據統計不足一年，2023年則完整揭露二個租賃區域之年度取水數據。"
                }
              />
            </div>
            <div data-year="2022">
              <P
                text={
                  "各營運據點水資源主要用途為辦公區域空調循環用水及員工生活用水，排放水主要為員工生活污水，經由辦公大樓污水管線後進入公共下水道，空調用水之蒸散則為主要耗用原因，因排水量及耗水量無有效的統計方式，故僅揭露取水量。2022 年取水量為2.867百萬公升，相較2021年增加2.048百萬公升，主要原因係今年增加盤查範圍及因COVID-19 疫情趨緩減少居家辦公天數，故取水量隨之增加。"
                }
              />
            </div>
          </YearTabContainer>
        </Section>
      </Container>
    </div>
  );
};

export default WaterManagement;
