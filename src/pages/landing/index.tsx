import { faAnglesDown, faBrush, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../../assets/img/testing/bg.png";
import cloud from "../../assets/img/testing/cloud.png";
import SupremeWhiteLogo from "../../assets/img/logo/supreme-white.png";
import classNames from "classnames";
import { Link } from "react-router-dom";
import earth from "../../assets/img/testing/earth.png"
import { faBlockBrickFire, faHouseChimneyHeart } from "@fortawesome/pro-solid-svg-icons";
const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-dark_blue h-[100vh] w-full">
        <div className="w-full flex container mx-auto px-[5%] pt-16 items-center">
          <div className="border-r-[1px] border-white pr-8"><img src={SupremeWhiteLogo} className="w-[180px]" /></div>
          <p className="pl-4 text-white tracking-widest">企業永續</p>
          <div className="justify-center flex grow">
          <p className=" text-white tracking-widest text-sm px-2 border-b-[2px] border-transparent py-3 duration-300 hover:border-orange cursor-pointer">點亮永續</p>
          <p className=" text-white tracking-widest text-sm px-2 border-b-[2px] border-transparent py-3 duration-300 hover:border-orange cursor-pointer">最新動態</p>
          <p className=" text-white tracking-widest text-sm px-2 border-b-[2px] border-transparent py-3 duration-300 hover:border-orange cursor-pointer">社會共榮</p>
          <p className=" text-white tracking-widest text-sm px-2 border-b-[2px] border-transparent py-3 duration-300 hover:border-orange cursor-pointer">幸福企業</p>
          <p className=" text-white tracking-widest text-sm px-2 border-b-[2px] border-transparent py-3 duration-300 hover:border-orange cursor-pointer">永續經營</p>
          <p className=" text-white tracking-widest text-sm px-2 border-b-[2px] border-transparent py-3 duration-300 hover:border-orange cursor-pointer">永續共生</p>
          </div>
          <div className="flex justify-end items-center gap-4">
          <p className=" text-white tracking-widest text-sm px-2 ">簡 | EN</p>
          <p className=" text-white tracking-widest text-sm px-2 bg-orange py-2 px-6 rounded-full">永續報告書下載</p>
          </div>
        </div>
        <div className="w-full h-[100vh] grid grid-cols-2 container mx-auto px-[5%]">
          <div className="flex justify-center text-white flex-col">
            <p className="text-5xl font-bold tracking-widest">永續至上</p>
            <p className="content mt-6">
              致力環境保護發展， 守護每位員工權益， 承諾給予社會正面價值。
            </p>
          </div>
          <div className="flex items-center justify-center "><img src={earth} className="w-[70%] floating" /></div>
          <div className="flex justify-center col-span-2"><FontAwesomeIcon icon={faAnglesDown} className="text-white h-[40px]" bounce /></div>
        </div>
      </div>
      <div className="container mx-auto px-[5%]">
        <p className="text-center text-3xl text-black tracking-[5px] font-semibold mt-xl">相信深耕  共展未來</p>
        <p className="text-center content mt-8"> 致力實現經濟、社會和環境之間的平衡，承諾在創造價值的同時兼顧永續發展，<br />為員工、合作夥伴、社區帶來正面的影響。</p>
        <div className="mt-24 grid grid-cols-3 gap-12">
          <div className="bg-[#BACFD4] rounded-[15px] px-10 pt-20 pb-8">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faEarthAmericas} className="text-white h-[150px]" />
              </div>
              <p className="text-black text-2xl font-semibold tracking-widest mt-12"> 環境保護</p>
              <p className="note mt-8"> 致力環境保護，承諾將積極減少溫室氣體排放、推動資源循環利用、減少廢棄物的產生，力求企業的永續發展及為環境保護盡一份力。</p>
           
          </div>
          <div className="bg-[#BACFD4] rounded-[15px] px-10 pt-20 pb-8">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faHouseChimneyHeart} className="text-white h-[150px]" />
              </div>
              <p className="text-black text-2xl font-semibold tracking-widest mt-12"> 員工至上</p>
              <p className="note mt-8"> 注重人權規範及員工權益，承諾創建一個對等、健康的工作環境，建立有效溝通管道，聆聽基層意見，並提供多元化培訓增進員工價值。</p>
           
          </div>
          <div className="bg-[#BACFD4] rounded-[15px] px-10 pt-20 pb-8">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faBlockBrickFire} className="text-white h-[150px]" />
              </div>
              <p className="text-black text-2xl font-semibold tracking-widest mt-12"> 風險管理</p>
              <p className="note mt-8"> 謹慎落實風險管理，靈活投資策略，確保績效提升，穩定公司營運根基。同時遵守商業行為有關法令，維護相關利害關係人權益。</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
