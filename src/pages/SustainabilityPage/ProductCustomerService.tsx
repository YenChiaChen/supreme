import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/產品與客戶服務.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { Image } from "../../components/ui/Image";
import { H2, List, P } from "../../components/ui/Text";
import { BgSection, Container, Section } from "../../components/ui/Container";
import { faBullseye, faPlay } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListTab } from "../../components/ui/Tab";
import SturctureImage from "../../assets/img/subPage/永續經營/information-security-structure.png";
import PublicizeImage from "../../assets/img/subPage/永續經營/information-security-publicize.png";
import FlowImage from "../../assets/img/subPage/永續經營/information-security-flow.png";
import AnimatedList from "../../components/ui/List";
import { faCircleCheck } from "@fortawesome/pro-light-svg-icons";
import { Table } from "../../components/ui";
import ProductSupremeImage from "../../assets/img/subPage/永續經營/product-customer-supreme.png";
const ProductCustomerService: React.FC = () => {


  const tableData = {
    headers: [
      { content: "主要產品" },
      { content: "重要用途" },
      { content: "主要供應商" },
    ],
    rows: [
      [
        { content: "記憶體元件", nowrap: true },
        {
          content:
            "顯示卡、主機板、數據機、筆記型電腦、網路卡、伺服器、手機、平板、TV、數位相機 、LCD 監視器 、ADSL 、CABLE MODEM，電腦、通訊及消費性電子產品作為儲存、記憶使用。",
        },
        { content: "SAMSUNG" },
      ],
      [
        { content: "非記憶體元件", nowrap: true },
        {
          content:
            "主機板、電源供應器、充電器、手機、平板、TV、電腦顯示器、筆記型電腦、網路卡、週邊卡、數據機、數位相機等，應用於資訊、通訊、網路及消費性電子產品等。",
        },
        {
          content:
            "SAMSUNG、MTK、SKYWORKS、BOSCH、敦泰、奕力、CIRRUS LOGIC、蘇州江蘇和成、驊訊、聚睿、聚積、Chrontel、瀚宇彩晶、群創、奇景、卓榮、HKC、 GALAXYCORE等",
        },
      ],
    ],
  };

  const tableData2 = {
    headers: [
      { content: "面向" },
      { content: "內容" },
    ],
    rows: [
      [
        { content: "解決方案及通路", nowrap: true },
        { content: "提供全面的解決方案及行銷通路。" },
      ],
      [
        { content: "新能源/BMS", nowrap: true },
        { content: "專注於新能源技術及電池管理系統的開發。" },
      ],
      [
        { content: "IC設計/光電科技", nowrap: true },
        { content: "提升產品與服務，供應下游廠商在IC設計及光電技術的研發和應用。" },
      ],
      [
        { content: "物聯網/智能載具", nowrap: true },
        { content: "因應物聯網及智能載具的創新和整合，為下游廠商提供全面與高效服務。" },
      ],
      [
        { content: "健康", nowrap: true },
        { content: "推動智慧生物醫療及人工智慧即時檢測技術的研發。" },
      ],
      [
        { content: "大數據/雲計算/雲服務", nowrap: true },
        { content: "快速回應市場需求，為客戶提供高效能的數據處理方案。" },
      ],
    ],
  };

  return (
    <div className="mb-48">
      <HeroSection
        title="產品與客戶服務"
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"政策與承諾"} />
          <P
            text={
              "掌半導體零組件代理商之競爭優勢係即時提供客戶需求及掌握關鍵技術發展趨勢，優良的產品品質與技術，與提供客戶更多元的產品及完善的服務才能提昇客戶忠誠度，為公司帶來豐厚的利潤。掌握產業趨勢，制定客戶服務策略，承諾支持環境保護之相關法令規定，滿足環境及社會議題要求之規範。所有銷售之產品與服務及行銷與廣告皆依循法規及國際準則為之，不得有欺騙、誤導、詐欺或任何其他破壞消費者信任、損害消費者權益之行為。"
            }
          />
        </Section>
        <Section>
          <H2 text={"至上提供之服務及產品"} />
          <P
            text={
              "在全球半導體市場中，電子零組件通路商扮演著極為重要的角色，保持著持續的動能，並參與國際化的專業分工體系。通路商具有多重功能，包括為上游零組件製造商提供下游市場的動向消息，提供產品開發建議，並建立完整的銷售網路。同時，也為下游的電子產品製造商提供全面性技術服務，以協助開發新產品，並縮短新產品上市的時間。積極扮演上下游之間的溝通橋樑，成為具有高附加價值的專業技術服務通路商，在電子產業價值鏈中占據著重要地位。"
            }
          />

          <Table data={tableData} color="#3B79E4" />
          <Image src={"https://res.cloudinary.com/dvgxlmyje/image/upload/v1728013758/devices_n6y9au.png"} alt="Product Image" maxWidth="600px" />
        </Section>


        <Section>
          <H2 text={"未來發展規劃"} />
          <P
            text={
              "在電子資訊產業之產銷分工模式中，至上扮演中間橋樑角色，透過綿密的行銷通路網，將產品銷售予下游資訊、通訊及消費性電子產品製造商，並提供整合與應用等諮詢服務。未來公司規劃朝六大面向來迅速滿足客戶一次購足之需求，作為發展的指標："
            }
          />

          <Table data={tableData2} color="#3B79E4" />

          <Image
            src={ProductSupremeImage}
            alt="Supreme Product"
            maxWidth="1000px"
          />
        </Section>
      </Container>
    </div>
  );
};

export default ProductCustomerService;
