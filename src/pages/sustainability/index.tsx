import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import HoverCard from "../../components/ui/HoverCard";
import { faBuilding, faHandHoldingHeart, faInfinity } from "@fortawesome/free-solid-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import TabListGoal from "../../components/ui/TabListGoal";



const goals = {
  "公司治理": [
    {
      description:"落實風險管理，謹慎評估市場與產業狀況，靈活的投資策略，確保年度經濟績效提升，穩定公司營運根基。",
    },
    {
      description:"遵守公司法、證券交易法、商業會計法、上市上櫃公司應遵循相關規章或其他商業行為有關法令，持續提昇公司治理，維護相關利害關係人權益。",
    },
    {
      description:"致力實現經濟、社會和環境之間的平衡，承諾在為股東創造價值的同時，兼顧永續發展，並為員工、客戶、合作夥伴和社區帶來正面的影響。",
    },
  ],
  "環境": [
    {
      description:"致力於環境保護，承諾將積極減少溫室氣體排放、推動資源循環利用、減少廢棄物的產生，力求企業的永續發展及為環境保護盡一份力。",
    },
  ],
  "社會": [
    {
      description:"恪守勞動法規及國際人權規範，消除各種形式之強迫勞動及不雇用16歲以下之童工。",
    },
    {
      description:"注重員工權益，承諾創建一個公平、安全以及健康的工作環境，同時建立有效的溝通管道，重視並聆聽員工意見。",
    },
    {
      description:"尊重與包容，致力於提供一個平等、無歧視和包容的工作環境，不因種族、階級、語言、宗教、黨派、性別、性傾向、年齡、婚姻、容貌等予以就業歧視，使每個人都應受到尊重和平等對待。",
    },
    {
      description:"注重員工發展，承諾提供員工持續學習和職業發展的機會，提供多元化培訓課程等以提升員工技能和增進員工價值。",
    },
    {
      description:"長期關心各式社會議題，承諾將持續投入時間和資源，支持社會公益項目，與當地社區建立合作關係，將公益熱忱轉化為實際行動，將溫馨關懷回饋予社會。",
    },
  ],
};


const cardData = [
  {
    title: "落實公司治理",
    description:
      "遵循政府法令，並持誠信原則，強化董監職能，\n深耕企業文化，健全公司發展，實踐永續經營。",
    icon: faBuilding,
  },
  {
    title: "發展永續環境",
    description:
      "落實產業管理，響應節能減碳，\n提升資源再利用，降低環境負荷。",
    icon: faEnvira,
  },
  {
    title: "維護社會公益",
    description:
      "保障員工權益，推動公益活動，參與災難救助，\n贊助體育活動，提升教育文化，支持弱勢團體。",
    icon: faHandHoldingHeart,
  },
  {
    title: "加強資訊揭露",
    description:
      "強化營運效率，提升財務透明，尊重利害關係，\n即時資訊公開，提供投資判斷，版帳股東權益，\n降低籌資成本，俾利國際接軌，增進企業價值。",
    icon: faInfinity,
  },
];
const SustainabilityPage: React.FC = () => {
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
    { label: "總覽" },
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
          <p className="mt-xl sub-title text-center">永續發展實務守則</p>
          <p className="mt-md content">
            此守則已於2022年01月24日經董事會通過訂定，並將相關規範揭露於公司網站及公開資訊觀測站中。人力資源服務單位負責統籌推動各項永續發展相關事務，並由全體員工共同執行遵守。
          </p>

          <div className="w-full flex mt-md justify-between gap-4">
            {cardData.map((data, index) => (
              <HoverCard key={index} data={data} />
            ))}
          </div>


          <p className="mt-xl sub-title text-center">永續發展聲明</p>

          <TabListGoal goals={goals} />


        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;
