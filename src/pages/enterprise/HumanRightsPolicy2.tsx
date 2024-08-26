import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/幸福企業/人權政策.jpg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/pro-solid-svg-icons";
import {
  faBan,
  faChild,
  faHeartCircleCheck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import {
  H2,
  H3,
  P,
  List,
  CardGrid,
  Container,
  Section,
  BgSection,
  LabeledContentTable,
  Image,
  Gallery,
  Table2,
} from "../../components/ui";

const HumanRightsPolicy: React.FC = () => {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t("common.happyEnterprise"), href: "/enterprise" },
    { label: t("common.friendlyWorkplace") },
    { label: t("common.humanRightsPolicy") },
  ];

  const cardss = [
    {
      title: t("human_right_policy.approaches.card01.title"),
      list: {
        items: [
          { text: t("human_right_policy.approaches.card01.items01") },
          { text: t("human_right_policy.approaches.card01.items02") },
        ],
        listType: "disc" as "disc",
      },
      icon: <FontAwesomeIcon icon={faHeartCircleCheck} />,
      iconColor: "#FF507C",
    },
    {
      title: t("human_right_policy.approaches.card02.title"),
      list: {
        items: [
          { text: t("human_right_policy.approaches.card02.items01") },
          { text: t("human_right_policy.approaches.card02.items02") },
          { text: t("human_right_policy.approaches.card02.items03") },
        ],
        listType: "disc" as "disc",
      },
      icon: <FontAwesomeIcon icon={faUserShield} />,
      iconColor: "#FF507C",
    },
    {
      title: t("human_right_policy.approaches.card03.title"),
      list: {
        items: [{ text: t("human_right_policy.approaches.card03.items01") }],
        listType: "disc" as "disc",
      },
      icon: <FontAwesomeIcon icon={faBan} />,
      iconColor: "#FF507C",
    },
    {
      title: t("human_right_policy.approaches.card04.title"),
      list: {
        items: [{ text: t("human_right_policy.approaches.card04.items01") }],
        listType: "disc" as "disc",
      },
      icon: <FontAwesomeIcon icon={faChild} />,
      iconColor: "#FF507C",
    },
    {
      title: t("human_right_policy.approaches.card05.title"),
      list: {
        items: [{ text: t("human_right_policy.approaches.card05.items01") }],
        listType: "disc" as "disc",
      },
      icon: <FontAwesomeIcon icon={faLock} />,
      iconColor: "#FF507C",
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
      <Container>
        <Breadcrumbs items={breadcrumbItems} />

        <Section>
          <H2 text={t("human_right_policy.policy.title")} />
          <P text={t("human_right_policy.policy.description01")} />
        </Section>

        <Section>
          <H2 text={t("human_right_policy.approaches.title")} />
          <CardGrid cards={cardss} bgColor='#FFEDF2' iconColor='#FF507C' />
        </Section>

        <Section>
          <H2 text={t("human_right_policy.mitigation.title")} />
          <P text={t("human_right_policy.mitigation.description")} />
        </Section>
      </Container>
    </div>
  );
};

export default HumanRightsPolicy;
