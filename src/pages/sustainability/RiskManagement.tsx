import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";


const RiskManagement: React.FC = () => {
  const stats = [
    { label: "提供人資部門專業相關之外部訓練", num: 44.5, suffix: "小時" },
    { label: "2022年平均調薪幅度", num: 5, suffix: "%" },
    { label: "提供職醫 / 職護臨場諮詢服務", num: 24, suffix: "次" },
  ];


  const breadcrumbItems = [
    { label: "幸福企業", href: "/happy-enterprise" },
    { label: "總覽" },
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

        <div className="container mx-auto px-[10%] mt-8">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">幸福企業</p>
          <p className="mt-md content">
            堅決禁止任何形式的威脅、暴力或肢體恐嚇的行為，同時積極宣導「性別工作平等法」和「性騷擾防治法」，保護員工免於遭受歧視及騷擾之情形。
            同樣至上重視職場環境的平等多元化，承諾員工不會因種族、階級、語言、宗教、黨派、性別、性傾向、
            年齡、婚姻、容貌等原因遭受就業歧視。為了進一步滿足員工的需求及反饋，成立職工福利委員會，提供多種優渥福利措施，為員工打造一個幸福企業。
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;
