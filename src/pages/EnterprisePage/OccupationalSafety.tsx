import HeroSection from "../../components/ui/HeroSection";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import BgImage from "../../assets/img/subPage/幸福企業/職業安全衛生.jpg";
import React from "react";
import navItems from "../../data/nav.json";
import { useTranslation } from "react-i18next";

import investigationZhImage from '../../assets/img/subPage/幸福企業/accident-investigation-process-zh.png'
import investigationEnImage from '../../assets/img/subPage/幸福企業/accident-investigation-process-en.png'

import {
  H2,
  H3,
  P,
  List,
  Image,
  YearTabContainer,
  Table,
  LabeledContentTable
} from "../../components/ui";
import { Container, Section } from "../../components/ui/Container";

const OccupationalSafety: React.FC = () => {
  const { t, i18n } = useTranslation();


  const getImageSrc = () => {
    switch (i18n.language) {
      case 'zh_TW':
        return investigationZhImage;
      case 'en':
        return investigationEnImage;
      default:
        return investigationZhImage;
    }
  };

  const rows = [
    {
      title: t("occupational_safety.policy.table.rows01.title"),
      content: (
        <List
          items={[
            {
              text: t("occupational_safety.policy.table.rows01.description01"),
            },
            {
              text: t("occupational_safety.policy.table.rows01.description02"),
            },
            {
              text: t("occupational_safety.policy.table.rows01.description03"),
            },
            {
              text: t("occupational_safety.policy.table.rows01.description04"),
              subItems: [
                {
                  text: t(
                    "occupational_safety.policy.table.rows01.description05"
                  ),
                },
                {
                  text: t(
                    "occupational_safety.policy.table.rows01.description06"
                  ),
                },
                {
                  text: t(
                    "occupational_safety.policy.table.rows01.description07"
                  ),
                },
              ],
            },
            {
              text: t("occupational_safety.policy.table.rows01.description08"),
            },
          ]}
          listType="disc"
        />
      ),
    },
    {
      title: t("occupational_safety.policy.table.rows02.title"),
      content: (
        <List
          items={[
            {
              text: t("occupational_safety.policy.table.rows02.description01"),
            },
            {
              text: t("occupational_safety.policy.table.rows02.description02"),
            },
            {
              text: t("occupational_safety.policy.table.rows02.description03"),
            },
            {
              text: t("occupational_safety.policy.table.rows02.description04"),
            },
          ]}
          listType="disc"
        />
      ),
    },
  ];

  const tableData = {
    headers: [
      { content: t("occupational_safety.performanceReport.type") },
      { content: t("common.item") },
      { content: t("common.numberOfPeople") },
      { content: t("common.ratio") },
    ],
    rows: [
      [
        { content: t("common.occupationalInjury"), rowSpan: 3 },
        { content: t("occupational_safety.performanceReport.table2022.injuryStatistic.items01") },
        { content: 0 },
        { content: "0.00%" },
      ],
      [
        { content: t("occupational_safety.performanceReport.table2022.injuryStatistic.items02") },
        { content: 0 },
        { content: "0.00%" },
      ],
      [
        { content: t("occupational_safety.performanceReport.table2022.injuryStatistic.items03") },
        { content: 0 },
        { content: "0.00%" },
      ],  [
        { content: t("common.occupationalDisease"), rowSpan: 2 },
        { content: t("occupational_safety.performanceReport.table2022.injuryStatistic.items04") },
        { content: 0 },
        { content: "0.00%" },
      ],
      [
        { content: t("occupational_safety.performanceReport.table2022.injuryStatistic.items05") },
        { content: 0 },
        { content: "0.00%" },
      ],
     
    ],
  };


  const absenceData = {
    headers: [
      { content: ""},
      { content: "2020" },
      { content: "2021" },
      { content: "2022"  },
    ],
    rows: [
      [
        { content:t("common.absenteeDays")},
        { content: 263.5 },
        { content: 118.6 },
        { content: 151.7 },
      ],
      [
        { content:t("common.yearEndEmployees")},
        { content: 179 },
        { content: 196 },
        { content: 196 },
      ],
      [
        { content:t("common.workingDays")},
        { content: 251},
        { content: 248 },
        { content: 249 },
      ],
      [
        { content:t("common.absenceRate")},
        { content: "0.59%" },
        { content: "0.24%" },
        { content: "0.31%" },
      ],
    ],
  };



  return (
    <div>
      <HeroSection
        title={t("common.occupationalSafetyAndHealth")}
        description={t("occupational_safety.hero.subtitle")}
        backgroundImage={BgImage}
        center={true}
      />

      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={t("occupational_safety.policy.title")} />
          <P text={t("occupational_safety.policy.description01")} />

          <List
            items={[
              { text: t("occupational_safety.policy.description02") },
              { text: t("occupational_safety.policy.description03") },
            ]}
            listType="decimal"
          />
        </Section>

        <Section>
          <P text={t("occupational_safety.policy.table.title")} />
          <LabeledContentTable rows={rows} />
        </Section>

        <Section>
          <H2 text={t("occupational_safety.training.title")} />
          <P text={t("occupational_safety.training.description")} />
        </Section>

        <Section>
          <H2 text={t("occupational_safety.riskManagement.title")} />
          <P text={t("occupational_safety.riskManagement.description")} />
          <H3 text={t("occupational_safety.riskManagement.imageTitle")} className="text-pink"/>

          <Image src={getImageSrc()} alt="accident-investigation-process" maxWidth="1200px" />
        </Section>




        <H2 text={t("occupational_safety.performanceReport.title")}  />
       

        <YearTabContainer years={["2022"]} tabColor="#FF507C">
          <div data-year="2022">
            <>
              <Section>
                <Table
                  data={tableData}
                  color="#FF507C"
                  title= {t("occupational_safety.performanceReport.table2022.injuryStatistic.title")}
                  unit=""
                  notes={[
                    {
                      text: t("occupational_safety.performanceReport.table2022.injuryStatistic.note01"),
                    },
                    {
                      text: t("occupational_safety.performanceReport.table2022.injuryStatistic.note02"),
                    },
                    {
                      text: t("occupational_safety.performanceReport.table2022.injuryStatistic.note03"),
                    },
                    {
                      text: t("occupational_safety.performanceReport.table2022.injuryStatistic.note04"),
                    },
                    {
                      text: t("occupational_safety.performanceReport.table2022.injuryStatistic.note05"),
                    },
                  ]}
                />
              </Section>
                
                
                
              <Section>
                <Table
                  data={absenceData}
                  color="#FF507C"
                  title= {t("occupational_safety.performanceReport.table2022.absenceStatistic.title")}
                  unit=""
                  notes={[
                    {
                      text: t("occupational_safety.performanceReport.table2022.absenceStatistic.note01"),
                    },
                  ]}
                />
              </Section>
            </>
          </div>
        </YearTabContainer>
      </Container>
    </div>
  );
};

export default OccupationalSafety;