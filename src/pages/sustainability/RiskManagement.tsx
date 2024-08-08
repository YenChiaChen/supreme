import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續經營/風險管理.jpg";
import Board from "../../assets/img/testing/board-test.png";
import SlideUpList from "../../components/ui/SlideUpList";
import { faCircleCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBullseyeArrow } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RiskManagement: React.FC = () => {
  const data2 = [
    {
      id: 1,
      content:
        "本公司風險管理之最高決策單位，負責公司整體風險之最終責任。董事會應依整體營運策略及經營環境，核定整體之風險管理政策，持續監督風險管理機制之有效運作，充分掌握風險狀況，並確保擁有適足之資本以因應所涉風險。",
      title: "董事會",
    titleColor:'#3B79E4'
    },
    {
      id: 2,
      content:
        "由財務、會計、資訊、倉儲中心、人力資源、風險管理、業務、公司治理小組暨股務及稽核室等部門共同組成，執行董事會核定之風險管理決策，並監督建立本公司風險管理機制之架構及質化與量化之管理標準。檢視依內部分層負責陳報之風險控管報告與處理風險管理相關議題，協調及促進跨組織之風險管控方案，決定及執行符合成本效益的風險控制方案，以提高風險管理透明度及改善風險控制作法。",
      title: "風險管控小組",
    titleColor:'#3B79E4'
    },
    {
      id: 3,
      content:
        "每年應執行風險控管作業，要求各部門出具自行評估報告，並據此擬訂稽核計劃，定期進行稽查並出具報告，適時提出改進建議予風險管理小組。",
      title: "稽核室",
    titleColor:'#3B79E4'
    },
    {
      id: 4,
      content:
        "因應內外部環境、法令調整進行風險管理制度之規劃與修正，各業務部門應明確辨識其所面臨之各項風險，並依規定執行必要之自評作業及風險管理作業，以利本公司將所涉風險控制於可承擔之範圍內。",
      title: "各業務部門",
    titleColor:'#3B79E4'
    },
    {
      id: 5,
      content:
        "強化資訊安全管理，透過日常演練、滲透測試、資安檢測、弱點掃瞄，並宣導同仁提高資安意識等手段，以達到確保本公司資訊合法存取；如遭受外力入侵或事故發生時，能做迅速必要之應變處置，在最短時間內回復系統正常運作，以降低該事故可能帶來之損害。",
      title: "資安管理部門",
    titleColor:'#3B79E4'
    },
  ];

  const items2 = [
    {
      id: 1,
      content:
        "成立風險管控小組，由各部門推派人員共同組成，共 9 名成員，於每年年初及年中檢討各項風險 議題，投入部門人力監控及增加保險預算轉嫁風險。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 2,
      content: "做好保險規劃控制損失，提升公司整體利益。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 3,
      content:
        "由各部門針對風險議題實施預防管理計畫，授信部門實地查訪客戶，要求提供財務報表，再審慎評估客戶風險。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 4,
      content: "建立風險事件及時應對作業流程，評估影響程度，並依規定公告揭露。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
  ];

  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "風險管理" },
  ];

  return (
    <div>
      <HeroBanner
        title="風險管理"
        description={`本公司為半導體通路商，主要資金來源為銀行借款，依此資金來採購產品，故客戶交易衍生的風險管理成為公司最重要的課題完善風險管理可降低客戶交易風險，提升公司獲利能力，對於社會關懷付出正面貢獻，提供員工更好的待遇和福利。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">風險管理</p>
          <p className="content mt-md">
            成立風險管控小組，由各部門推派人員共同組成，共9名成員，於每年年初及年中檢討各項風險議題，投入部門人力監控及增加保險預算轉嫁風險。
          </p>


        </div>

        <div className="container mx-auto relative mt-md px-[10%]">
          <div className="relative z-10 py-24 grid grid-cols-3 items-center">
            <div>
              <p className="text-2xl font-bold text-blue tracking-widest">整體目標</p>
              <ul className="mt-6 ml-6  list-disc">
                <li className="my-2">降低呆滯產品庫存量</li>
                <li className="my-2">減少存貨跌價損失金額</li>
                <li className="my-2">控制呆帳損失金額</li>
                <li className="my-2">規避匯率及利率波動風險</li>
                <li className="my-2">優化稅務規劃</li>
              </ul>
            </div>
            <div className="border-t-[2px] border-blue h-full flex justify-center flex-col relative">
              <FontAwesomeIcon icon={faBullseyeArrow} className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]" />
              <p className="text-2xl font-bold text-blue tracking-widest">短期目標</p>
              <ul className="mt-6 ml-6  list-disc">
                <li className="my-2">2023 年達成呆帳率 1 % 以下</li>
              </ul>
            </div>
            <div className="border-t-[2px] border-blue h-full flex justify-center flex-col relative">
            <FontAwesomeIcon icon={faBullseyeArrow} className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]" />
            <FontAwesomeIcon icon={faPlay}  className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-blue h-[30px]" />
              <p className="text-2xl font-bold text-blue tracking-widest">中長期目標</p>
              <ul className="mt-6 ml-6  list-disc">
                <li className="my-2">維持呆帳率 0%</li>
              </ul>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-[110%] bg-light_blue rounded-r-[50px] -ml-[10%] z-0 min-h-full bg-opacity-40"></div>
        </div>



        <div className="container mx-auto px-[10%]">
          <p className="mt-xl sub-title text-center">管理方針</p>
          <p className="content mt-md">
            本公司積極推動整合性風險管理體系，由董事會作為最高決策單位，帶領由各業務部門、稽核室、資安管
            理部門共同成立的風險管控小組，執行董事會核定之風險管理決策，監督建立風險管理架構及質化與量化之管理標準。董事會依據「道德行為準則」、「誠信經營守則」、「公司治理實務守則」及「企業社會責任實務守則」
            等規範，並配合最新法令及時修正相關風險管理政策。董事會更於 2020 年
            11 月 11
            日通過增訂「風險管理政策與程序」、「智慧財產管理計劃」及修訂「防範內線交易作業程序」，以强化並落實風險管理。
          </p>

          <p className="mt-xl sub-title text-center">風險管理組織架構</p>
          <img src={Board} alt="board" className="w-full mt-md mb-8" />
          <SlideUpList items={data2} />

          <p className="mt-xl sub-title text-center mb-12">實際執行成效</p>
          <SlideUpList items={items2} />
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;
