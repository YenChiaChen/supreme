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
  const ListTabItems = {
    "2022": [
      {
        description: "垃圾郵件防護",
        highlight: "117,406 封",
      },
      {
        description: "資訊安全郵件宣導",
        highlight: "4 次",
      },
      {
        description: "網站滲透測試",
        highlight: "1 次",
      },
      {
        description: "網站弱點掃描",
        highlight: "1 次",
      },
      {
        description: "主機系統弱點掃描",
        highlight: "2 次",
      },
      {
        description: "病毒郵件攔截統計",
        highlight: "13,045 封",
      },
      {
        description: "郵件連線阻擋統計",
        highlight: "117,406 次",
      },
      {
        description: "修補系統及軟體漏洞",
        highlight: "878 個",
      },
      {
        description: "社交工程演練信件",
        highlight: "960 封",
      },
    ],
    "2023": [
      {
        description: "垃圾郵件防護",
        highlight: "107,517 封",
      },
      {
        description: "資訊安全郵件宣導",
        highlight: "6 次",
      },
      {
        description: "主機系統弱點掃描",
        highlight: "1 次",
      },
      {
        description: "病毒郵件攔截統計",
        highlight: "1484 封",
      },
      {
        description: "郵件連線阻擋統計",
        highlight: "112,746 次",
      },
      {
        description: "修補系統及軟體漏洞",
        highlight: "918 個",
      },
      {
        description: "社交工程演練信件",
        highlight: "510 封",
      },
    ],
  };

  const AnimatedListItems1 = [
    {
      id: 1,
      content:
        "定期辦理資訊安全教育訓練：確保員工了解資安重要性，全面提升員工資訊安全威脅意識。 9 名成員，於每年年初及年中檢討各項風險 議題，投入部門人力監控及增加保險預算轉嫁風險。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 2,
      content:
        "每年辦理一次資訊安全演習：專注於關鍵的策略，模擬實際資安危機事件，如：網路釣魚和社交工程攻擊，藉以協助員工進行資安威脅辨識，藉由資安演練掌握公司資安弱點。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
  ];

  const tableData = {
    headers: [
      { content: "年度項目" },
      { content: "2020年" },
      { content: "2021年" },
      { content: "2022年" },
    ],
    rows: [
      [
        { content: "研發費用 ( A )", nowrap: true },
        { content: "20,688" },
        { content: "29,522" },
        { content: "88,789" },
      ],
      [
        { content: "營業收入淨額 ( B )", nowrap: true },
        { content: "48,277,022" },
        { content: "91,147,824" },
        { content: "78,790,630" },
      ],
      [
        { content: "研發類用占營業收入淨額比率 ( A ) / ( B )", nowrap: true },
        { content: "0.04%" },
        { content: "0.03%" },
        { content: "0.11%" },
      ],
    ],
  };

  return (
    <div className="mb-48">
      <HeroSection
        title="產品與客戶服務"
        description={`本公司於2011年完成設置薪資報酬委員會，並由董事會訂定「薪資報酬委員會組織規程」，
藉以強化公司治理，健全公司董事及經理人薪資報酬制度。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"政策與承諾"} />
          <P
            text={
              "掌握產業趨勢，制定客戶服務策略，承諾支持環境保護之相關法令規定，滿足環境及社會議題要求之規範。所有銷售之產品與服務及行銷與廣告皆依循法規及國際準則為之，不得有欺騙、誤導、詐欺或任何其他破壞消費者信任、損害消費者權益之行為。"
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
          <Image
            src={ProductSupremeImage}
            alt="Supreme Product"
            maxWidth="1000px"
          />
        </Section>
        <Section>
          <H2 text={"研發與創新"} />
          <P
            text={
              "本公司的競爭優勢為即時提供客戶需求及掌握關鍵技術發展趨勢，研發部門專責開發新一代產品之應用技術，創新產品應用領域，同時掌握關鍵技術發展趨勢以及客戶未來需求走向，提供有利的市場資訊及專業的技術支援，協助客戶產品整合規劃，解決設計、生產上的問題，並以提供整體設計方案為目標。"
            }
          />

          <div className="flex flex-col gap-4 mt-md">
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              <div className="collapse-title flex">
                <span className="text-lg text-blue">
                未來研發計畫及投入之研發費用
                </span>
              </div>
              <div className="collapse-content text-black">
                <P
                  text={
                    "2022年度依消費性電子產品市場需求訂定不同之研發專案，研發費用計投入新台幣88,789仟元，預計2023 年度將再投入約80,000仟元持續開發快篩試劑、試劑檢測儀、醫療雲端服務、電動車電池組、EXN交換站及影像產品研發與製造等產品。近三年個體財務報告所載之累計投入研發費用："
                  }
                />
                <Table data={tableData} color="#3B79E4" />
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              <div className="collapse-title flex">
                <span className="text-lg text-blue">
                重大創新技術開發
                </span>
              </div>
              <div className="collapse-content text-black">
                <P
                  text={
                    "目前持續研發之新產品為全民健康快速篩檢系統、試劑檢測儀、醫療雲端服務、次世代生物科技、電動車電池組、雲端能源交換管理系統(EnergyeXchangeNetwork)、安全性鋰電池材料、低電壓電力推進系統整合方案及大型儲能設備與能源管理系統(EMS)等產品。 對公司績效的貢獻度，而給予合理報酬，相關績效考核及薪酬合理性均經薪資報酬委員會及董事會審核，並隨 時視實際經營狀況及法令適時檢討酬金制度，以謀公司永續經營與風險控管之平衡。依本公司章程第二十條， 本公司年度扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥不高於百分之二為董事酬勞，由董事會決議後 分派，並向股東會報告。"
                  }
                />
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              <div className="collapse-title flex">
                <span className="text-lg text-blue">
                完成 ISO-13485 的認證
                </span>
              </div>
              <div className="collapse-content text-black">
                <P
                  text={
                    "研發部門成立迄今，除以提供客戶技術支援外，亦積極尋求新產品的合作開發案，以多元化的產品應用觀念與其核心關鍵技術，同時導入系統整合設計，協助客戶用最短的時間及最有效率的方式，完成產品開發與量產，帶來新商機；另外在遠距智慧醫療產品線的布建需求下，完成ISO-13485的認證，以利後續相關服務及產品的銷售推動，目前已取得科專計畫及專利項目。(EnergyeXchangeNetwork)、安全性鋰電池材料、低電壓電力推進系統整合方案及大型儲能設備與能源管理系統(EMS)等產品。 對公司績效的貢獻度，而給予合理報酬，相關績效考核及薪酬合理性均經薪資報酬委員會及董事會審核，並隨 時視實際經營狀況及法令適時檢討酬金制度，以謀公司永續經營與風險控管之平衡。依本公司章程第二十條， 本公司年度扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥不高於百分之二為董事酬勞，由董事會決議後 分派，並向股東會報告。"
                  }
                />
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default ProductCustomerService;
