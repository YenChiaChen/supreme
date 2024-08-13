import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續經營/永續發展委員會.jpg";
import img01 from "../../assets/img/testing/sustainbility-committee01.png";
import {
  faChartLine,
  faClipboardCheck,
  faEye,
  faFileSignature,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import SlideUpList from "../../components/ui/SlideUpList";
import Table from "../../components/ui/Table";
import TabContainer from "../../components/ui/TabContainer";
const SustainabilityCommittee: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "功能性委員會" },
    { label: "永續發展委員會" },
  ];

  const items2 = [
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

  const columns = [
    { header: "身份別", accessor: "identity" },
    { header: "姓名", accessor: "name" },
    { header: "主要學經歷", accessor: "education" },
    { header: "主要現職", accessor: "current" },
  ];

  const data = [
    {
      identity: "獨立董事",
      name: "楊耀松",
      education: "英國萊斯特大學EMBA\n魔奇科技(股)公司董事\n香港華馨達國際(股)公司副董事長\n晨星半導體(股)公司總經理特助",
      current: "香港華馨達國際(股)公司副董事長",
    },
    {
      identity: "獨立董事",
      name: "王淮",
      education: "國立政治大學企管碩士\n龍巖(股)公司獨立董事\n博錸生技(股)公司獨立董事\n智擎生技製藥(股)公司獨立董事\n中華公司治理協會理事",
      current: "博錸生技(股)公司獨立董事\n生華創業投資(股)公司監察人",
    },
    {
      identity: "獨立董事",
      name: "林佩蓉",
      education: "國立台灣大學管理學院\n台大-復旦EMBA境外專班碩士班\n東森電視業務營銷部副總經理",
      current: "安和智通（股）董事長\n安璽整合行銷(股)公司董事長\n鉑齡(股)公司董事長\n安投(股)公司董事長\n安智媒體行銷(股)公司董事長",
    },
    {
      identity: "委員",
      name: "陳銘德",
      education: "政治大學企研所\n美齊科技副總經理",
      current: "至上電子(股)公司財務長",
    },
    {
      identity: "委員",
      name: "張家瑋",
      education: "元智大學工業工程管理學系\n至上電子(股)公司業務",
      current: "至上電子(股)公司資深業務副總",
    },
    {
      identity: "委員",
      name: "陳力行",
      education: "台灣大學EMBA會計與管理決策組\n中央大學工業管理研究所\n勤業會計師事務所領組\n金雨企業(股)公司董事",
      current: "至上電子(股)公司會計協理、公司治理主管",
    },
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

  const data2=[
    {
      title: "獨立董事",
      name: "楊耀松",
      actualAttendance: "3",
      proxyAttendance: "0",
      expectedAttendance: "3",
      attendanceRate: "100.00",
      remarks: "",
    },
    {
      title: "獨立董事",
      name: "王淮",
      actualAttendance: "3",
      proxyAttendance: "0",
      expectedAttendance: "3",
      attendanceRate: "100.00",
      remarks: "",
    },
    {
      title: "獨立董事",
      name: "林佩蓉",
      actualAttendance: "1",
      proxyAttendance: "-",
      expectedAttendance: "1",
      attendanceRate: "100.00",
      remarks: "新任",
    },
    {
      title: "財務長",
      name: "陳銘德	",
      actualAttendance: "3",
      proxyAttendance: "0",
      expectedAttendance: "3",
      attendanceRate: "100.00",
      remarks: "",
    },
    {
      title: "資深業務副總",
      name: "張家瑋",
      actualAttendance: "2",
      proxyAttendance: "1",
      expectedAttendance: "3",
      attendanceRate: "66.67",
      remarks: "",
    },
    {
      title: "財會主管/公司治理主管	",
      name: "陳力行	",
      actualAttendance: "3",
      proxyAttendance: "0",
      expectedAttendance: "3",
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

  const data3 = [
    {assessmentScope: '各功能性委員會',
      assessmentMethod: '董事自評',
      assessmentPeriod: '2023.01.01~2023.12.31',
      assessmentContent: 'A.對公司營運之參與程度\nB.功能性委員會職責認知\nC.提升功能性委員會決策品質\nD.功能性委員會組成及成員選任\nE.內部控制',
      assessmentResult: '平均達成率：95.50%',
    }
  ]




  const goals = ["2023"];

  
  const LongTermGoals: React.FC = () => (
    <>
     <Table columns={columns3} data={data3} color='#3B79E4' />

    </>
  );


  return (
    <div>
      <HeroBanner
        title="永續發展委員會"
        description={`本公司於2022 年11 月8 日經董事會決議通過成立「董事會功能性委員會- 永續發展委員會」。\n於2023年11月8日經決議通過修改【永續發展委員會組織規程】。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">永續發展委員會</p>
          <p className="mt-md content">
            本公司之永續發展委員會目前由楊耀松獨立董事擔任召集人，成員包含３位獨立董事、財務長、資深業務副總以及公司治理主管，共計
            6 位委員。 <br />
            <br />
            永續發展委員會依據環境保護( E )、社會責任( S )、公司治理( G
            )三大面向，設置永續環境、社會關懷、員工關懷、供應鏈管理、風險管控、公司治理六個工作推動小組，分別掌管該領域之永續目標，並定期召開會議向董事會報告永續推動與執行績效。
          </p>

          <p className="mt-xl content">
            永續發展委員會擔任跨部門整合溝通平台，主要職責如下：
          </p>
          <div className="mt-md">
            <SlideUpList items={items2} />
          </div>

          <p className="mt-xl sub-title text-center">永續發展委員會組織圖</p>
          <div className="flex justify-center">
            <img src={img01} className="w-full mt-md" alt="img" />
          </div>
          <p className="mt-md content">
            永續發展委員會一年至少二次向董事會報告執行成果及未來工作計劃。永續發展小組之
            2021 年度工作成果於 2022
            年向董事會進行報告，共召開一次會議，討論事項包含 2021
            年度永續發展小組組織架構、執掌、永續報告書以及溫室氣體盤查等事宜。{" "}
            <br />
            <br />
            2022 年度永續發展委員會工作成果報告已於 2023
            年向董事會呈報，報告事項包含 2022
            年度溫室氣體盤查、查證及永續報告書確信合作事項、2022
            年度永續報告書重大主題辨識流程及結果等，確保董事會充分了解並監督公司永續相關計劃落實情形。
          </p>
          <p className="mt-md notes">
            註1：12021 年度推動永續發展相關執行單位為至上之永續發展小組。
            <br />
            註2：2023
            年法務部更名為「風險管理部」並新增「公司治理小組暨股務部」。
          </p>

          <p className="mt-xl sub-title text-center">永續發展委員會成員</p>
          <Table columns={columns} data={data} color="#3B79E4" />

          <p className="mt-xl sub-title text-center">永續發展委員會運作情形</p>
          <Table columns={columns2} data={data2} color="#3B79E4" />

          <p className="mt-xl sub-title text-center">永續發展委員會績效評估</p>
       
          <TabContainer goals={goals} tabColor="#3B79E4">
            <div data-goal="2023">
              <LongTermGoals />
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityCommittee;
