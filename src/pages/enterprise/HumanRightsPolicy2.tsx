import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import React from "react";
import CardGrid from "../../components/ui/CardGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUserShield } from "@fortawesome/pro-solid-svg-icons";
import { faBan, faChild, faHeartCircleCheck, faLock } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    title: "員工",
    subtitle: "關懷",
    span: 6,
    description:
      "• 加強宣導「性別工作平等法」、「性騷懮防治法」，保護員工免於遭受被歧視及被騷擾之情況。\n\n• 以員工健康需求為導向：新進員工免費健康檢查，員工定期健康檢查（兩年一次；年滿65歲者及高階主管每年一次）。",
    icon: <FontAwesomeIcon icon={faHeartCircleCheck} />
    },
  {
    title: "保障",
    subtitle: "員工權益",
    span: 6,
    icon: <FontAwesomeIcon icon={faUserShield} />,
    description:
      "• 提供多元化活動：社團活動、家庭參與活動。\n• 員工進修訓練：本公司訂有教育訓練管理辦法，鼓勵員工持續進修。\n• 公司利益共享：採取員工分紅獎勵(依當年度盈餘狀況分配)、員工持股信託(公司相對提撥獎勵金)..等福利，藉以激勵員工及提升向心力。",
  },
  {
    title: "杜絕",
    subtitle: "不法歧視",
    span: 4,
    icon: <FontAwesomeIcon icon={faBan} />,
    description:
      "關懷弱勢族群杜絶不法歧視，恪守「勞動基準法」及國際人權規範，不因種族、階級、語言、宗教、黨派、性別、性傾向、年齡、婚姻、容貌等予以就業歧視。",
  },
  {
    title: "禁用",
    subtitle: "童工",
    span: 4,
    icon: <FontAwesomeIcon icon={faChild} />,
    description:
      "恪守「勞動基準法」及國際人權規範，於公司人力資源單位之面試流程規範中據以施行，不雇用16歲以下之童工。",
  },
  {
    title: "禁止",
    subtitle: "強迫勞動",
    span: 4,
    icon: <FontAwesomeIcon icon={faLock} />,
    description: "恪守「勞動基準法」及國際人權規範，消除各種形式之強迫勞動。",
  },
];
const HumanRightsPolicy: React.FC = () => {
  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "友善職場" },
    { label: "人權政策" },
  ];

  return (
    <div>
      <HeroBanner
        title="人權政策"
        description={`本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，\n制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">人權政策</p>
          <p className="mt-md content">
            至上堅守核心價值，落實國際相關規範與準則，為善盡永續發展，保障公司全體員工、客戶及利害關係人之基本人權，同時建立積極正向的員工關係，營造高度參與的工作環境，並遵循《聯合國世界人權宣言》、《聯合國商業與人權指導原則》、《聯合國全球盟約與聯合國國際勞動組織》、《責任商業聯盟行為準則（RBA
            Code of
            Conduct）》等國際人權公約所揭露之原則，保持一致，甚至更為嚴格。
          </p>
          <p className="mt-6 content">
            我們尊重國際公認之基本人權，包括結社自由、關懷弱勢族群、禁用童工、消除各種形式之強迫勞動、消除僱傭與就業歧視等，並恪守公司所在地之勞動相關法規，說明如下：依相關法規及國際人權公約訂定相關管理政策，並確實遵守勞動法規，以保障員工之相關合法權益，依「個人資料保護法」規定，嚴格保管員工基本資料，調閱人事資訊時需權責主管核准方可調閱，人事系統亦依權責進行管控，不得任意揭露員工個人資料。
          </p>
          <p className="mt-xl sub-title text-center">人權實施具體方針</p>
          <div className="flex justify-center">
            <div className="w-[1000px]">
              <CardGrid cards={cards} color="#ffedf2" iconColor="#FF507C" />
            </div>
          </div>
          <p className="mt-xl sub-title text-center">人權風險減緩措施</p>
          <p className="mt-6 content">
            為落實「人權政策」，本公司針對人權議題進行風險辨識及訂定其對應之管理措施，定期評估成效與依評估結果進行管理措施之調整，俾利控制與減緩風險，完善本公司各議題之人權保障。
          </p>
        </div>
      </div>
    </div>
  );
};

export default HumanRightsPolicy;