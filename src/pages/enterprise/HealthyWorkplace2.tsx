import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/幸福企業/健康職場.jpg";
import React from "react";

import seminarImage01 from "../../assets/img/enterprise/healthy-workplace/health-seminar-01.jpg";
import seminarImage02 from "../../assets/img/enterprise/healthy-workplace/health-seminar-02.jpg";
import seminarImage03 from "../../assets/img/enterprise/healthy-workplace/health-seminar-03.jpg";
import consulationImage01 from "../../assets/img/enterprise/healthy-workplace/health-consulation-01.jpg";
import consulationImage02 from "../../assets/img/enterprise/healthy-workplace/health-consulation-02.jpg";
import checkImage01 from "../../assets/img/enterprise/healthy-workplace/healthy-check-01.jpg";
import checkImage02 from "../../assets/img/enterprise/healthy-workplace/healthy-check-02.jpg";

import healthyIcon from "../../assets/img/enterprise/healthy-workplace/icon.jpg";

import TableTennis01 from "../../assets/img/club/TableTennis/01.jpg";
import TableTennis02 from "../../assets/img/club/TableTennis/02.jpg";
import TableTennis03 from "../../assets/img/club/TableTennis/03.jpg";
import TableTennis04 from "../../assets/img/club/TableTennis/04.jpg";
import TableTennis05 from "../../assets/img/club/TableTennis/05.jpg";

import BasketBall01 from "../../assets/img/club/Basketball/01.jpg";
import BasketBall02 from "../../assets/img/club/Basketball/02.jpg";
import BasketBall03 from "../../assets/img/club/Basketball/03.jpg";
import BasketBall04 from "../../assets/img/club/Basketball/04.jpg";
import BasketBall05 from "../../assets/img/club/Basketball/05.jpg";
import BasketBall06 from "../../assets/img/club/Basketball/06.jpg";
import BasketBall07 from "../../assets/img/club/Basketball/07.jpg";

import Badminton01 from "../../assets/img/club/Badminton/01.jpg";
import Badminton02 from "../../assets/img/club/Badminton/02.jpg";
import Badminton03 from "../../assets/img/club/Badminton/03.jpg";
import Badminton04 from "../../assets/img/club/Badminton/04.jpg";
import Badminton05 from "../../assets/img/club/Badminton/05.jpg";
import Badminton06 from "../../assets/img/club/Badminton/06.jpg";

import Running01 from "../../assets/img/club/Running/01.jpg";
import Running02 from "../../assets/img/club/Running/02.jpg";
import Running03 from "../../assets/img/club/Running/03.jpg";
import Running04 from "../../assets/img/club/Running/04.jpg";
import Running05 from "../../assets/img/club/Running/05.jpg";

import Golf01 from "../../assets/img/club/Golf/01.jpg";
import Golf02 from "../../assets/img/club/Golf/02.jpg";
import Golf03 from "../../assets/img/club/Golf/03.jpg";
import Golf04 from "../../assets/img/club/Golf/04.jpg";
import Golf05 from "../../assets/img/club/Golf/05.jpg";
import Golf06 from "../../assets/img/club/Golf/06.jpg";
import Golf07 from "../../assets/img/club/Golf/07.jpg";
import Golf08 from "../../assets/img/club/Golf/08.jpg";

import Board01 from "../../assets/img/club/BoardGame/01.jpg";
import Board02 from "../../assets/img/club/BoardGame/02.jpg";
import Board03 from "../../assets/img/club/BoardGame/03.jpg";
import Board04 from "../../assets/img/club/BoardGame/04.jpg";
import Board05 from "../../assets/img/club/BoardGame/05.jpg";

import { useTranslation } from "react-i18next";

