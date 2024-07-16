import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import Goal from "../../assets/img/testing/goaltest-2.png";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import SlideUpList from "../../components/ui/SlideUpList";
import TabListGoal from "../../components/ui/TabListGoal";
import Security from "../../assets/img/testing/security.png";
import Security2 from "../../assets/img/testing/security2.png";
import Security3 from "../../assets/img/testing/security3.png";
import Security4 from "../../assets/img/testing/security4.png";

const InformationSecurity: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "資訊安全管理" },
  ];
  const items2 = [
    {
      id: 1,
      content:
        "定期辦理資訊安全教育訓練：確保員工了解資安重要性，全面提升員工資訊安全威脅意識。 9 名成員，於每年年初及年中檢討各項風險 議題，投入部門人力監控及增加保險預算轉嫁風險。",
      icon: faCircleCheck,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 2,
      content:
        "每年辦理一次資訊安全演習：專注於關鍵的策略，模擬實際資安危機事件，如：網路釣魚和社交工程攻擊，藉以協助員工進行資安威脅辨識，藉由資安演練掌握公司資安弱點。",
      icon: faCircleCheck,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
  ];

  const goals = {
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

  return (
    <div>
      <HeroBanner
        title="資訊安全管理"
        description={`資訊安全之重要性在於保護公司機密資料及系統不受駭客威脅，以預防資安事件造成損失及確保公司正常營運。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">資訊安全</p>
          <p className="mt-md content">
            未來政策將訂定公司資通安全管理辦法，防範資訊資產遭受各種安全威脅。並基於資訊安全考量承諾絕不使用盜版軟體，避免潛藏之病毒、後門等造成資訊安全破口。
          </p>
        </div>
        <img src={Goal} alt="goal" className="w-full mt-md" />
        <div className="container mx-auto px-[10%]">
          <p className="mt-xl sub-title text-center">實際執行方案</p>
          <p className="mt-md content mb-12">
            成立「資通安全專案小組」，每年定期舉行資訊安全教育訓練並透過委託第三方資訊安全業者協助檢測及內部稽核檢查，落實執行資訊安全相關規定。根據「資通安全管理辦法」對公司現行資訊安全進行稽核作業，進而針對資訊安全缺失進行改善。同步辦理資訊安全教育訓練與資訊安全演習，模擬實際資安危機事件融入到員工培訓中以達最佳成效
          </p>
          <SlideUpList items={items2} />
          <p className="mt-xl sub-title text-center mb-12">
            資訊安全相關年度績效
          </p>
          <TabListGoal goals={goals} />
          <p className="mt-xl sub-title text-center">資訊安全治理制度</p>
          <p className="mt-md content mb-12">
            為防範資訊資產遭受各項安全威脅，確保企業正常營運，成立「資通安全專案小組」，藉由訂定並維護資通安全管理辦法、推動及協調資通安全政策、擬定及調整資通安全計畫、檢討重大資通安全事件對本公司之影響性、監督資安管理運作情形，透過日常演練、滲透測試、資安檢測、弱點掃瞄等方式，並宣導同仁提高資安意識，以達確保資訊合法存取；如遭受外力入侵或事故發生時，能做迅速必要之應變處置，在最短時間內回復系統正常運作，以降低該事故可能帶來之損害。期望透過專業的資安單位之管理、規劃、督導及推動執行，建構出全方位的資安防護機制並提升同仁良好的資安意識。
          </p>
          <p className="mt-xl sub-title text-center">
            資通安全專案小組風險管理架構
          </p>
          <img src={Security} alt="goal" className="w-full max-w-[1000px] mt-md mx-auto" />
          <p className="mt-xl sub-title text-center">資訊安全管理政策</p>
          <p className="mt-md content mb-12">
            本公司秉持維護資訊安全作業環境之理念，對於資訊系統暨所儲存、處理、資料庫、傳遞之資料實施周全
            保護與防範，以杜絕毀損與外流風險、確保公司正常營運。
            資訊網路架構依其風險等級建立防火牆，嚴格管控內外部網路存取，並定期檢閱相關存取服務清單。並針
            對不同資訊系統架構風險等級，建立資料備份機制，備份資料以本地存儲為主，另上傳至雲端及媒體儲存，且
            將備份媒體送往異地保管存放，以確保存放安全。
            有鑑於個人資料保護法實施，針對資料庫敏感資料存取及時記錄，依據法令規定執行控制項目。此外，機
            房資訊安全之緊急應變措施演練為首要工作，每年定期實施系統災難復原演練，確保系統之正常運作及資料完
            整性，降低因天災或人為疏失所造成之系統中斷服務風險。
            為了讓資訊系統損害發生時能儘速恢復營運、降低損失與風險，透過定期委託第三方資訊安全業者協助檢
            測及公司內部稽核檢視資通安全檢查控制作業，改善相關作業流程等因應措施。
          </p>
          <img src={Security2} alt="goal" className="w-full max-w-[900px] mt-md mx-auto" />
          <p className="mt-xl sub-title text-center">資訊安全宣導</p>
          <p className="mt-md content mb-12">
            為提升全體員工基礎資訊安全知識與緊急應變能力，每年定期以郵件宣導資訊安全相關事宜，並預計於
            2023 年開始安排公司人員之資訊安全教育訓練，並以全體員工 100%
            完成教育訓練為目標。
          </p>
          <img src={Security3} alt="goal" className="w-full max-w-[900px] mt-md mx-auto" />
          <p className="mt-xl sub-title text-center">資訊安全通報與處理流程</p>
          <p className="mt-md content mb-12">
            資訊安全事件之處理效率關乎其對公司之衝擊影響程度，若重大資安事件未能及時處理將可能影響客戶交
            期需求，以及對至上的信任。為提升資訊安全事件處理效率，資通安全專案小組制定資訊安全事件通報流程，
            使同仁於資訊安全事件發生時能有所依循並通報。針對疑似資安事件發生時，立即採取應變機制，評估影響範
            圍協同相關業務單位進行搶救與修復措施，降低事件衝擊之潛在影響風險。2022
            年無違反法規及發生利害關
            係人之資訊安全申訴事件，亦無造成營運影響或損失之重大資訊安全事件。
          </p>
          <img src={Security4} alt="goal" className="w-full max-w-[900px] mt-md mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default InformationSecurity;
