import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BuildingImage from "../../assets/img/background/bg_building.png";
import { faCloudArrowDown } from "@fortawesome/pro-solid-svg-icons";
import NavBar from "../../components/nav/NavBar";
import { Container } from "../../components/ui/Container";
import { faEarthAmericas } from "@fortawesome/pro-light-svg-icons";

const LandingPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="relative w-full h-[85vh] overflow-hidden">
        {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={BuildingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

        <img
          src={BuildingImage}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tc tracking-wide">
            永續至上，共展未來
          </h1>

          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 text-md md:text-2xl font-en tracking-wide mt-4">
              Make the world better.
            </h1>
          </div>

          <div className="group hover:shadow-xl cursor-pointer font-tc flex text-lg tracking-wide items-center pl-5 py-2 pr-2 mt-8 bg-white bg-opacity-20 overflow-hidden text-white rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
            永續報告書下載
            <div className="ml-6 bg-white h-[40px] w-[40px] rounded-full flex items-center justify-center text-orange-400 duration-300 group-hover:ml-8 group-hover:bg-orange-400 group-hover:text-white">
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                className="transform transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
      </div>
      <Container className="-translate-y-1/2">
        <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-xl w-full flex flex-col p-8 justify-center items-start">
                <FontAwesomeIcon icon={faEarthAmericas} className="text-5xl  text-orange-400" />
                <p className="text-2xl font-tc mt-6">關心在地</p>
                <p className="font-tc mt-2">關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl w-full flex flex-col p-8 justify-center items-start">
                <FontAwesomeIcon icon={faEarthAmericas} className="text-5xl  text-orange-400" />
                <p className="text-2xl font-tc mt-6">關心在地</p>
                <p className="font-tc mt-2">關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl w-full flex flex-col p-8 justify-center items-start">
                <FontAwesomeIcon icon={faEarthAmericas} className="text-5xl  text-orange-400" />
                <p className="text-2xl font-tc mt-6">關心在地</p>
                <p className="font-tc mt-2">關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地關心在地</p>
            </div>
        </div>
      </Container>

      <div className="h-screen">HH</div>
    </>
  );
};

export default LandingPage;
