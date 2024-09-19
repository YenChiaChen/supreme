import { Container } from "../ui/Container";
import SupremeLogoImage from "../../assets/img/logo/supreme-white.png"
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Switcher: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="relative w-[70px]" onClick={handleToggle}>
      <div className="bg-white rounded-full h-[50px] w-[75px] bg-opacity-20  backdrop-filter shadow backdrop-blur-lg" ></div>

      <div
        className={`bg-white rounded-full hover:scale-105 h-[40px] w-[40px] flex items-center justify-center shadow-xl absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 cursor-pointer ${
          isToggled ? "translate-x-0" : "translate-x-[80%]"
        }`}
      >
        {isToggled ? "EN" : "繁"}
      </div>
    </div>
  );
};


const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const items = [
    { title: '點亮永續', content: '點亮永續的內容' },
    { title: '最新動態', content: '最新動態的內容' },
    { title: '社會共榮', content: '社會共榮的內容' },
    { title: '幸福企業', content: '幸福企業的內容' },
    { title: '永續經營', content: '永續經營的內容' },
    { title: '永續共生', content: '永續共生的內容' },
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <Container>
        <div className="flex justify-between items-center font-tc">
          <div className="flex justify-between text-white gap-6 items-center">
            <img src={SupremeLogoImage} className="w-[180px]" />
            <span>|</span>
            <p className="tracking-wide">永續至上</p>
          </div>

          <div className="relative"   onMouseLeave={() => setActiveItem(null)}>
            <div className="bg-white hover:shadow-xl duration-300 bg-opacity-20 overflow-hidden text-white rounded-full backdrop-filter shadow backdrop-blur-lg flex justify-between px-8 gap-8 tracking-wider">
              {items.map((item) => (
                <div
                  key={item.title}
                  onMouseEnter={() => setActiveItem(item.title)}
                  className={`hover:border-[#FF8D50] py-4 border-b-[2px] border-transparent duration-300 cursor-pointer`}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <AnimatePresence>
                <div className="py-2 w-full absolute bottom-0 translate-y-[100%]">&nbsp;</div>
              {items.map(
                (item) =>
                  activeItem === item.title && (
                    <motion.div
                      key={item.title}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      onMouseLeave={() => setActiveItem(null)}
                      className="absolute w-full mt-4 bg-white bg-opacity-20 h-[400px] rounded-xl backdrop-filter shadow backdrop-blur-lg "
                    >
                      <div className="p-8 text-white">{item.content}</div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          <Switcher />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;