import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faFaceSmileHalo, faHeart, faLeaf, faPeopleCarry } from "@fortawesome/sharp-thin-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import BgImage from "../../assets/img/bg/building.png";

interface ListItem {
  id: number;
  title: string;
  content: string;
  image: string;
  icon?: IconDefinition; // 新增 icon 屬性
}

const items: ListItem[] = [
  {
    id: 1,
    title: "幸福企業",
    content:
      "尊重勞工權益並遵守勞動法規，提供公平的薪資、福利、職業安全和健康環境等。同時確保每一位員工均有平等的工作機會。",
    image: BgImage,
    icon: faFaceSmileHalo,  // 設定 icon
  },
  {
    id: 2,
    title: "永續經營",
    content:
      "創造安全的工作環境，並提供適當的健康與安全教育，確保員工健康。",
    image: BgImage,
    icon: faBuilding, 
  },
  {
    id: 3,
    title: "永續共生",
    content: "推動綠色製程，減少排放，提升能源效率。",
    image: BgImage,
    icon: faLeaf,  // 設定另一個 icon
  },
  {
    id: 4,
    title: "社會共榮",
    content: "推動綠色製程，減少排放，提升能源效率。",
    image: BgImage,
    icon: faPeopleCarry,  // 設定另一個 icon
  },
  // 其他項目...
];

const TopicHighlightsSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(items[0].id); // 預設選擇第一個項目

  const handleClick = (id: number) => {
    if (selectedItem !== id) {
      setSelectedItem(id); // 更新選擇的項目
    }
  };

  return (
    <section className="my-36">
      <div className="grid grid-cols-2">
        {/* 圖片部分 */}
        <motion.img
          key={selectedItem}
          src={items.find(item => item.id === selectedItem)?.image || "default.jpg"} // 根據選擇的項目更換圖片
          alt="Temp Image"
          className="-ml-12 h-full rounded-r-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* 列表部分 */}
        <div className="pr-[10%]">
          <div className="flex flex-col">
            <p className="font-bold text-2xl text-dark_blue gap-1">關注議題</p>
            <p className="text-[#555555] font-light tracking-wide">focus</p>
          </div>

          <div className="mt-8">
            {items.map((item) => (
              <motion.div
                key={item.id}
                className={`flex border-l-[3px] px-12 py-6 cursor-pointer hover:bg-gray duration-300 rounded-r-xl ${
                  selectedItem === item.id
                    ? "border-orange"
                    : "border-gray"
                }`}
                onClick={() => handleClick(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon
                  icon={item.icon || faFaceSmileHalo} // 使用傳入的 icon，沒有則使用預設 icon
                  className={`w-[30px] h-[30px] ${
                    selectedItem === item.id ? "text-orange" : "text-light_gray"
                  }`}
                />
                <div className="ml-8 text-[#555555]" >
                  <p className={`text-lg font-semibold ${
                    selectedItem === item.id ? "text-[#555555]" : "text-light_gray"
                  }`}>{item.title}</p>
                  {selectedItem === item.id && (
                    <motion.p
                      className="mt-4 font-light"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.content}
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
