import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface GoalTableProps {
  goals: string[];
  children: React.ReactNode;
  icons: React.ReactNode[];
  tabColor?: string;
}

const TabContainerIcon: React.FC<GoalTableProps> = ({ goals, children, icons,  tabColor = "#FF8D50" }) => {
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);

  return (
    <div className="mt-[50px]">
      <div className="flex justify-between border-b-[2px] border-[#d9d9d9]">
        {goals.map((goal, index) => (
          <div
            key={goal}
            onClick={() => setSelectedGoal(goal)}
            className={`relative text-center w-full font-semibold text-[18px] tracking-wide py-2 cursor-pointer group duration-300`}
               style={{
              color: selectedGoal === goal ? tabColor : '#D9D9D9',
            }}
          >
            <span className="relative z-10 flex flex-col gap-4">
              {icons[index]}
              {goal}
            </span>
            <span
              className={`absolute -bottom-[2px] left-0 w-full h-[2px] duration-300 `}
              style={{
                backgroundColor: selectedGoal === goal ? tabColor : 'transparent',
              }}
            ></span>
          </div>
        ))}
      </div>
      <div className="mt-[50px] tracking-wide">
        <AnimatePresence mode="wait">
          {React.Children.map(children, (child) =>
            React.isValidElement(child) &&
            child.props["data-goal"] === selectedGoal ? (
              <motion.div
                key={selectedGoal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {child}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabContainerIcon;



export const SideTabWithIcon: React.FC<GoalTableProps> = ({ goals, children, icons,  tabColor = "#FF8D50" }) => {
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);

  return (
    <div className="mt-[50px] flex gap-8">
      <div className="flex flex-col w-[25%] gap-4">
        {goals.map((goal, index) => (
          <div
            key={goal}
            onClick={() => setSelectedGoal(goal)}
            className={`relative w-full  tracking-wide py-2 cursor-pointer group duration-300  hover:bg-gray hover:-translate-x-2 p-2 rounded-xl `}
               style={{
              color: selectedGoal === goal ? tabColor : '#D9D9D9',
            }}
          >
            <span className="relative z-10 flex items-center gap-6">
              <div className=""> {icons[index]}</div>
              <p className="text-md">{goal}</p>
              <FontAwesomeIcon icon={faChevronRight} className="absolute right-0 top-1/2 -translate-y-1/2" style={{color:selectedGoal===goal?tabColor:'transparent'}} />
            </span> 
          </div>
        ))}
      </div>
      <div className="tracking-wide w-[75%]">
        <AnimatePresence mode="wait">
          {React.Children.map(children, (child) =>
            React.isValidElement(child) &&
            child.props["data-goal"] === selectedGoal ? (
              <motion.div
                key={selectedGoal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {child}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
