import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import React from "react";
import PieChart from "../../components/charts/PieChart";
import TabContainer from "../../components/ui/TabContainer";

import { useTranslation } from "react-i18next";

const HRDistribution: React.FC = () => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "人力資源分佈" },
  ];
  const pieData = [
    { id: t("common.fullTime"), label: t("common.fullTime"), value: 96.4, color: "#FF507C" },
    { id: "約聘", label: t("common.contract"), value: 3.6, color: "#FF7C9D" },
  ];

  const pieData2 = [
    { id: "全職", label: t("common.fullTime"), value: 100, color: "#FF507C" },
    { id: "兼職", label: t("common.partTime"), value: 0, color: "#FF7C9D" },
  ];
  const pieData3 = [
    { id: "男性", label: t("common.male"), value: 67.8, color: "#FF507C" },
    { id: "女性", label: t("common.female"), value: 32.2, color: "#FF7C9D" },
  ];
  const pieData4 = [
    { id: "<35", label: "<35", value: 27.0, color: "#FF507C" },
    { id: "35-45", label: "35-45", value: 28.5, color: "#FF7C9D" },
    { id: ">45", label: ">45", value: 44.5, color: "#FFA7BD" },
  ];

  const pieData5 = [
    {
      id: "主管",
      label: t("common.supervisor"),
      value: 39.2,
      color: "#FF507C",
    },
    {
      id: "非主管",
      label: t("common.nonSupervisor"),
      value: 60.8,
      color: "#FF7C9D",
    },
  ];
  const pieData6 = [
    { id: "女性", label: t("common.female"), value: 18.1, color: "#FF507C" },
    { id: "男性", label: t("common.male"), value: 81.9, color: "#FF7C9D" },
  ];
  const pieData7 = [
    { id: "21-30", label: "21-30", value: 35.7, color: "#FF507C" },
    { id: "31-40", label: "31-40", value: 25, color: "#FF7C9D" },
    { id: "41-50", label: "41-50", value: 25, color: "#FFA7BD" },
    { id: ">51", label: ">51", value: 14.3, color: "#FFD3DE" },
  ];
  const pieData8 = [
    { id: "女性", label: t("common.female"), value: 39.3, color: "#FF507C" },
    { id: "男性", label: t("common.male"), value: 60.7, color: "#FF7C9D" },
  ];

  const pieData2023 = [
    { id: "正職", label: t("common.fullTime"), value: 95.45, color: "#FF507C" },
    { id: "約聘", label: t("common.contract"), value: 4.55, color: "#FF7C9D" },
  ];

  const pieData20232 = [
    { id: "全職", label: t("common.fullTime"), value: 100, color: "#FF507C" },
    { id: "兼職", label: t("common.partTime"), value: 0, color: "#FF7C9D" },
  ];
  const pieData20233 = [
    { id: "男性", label: t("common.male"), value: 69.7, color: "#FF507C" },
    { id: "女性", label: t("common.female"), value: 30.3, color: "#FF7C9D" },
  ];
  const pieData20234 = [
    { id: "台灣", label: t("common.taiwan"), value: 90.9, color: "#FF507C" },
    { id: "中國", label: t("common.china"), value: 9.1, color: "#FF7C9D" },
  ];

  const pieData20235 = [
    {
      id: "主管",
      label: t("common.supervisor"),
      value: 35.36,
      color: "#FF507C",
    },
    {
      id: "業務行銷",
      label: t("common.salesMarketing"),
      value: 17.68,
      color: "#FF7C9D",
    },
    {
      id: "行政管理",
      label: t("common.administration"),
      value: 29.8,
      color: "#FFA7BD",
    },
    {
      id: "研發人員",
      label: t("common.rdStaff"),
      value: 17.16,
      color: "#FFD3DE",
    },
  ];
  const pieData20236 = [
    { id: "女性", label: t("common.female"), value: 17.1, color: "#FF507C" },
    { id: "男性", label: t("common.male"), value: 82.9, color: "#FF7C9D" },
  ];
  const pieData20237 = [
    { id: "21-30", label: "21-30", value: 39.3, color: "#FF507C" },
    { id: "31-40", label: "31-40", value: 25, color: "#FF7C9D" },
    { id: "41-50", label: "41-50", value: 25, color: "#FFA7BD" },
    { id: ">51", label: ">51", value: 10.7, color: "#FFD3DE" },
  ];
  const pieData20238 = [
    { id: "女性", label: t("common.female"), value: 17.9, color: "#FF507C" },
    { id: "男性", label: t("common.male"), value: 82.1, color: "#FF7C9D" },
  ];

  const pieData2021 = [
    {
      id: "非定期契約",
      label: t("common.fixedTermContract"),
      value: 95.9,
      color: "#FF507C",
    },
    {
      id: "定期契約",
      label: t("common.permanentContract"),
      value: 4.1,
      color: "#FF7C9D",
    },
  ];

  const pieData20212 = [
    { id: "全職", label: t("common.fullTime"), value: 100, color: "#FF507C" },
    { id: "兼職", label: t("common.partTime"), value: 0, color: "#FF7C9D" },
  ];
  const pieData20213 = [
    { id: "男性", label: t("common.male"), value: 70.4, color: "#FF507C" },
    { id: "女性", label: t("common.female"), value: 29.6, color: "#FF7C9D" },
  ];

  const pieData20215 = [
    {
      id: "經理級以上",
      label: t("common.managementLevelAndAbove"),
      value: 33.7,
      color: "#FF507C",
    },
    {
      id: "一般員工",
      label: t("common.generalEmployees"),
      value: 66.3,
      color: "#FF7C9D",
    },
  ];
  const pieData20216 = [
    { id: "女性", label: t("common.female"), value: 15.1, color: "#FF507C" },
    { id: "男性", label: t("common.male"), value: 84.9, color: "#FF7C9D" },
  ];
  const pieData20217 = [
    { id: "21-30", label: "21-30", value: 18.7, color: "#FF507C" },
    { id: "31-40", label: "31-40", value: 12.5, color: "#FF7C9D" },
    { id: "41-50", label: "41-50", value: 45.9, color: "#FFA7BD" },
    { id: ">51", label: ">51", value: 22.9, color: "#FFD3DE" },
  ];
  const pieData20218 = [
    { id: "女性", label: t("common.female"), value: 68.7, color: "#FF507C" },
    { id: "男性", label: t("common.male"), value: 32.3, color: "#FF7C9D" },
  ];

  return (
    <div>
      <HeroBanner
        title={t("hr_distribution.hero.title")}
        description={t("hr_distribution.hero.subtitle")}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">
            {t("hr_distribution.features.title")}
          </p>

          <TabContainer goals={["2023", "2022", "2021"]} tabColor="#FF507C">
            <div data-goal="2023">
              <div>
                <p className="mt-md content">
                  {t("hr_distribution.features.description2023")}
                </p>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  {t("common.employmentTypes")}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.employmentContractDistribution")}
                    </p>
                    <PieChart data={pieData2023} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.employmentTypeDistribution")}
                    </p>
                    <PieChart data={pieData20232} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.employeeGenderDistribution")}
                    </p>
                    <PieChart data={pieData20233} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  {t("common.employeeStructure")}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.jobLevelDistribution")}
                    </p>
                    <PieChart data={pieData20235} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.managementGenderDistribution")}
                    </p>
                    <PieChart data={pieData20236} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.workRegionDistribution")}
                    </p>
                    <PieChart data={pieData20234} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  {t("common.newEmployees")}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.ageDistribution")}
                    </p>
                    <PieChart data={pieData20237} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.genderDistribution")}
                    </p>
                    <PieChart data={pieData20238} />
                  </div>
                </div>
              </div>
            </div>
            <div data-goal="2022">
              <div>
                <p className="mt-md content">
                  {t("hr_distribution.features.description2022")}
                </p>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  {t("common.employmentTypes")}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.employmentContractDistribution")}
                    </p>
                    <PieChart data={pieData} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.employmentTypeDistribution")}
                    </p>
                    <PieChart data={pieData2} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.employeeGenderDistribution")}
                    </p>
                    <PieChart data={pieData3} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  {t("common.employeeStructure")}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">{t("common.ageDistribution")}</p>
                    <PieChart data={pieData4} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.jobLevelDistribution")}
                    </p>
                    <PieChart data={pieData5} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.managementGenderDistribution")}
                    </p>
                    <PieChart data={pieData6} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  {t("common.newEmployees")}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.ageDistribution")}
                    </p>
                    <PieChart data={pieData7} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.genderDistribution")}
                    </p>
                    <PieChart data={pieData8} />
                  </div>
                </div>
              </div>
            </div>
            <div data-goal="2021">
              <div>
                <p className="mt-md content">
                  {t("hr_distribution.features.description2021")}
                </p>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  {t("common.employmentTypes")}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.employmentContractDistribution")}
                    </p>
                    <PieChart data={pieData2021} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.employmentTypeDistribution")}
                    </p>
                    <PieChart data={pieData20212} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.employeeGenderDistribution")}
                    </p>
                    <PieChart data={pieData20213} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  {t("common.employeeStructure")}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.jobLevelDistribution")}
                    </p>
                    <PieChart data={pieData20215} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      
                      {t("common.managementGenderDistribution")}
                    </p>
                    <PieChart data={pieData20216} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  {t("common.newEmployees")}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">{t("common.ageDistribution")}</p>
                    <PieChart data={pieData20217} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">
                      {t("common.genderDistribution")}
                    </p>
                    <PieChart data={pieData20218} />
                  </div>
                </div>
              </div>
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default HRDistribution;
