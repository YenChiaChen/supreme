import BgImage from "../../assets/img/subPage/永續經營/永續發展委員會.jpg";
import HeroSection from "../../components/ui/HeroSection";
import { Container, Section } from "../../components/ui/Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownload, faDownload } from "@fortawesome/pro-solid-svg-icons";

const DownloadPage: React.FC = () => {

  return (
    <>
      <HeroSection backgroundImage={BgImage} title="下載專區" mask={true} center={false} />

      <Container className="mt-24 text-[#555555]">

        <Section>
         <p className="text-4xl tracking-wide">歷年報告書</p>
         <div className="grid grid-cols-2 gap-6 mt-md mb-48">
            <Link to="http://www.supreme.com.tw/File/ESG/2023ESG%E6%B0%B8%E7%BA%8C%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf" target="_blank" className="shadow-xl rounded-[2rem] p-8 cursor-pointer hover:bg-orange hover:text-white duration-300 flex justify-between items-center group hover:scale-[1.03]">
                <p className="text-xl">2023年永續報告書</p>
                <FontAwesomeIcon icon={faCloudDownload} className="text-3xl text-orange group-hover:text-white duration-300" />
            </Link>
            <Link to="http://www.supreme.com.tw/File/ESG/2022ESG%E6%B0%B8%E7%BA%8C%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf" target="_blank" className="shadow-xl rounded-[2rem] p-8 cursor-pointer hover:bg-orange hover:text-white duration-300 flex justify-between items-center group hover:scale-[1.03]">
                <p className="text-xl">2022年永續報告書</p>
                <FontAwesomeIcon icon={faCloudDownload} className="text-3xl text-orange group-hover:text-white duration-300" />
            </Link>
            <Link to="http://www.supreme.com.tw/File/ESG/2021ESG%E6%B0%B8%E7%BA%8C%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf" target="_blank" className="shadow-xl rounded-[2rem] p-8 cursor-pointer hover:bg-orange hover:text-white duration-300 flex justify-between items-center group hover:scale-[1.03]">
                <p className="text-xl">2021年永續報告書</p>
                <FontAwesomeIcon icon={faCloudDownload} className="text-3xl text-orange group-hover:text-white duration-300" />
            </Link>
         </div>
        </Section>
      </Container>
    </>
  );
};

export default DownloadPage;
