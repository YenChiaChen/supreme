// Navbar.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import SupremeLogo from "../../assets/img/logo/supreme.png";
import "./mega.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons";

interface LinkProps {
  text: string;
  url: string;
}
const AnimatedLink: React.FC<LinkProps> = ({ text, url }) => {
    return (
      <Link
        to={url}
        className="relative inline-flex items-center group w-fit !text-xs"
      >
        {text}
        <span className="absolute text-dark_blue -right-[20px] opacity-0 transform translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </Link>
    );
  };


  
  

interface MenuItem {
  title: string;
  href: string;
  subMenu?: MenuItem[];
}

interface NavbarProps {
  items: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);


  const getLanguageOptions = () => {
    switch (currentLanguage) {
      case 'zh_TW':
        return (
          <span className="px-4">
           <a href="#" onClick={() => changeLanguage('zh_CN')} className='border-r-[1px] border-light_gray pr-2 hover:text-dark_blue duration-300'>簡</a>
           <a href="#" className="pl-2" onClick={() => changeLanguage('en')}>EN</a>
          </span>
        );
      case 'zh_CN':
        return (
            <span className="px-4">
          <a href="#" onClick={() => changeLanguage('zh_TW')} className='border-r-[1px] border-light_gray pr-2 hover:text-dark_blue duration-300'>繁</a>
          <a href="#" className="pl-2" onClick={() => changeLanguage('en')}>EN</a>
          </span>
        );
      case 'en':
        return (
            <span className="px-4">
          <a href="#" onClick={() => changeLanguage('zh_TW')} className='border-r-[1px] border-light_gray pr-2 hover:text-dark_blue duration-300'>繁</a>
          <a href="#" className="pl-2" onClick={() => changeLanguage('zh_CN')}>簡</a>
          </span>
        );
      default:
        return (
          <span className="px-4">
           <a href="#" onClick={() => changeLanguage('zh_CN')} className='border-r-[1px] border-light_gray pr-2 hover:text-dark_blue duration-300'>簡</a>
           <a href="#" className="pl-2" onClick={() => changeLanguage('en')}>EN</a>
          </span>
        );
    }
  };


