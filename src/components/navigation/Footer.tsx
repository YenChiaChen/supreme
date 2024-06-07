import React from "react";
import SupremeLogo from '../../assets/img/logo/supreme-white.png'
import { Link } from 'react-router-dom';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const sections = [
    {
      title: {name: '點亮永續', url: '/esg'},
      links: [
        { name: '永續績效', url: '/esg/performance' },
        { name: '董事長的話', url: '/esg/chairman-message' },
        { name: '永續發展藍圖', url: '/esg/blueprint' },
      ],
    },
    {
      title: {name: '社會共榮', url: '/society'},
      links: [
        { name: '社會共榮政策', url: '/society/policy' },
        { name: '教育文化', url: '/society/education-culture' },
        { name: '體育活動', url: '/society/sports-activities' },
      ],
    },
    {
      title: {name: '幸福企業', url: '/enterprise'},
      links: [
        { name: '人才培育', url: '/enterprise/talent-development' },
        { name: '職業安全衛生政策', url: '/enterprise/occupational-safety' },
        { name: '健康職場', url: '/enterprise/healthy-workplace' },
        { name: '人權政策', url: '/enterprise/human-rights-policy' },
      ],
    },
    {
      title: {name: '永續經營', url: '/sustainability'},
      links: [
        { name: '公司治理', url: '/sustainability/governance' },
        { name: '公司治理架構', url: '/sustainability/governance-structure' },
        { name: '智慧財產管理', url: '/sustainability/intellectual-property' },
        { name: '風險管理', url: '/sustainability/risk-management' },
        { name: '資訊安全管理', url: '/sustainability/information-security' },
        { name: '供應鏈管理', url: '/sustainability/supply-chain' },
      ],
    },
    {
      title: {name: '永續共生', url: '/symbiosis'},
      links: [
        { name: '氣候變遷對策', url: '/symbiosis/climate-change' },
        { name: '溫室氣體＆行動方案', url: '/symbiosis/greenhouse-gases' },
        { name: '環境保護', url: '/symbiosis/environmental-protection' },
        { name: '能源管理', url: '/symbiosis/energy-management' },
        { name: '廢棄物管理', url: '/symbiosis/waste-management' },
        { name: '產品與客戶服務', url: '/symbiosis/product-customer-service' },
        { name: '綠色能源', url: '/symbiosis/green-energy' },
      ],
    },
  ];

  return (
    <div className="mt-[300px] bg-dark_blue rounded-t-[50px]">
      <div className="container pl-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 py-12 text-white">
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5 justify-between">
          <img src={SupremeLogo} alt='Supreme' className="w-[250px]" />
          <a href='http://www.supreme.com.tw' className="bg-orange w-fit px-6 py-2 tracking-wide rounded-full hover:scale-[1.05] duration-300" target="_blank" rel="noreferrer">至上電子官方網頁<FontAwesomeIcon icon={faArrowRight} className="ml-4" /></a>
        </div>
        {sections.map((section, index) => (
          <FooterLinkSection key={index} title={section.title} links={section.links} />
        ))}
      </div>
    </div>
  );
};

export default Footer;