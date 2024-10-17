import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/薪酬委員會.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, List, P } from "../../components/ui/Text";
import { Table } from "../../components/ui";
import { Container, Section } from "../../components/ui/Container";
import { YearTabContainer } from "../../components/ui/Tab";
const CompensationCommittee: React.FC = () => {

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
                    text: "本公司獨立董事",
                  },
                  {
                    text: "安禾智通（股）公司董事長",
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
                  text: "本公司獨立董事",
                },
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
        { content: "黃國誠" },
        {
          content: (
            <List
              items={[
                {
                  text: "威強電(股)公司副總經理",
                },
                {
                  text: "清華大學數學系",
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
                  text: "本公司獨立董事",
                },
                {
                  text: "上海金泓格國際貿易(有)公司監察人",
                },
                {
                  text: "泓格通科技(武漢)(有)公司監察人",
                },
                {
                  text: "泓格科技(股)公司副總經理",
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
      { content: "符合之資格條件" },
      { content: "實際出(列)席次數(B)" },
      { content: "委託出席次數" },
      { content: "應出(列)席次數(A)" },
      { content: "實際出席(列)%(B/A)" },
      { content: "備註" },
    ],
    rows: [
      [
        { content: "獨立董事", nowrap: true },
        { content: "林佩蓉", nowrap: true },
        { content: "5" },
        { content: "5" },
        { content: "0" },
        { content: "5" },
        { content: "100.00" },
        { content: "" },
      ],
      [
        { content: "獨立董事", nowrap: true },
        { content: "楊耀松", nowrap: true },
        { content: "5" },
        { content: "5" },
        { content: "0" },
        { content: "5" },
        { content: "100.00" },
        { content: "" },
      ],
      [
        { content: "獨立董事", nowrap: true },
        { content: "黃國誠	", nowrap: true },
        { content: "5" },
        { content: "5" },
        { content: "0" },
        { content: "5" },
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
        {
          content: (
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
              ]}
              listType="disc"
            />
          ),
        },
        { content: "平均達成率：98.26%" },
      ],
    ],
  };
  const committeePerformanceData2022 = {
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
        { content: "2022.01.01~2022.12.31" },
        {
          content: (
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
              ]}
              listType="disc"
            />
          ),
        },
        { content: "平均達成率：92.72%" },
      ],
    ],
  };
  const committeePerformanceData2021 = {
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
        { content: "2021.01.01~2021.12.31" },
        {
          content: (
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
          ),
        },
        { content: "平均達成率：91.89%" },
      ],
    ],
  };
  const committeePerformanceData2020 = {
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
        { content: "2020.01.01~2020.12.31" },
        {
          content: (
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
          ),
        },
        { content: "平均達成率：99.14%" },
      ],
    ],
  };

  return (
    <div className="mb-48">
      <HeroSection
        title="薪資報酬委員會"
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <H2 text={"薪資報酬委員會"} />
        <P
          text={
            "薪資報酬委員會會旨在協助董事會執行與評估公司整體薪酬與福利政策及經理人之報酬，以強化公司治理。薪酬審核、績效及調薪等作業，相關薪酬政策及規範皆訂於本公司辦法及規章中。"
          }
        />

        <Section>
          <H2 text={"薪酬政策"} />

          <div className="flex flex-col gap-4">
            <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
              <div className="collapse-title flex">
                <span className="text-lg">董事薪酬政策</span>
              </div>

              <div className="collapse-content">
                <P
                  text={
                    "依公司章程第20條規定（扣除員工酬勞及董事酬勞前之本期稅前淨利，提撥不高於2%）、「董事績效評估辦法」及「董事及經理人薪酬與績效管理辦法」作為評核之依據，重要評估項目：參考公司當年度整體營運績效、個別董事對公司營運之參與度、內部自評/外部評核、永續發展目標、同業董事酬金水準。"
                  }
                />
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
              <div className="collapse-title flex">
                <span className="text-lg">經理人薪酬政策</span>
              </div>
              <div className="collapse-content">
                <P
                  text={
                    "依公司章程第20條規定（扣除員工酬勞及董事酬勞前之本期稅前淨利，提撥1~5%）、「績效考核管理辦法」及「董事及經理人薪酬與績效管理辦法」作為評核之依據，重要評估項目：個人績效目標達成率、對公司營業目標貢獻度、領導與組織能力、永續發展目標參與、公司營狀況、相關法令及參考同業對於類職位之水準，適時檢討酬金制度而給予合理報酬。"
                  }
                />
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
              <div className="collapse-title flex">
                <span className="text-lg">員工薪酬政策</span>
              </div>
              <div className="collapse-content">
                <P
                  text={
                    "依公司章程第 20 條規定(扣除員工酬勞及董事酬勞前之本期稅前淨利，提撥 1~5%)、「績效ㄏ考核管理辦法」作為評核之依循，參酌當年度獲利情形及衡量員工績效據以調薪及給予獎酬。ㄏ"
                  }
                />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <H2 text={"薪酬委員會成員"} />
          <Table data={committeeMembersData} color="#3B79E4" />
        </Section>

        <Section>
          <H2 text={"薪酬委員會運作情形"} />
          <P text={"一、本公司之薪資報酬委員會於2011年11月23日成立，委員計3人。\n二、本屆委員任期：2022年06月17日至2025年06月16日，截至2024年03月11日，出席情形如下："} />
          <Table data={committeeOperationData} color="#3B79E4"  />

          
          <P text={"符合之資格條件："} />
          <List items={[
            {
                text: "商務、法務、財務、會計或公司業務所需相關科系之公私立大專院校講師以上。"
            },
            {
                text: "法官、檢察官、律師、會計師或其他與公司業務所需之國家考試及格須有證書之專門職業及技術人員。"
            },
            {
                text: "具有商務、法務、財務、會計或公司業務所需之工作經驗"
            },
          ]} />
          <P text={"註：本項應於設置或廢止薪酬委員會，成員委(選)任及異動後二日內輸入，任期中辭任者，請於備註乙欄明寫X年X月X日辭任。"} />
        </Section>

        <Section>
          <H2 text={"薪酬委員會績效評估"} />
          <YearTabContainer years={["2023", "2022", "2021", "2020"]} tabColor="#3B79E4">
            <div data-year="2023">
              <P text={"於 2024 年 01 月 31 日經薪酬委員會審核通過，同日提報董事會。"} />
              <Table data={committeePerformanceData2023} color="#3B79E4" />
            </div>
            <div data-year="2022">
              <P text={"於 2023 年 03 月 09 日經薪酬委員會審核通過，同日提報董事會。"} />
              <Table data={committeePerformanceData2022} color="#3B79E4" />
            </div>
            <div data-year="2021">
              <P text={"於 2022 年 03 月 22 日經薪酬委員會審核通過，同日提報董事會。"} />
              <Table data={committeePerformanceData2021} color="#3B79E4" />
            </div>
            <div data-year="2020">
              <P text={"於 2021 年 01 月 08 日經薪酬委員會審核通過，同日提報董事會。"} />
              <Table data={committeePerformanceData2020} color="#3B79E4" />
            </div>
          </YearTabContainer>
        </Section>
      </Container>
    </div>
  );
};

export default CompensationCommittee;
