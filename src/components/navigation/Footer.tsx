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
      title: {name: '幸福企業', url: '/enterprise'},
      links: [
        { name: '友善職場', url: '/enterprise/occupational-safety' },
        { name: '員工政策', url: '/enterprise/welfare-care' },
        { name: '人才培育', url: '/enterprise/diverse-growth' },
        { name: '人力資源分佈', url: '/enterprise/hr-distribution' },
      ],
    },
    {
      title: {name: '永續經營', url: '/sustainability'},
      links: [
        { name: '經營者的話', url: '/sustainability/message-from-chairman' },
        { name: '功能性委員會', url: '/sustainability/sustainbility-committee' },
        { name: '利害關係人專區', url: '/sustainability/stakeholder-engagement' },
        { name: '科技風險', url: '/sustainability/risk-management' },
        { name: '永續供應鏈', url: '/sustainability/supply-chain' },
      ],
    },
    {
      title: {name: '永續共生', url: '/symbiosis'},
      links: [
        { name: '氣候變遷對策', url: '/symbiosis/climate-change' },
        { name: '溫室氣體＆行動方案', url: '/symbiosis/greenhouse-gases' },
        { name: '綠能低碳計畫', url: '/symbiosis/green-energy' },
        { name: '能源管理', url: '/symbiosis/energy-management' },
        { name: '廢棄物管理', url: '/symbiosis/waste-management' },
        { name: '水資源管理', url: '/symbiosis/water-management' },
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