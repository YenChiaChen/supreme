import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";

const RiskManagement: React.FC = () => {
  const stats = [
    { label: "第九屆公司治理評鑑得分", num: 94.5, suffix: "分" },
    {
      label: "上市公司排名列入之級距",
      num: 6,
      suffix: "%",
      staticString: "6% ~ 20%",
    },
    {
      label: "2022年設置",
      num: 24,
      suffix: "次",
      staticString: "永續發展委員會",
    },
  ];

  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "風險管理" },
  ];

  return (
    <div>
      <HeroBanner
        title="永續經營"
        description={`本公司於從事企業經營同時，積極實踐永續發展，以符合平衡環境，社會及公司治理發展之國際趨勢，
      並透過企業公民擔當，提升國家經濟貢獻，改善員工、社區及社會之生活品質，促進以企業責任為本之競爭優勢。`}
        backgroundImage="https://picsum.photos/1920/1080/?blur"
      />
      <div className="bg-white rounded-t-[50px] w-full  -translate-y-[50px]">
        <div className="container mx-auto -translate-y-[50px] px-8">
          <StatDisplay stats={stats} />
        </div>

        <div className="container mx-auto px-[10%] mt-8">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">風險管理</p>
          <p className="mt-md content">
            本公司為半導體通路商，主要資金來源為銀行借款，依此資金來採購產品，故客戶交易衍生的風險管理成為公司最重要的課題。完善風險管理可降低客戶交易風險，提升公司獲利能力，對於社會關懷付出正面貢獻，提供員工更好的待遇和福利。
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;
