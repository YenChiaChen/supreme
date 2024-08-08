import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/幸福企業/人權政策.jpg";
import React from "react";
import CardGrid from "../../components/ui/CardGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/pro-solid-svg-icons";
import { faBan, faChild, faHeartCircleCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const HumanRightsPolicy: React.FC = () => {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t("common.happyEnterprise"), href: "/enterprise" },
    { label: t("common.friendlyWorkplace") },
    { label: t("common.humanRightsPolicy") },
  ];

  
const cards = [
  {
    title: t("human_right_policy.approaches.card01.title"),
    subtitle: "",
    span: 6,
    description: t("human_right_policy.approaches.card01.description"),
    icon: <FontAwesomeIcon icon={faHeartCircleCheck} />
    },
  {
    title: t("human_right_policy.approaches.card02.title"),
    subtitle: "",
    span: 6,
    icon: <FontAwesomeIcon icon={faUserShield} />,
    description:
    t("human_right_policy.approaches.card02.description")
  },
  {
    title:t("human_right_policy.approaches.card03.title"),
    subtitle: "",
    span: 4,
    icon: <FontAwesomeIcon icon={faBan} />,
    description:
    t("human_right_policy.approaches.card03.description")
  },
  {
    title: t("human_right_policy.approaches.card04.title"),
    subtitle: "",
    span: 4,
    icon: <FontAwesomeIcon icon={faChild} />,
    description:
    t("human_right_policy.approaches.card04.description")
  },
  {
    title: t("human_right_policy.approaches.card05.title"),
    subtitle: "",
    span: 4,
    icon: <FontAwesomeIcon icon={faLock} />,
    description: t("human_right_policy.approaches.card05.description")
  },
];

  return (
    <div>
      <HeroBanner
        title={t("common.humanRightsPolicy")}
        description={t("human_right_policy.hero.subtitle")}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">{t("human_right_policy.policy.title")}</p>
          <p className="mt-md content">
          {t("human_right_policy.policy.description01")}
          </p>
          <p className="mt-6 content">
          {t("human_right_policy.policy.description02")}
          </p>
          <p className="mt-xl sub-title text-center">{t("human_right_policy.approaches.title")}</p>
          <div className="flex justify-center">
            <div className="w-[1000px]">
              <CardGrid cards={cards} color="#ffedf2" iconColor="#FF507C" />
            </div>
          </div>
          <p className="mt-xl sub-title text-center">{t("human_right_policy.mitigation.title")}</p>
          <p className="mt-6 content">
          {t("human_right_policy.mitigation.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HumanRightsPolicy;
