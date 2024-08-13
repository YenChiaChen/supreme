import React from "react";
import SupremeLogo from '../../assets/img/logo/supreme-white.png'
import { Link } from 'react-router-dom';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

interface FooterLinkSectionProps {
  title: { name: string; url: string }
  links: { name: string; url: string }[];
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4 tracking-wider">
      <Link to={title.url} className="text-[16px] font-semibold mb-4">{title.name}</Link>
      {links.map((link, index) => (
        <Link key={index} to={link.url} className="text-[16px] font-light hover:text-orange  duration-300">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {

  const { t } = useTranslation();

  const sections = [
  
    {
      title: {name: t("common.happyEnterprise"), url: '/enterprise'},
      links: [
        { name: t("common.friendlyWorkplace"), url: '/enterprise/occupational-safety' },
        { name: t("common.employeePolicy"), url: '/enterprise/welfare-care' },
        { name:  t("common.talentDevelopment"), url: '/enterprise/diverse-growth' },
        { name:  t("common.humanResourcesDistribution"), url: '/enterprise/hr-distribution' },
      ],
    },
    {
      title: {name: t("common.sustainableManagement"), url: '/sustainability'},
      links: [
        { name: t("common.messageFromManagement"), url: '/sustainability/message-from-chairman' },
        { name:  t("common.functionalCommittee"), url: '/sustainability/sustainbility-committee' },
        { name:  t("common.stakeholderSection"), url: '/sustainability/stakeholder-engagement' },
        { name:  t("common.technologyRisk"), url: '/sustainability/risk-management' },
        { name: t("common.sustainableSupplyChain"), url: '/sustainability/supply-chain' },
      ],
    },
    {
      title: {name:  t("common.sustainableCoexistence"), url: '/symbiosis'},
      links: [
        { name:  t("common.climateChangeStrategy"), url: '/symbiosis/climate-change' },
        { name: t("common.greenhouseGasAndActionPlan"), url: '/symbiosis/greenhouse-gases' },
        { name: t("common.greenEnergyLowCarbonPlan"), url: '/symbiosis/green-energy' },
        { name: t("common.energyManagement"), url: '/symbiosis/energy-management' },
        { name:  t("common.wasteManagement"), url: '/symbiosis/waste-management' },
        { name:  t("common.waterResourceManagement"), url: '/symbiosis/water-management' },
      ],
    },
  ];

  return (
    <div className="mt-[300px]">
      <div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(76,133,145,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(76,133,145,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(76,133,145,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#4C8591" />
</g>
</svg>
</div>
<div className="bg-dark_blue">
      <div className="container pt-24 pl-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-12 text-white">
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5 justify-between">
          <img src={SupremeLogo} alt='Supreme' className="w-[250px]" />
          <a href='http://www.supreme.com.tw' className="bg-orange w-fit px-6 py-2 tracking-wide rounded-full hover:scale-[1.05] duration-300" target="_blank" rel="noreferrer">至上電子官方網頁<FontAwesomeIcon icon={faArrowRight} className="ml-4" /></a>
        </div>
        {sections.map((section, index) => (
          <FooterLinkSection key={index} title={section.title} links={section.links} />
        ))}
      </div>
    </div>
    <div className="bg-[#224952] text-white text-center text-xs py-8 tracking-wide">	© 2024 Supreme Electronics Co., Ltd.. All rights reserved.</div>
    </div>
  );
};

export default Footer;