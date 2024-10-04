import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/供應鏈管理.jpg";
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
import { faCheckCircle, faCircleCheck } from "@fortawesome/pro-light-svg-icons";
import { Table } from "../../components/ui";
import SupplyChainRelationImage from "../../assets/img/subPage/永續經營/supply-chain-relationship.png";
import SupplyChainImage from "../../assets/img/subPage/永續經營/supply-chain.png";
const SupplyChain: React.FC = () => {
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
        { content: "年度" }, 
        { content: "2020" },
        { content: "2021" },
        { content: "2022" },
    ],
    rows: [
      [
        { content: "新供應商數量統計", nowrap: true },
        { content: "21" },
        { content: "28" },
        { content: "11" },
      ],
    ],
  };
  const tableData2 = {
    headers: [
        { content: "認證項目" }, 
        { content: "SAMSUNG" },
        { content: "瀚宇彩晶(股)公司" },
        { content: "聯發科技(股)公司" },
    ],
    rows: [
      [
        { content: "RBA 責任商業聯盟行為準則", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "AEO安全認證優質企業", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "ISO 14064-1溫室氣體排放查證", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "ISO 14067碳足跡", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: "" },
      ],
      [
        { content: "ISO 50001 能源管理系統", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "ISO 14001 環璄管理系統", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "ISO 45001 職業安全衛生管理", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "ISO 9001 品質管理系統", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "ISO 27001 資安管理認證", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "ISO/IEC 27701 隱私資訊管理", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: "" },
        { content: "" },
      ],
      [
        { content: "ISO 28000 供應鏈安全管理系統", nowrap: true },
        { content: "" },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "ISO14040、ISO 14044生命週期評估", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: "" },
        { content: "" },
      ],
      [
        { content: "RoHS 有害物質限制指令", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "IECQ QC 080000 有害物質管理系統記證", nowrap: true },
        { content: "" },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
      [
        { content: "WEEE 廢電器電子設備指令", nowrap: true },
        { content: "" },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: "" },
      ],
      [
        { content: "水資源管理聯盟（AWS）白金級認證", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: "" },
        { content: "" },
      ],
      [
        { content: "ISO 14064-3標準碳足跡驗證", nowrap: true },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
        { content: "" },
        { content: "" },
      ],
      [
        { content: "SA8000 社會責任標準", nowrap: true },
        { content: "" },
        { content: "" },
        { content: <FontAwesomeIcon icon={faCheckCircle} className="text-blue" /> },
      ],
    ],
  };

  return (
    <div className="mb-48">
      <HeroSection
        title="供應鏈管理"
        description={`本公司視供應商為重要合作夥伴，持續規劃制定供應商管理政策，確保所銷售電子產品品質、交期與價格等符合規範外，亦與供應商維持長期合作關係，落實勞工安全與衛生、環境保護、道德規範、重視人權等，共同遵循相關規範及促進經濟、社會及環境之平衡與永續發展。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"產業供應鏈"} />
          <P
            text={
              "半導體零組件產品主要可區分為積體電路及分離式元件，積體電路依功能不同區分為記憶體 IC、微元件 IC、邏輯 IC 及類比 IC 四大類；分離式元件則包括電晶體、二極體、閘流體及光電半導體等，由於該等元件應用 範圍橫跨主機板及筆記型電腦、多媒體及系統周邊、通訊及消費性產業等，故隨全球電腦、網際網路、行動通 訊、與多媒體視訊產品之快速普及，半導體零組件需求不斷推升，使得零件通路業者之地位日益重要。"
            }
          />
        </Section>
        <Section>
          <H2 text={"半導體產品關聯圖"} />
          <P
            text={
              "本公司向上游半導體電子零組件製造商採購，透過系統化之倉儲管理、多樣化之經銷代理品牌及綿密之行 銷通路網，將產品銷售予下游資訊、通訊及消費性產品之製造商，並提供整合與應用等諮詢服務，滿足客戶一 次性購足之需求。因此，在電子資訊產業之產銷分工模式中，扮演著不可或缺的中間橋樑角色。"
            }
          />
          <Image
            src={SupplyChainRelationImage}
            alt="Supply Chain Relation"
            maxWidth="800px"
          />
        </Section>
        <Section>
          <H2 text={"半導體電子零組件上、中、下游供應鏈狀態"} />
          <Image src={SupplyChainImage} alt="Supply Chain" maxWidth="1000px" />
        </Section>

        <Section>
          <H2 text={"供應商的管理與評鑑"} />
          <div className="flex flex-col gap-4 mt-md">
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              <div className="collapse-title flex">
                <span className="text-lg text-blue">
                  供應商 / 承攬商管理政策
                </span>
              </div>
              <div className="collapse-content text-black">
                <P
                  text={
                    "本公司視供應商為重要合作夥伴，持續規劃制定供應商管理政策，確保所銷售電子產品品質、交期與價格等符合規範外，亦與供應商維持長期合作關係，落實勞工安全與衛生、環境保護、道德規範、重視人權等，共同遵循相關規範及促進經濟、社會及環境之平衡與永續發展。"
                  }
                />
                <P
                  text={
                    " 本公司主要供應商位於韓國、台灣、中國、越南、菲律賓等據點，為確保供應商夥伴擁有相同的永續發展理念，邀請供應商簽署「人權、環境永續暨誠信經營承諾書」。2023年並無具有強迫或強制勞動事件重大風險的營運據點和供應商。"
                  }
                />
                <P
                  text={
                    "基於保護兒童身心發展、禁止強迫勞動及不歧視之人權政策，本公司不雇用年齡未滿16 歲之童工、不強迫勞動及避免任何不當的聘雇歧視，並要求供應商同樣遵循國際標準及其營業據點之勞工聘僱應符合相關法律。2023年，本公司及供應商皆無發生歧視、使用童工、強迫勞動、歧視或其他違反勞工人權之重大風險或情事。"
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
                  供應商 / 承攬商管理機制
                </span>
              </div>
              <div className="collapse-content text-black">
                <P
                  text={
                    "本公司對供應商管理係透過「供應商遴選」及「供應商永續管理」兩個面向，以促進上下游共同展開永續價值鏈發展。"
                  }
                />
                <List
                  title="供應商遴選："
                  items={[
                    {
                      text: "對於新供應商之遴選,除應慎選信譽良好之廠商外,尚應考量其產品品質、財務狀況、價格、供貨數量、環保議題、勞工安全與衛生等各面向進行評核。",
                    },
                  ]}
                />
                <List
                  title="供應商永續管理："
                  items={[
                    {
                      text: "供應商鑑別：(1)對供應商進行間接環境考量面鑑別。(2)評估供應商是否有影響環境與社會之紀錄。",
                    },
                    {
                      text: "供應商新增：應由業務部填寫「供應商基本資料表」，經權責主管核准後，由業務後勤部於系統建立供應商資料。",
                    },
                    {
                      text: "供應商資本資料維護：供應商資料有異動時，及時更新供應商資料。",
                    },
                    {
                      text: "重要採購：進行長期供銷合作時，公司應與其簽訂代理業務合約以保障自身之代理權。",
                    },
                  ]}
                />
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              <div className="collapse-title flex">
                <span className="text-lg text-blue">供應商遴選</span>
              </div>
              <div className="collapse-content text-black">
                <P
                  text={
                    "本公司與各供應商之間依約交易，持續維繫良好的長期夥伴關係，並依據供應商管理作業進行評鑑；新供應商之遴選，除應慎選信譽良好之廠商外，尚應考量其產品品質、財務狀況、價格、供貨數量、環保議題、勞工安全與衛生等各面向進行評核，待通過評鑑符合本公司要求條件者，始成為合格供應商。亦邀請供應商簽署「人權、環境永續暨誠信經營承諾書」，與供應商夥伴共同在永續發展的道路上努力。針對供應商管理實施情形揭露於本公司官網。"
                  }
                />
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              <div className="collapse-title flex">
                <span className="text-lg text-blue">供應商新增及異動</span>
              </div>
              <div className="collapse-content text-black">
                <P
                  text={
                    "於新增供應商時，應由業務部填寫「供應商基本資料表」，經權責主管核准後，再由業務後勤部至系統建立供應商基本資料；資料有異動時，及時更新供應商資料。"
                  }
                />
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              <div className="collapse-title flex">
                <span className="text-lg text-blue">重要採購</span>
              </div>
              <div className="collapse-content text-black">
                <P
                  text={
                    "本公司係與選定之供應商進行長期合作，與其簽訂代理業務合約以保障自身之代理權。與之簽訂之合約或協議，均須符合內稽內控之流程，經權責主管及法務人員覆核後始簽訂，並由風險管理部妥善保管合約或交易協議。"
                  }
                />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <H2 text={"個年度新供應商數量"} />
          <Table data={tableData} color="#3B79E4" />
        </Section>
        <Section>
          <H2 text={"供應商鑑別"} />
          <P
            text={
              "本公司定期評量供應商提供的產品品質及其法令遵守情形，同時審查其是否有不誠信的經營行為與對環境 和社會的負面記錄，以避免與不誠信行為者以及違反企業社會責任政策的供應商進行交易。 基於至上為產品代理商之角色，故每年針對主要供應商所公開之訊息進行更新管理。"
            }
          />
          <Table data={tableData2} color="#3B79E4" />
        </Section>
      </Container>
    </div>
  );
};

export default SupplyChain;
