import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/永續發展委員會.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { Desc, H2, List, P } from "../../components/ui/Text";
import { Image, Table } from "../../components/ui";
import { Container, Section } from "../../components/ui/Container";
import { YearTabContainer } from "../../components/ui/Tab";
import CommitteeStrucutreImage from "../../assets/img/subPage/永續經營/sustainbility-committee-structure.png";
import {
  faChartLine,
  faClipboardCheck,
  faEye,
  faFileSignature,
  faTasks,
} from "@fortawesome/pro-light-svg-icons";
import AnimatedList from "../../components/ui/List";
const SustainbilityCommittee: React.FC = () => {
  const anmiatedListItem = [
    {
      id: 1,
      content: "擬定永續發展相關制度並配合有關規範修訂之",
      icon: faClipboardCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 2,
      content: "定期評估永續計劃執行成效，且每年向董事會報告年度執行成果",
      icon: faChartLine,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 3,
      content: "其他經董事會決議指示本委員會應辦理之事項",
      icon: faTasks,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 4,
      content: "監督永續發展政策方向與推動計劃，且定期追蹤執行進度",
      icon: faEye,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 5,
      content: "審定永續報告書",
      icon: faFileSignature,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
  ];

  const committeeMembersData = {
    headers: [
      { content: "身份別" },
      { content: "姓名" },
      { content: "主要學經歷" },
      { content: "主要現職" },
    ],
    rows: [
      [
        { content: "獨立董事" },
        { content: "楊耀松" },
        {
          content: (
            <List
              items={[
                {
                  text: "英國萊斯特大學EMBA",
                },
                {
                  text: "魔奇科技(股)公司董事",
                },
                {
                  text: "香港華馨達國際(股)公司副董事長",
                },
                {
                  text: "晨星半導體(股)公司總經理特助",
                },
              ]}
              listType="disc"
            />
          ),
        },
        {
          content: (
            <List
              items={[
                {
                  text: "香港華馨達國際(股)公司副董事長",
                },
              ]}
              listType="decimal"
            />
          ),
        },
      ],
      [
        { content: "獨立董事" },
        { content: "王淮" },
        {
          content: (
            <List
              items={[
                {
                  text: "	國立政治大學企管碩士",
                },
                {
                  text: "龍巖(股)公司獨立董事",
                },
                {
                  text: "博錸生技(股)公司獨立董事",
                },
                {
                  text: "智擎生技製藥(股)公司獨立董事",
                },
                {
                  text: "中華公司治理協會理事",
                },
              ]}
              listType="disc"
            />
          ),
        },
        {
          content: (
            <List
              items={[
                {
                  text: "博錸生技(股)公司獨立董事",
                },
                {
                  text: "生華創業投資(股)公司監察人",
                },
              ]}
              listType="decimal"
            />
          ),
        },
      ],
      [
        { content: "獨立董事" },
        { content: "林佩蓉" },
        {
          content: (
            <List
              items={[
                {
                  text: "國立台灣大學管理學院",
                },
                {
                  text: "台大-復旦EMBA境外專班碩士班",
                },
                {
                  text: "東森電視業務營銷部副總經理",
                },
              ]}
              listType="disc"
            />
          ),
        },
        {
          content: (
            <List
              items={[
                {
                  text: "安和智通（股）董事長",
                },
                {
                  text: "安璽整合行銷(股)公司董事長",
                },
                {
                  text: "鉑齡(股)公司董事長",
                },
                {
                  text: "安投(股)公司董事長",
                },
                {
                  text: "安智媒體行銷(股)公司董事長",
                },
              ]}
              listType="decimal"
            />
          ),
        },
      ],
      [
        { content: "委員" },
        { content: "陳銘德" },
        {
          content: (
            <List
              items={[
                {
                  text: "政治大學企研所",
                },
                {
                  text: "美齊科技副總經理",
                },
              ]}
              listType="disc"
            />
          ),
        },
        {
          content: (
            <List
              items={[
                {
                  text: "至上電子(股)公司財務長",
                },
              ]}
              listType="decimal"
            />
          ),
        },
      ],
      [
        { content: "委員" },
        { content: "張家瑋" },
        {
          content: (
            <List
              items={[
                {
                  text: "元智大學工業工程管理學系",
                },
                {
                  text: "至上電子(股)公司業務",
                },
              ]}
              listType="disc"
            />
          ),
        },
        {
          content: (
            <List
              items={[
                {
                  text: "至上電子(股)公司資深業務副總",
                },
              ]}
              listType="decimal"
            />
          ),
        },
      ],
      [
        { content: "委員" },
        { content: "陳力行" },
        {
          content: (
            <List
              items={[
                {
                  text: "台灣大學EMBA會計與管理決策組",
                },
                {
                  text: "中央大學工業管理研究所",
                },
                {
                  text: "勤業會計師事務所領組",
                },
                {
                  text: "金雨企業(股)公司董事",
                },
              ]}
              listType="disc"
            />
          ),
        },
        {
          content: (
            <List
              items={[
                {
                  text: "至上電子(股)公司會計協理、公司治理主管",
                },
              ]}
              listType="decimal"
            />
          ),
        },
      ],
    ],
  };

  const committeeOperationData = {
    headers: [
      { content: "職稱" },
      { content: "姓名" },
      { content: "實際出(列)席次數(B)" },
      { content: "委託出席次數" },
      { content: "應出(列)席次數(A)" },
      { content: "實際出席(列)%(B/A)" },
      { content: "備註" },
    ],
    rows: [
      [
        { content: "獨立董事", nowrap: true },
        { content: "楊耀松", nowrap: true },
        { content: "3" },
        { content: "0" },
        { content: "3" },
        { content: "100.00" },
        { content: "" },
      ],
      [
        { content: "獨立董事", nowrap: true },
        { content: "王淮", nowrap: true },
        { content: "3" },
        { content: "0" },
        { content: "3" },
        { content: "100.00" },
        { content: "" },
      ],
      [
        { content: "獨立董事", nowrap: true },
        { content: "林佩蓉", nowrap: true },
        { content: "1" },
        { content: "-" },
        { content: "1" },
        { content: "100.00" },
        { content: "新任" },
      ],
      [
        { content: "財務長", nowrap: true },
        { content: "陳銘德", nowrap: true },
        { content: "3" },
        { content: "0" },
        { content: "3" },
        { content: "100.00" },
        { content: "" },
      ],
      [
        { content: "資深業務副總", nowrap: true },
        { content: "張家瑋", nowrap: true },
        { content: "2" },
        { content: "1" },
        { content: "3" },
        { content: "66.67" },
        { content: "" },
      ],
      [
        { content: "財會主管/公司治理主管	", nowrap: true },
        { content: "陳力行", nowrap: true },
        { content: "3" },
        { content: "0" },
        { content: "3" },
        { content: "100.00" },
        { content: "" },
      ],
    ],
  };

  
  const committeePerformanceData2023 = {
    headers: [
      { content: "評估範圍" },
      { content: "評估方式" },
      { content: "評估期間" },
      { content: "評估內容" },
      { content: "評估結果" },
    ],
    rows: [
      [
        { content: "各功能性委員會" },
        { content: "董事自評" },
        { content: "2023.01.01~2023.12.31" },
        { content: 
            <List
            items={[
              {
                text: "對公司營運之參與程度",
              },
              {
                text: "功能性委員會職責認知",
              },
              {
                text: "提升功能性委員會決策品質",
              },
              {
                text: "功能性委員會組成及成員選任",
              },
              {
                text: "內部控制",
              },
            ]}
            listType="disc"
          />

        },
        { content: "平均達成率：95.50%" },
      ],
    ],
  };

  return (
    <div className="mb-48">
      <HeroSection
        title="永續發展委員會"
        description={`本公司於2022 年11 月8 日經董事會決議通過成立「董事會功能性委員會- 永續發展委員會」。於2023年11月8日經決議通過修改【永續發展委員會組織規程】。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <H2 text={"永續發展委員會"} />
        <P
          text={
            "本公司之永續發展委員會目前由楊耀松獨立董事擔任召集人，成員包含３位獨立董事、財務長、資深業務副總以及公司治理主管，共計 6 位委員。"
          }
        />
        <P
          text={
            "永續發展委員會依據環境保護( E )、社會責任( S )、公司治理( G )三大面向，設置永續環境、社會關懷、員工關懷、供應鏈管理、風險管控、公司治理六個工作推動小組，分別掌管該領域之永續目標，並定期召開會議向董事會報告永續推動與執行績效。"
          }
        />
        <P text={"永續發展委員會擔任跨部門整合溝通平台，主要職責如下："} />
        <div className="mt-8">
          <AnimatedList items={anmiatedListItem} />
        </div>

        <Section>
          <H2 text={"永續發展委員會組織圖"} />
          <Image
            src={CommitteeStrucutreImage}
            alt="Sustainbility Committee Structure"
          />
          <P
            text={
              "永續發展委員會一年至少二次向董事會報告執行成果及未來工作計劃。永續發展小組之 2021 年度工作成果於 2022 年向董事會進行報告，共召開一次會議，討論事項包含 2021 年度永續發展小組組織架構、執掌、永續報告書以及溫室氣體盤查等事宜。"
            }
          />
          <P
            text={
              "2022 年度永續發展委員會工作成果報告已於 2023 年向董事會呈報，報告事項包含 2022 年度溫室氣體盤查、查證及永續報告書確信合作事項、2022 年度永續報告書重大主題辨識流程及結果等，確保董事會充分了解並監督公司永續相關計劃落實情形。"
            }
          />
          <div className="mt-12">
            <Desc
              text={
                "註1：12021 年度推動永續發展相關執行單位為至上之永續發展小組。"
              }
            />
            <Desc
              text={
                "註2：2023 年法務部更名為「風險管理部」並新增「公司治理小組暨股務部」。"
              }
            />
          </div>
        </Section>

        <Section>
          <H2 text={"永續發展委員會成員"} />
          <Table data={committeeMembersData} color="#3B79E4" />
        </Section>
        
        <Section>
          <H2 text={"永續發展委員會運作情形"} />
          <Table data={committeeOperationData} color="#3B79E4" />
        </Section>
        
        <Section>
          <H2 text={"永續發展委員會績效評估"} />
          <YearTabContainer years={["2023"]} tabColor="#3B79E4">
            <div data-year="2023">
            <Table data={committeePerformanceData2023} color="#3B79E4" />
            </div>
          </YearTabContainer>
         
        </Section>
      </Container>

    </div>
  );
};

export default SustainbilityCommittee;
