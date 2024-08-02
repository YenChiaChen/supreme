import "./mega.css"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCloudArrowDown, faEarthAmericas } from "@fortawesome/pro-solid-svg-icons";
import SupremeLogo from "../../assets/img/logo/supreme.png";
import { Link } from "react-router-dom";

interface LinkProps {
  text: string;
  url: string;
}

const AnimatedLink: React.FC<LinkProps> = ({ text, url }) => {
  return (
    <Link
      to={url}
      className="relative inline-flex items-center group w-fit !text-sm"
    >
      {text}
      <span className="absolute text-dark_blue -right-[20px] opacity-0 transform translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
    </Link>
  );
};


export function NavMega() {

  return (
    <>    
    <nav className="fixed w-full left-0 top-0  z-[99] bg-white shadow-lg">
        <div className="container mx-auto">
      <div className="row px-10">
        <div className="logo flex items-center">
          <a href="#">
            <img src={SupremeLogo} className="w-[160px]" />
          </a>
          <div className="mx-4 text-light_gray w-[2px] bg-light_gray h-[30px]"></div>
          <p className="text-[18px]">企業永續</p>
        </div>
        <div className="mobile_btn">
          <i className="fas fa-bars"></i>
        </div>
        <div className="main_menu">
          <ul>
            {/* <li className="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
              <Link to="/enterprise">點亮永續<i className="fas fa-angle-down"></i></Link>
              <div className="mega_menu w-fit">
                <div className="grid grid-cols-3 gap-x-6">
                
                <div className="mega_menu_item">
                  <h3 className="text-lg">點亮永續</h3>
                  <AnimatedLink text="永續績效" url="esg/performance" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="text-lg">&nbsp;</h3>
                  <AnimatedLink text="社會共榮" url="/esg/chairman-message" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="text-lg"></h3>
                  <AnimatedLink text="特別報導" url="/esg/blueprint" />
                </div>
                </div>
              </div>
            </li>
            
          <li className="has_dropdown group">
            <a href="#" className="!pr-[30px]">點亮永續 <FontAwesomeIcon icon={faChevronDown} className="text-orange  duration-300 group-hover:rotate-180 absolute right-[13px] top-1/2 -translate-y-1/2"   /></a>
            <ul className="sub_menu">
              <li className="has_dropdown"><a href="#">永續績效</a>
                <ul className="sub_menu">
                  <li><a href="#">Page 2.1</a></li>
                  <li><a href="#">Page 2.2</a></li>
                  <li><a href="#">Page 2.4</a></li>
                </ul>
              </li>
              <li><a href="#">社會共榮</a></li>
              <li><a href="#">特別報導</a></li>
            </ul>
          </li>
            <li><Link to="/news">最新動態</Link></li> */}

    <li className="has_dropdown group">
            <a href="#" className="!pr-[30px]">幸福企業 <FontAwesomeIcon icon={faChevronDown} className="text-orange  duration-300 group-hover:rotate-180 absolute right-[13px] top-1/2 -translate-y-1/2"   /></a>
            <ul className="sub_menu">
            <li><a href="#">人力資源分布</a></li>
              <li className="has_dropdown"><a href="#">友善職場</a>
                <ul className="sub_menu">
                  <li><a href="#">職業安全衛生</a></li>
                  <li><a href="#">健康職場</a></li>
                  <li><a href="#">人權政策</a></li>
                </ul>
              </li>
             
              <li><a href="#">特別報導</a></li>
            </ul>
          </li>
            <li><Link to="/news">最新動態</Link></li>

            <li className="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
              <Link to="/enterprise">幸福企業<i className="fas fa-angle-down"></i></Link>
              <div className="mega_menu sub_menu px-6 shadow-lg flex justify-center w-fit rounded-b-xl">
                <div className="grid grid-cols-4 gap-6">
                <div className="mega_menu_item">
                  <h3 className="">友善職場</h3>
                  <AnimatedLink text="職業安全衛生" url="/enterprise/occupational-safety" />
                  <AnimatedLink text="健康職場" url="/enterprise/healthy-workplace" />
                  <AnimatedLink text="人權政策" url="/enterprise/human-rights-policy" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="text-lg">員工政策</h3>
                  <AnimatedLink text="福利措施與關懷" url="/enterprise/welfare-care" />
                  <AnimatedLink text="員工權益保障" url="/enterprise/rights-protection" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="text-lg">人才培育</h3>
                  <AnimatedLink text="多元化成長" url="/enterprise/diverse-growth" />
                  <AnimatedLink text="績效檢核與薪酬" url="/enterprise/performance-compensation" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="text-lg">幸福企業</h3>
                  <AnimatedLink text="人力資源分布" url="/enterprise/hr-distribution" />
                </div>
                </div>
              </div>
            </li>
            <li className="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
              <Link to="/sustainability">永續經營<i className="fas fa-angle-down"></i></Link>
              <div className="mega_menu sub_menu px-6 shadow-lg flex justify-center w-fit rounded-b-xl">
                <div className="grid grid-cols-5">
                <div className="mega_menu_item">
                  <h3>永續經營</h3>
                  <AnimatedLink text="經營者的話" url="/sustainability/message-from-chairman" />
                  <AnimatedLink text="公司治理" url="/sustainability/governance" />
                  <AnimatedLink text="誠信經營" url="/sustainability/ethical-management" />
                  <AnimatedLink text="董事會" url="/sustainability/board" />
                </div>
                <div className="mega_menu_item">
                  <h3>功能性委員會</h3>
                  <AnimatedLink text="永續發展委員會" url="/sustainability/sustainbility-committee" />
                  <AnimatedLink text="薪酬委員會" url="/sustainability/compensation-committee" />
                  <AnimatedLink text="審計委員會" url="/sustainability/audit-committee" />
                </div>
                <div className="mega_menu_item">
                  <h3 className="">利害關係人專區</h3>
                  <AnimatedLink text="利害關係人議合" url="/sustainability/stakeholder-engagement" />
                  <AnimatedLink text="重大主題" url="/sustainability/key-topics" />
                  <AnimatedLink text="利害關係人問卷" url="/sustainability/questionnaire" />
                </div>
                <div className="mega_menu_item">
                  <h3>科技風險</h3>
                  <AnimatedLink text="風險管理" url="/sustainability/risk-management" />
                  <AnimatedLink text="資訊安全管理" url="/sustainability/information-security" />
                </div>
                <div className="mega_menu_item">
                  <h3>永續供應鏈</h3>
                  <AnimatedLink text="供應鏈管理" url="/sustainability/supply-chain" />
                  <AnimatedLink text="產品與客戶服務" url="/sustainability/product-customer-service" />
                </div>
                </div>
              </div>
            </li>
            <li className="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
              <Link to="/symbiosis">永續共生<i className="fas fa-angle-down"></i></Link>
           <div className="mega_menu sub_menu px-6 shadow-lg flex justify-center  rounded-b-xl">
                <div className="grid grid-cols-2">
                <div className="mega_menu_item">
                  <h3>永續共生</h3>
                  <AnimatedLink text="氣候變遷對策" url="/symbiosis/climate-change" />
                  <AnimatedLink text="溫室氣體 & 行動方案" url="/symbiosis/greenhouse-gases" />
                  <AnimatedLink text="綠能低碳計畫" url="/symbiosis/green-energy" />
                </div>
                <div className="mega_menu_item">
                  <h3>能源與廢棄物管理</h3>
                  <AnimatedLink text="能源管理" url="/symbiosis/energy-management" />
                  <AnimatedLink text="廢棄物管理" url="/symbiosis/waste-management" />
                  <AnimatedLink text="水資源管理" url="/symbiosis/water-management" />
                </div>
                </div>
              </div>
            </li>

            
            <li className="has_dropdown !ml-12 "><a href="#"><FontAwesomeIcon icon={faEarthAmericas} className="text-[20px] text-[#999999]" /><i className="fas fa-angle-down"></i></a>
              <ul className="sub_menu ">
                <li><a href="#">繁體中文</a></li>
                <li><a href="#">简体中文</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </li>



            <li  className="!ml-4 !mr-4 relative group">
              <button
                className=
                  "!py-2 !px-5 !rounded-full text-[14px] duration-300 bg-orange text-white !text-white relative z-30">
                永續報告書下載
              </button>
              <div className="absolute w-[80%] right-0 h-full top-0 flex items-center justify-end rounded-full border-[1px] duration-300 border-orange group-hover:translate-x-1/3 z-20"><FontAwesomeIcon icon={faCloudArrowDown} className="text-orange pr-3" /></div>

            </li>



  
          </ul>
        </div>
      </div>
        </div>
     </nav>
  </>
  );
}