import {
  faTableTennisPaddleBall,
  faBasketball,
  faFeather,
  faPersonRunning,
  faGolfBall,
  faChessRook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabContainerIcon from "../../components/ui/TabContainerIcon";

import {
  H2,
  H3,
  P,
  List,
  Container,
  Section,
  LabeledContentTable,
  Image,
  Gallery,
  Table2,
} from "../../components/ui";

const HealthWorkplace: React.FC = () => {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t("common.happyEnterprise"), href: "/enterprise" },
    { label: t("common.friendlyWorkplace") },
    { label: t("common.healthyWorkplace") },
  ];

  const icons = [
    <FontAwesomeIcon icon={faTableTennisPaddleBall} className="h-[50px]" />,
    <FontAwesomeIcon icon={faBasketball} className="h-[50px]" />,
    <FontAwesomeIcon icon={faFeather} className="h-[50px]" />,
    <FontAwesomeIcon icon={faPersonRunning} className="h-[50px]" />,
    <FontAwesomeIcon icon={faGolfBall} className="h-[50px]" />,
    <FontAwesomeIcon icon={faChessRook} className="h-[50px]" />,
  ];

  return (
    <div>
      <HeroBanner
        title={t("common.healthyWorkplace")}
        description={t("safety_workplace.hero.subtitle")}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <Container>
        <Breadcrumbs items={breadcrumbItems} />

        <Section>
          <Image
            src={healthyIcon}
            alt="healthy-certification-icon"
            maxWidth="80px"
            className="-mb-32"
          />
          <H2 text={t("safety_workplace.certification.title")} />
          <P text={t("safety_workplace.certification.description")} />
        </Section>

        <Section>
          <H2 text={t("safety_workplace.services.title")} />
          <P text={t("safety_workplace.services.description")} />
          <H3
            text={t("safety_workplace.services.healthSeminar")}
            color="#FF507C"
          />
          <Gallery images={[seminarImage01, seminarImage02, seminarImage03]} />
          <H3
            text={t("safety_workplace.services.healthcareConsulation")}
            color="#FF507C"
          />
          <Gallery images={[consulationImage01, consulationImage02]} />
          <H3
            text={t("safety_workplace.services.healthCheck")}
            color="#FF507C"
          />
          <Gallery images={[checkImage01, checkImage02]} />
        </Section>

        <Section>
          <H2 text={t("safety_workplace.clubs.title")} />

          <TabContainerIcon
            goals={[
              t("safety_workplace.clubs.tabelTennis.title"),
              t("safety_workplace.clubs.basketball.title"),
              t("safety_workplace.clubs.badminton.title"),
              t("safety_workplace.clubs.jogging.title"),
              t("safety_workplace.clubs.golf.title"),
              t("safety_workplace.clubs.boardGame.title"),
            ]}
            icons={icons}
            tabColor="#FF507C"
          >
            <div data-goal={t("safety_workplace.clubs.basketball.title")}>
              <>
                <P text={t("safety_workplace.clubs.basketball.description")} />
                <Gallery
                  images={[
                    BasketBall01,
                    BasketBall02,
                    BasketBall03,
                    BasketBall04,
                    BasketBall05,
                    BasketBall06,
                    BasketBall07,
                  ]}
                />
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.badminton.title")}>
              <>
                <P text={t("safety_workplace.clubs.badminton.description")} />
                <Gallery
                  images={[
                    Badminton01,
                    Badminton02,
                    Badminton03,
                    Badminton04,
                    Badminton05,
                    Badminton06,
                  ]}
                />
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.jogging.title")}>
              <>
                <P text={t("safety_workplace.clubs.jogging.description")} />
                <Gallery
                  images={[
                    Running01,
                    Running02,
                    Running03,
                    Running04,
                    Running05,
                  ]}
                />
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.tabelTennis.title")}>
              <>
                <P text={t("safety_workplace.clubs.tabelTennis.description")} />
                <Gallery
                  images={[
                    TableTennis01,
                    TableTennis02,
                    TableTennis03,
                    TableTennis04,
                    TableTennis05,
                  ]}
                />
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.golf.title")}>
              <>
                <P text={t("safety_workplace.clubs.golf.description")} />
                <Gallery
                  images={[
                    Golf01,
                    Golf02,
                    Golf03,
                    Golf04,
                    Golf05,
                    Golf06,
                    Golf07,
                    Golf08,
                  ]}
                />
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.boardGame.title")}>
              <>
                <P text={t("safety_workplace.clubs.boardGame.description")} />
                <Gallery
                  images={[Board01, Board02, Board03, Board04, Board05]}
                />
              </>
            </div>
          </TabContainerIcon>
        </Section>
      </Container>
    </div>
  );
};

export default HealthWorkplace;
