import React from "react";
import SupremeLogo from '../../assets/img/logo/supreme.png'
import { Link } from 'react-router-dom';

interface FooterLinkSectionProps {
  title: { name: string; url: string }
  links: { name: string; url: string }[];
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4 tracking-wider">
      <Link to={title.url} className="text-[16px] font-semibold mb-4">{title.name}</Link>
      {links.map((link, index) => (
        <Link key={index} to={link.url} className="text-[14px] font-light hover:text-orange">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  const sections = [
    {
      title: {name: '點亮永續', url: '/sustainability'},
      links: [
        { name: '永續績效', url: '/sustainability/performance' },
        { name: '董事長的話', url: '/sustainability/chairman-message' },
        { name: '永續發展藍圖', url: '/sustainability/blueprint' },
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
        { name: '人力資源分布', url: '/enterprise/hr-distribution' },
        { name: '員工薪酬福利與關懷', url: '/enterprise/employee-benefits' },
        { name: '員工權益保障', url: '/enterprise/employee-rights' },
        { name: '人才培育與留任', url: '/enterprise/talent-development' },
        { name: '職業安全衛生', url: '/enterprise/occupational-safety' },
        { name: '健康職場', url: '/enterprise/healthy-workplace' },
        { name: '人權政策', url: '/enterprise/human-rights-policy' },
      ],
    },
    {
      title: {name: '永續經營', url: '/sustainability'},
      links: [
        { name: '公司治理', url: '/sustainability/governance' },
        { name: '董事會', url: '/sustainability/board' },
        { name: '永續發展委員會', url: '/sustainability/committee' },
        { name: '利害關係人議合', url: '/sustainability/stakeholder-engagement' },
        { name: '誠信經營', url: '/sustainability/ethical-business' },
        { name: '舉報管道與機制', url: '/sustainability/whistleblowing' },
        { name: '風險管理', url: '/sustainability/risk-management' },
        { name: '顧客隱私', url: '/sustainability/customer-privacy' },
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
    <div className="mt-[300px] bg-blue rounded-t-[50px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 py-12">
        <div className="col-span-1 lg:col-span-2">
          <img src={SupremeLogo} alt='Supreme' className="w-[130px]" />
        </div>
        {sections.map((section, index) => (
          <FooterLinkSection key={index} title={section.title} links={section.links} />
        ))}
      </div>
    </div>
  );
};

export default Footer;