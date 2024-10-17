import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/薪酬委員會.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, H3, List, P } from "../../components/ui/Text";
import { Table } from "../../components/ui";
import { Container, Section } from "../../components/ui/Container";
import { YearTabContainer } from "../../components/ui/Tab";
import {
  faChartLine,
  faClipboardCheck,
  faEye,
  faFileSignature,
  faShieldCheck,
  faTasks,
} from "@fortawesome/pro-light-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AuditCommittee: React.FC = () => {

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
                  text: "本公司獨立董事",
                },
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
      { content: "實際出(列)席次數(B)" },
      { content: "委託出席次數" },
      { content: "應出(列)席次數(A)" },
      { content: "實際出席(列)%(B/A)" },
      { content: "備註" },
    ],
    rows: [
      [
        { content: "獨立董事", nowrap: true },
        { content: "王淮", nowrap: true },
        { content: "10" },
        { content: "0" },
        { content: "10" },
        { content: "100.00" },
        { content: "" },
      ],
      [
        { content: "獨立董事", nowrap: true },
        { content: "楊耀松", nowrap: true },
        { content: "10" },
        { content: "0" },
        { content: "10" },
        { content: "100.00" },
        { content: "" },
      ],
      [
        { content: "獨立董事", nowrap: true },
        { content: "林佩蓉", nowrap: true },
        { content: "10" },
        { content: "0" },
        { content: "10" },
        { content: "100.00" },
        { content: "" },
      ],
      [
        { content: "獨立董事", nowrap: true },
        { content: "黃國誠	", nowrap: true },
        { content: "10" },
        { content: "0" },
        { content: "10" },
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
                {
                  text: "內部控制",
                },
              ]}
              listType="disc"
            />
          ),
        },
        { content: "平均達成率：97.17%" },
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
                {
                  text: "內部控制",
                },
              ]}
              listType="disc"
            />
          ),
        },
        { content: "平均達成率：94.25%" },
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

  const auditItems = [
    ["財務報表", "申訴報告"],
    ["稽核及會計政策與程序", "防止舞弊計劃及舞弊調查報告"],
    ["內部控制制度暨相關之政策與程序", "資訊安全"],
    ["重大資金貸與背書或提供保證", "公司風險管理"],
    ["募集或發行有價證券", "簽證會計師資歷、獨立性及績效評量"],
    [
      "重大資產、衍生性金融商品交易及現金投資情形",
      "簽證會計師之委任、解任或報酬",
    ],
    ["法規遵循", "財務、會計或內部稽核主管之任免"],
    ["經理人與董事是否有關係人交易及可能之利益衝突", "審計委員會職責履行情形"],
  ];

  return (
    <div className="mb-48">
      <HeroSection
        title="審計委員會"
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <H2 text={"審計委員會"} />
        <P
          text={
            "審計委員會旨在協助董事會履行其監督公司在執行有關會計、稽核、財務報導流程及財務控制上的品質和誠信度。"
          }
        />
        <P
          text={
            "審計委員會為履行其職責，依其組織章程規定有權進行任何適當的審核及調查，並且與公司內部稽核人員、簽證會計師及所有員工間皆有直接聯繫之管道。審計委員會也有權聘請律師、會計師或其他顧問，協助審計委員會執行職務。審計委員會至少每季召開一次常會。"
          }
        />

        <Section>
          <H2 text={"審計委員會成員"} />
          <Table data={committeeMembersData} color="#3B79E4" />
        </Section>


        <Section>
          <H2 text={"審計委員會審議情形"} />

          <H3 text={"審議事項列表"} className='text-blue' />
          <div className="grid grid-cols-2 gap-6 mt-md text-blue">
            {auditItems.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center p-4 shadow rounded-xl"
                  >
                    <FontAwesomeIcon icon={faShieldCheck} className="mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>

          <YearTabContainer
            years={["2024", "2023", "2022", "2021", "2020"]}
            tabColor="#3B79E4"
          >
            <div data-year="2024">
              <>
                <div className="flex flex-col gap-4 mt-6">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4 "
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        一、審閱財務報告
                      </span>
                    </div>
                    <div className="collapse-content content">
                      董事會造送本公司112年度營業報告書、財務報告及盈餘分配議案，其中112年度財務報表經董事會委任之安侯建業聯合會計師事務所于紀隆會計師及黃泳華會計師查核完竣，並出具查核報告。經本審計委員會查核認為尚無不合。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        二、委任簽證會計師
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會被賦予監督簽證會計師事務所獨立性及適任性之職責，以確保財務報表的公正性。為確保簽證會計師事務所的獨立性及適任性，審計委員會係參照會計師法第
                      47 條及會計師 職業道德規範公報第 10
                      號「正直、公正客觀及獨立性」之內容制定獨立性評估表，就會計師之獨立性、專業性及適任性評估，評估是否與本公司互為關係人、互有業務或
                      財務利益關係等項目。本公司業經2024年03月11日審計委員會審議及同日董事會決議並通過安侯建業聯合會計師事務所于紀隆會計師及黃泳華會計師師均符合評估標準。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        三、評估內部控制制度之有效性
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會按「公開發行公司建立內部控制制度處理準則」第24條之規定，評估內部控制制度設計及執行的有效性，均屬有效。
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div data-year="2023">
              <>
                <div className="flex flex-col gap-4 mt-6">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        一、審閱財務報告
                      </span>
                    </div>
                    <div className="collapse-content content">
                      董事會造送本公司111年度營業報告書、財務報告及盈餘分配議案，其中111年度財務報表經董事會委任之安侯建業聯合會計師事務所于紀隆會計師及黃泳華會計師查核完竣，並出具查核報告。經本審計委員會查核認為尚無不合。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        二、委任簽證會計師
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會被賦予監督簽證會計師事務所獨立性及適任性之職責，以確保財務報表的公正性。為確保簽證會計師事務所的獨立性及適任性，審計委員會係參照會計師法第
                      47 條及會計師 職業道德規範公報第 10
                      號「正直、公正客觀及獨立性」之內容制定獨立性評估表，就會計師之獨立性、專業性及適任性評估，評估是否與本公司互為關係人、互有業務或
                      財務利益關係等項目。本公司業經2023年03月09日審計委員會審議及同日董事會決議並通過安侯建業聯合會計師事務所于紀隆會計師及黃泳華會計師師均符合評估標準。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        三、評估內部控制制度之有效性
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會按「公開發行公司建立內部控制制度處理準則」第24條之規定，評估內部控制制度設計及執行的有效性，均屬有效。
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div data-year="2022">
              <>
                <div className="flex flex-col gap-4 mt-6">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        一、審閱財務報告
                      </span>
                    </div>
                    <div className="collapse-content content">
                      董事會造送本公司110年度營業報告書、財務報告及盈餘分配議案，其中110年度財務報表經董事會委任之安侯建業聯合會計師事務所于紀隆會計師及黃泳華會計師查核完竣，並出具查核報告。經本審計委員會查核認為尚無不合。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        二、委任簽證會計師
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會被賦予監督簽證會計師事務所獨立性及適任性之職責，以確保財務報表的公正性。為確保簽證會計師事務所的獨立性及適任性，審計委員會係參照會計師法第
                      47 條及會計師 職業道德規範公報第 10
                      號「正直、公正客觀及獨立性」之內容制定獨立性評估表，就
                      會計師之獨立性、專業性及適任性評估，評估是否與本公司互為關係人、互有業務或
                      財務利益關係等項目。111年03月22日第一屆第十七次審計委員會及111年03月22日第十二屆第二十次董事會決議並通過于紀隆會計師及黃泳華會計師師均符合評估標準。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        三、評估內部控制制度之有效性
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會按「公開發行公司建立內部控制制度處理準則」第24條之規定，評估內部控制制度設計及執行的有效性，均屬有效。
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div data-year="2021">
              <>
                <div className="flex flex-col gap-4 mt-6">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        一、審閱財務報告
                      </span>
                    </div>
                    <div className="collapse-content content">
                      董事會造送本公司109年度營業報告書、財務報告及盈餘分配議案，其中109年度財務報表經董事會委任之安侯建業聯合會計師事務所于紀隆會計師及黃泳華會計師查核完竣，並出具查核報告。經本審計委員會查核認為尚無不合。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        二、委任簽證會計師
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會被賦予監督簽證會計師事務所獨立性及適任性之職責，以確保財務報表的公正性。為確保簽證會計師事務所的獨立性及適任性，審計委員會係參照會計師法第
                      47 條及會計師職業道德規範公報第 10
                      號「正直、公正客觀及獨立性」之內容制定獨立性評估表，就
                      會計師之獨立性、專業性及適任性評估，評估是否與本公司互為關係人、互有業務或
                      財務利益關係等項目。110年03月08日第一屆第十次審計委員會及110年03月08日第十二屆第十二次董事會決議並通過于紀隆會計師及黃泳華會計師師均符合評估標準。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        三、評估內部控制制度之有效性
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會按「公開發行公司建立內部控制制度處理準則」第24條之規定，評估內部控制制度設計及執行的有效性，均屬有效。
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div data-year="2020">
              <>
                <div className="flex flex-col gap-4 mt-6">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        一、審閱財務報告
                      </span>
                    </div>
                    <div className="collapse-content content">
                      董事會造送本公司108年度營業報告書、財務報告及盈餘分配議案，其中108年度財務報表經董事會委任之安侯建業聯合會計師事務所余聖河會計師及陳振乾會計師查核完竣，並出具查核報告。經本審計委員會查核認為尚無不合。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        二、委任簽證會計師
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會被賦予監督簽證會計師事務所獨立性之職責，以確保財務報表的公正性。為確保簽證會計師事務所的獨立性，審計委員會係參照會計師法第
                      47 條及會計師 職業道德規範公報第 10
                      號「正直、公正客觀及獨立性」之內容制定獨立性評估表，就
                      會計師之獨立性、專業性及適任性評估，評估是否與本公司互為關係人、互有業務或
                      財務利益關係等項目。109年03月12日第一屆第五次審計委員會及109年03月12日第十二屆第六次董事會決議並通過余聖河會計師及陳振乾會計師師均符合評估標準。
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">
                        三、評估內部控制制度之有效性
                      </span>
                    </div>
                    <div className="collapse-content content">
                      審計委員會按「公開發行公司建立內部控制制度處理準則」第24條之規定，評估內部控制制度設計及執行的有效性，均屬有效。
                    </div>
                  </div>
                </div>
              </>
            </div>
          </YearTabContainer>
        </Section>

        <Section>
          <H2 text={"審計委員會運作情形"} />
          <P
            text={
              "一、本公司之審計委員會於2019年06月28日成立，委員計4人。\n二、本屆委員任期：2022年06月17日至2025年06月16日，截至2024年03月11日，出席情形如下："
            }
          />
          <Table data={committeeOperationData} color="#3B79E4" />
        </Section>

        <Section>
          <H2 text={"審計委員會績效評估"} />
          <YearTabContainer
            years={["2023", "2022", "2021", "2020"]}
            tabColor="#3B79E4"
          >
            <div data-year="2023">
              <P text="於 2024 年 01 月 31 日經薪酬委員會審核通過，同日提報董事會。" />
              <Table data={committeePerformanceData2023} color="#3B79E4" />
            </div>
            <div data-year="2022">
              <P text="於 2023 年 03 月 09 日經薪酬委員會審核通過，同日提報董事會。" />
              <Table data={committeePerformanceData2022} color="#3B79E4" />
            </div>
            <div data-year="2021">
              <P text="於 2022 年 03 月 22 日經薪酬委員會審核通過，同日提報董事會。" />
              <Table data={committeePerformanceData2021} color="#3B79E4" />
            </div>
            <div data-year="2020">
              <P text="於 2021 年 01 月 08 日經薪酬委員會審核通過，同日提報董事會。" />
              <Table data={committeePerformanceData2020} color="#3B79E4" />
            </div>
          </YearTabContainer>
        </Section>
      </Container>
    </div>
  );
};

export default AuditCommittee;
