import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import TabContainer from "../../components/ui/TabContainer";
import Table from "../../components/ui/Table";
const CompensationCommittee: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "功能性委員會" },
    { label: "薪酬委員會" },
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
      name: "林佩蓉",
      education: "國立台灣大學管理學院\n台大-復旦EMBA境外專班碩士班\n東森電視業務營銷部副總經理",
      current: "安和智通（股）董事長\n安璽整合行銷(股)公司董事長\n鉑齡(股)公司董事長\n安投(股)公司董事長\n安智媒體行銷(股)公司董事長",
    },
    {
      identity: "獨立董事",
      name: "楊耀松",
      education: "英國萊斯特大學EMBA\n魔奇科技(股)公司董事\n香港華馨達國際(股)公司副董事長\n晨星半導體(股)公司總經理特助",
      current: "香港華馨達國際(股)公司副董事長",
    },
    {
      identity: "獨立董事",
      name: "黃國誠",
      education: "	清華大學數學系",
      current: "威強電(股)公司副總經理\n泓格科技(股)公司副總經理",
    },
  ];

  const columns2 = [
    { header: "職稱", accessor: "title" },
    { header: "姓名", accessor: "name" },
    { header: "符合之資格條件", accessor: "qualification" },
    { header: "實際出(列)席次數(B)", accessor: "actualAttendance" },
    { header: "委託出席次數", accessor: "proxyAttendance" },
    { header: "應出(列)席次數(A)", accessor: "expectedAttendance" },
    { header: "實際出席(列)%(B/A)", accessor: "attendanceRate" },
    { header: "備註", accessor: "remarks" },
  ];

  const data2=[
    {
      title: "獨立董事",
      name: "林佩蓉",
      qualification:'5',
      actualAttendance: "5",
      proxyAttendance: "0",
      expectedAttendance: "5",
      attendanceRate: "100.00",
      remarks: "",
    },
    {
      title: "獨立董事",
      name: "楊耀松",
      qualification:'5',
      actualAttendance: "5",
      proxyAttendance: "0",
      expectedAttendance: "5",
      attendanceRate: "100.00",
      remarks: "",
    },
    {
      title: "獨立董事",
      name: "黃國誠	",
      qualification:'5',
      actualAttendance: "5",
      proxyAttendance: "0",
      expectedAttendance: "5",
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
      assessmentContent: 'A.對公司營運之參與程度\nB.功能性委員會職責認知\nC.提升功能性委員會決策品質\nD.功能性委員會組成及成員選任',
      assessmentResult: '平均達成率：98.26%',
    }
  ]
  const data2022 = [
    {assessmentScope: '各功能性委員會',
      assessmentMethod: '董事自評',
      assessmentPeriod: '2022.01.01~2022.12.31',
      assessmentContent: 'A.對公司營運之參與程度\nB.功能性委員會職責認知\nC.提升功能性委員會決策品質\nD.功能性委員會組成及成員選任',
      assessmentResult: '平均達成率：92.72%',
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



  const goals = ["2023", "2022", "2021", "2020"];

  return (
    <div>
      <HeroBanner
        title="薪資報酬委員會"
        description={`本公司於2011年完成設置薪資報酬委員會，並由董事會訂定「薪資報酬委員會組織規程」，\n藉以強化公司治理，健全公司董事及經理人薪資報酬制度。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">薪資報酬委員會</p>
          <p className="mt-md content">
            成立薪資報酬委員會會旨在於協助董事會執行與評估公司整體薪酬與福利政策及經理人之報酬，以強化公司治理。薪酬審核、績效及調薪等作業，相關薪酬政策及規範皆訂於本公司辦法及規章中。{" "}
            <br />
            <br />
            本屆薪資報酬委員會由董事會任命，由林佩蓉獨立董事擔任召集人，成員為三位獨立董事。本公司薪資報酬委員會每年至少召開兩次，並得視需要隨時召開之，2022
            年度共召開 2 次，委員出席率達
            100%。該委員會以善良管理人之注意，依法忠實履行相關職權，並將所提建議提交董事會討論。
            <br />
            <br />
            本公司為了讓委員會成員更加瞭解相關法令規範及公司實際運作狀況，亦安排會議就薪資報酬委員會相關法令規定及公司高階經理人薪酬福利現況向委員會成員進行簡報。
          </p>

          <p className="mt-xl sub-title text-center">薪酬政策</p>
          <div className="mt-md">
            <div className="flex flex-col gap-4">
              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex">
                  <span className="text-lg">董事薪酬政策</span>
                </div>
                <div className="collapse-content content">
                  本公司董事薪酬包含董事薪資、職務加給、離職金、各種獎金、獎勵金等，相關訂定酬金之程序皆依循「董事績效評估辦法」，除參考公司整體的營運績效、產業未來經營風險及發展趨勢，亦參考個人的績效達成率及
                  對公司績效的貢獻度，而給予合理報酬，相關績效考核及薪酬合理性均經薪資報酬委員會及董事會審核，並隨
                  時視實際經營狀況及法令適時檢討酬金制度，以謀公司永續經營與風險控管之平衡。依本公司章程第二十條，
                  本公司年度扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥不高於百分之二為董事酬勞，由董事會決議後
                  分派，並向股東會報告。
                </div>
              </div>
              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex">
                  <span className="text-lg">經理人薪酬政策</span>
                </div>
                <div className="collapse-content content">
                  本公司經理人分派之酬勞包含薪資及獎金，其中薪資係參考同業水準及依其職級職等、學
                  ( 經 ) 歷、專業
                  能力與職責等項目，而獎金則係依照公司內部「績效考核管理辦法」考量經理人績效評估項目，其中包含財
                  務性指標 ( 如公司營收、稅前淨利與稅後淨利之達成率
                  )，並依據薪酬委員會建議分配原則，由董事會核定。
                  酬勞比例則依循本公司章程第十七條、第二十條規定，扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥
                  1%~5% 作為員工酬勞 ( 含經理人 )。
                </div>
              </div>
            </div>
          </div>

          <p className="mt-xl sub-title text-center">第五屆薪酬委員會成員</p>
          <Table columns={columns} data={data}  color="#3B79E4" />

          <p className="mt-xl sub-title text-center">薪酬委員會運作情形</p>
          <Table columns={columns2} data={data2}  color="#3B79E4" />
          <p className="mt-8 notes">
            符合之資格條件： <br />
            1.商務、法務、財務、會計或公司業務所需相關科系之公私立大專院校講師以上。
            <br />
            2.法官、檢察官、律師、會計師或其他與公司業務所需之國家考試及格須有證書之專門職業及技術人員。
            <br />
            3.具有商務、法務、財務、會計或公司業務所需之工作經驗
            <br />
            <br />
            <span className="text-xs">
              註：本項應於設置或廢止薪酬委員會，成員委(選)任及異動後二日內輸入，任期中辭任者，請於備註乙欄明寫X年X月X日辭任。
            </span>
          </p>

          <p className="mt-xl sub-title text-center">薪酬委員會績效評估</p>
          <TabContainer goals={goals}  tabColor="#3B79E4">
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

export default CompensationCommittee;
