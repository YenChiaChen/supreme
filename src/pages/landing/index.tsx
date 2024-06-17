import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../../assets/img/testing/bg.png";
import cloud from "../../assets/img/testing/cloud.png";
import SupremeWhiteLogo from "../../assets/img/logo/supreme-white.png";
import classNames from "classnames";
import { Link } from "react-router-dom";
const LandingPage: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
            <div className="container  flex justify-between items-center px-8 fixed mt-8 left-1/2 transform -translate-x-1/2 z-50 transition-colors duration-300"
    >
      <div className="flex-shrink-0 text-white">
        <div className="flex gap-6 items-center">
          <a href="http://www.supreme.com.tw" target="_blank" rel="noreferrer">
            <img
              src={SupremeWhiteLogo }
              alt="Supreme"
            className="w-[160px]"
            />
          </a>
          <span className="border-l-[2px] border-l-wihte">&nbsp;</span>
          <Link
            to="/"
          >
            企業永續
          </Link>
        </div>
      </div>

      <div className="flex-grow text-center py-[20px] text-[16px] tracking-wider text-white ">
          <Link  to="/" className="px-5">點亮永續</Link>
          <Link  to="/" className="px-5">最新動態</Link>
          <Link  to="/" className="px-5">社會共榮</Link>
          <Link  to="/" className="px-5">幸福企業</Link>
          <Link  to="/" className="px-5">永續經營</Link>
          <Link  to="/" className="px-5">永續共生</Link>
      </div>

      <div className="flex-shrink-0 text-white">
        <div className="flex gap-6 items-center">
          <p className="text-[16px] font-light">簡&nbsp; |&nbsp; EN</p>
          <a
            href="/download"
            className="bg-orange px-5 rounded-full py-2"
          >
            
            永續報告書下載
          </a>
        </div>
      </div>
    </div>
      <div
        className="w-full h-[75vh] min-h-[750px]  bg-cover bg-bottom bg-fixed relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto h-full flex flex-col justify-end pb-[200px] px-8 text-[white]">
          <p className="text-[60px] font-semibold">永續至上</p>
          <p className="text-[18px] mt-4 font-light tracking-wider leading-8 max-w-[75%]">
            致力環境保護發展，守護每位員工權益， 承諾給予社會正面價值。
          </p>
        </div>

        <img
          src={cloud}
          className="w-full absolute bottom-0 left-0 scale-[1.3] translate-y-1/2"
        />
      </div>
      <div className="h-[2000px]"></div>
    </div>
  );
};

export default LandingPage;
