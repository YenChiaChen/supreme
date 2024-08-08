import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續經營/審計委員會.jpg";
import TabContainer from "../../components/ui/TabContainer";
import Table from "../../components/ui/Table";
import React from "react";
import { faShieldCheck } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AuditCommittee: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "功能性委員會" },
    { label: "審計委員會" },
  ];
  
  const columns = [
    { header: "身份別", accessor: "identity" },
    { header: "姓名", accessor: "name" },
    { header: "主要學經歷", accessor: "education" },
    { header: "主要現職", accessor: "current" },
  ];

  const data = [
    {
      identity: "獨立董事",
      name: "王淮",
      education:
        "國立政治大學企管碩士\n龍巖(股)公司獨立董事\n博錸生技(股)公司獨立董事\n智擎生技製藥(股)公司獨立董事\n中華公司治理協會理事",
      current: "博錸生技(股)公司獨立董事\n生華創業投資(股)公司監察人",
    },
    {
      identity: "獨立董事",
      name: "林佩蓉",
      education:
        "國立台灣大學管理學院\n台大-復旦EMBA境外專班碩士班\n東森電視業務營銷部副總經理",
      current:
        "安和智通（股）董事長\n安璽整合行銷(股)公司董事長\n鉑齡(股)公司董事長\n安投(股)公司董事長\n安智媒體行銷(股)公司董事長",
    },
    {
      identity: "獨立董事",
      name: "楊耀松",
      education:
        "英國萊斯特大學EMBA\n魔奇科技(股)公司董事\n香港華馨達國際(股)公司副董事長\n晨星半導體(股)公司總經理特助",
      current: "香港華馨達國際(股)公司副董事長",
    },
    {
      identity: "獨立董事",
      name: "黃國誠",
      education: "清華大學數學系",
      current:
        "泓格科技(股)公司副總經理\n上海金泓格國際貿易(有)公司監察人\n泓格通科技(武漢)(有)公司監察人",
    },
  ];



  const goals = ["2024", "2023", "2022", "2021", "2020"];

  const data2 = [
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


  const columns2 = [
    { header: "職稱", accessor: "title" },
    { header: "姓名", accessor: "name" },
    { header: "實際出(列)席次數(B)", accessor: "actualAttendance" },
    { header: "委託出席次數", accessor: "proxyAttendance" },
    { header: "應出(列)席次數(A)", accessor: "expectedAttendance" },
    { header: "實際出席(列)%(B/A)", accessor: "attendanceRate" },
    { header: "備註", accessor: "remarks" },
  ];

  const data3=[
    {
      title: "獨立董事",
      name: "王淮",
      actualAttendance: "10",
      proxyAttendance: "0",
      expectedAttendance: "10",
      attendanceRate: "100.00",
      remarks: "",
    },
    {
      title: "獨立董事",
      name: "楊耀松",
      actualAttendance: "10",
      proxyAttendance: "0",
      expectedAttendance: "10",
      attendanceRate: "100.00",
      remarks: "",
    },
    {
      title: "獨立董事",
      name: "林佩蓉",
      actualAttendance: "10",
      proxyAttendance: "0",
      expectedAttendance: "10",
      attendanceRate: "100.00",
      remarks: "",
    },
    {
      title: "獨立董事",
      name: "黃國誠	",
      actualAttendance: "10",
      proxyAttendance: "0",
      expectedAttendance: "10",
      attendanceRate: "100.00",
      remarks: "",
    },
  ]
  const columns3 = [
    { header: "評估範圍", accessor: "assessmentScope" },
    { header: "評估方式", accessor: "assessmentMethod" },
    { header: "評估期間", accessor: "assessmentPeriod" },
    { header: "評估內容", accessor: "assessmentContent" },
    { header: "評估結果", accessor: "assessmentResult" },
  ];

  const data2023 = [
    {assessmentScope: '各功能性委員會',
      assessmentMethod: '董事自評',
      assessmentPeriod: '2023.01.01~2023.12.31',
      assessmentContent: 'A.對公司營運之參與程度\nB.功能性委員會職責認知\nC.提升功能性委員會決策品質\nD.功能性委員會組成及成員選任\nE.內部控制',
      assessmentResult: '平均達成率：97.17%',
    }
  ]
  const data2022 = [
    {assessmentScope: '各功能性委員會',
      assessmentMethod: '董事自評',
      assessmentPeriod: '2022.01.01~2022.12.31',
      assessmentContent: 'A.對公司營運之參與程度\nB.功能性委員會職責認知\nC.提升功能性委員會決策品質\nD.功能性委員會組成及成員選任\nE.內部控制',
      assessmentResult: '平均達成率：94.25%',
    }
  ]

  const data2021 = [
    {assessmentScope: '各功能性委員會',
      assessmentMethod: '董事自評',
      assessmentPeriod: '2021.01.01~2021.12.31',
      assessmentContent: 'A.對公司營運之參與程度\nB.功能性委員會職責認知\nC.提升功能性委員會決策品質\nD.功能性委員會組成及成員選任\nE.內部控制',
      assessmentResult: '平均達成率：91.89%',
    }
  ]
  const data2020 = [
    {assessmentScope: '各功能性委員會',
      assessmentMethod: '董事自評',
      assessmentPeriod: '2020.01.01~2020.12.31',
      assessmentContent: 'A.對公司營運之參與程度\nB.功能性委員會職責認知\nC.提升功能性委員會決策品質\nD.功能性委員會組成及成員選任\nE.內部控制',
      assessmentResult: '平均達成率：99.14%',
    }
  ]

  return (
    <div>
      <HeroBanner
        title="審計委員會"
        description={`本公司於2019年完成設置審計委員會，並由董事會訂定「審計委員會組織規程」，藉以強化公司治理，健全公司管理制度。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">審計委員會</p>
          <p className="mt-md content">
            審計委員會旨在協助董事會履行其監督公司在執行有關會計、稽核、財務報導流程及財務控制上的品質和誠信度。
            <br />
            <br />
            依照中華民國證券交易法及相關行政命令規定，審計委員會應由全體獨立董事組成，其人數不得少於三人。本公司審計委員會的設置完全符合上開法規的要求。
            <br />
            <br />
            審計委員會為履行其職責，依其組織章程規定有權進行任何適當的審核及調查，並且與公司內部稽核人員、簽證會計師及所有員工間皆有直接聯繫之管道。審計委員會也有權聘請律師、會計師或其他顧問，協助審計委員會執行職務。審計委員會至少每季召開一次常會。
          </p>

          <p className="mt-xl sub-title text-center">第二屆審計委員會成員</p>
          <Table columns={columns} data={data}  color="#3B79E4" />
          <p className="mt-xl sub-title text-center">審議事項列表</p>
          <div className="grid grid-cols-2 gap-6 mt-md text-blue">
            {data2.map((row, rowIndex) => (
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

          <p className="mt-xl sub-title text-center">
            各年度審計委員會審議情形
          </p>
          <TabContainer goals={goals}  tabColor="#3B79E4">
            <div data-goal="2024">
              <>
                <div className="flex flex-col gap-4">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4 "
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">一、審閱財務報告</span>
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
                      <span className="text-lg text-blue">二、委任簽證會計師</span>
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
            <div data-goal="2023">
              <>
                <div className="flex flex-col gap-4">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">一、審閱財務報告</span>
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
                      <span className="text-lg text-blue">二、委任簽證會計師</span>
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
            <div data-goal="2022">
              <>
                <div className="flex flex-col gap-4">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">一、審閱財務報告</span>
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
                      <span className="text-lg text-blue">二、委任簽證會計師</span>
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
            <div data-goal="2021">
              <>
                <div className="flex flex-col gap-4">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">一、審閱財務報告</span>
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
                      <span className="text-lg text-blue">二、委任簽證會計師</span>
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
            <div data-goal="2020">
              <>
                <div className="flex flex-col gap-4">
                  <div
                    tabIndex={0}
                    className="collapse collapse-open shadow  p-4"
                  >
                    <div className="collapse-title flex">
                      <span className="text-lg text-blue">一、審閱財務報告</span>
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
                      <span className="text-lg text-blue">二、委任簽證會計師</span>
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
          </TabContainer>

          <p className="mt-xl sub-title text-center">審計委員會運作情形</p>
          <p className="notes mt-md">
            本屆委員任期：2022年06月17日至2025年06月16日，截至2024年03月11日，出席情形如下：
          </p>
         <Table columns={columns2} data={data3}  color="#3B79E4" />

          <p className="mt-xl sub-title text-center">審計委員會績效評估</p>
          <TabContainer goals={["2023", "2022", "2021", "2020"]} tabColor="#3B79E4">
            <div data-goal="2023">
            <Table columns={columns3} data={data2023}  color="#3B79E4" />
            </div>
            <div data-goal="2022">
            <Table columns={columns3} data={data2022}  color="#3B79E4" />
            </div>
            <div data-goal="2021">
            <Table columns={columns3} data={data2021}  color="#3B79E4" />
            </div>
            <div data-goal="2020">
            <Table columns={columns3} data={data2020}  color="#3B79E4" />
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default AuditCommittee;
