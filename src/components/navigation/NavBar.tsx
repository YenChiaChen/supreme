import React, { useEffect, useState } from "react";
import SupremeLogo from "../../assets/img/logo/supreme.png";
import SupremeWhiteLogo from "../../assets/img/logo/supreme-white.png";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./nav.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "container fixed top-12 left-1/2 -translate-x-1/2 shadow-xl z-50 rounded-full transition-colors duration-300 transform",
        {
          "bg-white text-black": !scrolled,
          "bg-orange text-white": scrolled,
        }
      )}
    >
      <div className="flex">
        <div className="items-center flex flex-1 pl-12">
          <div className="flex gap-6">
            <a
              href="http://www.supreme.com.tw"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={scrolled ? SupremeWhiteLogo : SupremeLogo}
                alt="Supreme"
                className={classNames("w-[160px]", {
                  "": !scrolled,
                  "pt-1": scrolled,
                })}
              />
            </a>
            <Link
              to="/"
              className={classNames("text-[18px] border-l-[1px] pl-4", {
                "border-black": !scrolled,
                "border-white": scrolled,
              })}
            >
              企業永續
            </Link>
          </div>
        </div>

        <div className="hidden xl:flex flex-3">
          <div className="nav-links">
            <ul>
              <li className="nav-link">
                <Link to="/esg">點亮永續</Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/esg/performance">永續績效</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/esg/chairman-message">社會共榮</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/esg/blueprint">特別報導</Link>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link">
                <Link to="/news">最新動態</Link>
              </li>
              <li className="nav-link">
                <Link to="/enterprise">幸福企業</Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/enterprise/hr-distribution">
                        人力資源分佈
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#" className="flex gap-4">
                        員工政策
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-orange"
                        />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <Link to="/enterprise/welfare-care">
                              福利措施與關懷
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/enterprise/rights-protection">
                              員工權益保障
                            </Link>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#" className="flex gap-4">
                      人才培育
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-orange"
                        />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <Link to="/enterprise/diverse-growth">
                            多元化成長
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/enterprise/performance-compensation">
                            績效檢核與薪酬
                            </Link>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#" className="flex gap-4">
                      友善職場
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-orange"
                        />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                          <Link to="/enterprise/occupational-safety">職業安全衛生</Link>
                          </li>
                          <li className="dropdown-link">
                          <Link to="/enterprise/healthy-workplace">健康職場</Link>
                          </li>
                          <li className="dropdown-link">
                          <Link to="/enterprise/human-rights-policy">人權政策</Link>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link">
                <Link to="/sustainability">永續經營</Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/sustainability/message-from-chairman">
                        經營者的話
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/sustainability/governance">公司治理</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/sustainability/ethical-management">誠信經營</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/sustainability/board">董事會</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#" className="flex gap-4">
                        功能性委員會
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-orange"
                        />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <Link to="/sustainability/sustainbility-committee">
                              永續發展委員會
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/sustainability/compensation-committee">
                              薪酬委員會
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/sustainability/audit-committee">
                              審計委員會
                            </Link>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#" className="flex gap-4">
                        利害關係人專區
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-orange"
                        />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <Link to="/sustainability/stakeholder-engagement">
                              利害關係人議合
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/sustainability/key-topics">
                              重大主題
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/sustainability/questionnaire">
                              利害關係人問卷
                            </Link>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#" className="flex gap-4">
                        科技風險
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-orange"
                        />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <Link to="/sustainability/risk-management">
                              風險管理
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/sustainability/information-security">
                              資訊安全管理
                            </Link>
                          </li>
                          {/* <li className="dropdown-link">
                            <Link to="/sustainability/customer-privacy">
                              顧客隱私保護
                            </Link>
                          </li> */}
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#" className="flex gap-4">
                        永續供應鏈
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-orange"
                        />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <Link to="/sustainability/supply-chain">
                              供應鏈管理
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/sustainability/product-customer-service">
                              產品與客戶服務
                            </Link>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>

              <li className="nav-link">
                <Link to="/symbiosis">永續共生</Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/symbiosis/climate-change">氣候變遷對策</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/symbiosis/greenhouse-gases">
                        溫室氣體 & 行動方案
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#" className="flex gap-4">
                        能源與廢棄物管理
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-orange"
                        />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <Link to="/symbiosis/energy-management">
                              能源管理
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/symbiosis/waste-management">
                              廢棄物管理
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link to="/symbiosis/water-management">
                              水資源管理
                            </Link>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/symbiosis/green-energy">綠能低碳計畫</Link>
                    </li>

                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex items-center pr-4 pl-8">
            <div className="flex gap-6 items-center">
              <p className="text-[16px] font-light">簡&nbsp; |&nbsp; EN</p>
              <a
                href="/download"
                className={classNames(
                  "py-2 px-5 rounded-full text-[14px] duration-300",
                  {
                    "bg-orange text-white hover:bg-[#ff5a00]": !scrolled,
                    "bg-white text-black hover:scale-[1.05]": scrolled,
                  }
                )}
              >
                永續報告書下載
              </a>
            </div>
          </div>
        </div>

        <div className="xl:hidden flex mr-4 py-4">
          <div className="hamburger" id="hamburger-1">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
