import TestImage from "../../assets/img/testing/testcols.png";
import TestImage2 from "../../assets/img/testing/testcols2.png";

import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import TabList from "../../components/ui/TabList";

const EnterprisePage: React.FC = () => {
  const stats = [
    { label: "提供人資部門專業相關之外部訓練", num: 44.5, suffix: "小時" },
    { label: "2022年平均調薪幅度", num: 5, suffix: "%" },
    { label: "提供職醫 / 職護臨場諮詢服務", num: 24, suffix: "次" },
  ];
  const goals = {
    短期目標: [
      { title: '・員工滿意度調查', description: '透過員工問卷調查和反饋機制了解員工需求' },
      { title: '・提升員工技能', description: '訂定培訓和發展計劃' },
      { title: '・提升員工活動參與度', description: '透過滿意度調查，了解員工關注的議題，安排多元化活動內容以提升員工參與活動人數。' },
    ],
    中期目標: [
      { title: '・增強團隊合作', description: '組織團隊建設活動' },
      { title: '・優化工作流程', description: '實施新的管理系統以提升效率' },
    ],
    長期目標: [
      { title: '・企業文化建設', description: '建立和傳播企業核心價值' },
      { title: '・市場拓展', description: '擴展到新市場和地區' },
    ],
  };

  const breadcrumbItems = [{ label: "幸福企業", href: "/happy-enterprise" }, { label: "總覽" }];
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
          <p className="mt-xl sub-title text-center">
            幸福企業
          </p>
          <p className="mt-md content">
            堅決禁止任何形式的威脅、暴力或肢體恐嚇的行為，同時積極宣導「性別工作平等法」和「性騷擾防治法」，保護員工免於遭受歧視及騷擾之情形。
            同樣至上重視職場環境的平等多元化，承諾員工不會因種族、階級、語言、宗教、黨派、性別、性傾向、
            年齡、婚姻、容貌等原因遭受就業歧視。為了進一步滿足員工的需求及反饋，成立職工福利委員會，提供多種優渥福利措施，為員工打造一個幸福企業。
          </p>
          <p className="mt-xl text-center sub-title">
            政策制度
          </p>
          <img src={TestImage} alt="testing" className="w-full mt-md" />

          <p className="mt-xl text-center sub-title">
            至上給員工永遠的承諾
          </p>
          <p className="mt-md content">
            尊重勞工權益並遵守勞動法規，提供公平的薪資、福利、職業安全和健康環境等。同時確保每
            一位員工均有平等的工作機會；建立有效的溝通管道，重視並聆聽員工意見。我們亦承諾提供員工
            持續學習和職業發展的機會，提供多元化培訓課程以提升員工技能和增進員工價值。
          </p>
          <img src={TestImage2} alt="testing" className="w-full mt-md" />
          <p className="mt-xl text-center sub-title">
            未來規劃與目標
          </p>
         <TabList goals={goals} />
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage;
