import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import ImageHealth from "../../assets/img/testing/healthy.png";
import TabContainerIcon from "../../components/ui/TabContainerIcon";
import { faBasketball, faFeather, faGolfBall, faPersonRunning, faTableTennisPaddleBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShortTermGoals: React.FC = () => (
  <>
    <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
  </>
);

const HealthyWorkplace: React.FC = () => {
  const stats = [
    { label: "提供人資部門專業相關之外部訓練", num: 44.5, suffix: "小時" },
    { label: "2022年平均調薪幅度", num: 5, suffix: "%" },
    { label: "提供職醫 / 職護臨場諮詢服務", num: 24, suffix: "次" },
  ];

  const breadcrumbItems = [
    { label: "幸福企業", href: "/happy-enterprise" },
    { label: "健康職場認證" },
  ];

  const goals = ["桌球社", "籃球社", "羽球社", "路跑社", "高爾夫球社"];
  const icons = [
    <FontAwesomeIcon icon={faTableTennisPaddleBall} className="h-[50px]" />,
    <FontAwesomeIcon icon={faBasketball} className="h-[50px]" />,
    <FontAwesomeIcon icon={faFeather} className="h-[50px]" />,
    <FontAwesomeIcon icon={faPersonRunning} className="h-[50px]" />,
    <FontAwesomeIcon icon={faGolfBall} className="h-[50px]" />,
  ];

  return (
    <div>
      <HeroBanner
        title="幸福企業"
        description={`員工是公司營運最重要的資產。至上致力於打造能讓員工安心、幸福共融的工作環境。
                      遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage="https://picsum.photos/1920/1080/?blur"
      />
      <div className="bg-white rounded-t-[50px] w-full  -translate-y-[50px]">
        <div className="container mx-auto -translate-y-[50px] px-8">
          <StatDisplay stats={stats} />
        </div>

        <div className="container mx-auto px-[10%] mt-12">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">職業安全衛生政策</p>
          <p className="mt-md content">
            健康職場認證是基於世界衛生組織的「職場周全健康促進推動模式」，強調整合「生理工作環境」、「社會心理工作環境」、「個人健康資源」，以及「企業社區參與」的四大層面。本公司於2023年新申請健康職場標章審核通過，我們承諾提供完善的健康資源，不斷改善生理及社會心理工作環境，同時擴及員工眷屬、社區，實踐企業社會責任。
          </p>
          <p className="mt-xl sub-title text-center">健檢與醫護服務</p>
          <p className="mt-md content">
            本公司長久以來極力保護員工身心健康，致力於打造健康幸福的職場，除勞保、健保以外，亦提供員工團體保險、新進員工免費健康檢查及在職員工定期免費健康檢查
            ( 2 年 1 次 )。此外，自 2021 年起新增設「勞工健康保護 -
            臨場醫護諮詢」，包含：執行工作負荷評估與管理、人因性危害預防、母性健康保護、職場暴力預防等健康保護四大計畫，每月提供
            2 次臨場服務。2022 年度護理人員共計提供醫護諮詢 24 次 ( 48 小時
            )；醫師 2 次 ( 4 小時
            )。為保護員工個人健康相關資訊的隱私與機密性，醫護諮詢過程皆秉持醫療保密原則，諮詢内容除醫護人員與諮詢本人外禁止向公司或第三者透露任何資訊。
          </p>
          <img src={ImageHealth} alt="Healthy" className="w-full mt-md" />
          <p className="mt-xl sub-title text-center">運動社團</p>
          <TabContainerIcon
            goals={goals}
            icons={icons}
          >
            <div data-goal="籃球社">
              <ShortTermGoals />
            </div>
            <div data-goal="羽球社">
              <ShortTermGoals />
            </div>
            <div data-goal="路跑社">
              <ShortTermGoals />
            </div>
            <div data-goal="桌球社">
              <ShortTermGoals />
            </div>
            <div data-goal="高爾夫球社">
              <ShortTermGoals />
            </div>
          </TabContainerIcon>
        </div>
      </div>
    </div>
  );
};

export default HealthyWorkplace;
