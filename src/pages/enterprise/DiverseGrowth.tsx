import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/幸福企業/多元化成長.jpg";
import React from "react";
import { faBuilding, faBook, faUserTie, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import CardGrid from "../../components/ui/CardGrid";
import BlockChain01 from "../../assets/img/testing/blockchain01.png"
import BlockChain02 from "../../assets/img/testing/blockchain02.png"
import Sells01 from "../../assets/img/testing/sells01.png"
import Sells02 from "../../assets/img/testing/sells02.png"
import HoverCard from "../../components/ui/HoverCard";
import TabContainer from "../../components/ui/TabContainer";
import { useTranslation } from "react-i18next";
const DiverseGrowth: React.FC = () => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label:  t("common.happyEnterprise"), href: "/enterprise" },
    { label: t("common.talentDevelopment")},
    { label: t("common.diversifiedGrowth") },
  ];

  const cardData = [
    {
      title: t("diverse_growth.talentCultivationProgram.card01.title"),
      description:
      t("diverse_growth.talentCultivationProgram.card01.content"),
      icon: faBuilding,
    },
    {
      title: t("diverse_growth.talentCultivationProgram.card02.title"),
      description:
      t("diverse_growth.talentCultivationProgram.card02.content"),
      icon: faBook,
    },
    {
      title: t("diverse_growth.talentCultivationProgram.card03.title"),
      description:
      t("diverse_growth.talentCultivationProgram.card03.content"),
      icon: faUserTie,
    },
    {
      title: t("diverse_growth.talentCultivationProgram.card04.title"),
      description:
      t("diverse_growth.talentCultivationProgram.card04.content"),
      icon: faRankingStar,
    },
  ];
  
  


  const cards = [
    {
      title: t("diverse_growth.talentCultivationCard.card01.title"),
      subtitle: "",
      span: 4,
      description:
      t("diverse_growth.talentCultivationCard.card01.content")
    },
    {
      title: t("diverse_growth.talentCultivationCard.card02.title"),
      subtitle: "",
      span: 4,
      description:
      t("diverse_growth.talentCultivationCard.card02.content")
    },
    {
      title:  t("diverse_growth.talentCultivationCard.card03.title"),
      subtitle: "",
      span: 4,
      description:
      t("diverse_growth.talentCultivationCard.card03.content")
    },
  ];

  return (
    <div>
      <HeroBanner
        title={t("diverse_growth.hero.title")}
        description={t("diverse_growth.hero.subtitle")}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />


        
          <p className="mt-xl sub-title text-center">{t("diverse_growth.trainingProgram.title")}</p>
          <p className="mt-md content">
           {t("diverse_growth.trainingProgram.section01")}
          </p>
          <p className="mt-md content">
          {t("diverse_growth.trainingProgram.section02")}
          </p>
          <p className="mt-xl text-center sub-title">  {t("diverse_growth.talentCultivationCard.title")}</p>
          <CardGrid cards={cards} />

          <p className="mt-xl text-center sub-title"> {t("diverse_growth.talentCultivationProgram.title")}</p>
          {/* <img src={TestImage} alt="testing" className="w-full mt-md" /> */}
          
          <div className="w-full flex mt-md justify-between gap-4">
            {cardData.map((data, index) => (
              <HoverCard key={index} data={data} color='#FF507C' />
            ))}
          </div>
          <p className="mt-xl text-center sub-title">{t("diverse_growth.careerDevelopment.title")}</p>
          <p className="mt-md content">
          {t("diverse_growth.careerDevelopment.description")}
          </p>
          <p className="tracking-wide text-pink font-semibold text-[20px] text-center mt-xl">
          {t("diverse_growth.careerDevelopment.lecture01")}
          </p>
          <div className="flex gap-12 mt-md justify-center">
           
              <img
                src={BlockChain01}
                alt="healthy"
                className="w-[500px] h-[300px] object-cover"
              />
              <img
                src={BlockChain02}
                alt="healthy"
                className="w-[500px] h-[300px] object-cover"
              />
          </div>

          
          <p className="tracking-wide text-pink font-semibold text-[20px] text-center mt-xl">
          {t("diverse_growth.careerDevelopment.lecture02")}
          </p>
          <div className="flex gap-12 mt-md justify-center">
              <img
                src={Sells01}
                alt="healthy"
                className="w-[500px] h-[300px] object-cover"
              />
              <img
                src={Sells02}
                alt="healthy"
                className="w-[500px] h-[300px] object-cover"
              />
          </div>
          <p className="mt-xl text-center sub-title">       {t("diverse_growth.performanceReport.title")}</p>
          <TabContainer goals={["2023", "2022"]} tabColor="#FF507C">
            <div data-goal="2023">
            <p className="text-pink text-[18px] tracking-widest font-semibold mt-12">{t("diverse_growth.performanceReport.training")}</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl"> {t("common.category")}</th>
                <th className="border border-white px-4 py-2">{t("common.classDate")}</th>
                <th className="border border-white px-4 py-2">{t("common.courseName")}</th>
                <th className="border border-white px-4 py-2">{t("common.participants")}</th>
                <th className="border border-white px-4 py-2">{t("common.numberOfParticipants")}</th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl">{t("common.courseHours")}</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">2/14</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("diverse_growth.performanceReport.table2023.infoSecuritySeminar")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>160</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>480</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">2/21</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">2/14</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("diverse_growth.performanceReport.table2023.integrityManagementAndFairTrade")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>160</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>80</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">2/21</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>{t("common.competitivenessDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">3/16</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>{t("diverse_growth.performanceReport.table2023.mindMappingInWorkplace")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>{t("common.salesDepartmentEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={4}>69</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={4}>483</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">3/24</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">4/17</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">4/25</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>{t("common.skillsDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">8/02</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>{t("diverse_growth.performanceReport.table2023.highImpactPresentationSkills")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>{t("common.salesStaff")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={3}>36</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={3}>378</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">8/10</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">8/22</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">9/06</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("diverse_growth.performanceReport.table2023.occupationalSafetySeminar")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>153</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>469</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">9/07</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.managementTraining")}</td>
                <td className="border border-light_gray px-4 py-2">9/23</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2023.teamBuildingCamp")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">141</td>
                <td className="border border-light_gray px-4 py-2 text-center">846</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">3/24</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2023.newEmployeeTraining0314")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">9</td>
                <td className="border border-light_gray px-4 py-2 text-center">54</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">6/06</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2023.newEmployeeTraining0606")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">9</td>
                <td className="border border-light_gray px-4 py-2 text-center">54</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">11/22</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2023.newEmployeeTraining1122")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">9</td>
                <td className="border border-light_gray px-4 py-2 text-center">54</td>
              </tr>
            </tbody>
          </table>
          <p className="notes mt-1">{t("diverse_growth.performanceReport.table2023.trainingNote")}</p>

          
          <p className="text-pink text-[18px] tracking-widest font-semibold mt-md">{t("diverse_growth.performanceReport.trainingHoursAndGenderRatio")}</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl" rowSpan={2}>{t("common.category")}</th>
                <th className="border border-white px-4 py-2" colSpan={3}>{t("common.totalTrainingHoursInHours")}</th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl" colSpan={3}>{t("common.averageTrainingHoursPerPerson")}</th>
              </tr>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2">{t("common.male")}</th>
                <th className="border border-white px-4 py-2">{t("common.female")}</th>
                <th className="border border-white px-4 py-2">{t("common.total")}</th>
                <th className="border border-white px-4 py-2">{t("common.male")}</th>
                <th className="border border-white px-4 py-2">{t("common.female")}</th>
                <th className="border border-white px-4 py-2">{t("common.total")}</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.supervisor")}</td>
                <td className="border border-light_gray px-4 py-2">1,025.00</td>
                <td className="border border-light_gray px-4 py-2">222.00</td>
                <td className="border border-light_gray px-4 py-2">1,247.00</td>
                <td className="border border-light_gray px-4 py-2">17.67</td>
                <td className="border border-light_gray px-4 py-2">18.50</td>
                <td className="border border-light_gray px-4 py-2">17.81</td>
              </tr>
              <tr>
              <td className="border border-light_gray px-4 py-2">{t("common.nonSupervisor")}</td>
              <td className="border border-light_gray px-4 py-2">1,449.50</td>
              <td className="border border-light_gray px-4 py-2">834.00</td>
              <td className="border border-light_gray px-4 py-2">2,283.50</td>
              <td className="border border-light_gray px-4 py-2">18.12</td>
              <td className="border border-light_gray px-4 py-2">17.38</td>
              <td className="border border-light_gray px-4 py-2">17.84</td>
              </tr>
              <tr>
              <td className="border border-light_gray px-4 py-2">{t("common.totalTrainingHours")}</td>
              <td className="border border-light_gray px-4 py-2">2,474.50</td>
              <td className="border border-light_gray px-4 py-2">1,056.00</td>
              <td className="border border-light_gray px-4 py-2">3,530.50</td>
              <td className="border border-light_gray px-4 py-2">17.93</td>
              <td className="border border-light_gray px-4 py-2">17.60</td>
              <td className="border border-light_gray px-4 py-2">17.83</td>
              </tr>
            </tbody>
          </table>
          
          <p className="notes mt-1">{t("diverse_growth.performanceReport.table2023.note1")}<br />{t("diverse_growth.performanceReport.table2023.note2")}<br/>{t("diverse_growth.performanceReport.table2023.note3")}</p>
            </div>
            <div data-goal="2022">
              <p className="text-pink text-[18px] tracking-widest font-semibold mt-12">{t("diverse_growth.performanceReport.training")}</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl">{t("common.category")}</th>
                <th className="border border-white px-4 py-2">{t("common.courseName")}</th>
                <th className="border border-white px-4 py-2">{t("common.participants")}</th>
                <th className="border border-white px-4 py-2">{t("common.numberOfParticipants")}</th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl">{t("common.courseHours")}</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.competitivenessDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.blockchainAndCryptocurrency")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.salesStaff")}、{t("common.volunteers")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">86</td>
                <td className="border border-light_gray px-4 py-2 text-center">3</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.competitivenessDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.internationalTradePractices")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.salesDepartmentEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">73</td>
                <td className="border border-light_gray px-4 py-2 text-center">7</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.integrityManagementAndInsiderTradingPrevention")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">123</td>
                <td className="border border-light_gray px-4 py-2 text-center">0.5</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.skillsDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.strategicSalesAndNegotiationSkills")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.salesStaff")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">42</td>
                <td className="border border-light_gray px-4 py-2 text-center">7</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.newEmployeeTraining")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.newEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">17</td>
                <td className="border border-light_gray px-4 py-2 text-center">6</td>
              </tr>
            </tbody>
          </table>
          <p className="notes mt-1">{t("diverse_growth.performanceReport.table2023.trainingNote")}</p>

          
          <p className="text-pink text-[18px] tracking-widest font-semibold mt-md">{t("diverse_growth.performanceReport.trainingHoursAndGenderRatio")}</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl" rowSpan={2}>{t("common.category")}</th>
                <th className="border border-white px-4 py-2" colSpan={2}>{t("common.totalTrainingHoursInHours")}</th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl" colSpan={2}>{t("common.averageTrainingHoursPerPerson")}</th>
              </tr>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2">{t("common.male")}</th>
                <th className="border border-white px-4 py-2">{t("common.female")}</th>
                <th className="border border-white px-4 py-2">{t("common.male")}</th>
                <th className="border border-white px-4 py-2">{t("common.female")}</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.supervisor")}</td>
                <td className="border border-light_gray px-4 py-2">335.5</td>
                <td className="border border-light_gray px-4 py-2">85</td>
                <td className="border border-light_gray px-4 py-2">5.33</td>
                <td className="border border-light_gray px-4 py-2">6.07</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.nonSupervisor")}</td>
                <td className="border border-light_gray px-4 py-2">693</td>
                <td className="border border-light_gray px-4 py-2">469.5</td>
                <td className="border border-light_gray px-4 py-2">9.90</td>
                <td className="border border-light_gray px-4 py-2">9.58</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.totalTrainingHours")}</td>
                <td className="border border-light_gray px-4 py-2" colSpan={2}>1,583</td>
                <td className="border border-light_gray px-4 py-2" colSpan={2}>8.08</td>
              </tr>
            </tbody>
          </table>
            </div>
          </TabContainer>

    







        </div>
      </div>
    </div>
  );
};

export default DiverseGrowth;
