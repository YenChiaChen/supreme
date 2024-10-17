import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faFaceSmileHalo, faHeart, faLeaf, faPeopleCarry } from "@fortawesome/sharp-thin-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import focusCardImage01 from '../../assets/img/background/focusCard_01.jpg'
import focusCardImage02 from '../../assets/img/background/focusCard_02.jpg'
import focusCardImage03 from '../../assets/img/background/focusCard_03.jpg'
import focusCardImage04 from '../../assets/img/background/focusCard_04.jpg'
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import { Link } from "react-router-dom";

interface ListItem {
  id: number;
  title: string;
  content: string;
  image: string;
  icon?: IconDefinition;
  url: string;
}

const items: ListItem[] = [
  {
    id: 1,
    title: "幸福企業",
    content:
      "尊重勞工權益並遵守勞動法規，提供公平的薪資、福利、職業安全和健康環境等。同時確保每一位員工均有平等的工作機會。",
    image: focusCardImage01,
    icon: faFaceSmileHalo,
    url: "/enterprise"
  },
  {
    id: 2,
    title: "永續經營",
    content:
      "企業應平衡經濟、環境與社會三大面向，推動永續發展戰略。通過創新和資源管理，減少碳排放與能源消耗，優化供應鏈，以達到長期的經濟利益和社會責任。在保護環境的同時，提升企業的競爭力與價值，為未來創造更多的機會與效益。",
    image: focusCardImage02,
    icon: faBuilding, 
    url: "/sustainability"
  },
  {
    id: 3,
    title: "永續共生",
    content: "企業與環境及社會和諧共存，建立共生關係。這意味著企業不僅要追求自身的成長與成功，還要積極參與生態保護，推動生物多樣性和環境友善的經營方式。與社區、供應商和合作夥伴共同發展，創造互惠互利的關係，實現全方位的可持續性。",
    image: focusCardImage03,
    icon: faLeaf, 
    url: "/symbiosis"
  },
  {
    id: 4,
    title: "社會共榮",
    content: "企業在追求經濟發展的同時，應積極回饋社會，推動公平、包容的社會體系。透過公益活動、志工服務及資源共享，促進社會的共同繁榮，縮小貧富差距，支持弱勢群體，並提升整體社會的幸福感。企業與社會相互支持，共同邁向繁榮的未來。",
    image: focusCardImage04,
    icon: faPeopleCarry,
    url: "/society"
  },
];

const TopicHighlightsSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(items[0].id); // 預設選擇第一個項目

  const handleClick = (id: number) => {
    if (selectedItem !== id) {
      setSelectedItem(id); 
    }
  };

  return (
<section className="my-36 ">
  <div className="grid grid-cols-2 ">
    {/* Preload all images */}
    <div className="relative -ml-12 h-[550px] w-full rounded-r-xl overflow-hidden">
      {items.map((item) => (
        <motion.img
          key={item.id}
          src={item.image || "default.jpg"}
          alt={item.title}
          className="absolute top-0 w-full h-full object-cover rounded-r-xl"
          initial={{ opacity: 0 }} // Preload with opacity 0
          animate={{
            opacity: selectedItem === item.id ? 1 : 0, // Show only the selected item
          }}
          transition={{ duration: 0.5 }} // Smooth transition
        />
      ))}
    </div>

    <div className="pr-[10%]">
      <div>
        <p className="text-3xl  font-semibold text-[#4C8591]">
          關注議題
        </p>
        <p className="text-gray-400 font-en mt-1 font-light">Focus</p>
      </div>

      <div className="mt-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`flex border-l-[3px] px-12 py-6 cursor-pointer duration-300 rounded-r-xl ${
              selectedItem === item.id
                ? "border-orange"
                : "border-gray hover:bg-gray-100"
            }`}
            onMouseEnter={() => handleClick(item.id)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon
              icon={item.icon || faFaceSmileHalo}
              className={`w-[40px] h-[40px] ${
                selectedItem === item.id ? "text-orange" : "text-light_gray"
              }`}
            />
            <div className="ml-8 text-[#555555]">
              <p
                className={`text-xl font-semibold ${
                  selectedItem === item.id
                    ? "text-[#555555]"
                    : "text-light_gray"
                }`}
              >
                {item.title}
              </p>
              {selectedItem === item.id && (
                <motion.p
                  className="mt-4 tracking-wide leading-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.content}
                  <div className="mt-8 flex justify-end">
                    <Link to={item.url}>
                  <div className="bg-orange text-white px-6 py-2  rounded-full flex items-center group cursor-pointer hover-shadow">
                  了解更多
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xl ml-2 group-hover:ml-4 duration-300"
                  />
                </div>
                </Link>
                  </div>
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default TopicHighlightsSection;
