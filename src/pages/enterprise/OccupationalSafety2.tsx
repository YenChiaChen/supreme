import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/幸福企業/職業安全衛生.jpg";
import React from "react";
import Accident from "../../assets/img/testing/accident.png";
import TabContainer from "../../components/ui/TabContainer";
import { useTranslation } from "react-i18next";



const OccupationalSafety: React.FC = () => {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t("common.happyEnterprise"), href: "/enterprise" },
    { label: t("common.friendlyWorkplace") },
    { label: t("common.occupationalSafetyAndHealth") },
  ];

  return (
    <div>
      <HeroBanner
        title={t("common.occupationalSafetyAndHealth")}
        description= {t("occupational_safety.hero.subtitle")}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">{t("occupational_safety.policy.title")}</p>
          <p className="mt-md content">
          {t("occupational_safety.policy.description01")}
          </p>
          <p className="mt-4 content">
          {t("occupational_safety.policy.description02")}
            <br />
            {t("occupational_safety.policy.description03")}
          </p>
          <p className="mt-xl content">
          {t("occupational_safety.policy.table.title")}
          </p>
          <div className="mt-md grid grid-cols-12 border-[1px] border-pink">
            <div className="col-span-3 bg-pink text-white flex items-center justify-center p-6">
            {t("occupational_safety.policy.table.rows01.title")}
            </div>
            <div className="col-span-9 p-6 pl-12 notes">
              <ul className="list-disc ">
                <li>{t("occupational_safety.policy.table.rows01.description01")}</li>
                <li>
                {t("occupational_safety.policy.table.rows01.description02")}
                </li>
                <li>{t("occupational_safety.policy.table.rows01.description03")}</li>
                <li>
                {t("occupational_safety.policy.table.rows01.description04")}
                  <ul>
                    <li>
                    {t("occupational_safety.policy.table.rows01.description05")}
                    </li>
                    <li>{t("occupational_safety.policy.table.rows01.description06")}</li>
                    <li>{t("occupational_safety.policy.table.rows01.description07")}</li>
                  </ul>
                </li>
                <li>{t("occupational_safety.policy.table.rows01.description08")}</li>
              </ul>
            </div>
            <div className="col-span-3 bg-pink text-white flex items-center justify-center p-6 border-t-[1px] border-white">
            {t("occupational_safety.policy.table.rows02.title")}
            </div>
            <div className="col-span-9 p-6 pl-12 notes border-t-[1px] border-pink">
            {t("occupational_safety.policy.table.rows02.description01")}
              <ul className="list-disc ">
                <li>
                {t("occupational_safety.policy.table.rows02.description02")}
                </li>
                <li>{t("occupational_safety.policy.table.rows02.description03")}</li>
                <li>{t("occupational_safety.policy.table.rows02.description04")}</li>
              </ul>
            </div>
          </div>

          <p className="mt-xl sub-title text-center">{t("occupational_safety.training.title")}</p>
          <p className="mt-md content">
          {t("occupational_safety.training.description")}
          </p>
          <p className="mt-xl sub-title text-center">   {t("occupational_safety.riskManagement.title")}</p>
          <p className="mt-md content">
          {t("occupational_safety.riskManagement.description")}
          </p>
          <div className="flex justify-center">
            <img
              src={Accident}
              className="mt-md w-full max-w-[1000px]"
              alt="accident"
            />
          </div>
          <p className="mt-xl sub-title text-center">
          {t("occupational_safety.performanceReport.title")}
          </p>
          <TabContainer goals={["2022"]}>
            <div data-goal="2022">
            <>
    <p className="text-pink text-[20px] font-bold">{t("occupational_safety.performanceReport.table2022.injuryStatistic.title")}</p>
    <table className="min-w-full border-collapse mt-6">
      <thead>
        <tr className="bg-pink text-white content">
          <th className="border border-white px-4 py-2 rounded-tl-2xl">
          {t("occupational_safety.performanceReport.type")}
          </th>
          <th className="border border-white px-4 py-2">{t("common.item")}</th>
          <th className="border border-white px-4 py-2">{t("common.numberOfPeople")}</th>
          <th className="border border-white px-4 py-2 rounded-tr-2xl">{t("common.ratio")}</th>
        </tr>
      </thead>
      <tbody className="content">
        <tr>
          <td className="border border-light_gray px-4 py-2" rowSpan={3}>
          {t("common.occupationalInjury")}
          </td>
          <td className="border border-light_gray px-4 py-2">
          {t("occupational_safety.performanceReport.table2022.injuryStatistic.items01")}
          </td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2"> {t("occupational_safety.performanceReport.table2022.injuryStatistic.items02")}</td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">
          {t("occupational_safety.performanceReport.table2022.injuryStatistic.items03")}
          </td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2" rowSpan={2}>
          {t("common.occupationalDisease")}
          </td>
          <td className="border border-light_gray px-4 py-2">
          {t("occupational_safety.performanceReport.table2022.injuryStatistic.items04")}
          </td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2"> {t("occupational_safety.performanceReport.table2022.injuryStatistic.items05")}</td>
          <td className="border border-light_gray px-4 py-2">0</td>
          <td className="border border-light_gray px-4 py-2">0.00%</td>
        </tr>
      </tbody>
    </table>

    <p className="notes mt-6">
    {t("occupational_safety.performanceReport.table2022.injuryStatistic.note01")}
    </p>
    <p className="notes mt-1">
    {t("occupational_safety.performanceReport.table2022.injuryStatistic.note02")}
    </p>
    <p className="notes mt-1">
    {t("occupational_safety.performanceReport.table2022.injuryStatistic.note03")}
    </p>
    <p className="notes mt-1">
    {t("occupational_safety.performanceReport.table2022.injuryStatistic.note04")}
    </p>
    <p className="notes mt-1">
    {t("occupational_safety.performanceReport.table2022.injuryStatistic.note05")}
    </p>

    <p className="text-pink text-[20px] font-bold mt-md">   {t("occupational_safety.performanceReport.table2022.absenceStatistic.title")}</p>
    <table className="min-w-full border-collapse mt-6">
      <thead>
        <tr className="bg-pink text-white content">
          <th className="border border-white px-4 py-2 rounded-tl-2xl">
            &nbsp;
          </th>
          <th className="border border-white px-4 py-2">2020</th>
          <th className="border border-white px-4 py-2">2021</th>
          <th className="border border-white px-4 py-2 rounded-tr-2xl">2022</th>
        </tr>
      </thead>
      <tbody className="content">
        <tr>
          <td className="border border-light_gray px-4 py-2">{t("common.absenteeDays")}</td>
          <td className="border border-light_gray px-4 py-2">263.5</td>
          <td className="border border-light_gray px-4 py-2">118.6</td>
          <td className="border border-light_gray px-4 py-2">151.7</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">
          {t("common.yearEndEmployees")}
          </td>
          <td className="border border-light_gray px-4 py-2">179 </td>
          <td className="border border-light_gray px-4 py-2">196</td>
          <td className="border border-light_gray px-4 py-2">196</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">{t("common.workingDays")}</td>
          <td className="border border-light_gray px-4 py-2">251</td>
          <td className="border border-light_gray px-4 py-2">248</td>
          <td className="border border-light_gray px-4 py-2">249</td>
        </tr>
        <tr>
          <td className="border border-light_gray px-4 py-2">{t("common.absenceRate")}</td>
          <td className="border border-light_gray px-4 py-2">0.59%</td>
          <td className="border border-light_gray px-4 py-2">0.24%</td>
          <td className="border border-light_gray px-4 py-2">0.31%</td>
        </tr>
      </tbody>
    </table>
    <p className="notes mt-6">
    {t("occupational_safety.performanceReport.table2022.absenceStatistic.note01")}
    </p>
  </>
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default OccupationalSafety;
