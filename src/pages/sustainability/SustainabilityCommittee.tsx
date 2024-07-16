import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import img01 from "../../assets/img/testing/sustainbility-committee01.png";
import img02 from "../../assets/img/testing/sustainbility-committee02.png";
import img03 from "../../assets/img/testing/sustainbility-committee03.png";
import img04 from "../../assets/img/testing/sustainbility-committee04.png";
import {
  faChartLine,
  faClipboardCheck,
  faEye,
  faFileSignature,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import SlideUpList from "../../components/ui/SlideUpList";
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
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 2,
      content: "定期評估永續計劃執行成效，且每年向董事會報告年度執行成果",
      icon: faChartLine,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 3,
      content: "其他經董事會決議指示本委員會應辦理之事項",
      icon: faTasks,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 4,
      content: "監督永續發展政策方向與推動計劃，且定期追蹤執行進度",
      icon: faEye,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 5,
      content: "審定永續報告書",
      icon: faFileSignature,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
  ];

  const LongTermGoals: React.FC = () => <></>;

  return (
    <div>
      <HeroBanner
        title="永續發展委員會"
        description={`本公司於2022 年11 月8 日經董事會決議通過成立「董事會功能性委員會- 永續發展委員會」。\n於2023年11月8日經決議通過修改【永續發展委員會組織規程】。`}
        backgroundImage={Bg}
        center={true}
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
            <img src={img01} className="w-full max-w-[700px] mt-md" alt="img" />
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
          <div className="flex justify-center">
            <img
              src={img02}
              className="w-full max-w-[1000px] mt-md"
              alt="img"
            />
          </div>

          <p className="mt-xl sub-title text-center">永續發展委員會運作情形</p>
          <div className="flex justify-center">
            <img
              src={img03}
              className="w-full max-w-[1000px] mt-md"
              alt="img"
            />
          </div>

          <p className="mt-xl sub-title text-center">永續發展委員會績效評估</p>
          <div className="flex justify-center">
            <img
              src={img04}
              className="w-full max-w-[1000px] mt-md"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityCommittee;
