import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/幸福企業/健康職場.jpg";
import React from "react";
import Healthy01 from "../../assets/img/testing/healthy01.jpg";
import Healthy02 from "../../assets/img/testing/healthy02.jpg";
import Healthy03 from "../../assets/img/testing/healthy03.jpg";
import Nurse01 from "../../assets/img/testing/nurse01.jpg";
import Nurse02 from "../../assets/img/testing/nurse02.jpg";
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
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">{t("safety_workplace.certification.title")}</p>
          <p className="mt-md content">
          {t("safety_workplace.certification.description")}
          </p>
          <p className="mt-xl sub-title text-center"> {t("safety_workplace.services.title")}</p>
          <p className="mt-md content">
          {t("safety_workplace.services.description")}
          </p>

          <p className="tracking-wide text-pink font-semibold text-[20px] text-center mt-xl">
          {t("safety_workplace.services.healthSeminar")}
          </p>
          <div className="grid grid-cols-3 gap-8 mt-md justify-center">
            <img src={Healthy01} alt="healthy" className="" />
            <img src={Healthy02} alt="healthy" className="" />
            <img src={Healthy03} alt="healthy" className="" />
          </div>

          <p className="tracking-wide text-pink font-semibold text-[20px] text-center mt-xl">
          {t("safety_workplace.services.healthcareConsulation")}
          </p>
          <div className="flex gap-8 mt-md justify-center">
            <img
              src={Nurse01}
              alt="healthy"
              className="w-[500px] h-[350px] object-cover"
            />
            <img
              src={Nurse02}
              alt="healthy"
              className="w-[500px] h-[350px] object-cover"
            />
          </div>

          <p className="mt-xl sub-title text-center"> {t("safety_workplace.clubs.title")}</p>
          <TabContainerIcon goals={[t("safety_workplace.clubs.tabelTennis.title"),t("safety_workplace.clubs.basketball.title"),t("safety_workplace.clubs.badminton.title"),t("safety_workplace.clubs.jogging.title"),t("safety_workplace.clubs.golf.title"),t("safety_workplace.clubs.boardGame.title")]} icons={icons} tabColor="#FF507C">
            <div data-goal={t("safety_workplace.clubs.basketball.title")}>
              <>
                <p className="my-6 content">
                {t("safety_workplace.clubs.basketball.description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <img
                    src={BasketBall01}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={BasketBall02}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={BasketBall03}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={BasketBall04}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={BasketBall05}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={BasketBall06}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={BasketBall07}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                </div>
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.badminton.title")}>
              <>
                <p className="my-6 content">
                 {t("safety_workplace.clubs.badminton.description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <img
                    src={Badminton01}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Badminton02}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Badminton03}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Badminton04}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Badminton05}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Badminton06}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                </div>
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.jogging.title")}>
              <>
                <p className="my-6 content">
                {t("safety_workplace.clubs.jogging.description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <img
                    src={Running01}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Running02}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Running03}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Running04}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Running05}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                </div>
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.tabelTennis.title")}>
              <>
                <p className="my-6 content">
                {t("safety_workplace.clubs.tabelTennis.description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <img
                    src={TableTennis01}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={TableTennis02}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={TableTennis03}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={TableTennis04}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={TableTennis05}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                </div>
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.golf.title")}>
              <>
                <p className="my-6 content">
                 {t("safety_workplace.clubs.golf.description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <img
                    src={Golf01}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Golf02}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Golf03}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Golf04}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Golf05}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Golf06}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Golf07}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Golf08}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                </div>
              </>
            </div>
            <div data-goal={t("safety_workplace.clubs.boardGame.title")}>
              <>
                <p className="my-6 content">
                 {t("safety_workplace.clubs.boardGame.description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <img
                    src={Board01}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Board02}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Board03}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Board04}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                  <img
                    src={Board05}
                    className="w-[400px] rounded-xl  object-cover"
                    alt="table_tennis"
                  />
                </div>
              </>
            </div>
          </TabContainerIcon>
        </div>
      </div>
    </div>
  );
};

export default HealthWorkplace;
