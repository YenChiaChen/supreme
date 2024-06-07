import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MaintainPage: React.FC = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center w-full text-center mx-auto bg-orange -mb-[400px]">
      <div className="flex flex-col items-center text-white gap-4">
        <FontAwesomeIcon icon={faBrush} className="text-4xl mb-4" />
        <p className="text-center w-full text-3xl tracking-wide">
          頁面維護中，稍後再來看看吧 !
        </p>
      </div>
    </div>
  );
};

export default MaintainPage;