//   const renderMenu = (menuItems: MenuItem[]) => {
//     return (
//       <ul className="sub_menu">
//         {menuItems.map((item, index) => (
//           <li key={index} className={item.subMenu ? "has_dropdown group" : ""}>
//             <Link to={item.href} className={item.subMenu ? "!pr-[30px]" : ""}>
//               {item.title}
//               {item.subMenu && (
//                 <FontAwesomeIcon
//                   icon={faChevronRight}
//                   className="text-orange absolute right-[13px] top-1/2 -translate-y-1/2"
//                 />
//               )}
//             </Link>
//             {item.subMenu && renderMenu(item.subMenu)}
//           </li>
//         ))}
//       </ul>
//     );
//   };


  return (
    <nav className="fixed w-full left-0 top-0 z-[99] bg-white shadow-lg">
      <div className="container mx-auto">
        <div className="row px-10">
          <div className="logo flex items-center">
            <a href="#">
              <img src={SupremeLogo} className="w-[160px]" alt="Supreme Logo" />
            </a>
            <div className="mx-4 text-light_gray w-[2px] bg-light_gray h-[30px]"></div>
            <p className="text-[18px]">{ t("common.sustainability")}</p>
          </div>
          <div className="mobile_btn">
            <i className="fas fa-bars"></i>
          </div>
          <div className="main_menu">
            <ul>
            
            <li className="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
              <Link to="/enterprise">{ t("common.happyEnterprise")}<i className="fas fa-angle-down"></i></Link>
              <div className="mega_menu sub_menu px-6 shadow-lg flex justify-center rounded-b-xl">
                <div className="grid grid-cols-4 gap-6">
                <div className="mega_menu_item ">
                  <h3 className="text-black text-sm font-bold text-orange">{ t("common.friendlyWorkplace")}</h3>
                  <AnimatedLink text={t("common.occupationalSafetyAndHealth")} url="/enterprise/occupational-safety" />
                  <AnimatedLink text={t("common.healthyWorkplace")} url="/enterprise/healthy-workplace" />
                  <AnimatedLink text={t("common.humanRightsPolicy")} url="/enterprise/human-rights-policy" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="">{t("common.welfareAndCare")}</h3>
                  <AnimatedLink text={t("common.employeeRightsProtection")} url="/enterprise/welfare-care" />
                  <AnimatedLink text={t("common.talentDevelopment")} url="/enterprise/rights-protection" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="">{t("common.employeePolicy")}</h3>
                  <AnimatedLink text={t("common.diversifiedGrowth")} url="/enterprise/diverse-growth" />
                  <AnimatedLink text={t("common.performanceEvaluationAndCompensation")} url="/enterprise/performance-compensation" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="">{ t("common.happyEnterprise")}</h3>
                  <AnimatedLink text={ t("common.humanResourcesDistribution")} url="/enterprise/hr-distribution" />
                </div>
                </div>
              </div>
            </li>

            <li className="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
              <Link to="/sustainability">{ t("common.sustainableManagement")}<i className="fas fa-angle-down"></i></Link>
              <div className="mega_menu sub_menu px-6 shadow-lg flex justify-center rounded-b-xl">
                <div className="grid grid-cols-5">
                <div className="mega_menu_item">
                  <h3>{ t("common.sustainableManagement")}</h3>
                  <AnimatedLink text={ t("common.messageFromManagement")} url="/sustainability/message-from-chairman" />
                  <AnimatedLink text={ t("common.corporateGovernance")} url="/sustainability/governance" />
                  <AnimatedLink text={ t("common.integrityManagement")} url="/sustainability/ethical-management" />
                  <AnimatedLink text={ t("common.boardOfDirectors")} url="/sustainability/board" />
                </div>
                <div className="mega_menu_item">
                  <h3>{ t("common.functionalCommittee")}</h3>
                  <AnimatedLink text={ t("common.sustainableDevelopmentCommittee")} url="/sustainability/sustainbility-committee" />
                  <AnimatedLink text={ t("common.compensationCommittee")} url="/sustainability/compensation-committee" />
                  <AnimatedLink text={ t("common.auditCommittee")} url="/sustainability/audit-committee" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="">{ t("common.stakeholderSection")}</h3>
                  <AnimatedLink text={ t("common.stakeholderMeetings")} url="/sustainability/stakeholder-engagement" />
                  <AnimatedLink text={ t("common.materialTopics")} url="/sustainability/key-topics" />
                  <AnimatedLink text={ t("common.stakeholderQuestionnaire")} url="/sustainability/questionnaire" />
                </div>
                <div className="mega_menu_item">
                  <h3>{ t("common.technologyRisk")}</h3>
                  <AnimatedLink text={ t("common.riskManagement")} url="/sustainability/risk-management" />
                  <AnimatedLink text={ t("common.informationSecurityManagement")} url="/sustainability/information-security" />
                </div>
                <div className="mega_menu_item">
                  <h3>{ t("common.sustainableSupplyChain")}</h3>
                  <AnimatedLink text={ t("common.supplyChainManagement")} url="/sustainability/supply-chain" />
                  <AnimatedLink text={ t("common.productAndCustomerService")} url="/sustainability/product-customer-service" />
                </div>
                </div>
              </div>
            </li>

            <li className="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
              <Link to="/symbiosis">{ t("common.sustainableCoexistence")}<i className="fas fa-angle-down"></i></Link>
            <div className="mega_menu sub_menu px-6 shadow-lg flex justify-center  rounded-b-xl">
                <div className="grid grid-cols-2">
                <div className="mega_menu_item">
                  <h3>{ t("common.sustainableCoexistence")}</h3>
                  <AnimatedLink text={ t("common.climateChangeStrategy")} url="/symbiosis/climate-change" />
                  <AnimatedLink text={ t("common.greenhouseGasAndActionPlan")} url="/symbiosis/greenhouse-gases" />
                  <AnimatedLink text={ t("common.greenEnergyLowCarbonPlan")} url="/symbiosis/green-energy" />
                </div>
                <div className="mega_menu_item">
                  <h3>{ t("common.energyAndWasteManagement")}</h3>
                  <AnimatedLink text={ t("common.energyManagement")} url="/symbiosis/energy-management" />
                  <AnimatedLink text={ t("common.wasteManagement")}url="/symbiosis/waste-management" />
                  <AnimatedLink text={ t("common.waterResourceManagement")} url="/symbiosis/water-management" />
                </div>
                </div>
              </div>
            </li>





            {getLanguageOptions()}

              <li className="!ml-4 !mr-4 relative group">
                <button className="!py-2 !px-5 !rounded-full text-[14px] duration-300 bg-orange text-white !text-white relative z-30">
                  永續報告書下載
                </button>
                <div className="absolute w-[80%] right-0 h-full top-0 flex items-center justify-end rounded-full border-[1px] duration-300 border-orange group-hover:translate-x-1/3 z-20">
                  <FontAwesomeIcon
                    icon={faCloudArrowDown}
                    className="text-orange pr-3"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
