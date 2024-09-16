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

const NewsPage: React.FC = () => {
  const { t } = useTranslation();
  const breadcrumbItems = [{ label: "最新消息" }];

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
    <div className="bg-gray">
      <HeroBanner
        title="最新消息"
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <Container>
        <Section>
          <div className="flex items-center gap-2">
            <p className="font-bold text-2xl text-[#555555] tracking-wide">
              最新消息
            </p>
            <div className="h-[1px] bg-[#555555] flex-grow"></div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col ">
              <img
                src={Bg}
                className="w-full object-cover aspect-[3/2]"
                alt="Testing Image fro News Page"
              />
              <p className="text-orange mt-4 tracking-widest font-light text-sm">
                市場擴展與國際代理
              </p>
              <p className="mt-2 text-xl font-semibold">
                代理生技品牌，跨足再生醫學領域
              </p>
              <p className="text-[#555555] mt-2 tracking-widest font-light text-sm">
                發布日期：2024年8月10日
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default NewsPage;
