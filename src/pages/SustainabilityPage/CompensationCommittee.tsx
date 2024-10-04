import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/薪酬委員會.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, List, P } from "../../components/ui/Text";
import { Table } from "../../components/ui";
import { Container, Section } from "../../components/ui/Container";
import { YearTabContainer } from "../../components/ui/Tab";
import {
  faChartLine,
  faClipboardCheck,
  faEye,
  faFileSignature,
  faTasks,
} from "@fortawesome/pro-light-svg-icons";
const CompensationCommittee: React.FC = () => {
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
        { content: "黃國誠" },
        {
          content: (
            <List
              items={[
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
                  text: "威強電(股)公司副總經理",
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
        description={`本公司於2011年完成設置薪資報酬委員會，並由董事會訂定「薪資報酬委員會組織規程」，藉以強化公司治理，健全公司董事及經理人薪資報酬制度。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <H2 text={"薪資報酬委員會"} />
        <P
          text={
            "成立薪資報酬委員會會旨在於協助董事會執行與評估公司整體薪酬與福利政策及經理人之報酬，以強化公司治理。薪酬審核、績效及調薪等作業，相關薪酬政策及規範皆訂於本公司辦法及規章中。"
          }
        />
        <P
          text={
            "本屆薪資報酬委員會由董事會任命，由林佩蓉獨立董事擔任召集人，成員為三位獨立董事。本公司薪資報酬委員會每年至少召開兩次，並得視需要隨時召開之，2022 年度共召開 2 次，委員出席率達 100%。該委員會以善良管理人之注意，依法忠實履行相關職權，並將所提建議提交董事會討論。"
          }
        />
        <P
          text={
            "本公司為了讓委員會成員更加瞭解相關法令規範及公司實際運作狀況，亦安排會議就薪資報酬委員會相關法令規定及公司高階經理人薪酬福利現況向委員會成員進行簡報。"
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
                    "本公司董事薪酬包含董事薪資、職務加給、離職金、各種獎金、獎勵金等，相關訂定酬金之程序皆依循「董事績效評估辦法」，除參考公司整體的營運績效、產業未來經營風險及發展趨勢，亦參考個人的績效達成率及對公司績效的貢獻度，而給予合理報酬，相關績效考核及薪酬合理性均經薪資報酬委員會及董事會審核，並隨時視實際經營狀況及法令適時檢討酬金制度，以謀公司永續經營與風險控管之平衡。依本公司章程第二十條，本公司年度扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥不高於百分之二為董事酬勞，由董事會決議後分派，並向股東會報告。"
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
                    "本公司經理人分派之酬勞包含薪資及獎金，其中薪資係參考同業水準及依其職級職等、學( 經 ) 歷、專業能力與職責等項目，而獎金則係依照公司內部「績效考核管理辦法」考量經理人績效評估項目，其中包含財務性指標 ( 如公司營收、稅前淨利與稅後淨利之達成率)，並依據薪酬委員會建議分配原則，由董事會核定。酬勞比例則依循本公司章程第十七條、第二十條規定，扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥1%~5% 作為員工酬勞 ( 含經理人 )。"
                  }
                />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <H2 text={"第五屆薪酬委員會成員"} />
          <Table data={committeeMembersData} color="#3B79E4" />
        </Section>

        <Section>
          <H2 text={"薪酬委員會運作情形"} />
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
              <Table data={committeePerformanceData2023} color="#3B79E4" />
            </div>
            <div data-year="2022">
              <Table data={committeePerformanceData2022} color="#3B79E4" />
            </div>
            <div data-year="2021">
              <Table data={committeePerformanceData2021} color="#3B79E4" />
            </div>
            <div data-year="2020">
              <Table data={committeePerformanceData2020} color="#3B79E4" />
            </div>
          </YearTabContainer>
        </Section>
      </Container>
    </div>
  );
};

export default CompensationCommittee;
