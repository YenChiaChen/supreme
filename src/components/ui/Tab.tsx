import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TabProps {
    years: string[]
    children: React.ReactNode
    tabColor?: string
    icons?: React.ReactNode[]
  }
  

export const YearTabContainer: React.FC<TabProps> = ({
  years,
  children,
  tabColor = "#FF8D50",
}) => {
  const [selectedGoal, setSelectedGoal] = useState(years[0]);

  return (
    <div className="mt-[50px]">
      <div className="flex border-b-[2px] border-[#d9d9d9]">
        {years.map((year) => (
          <div
            key={year}
            onClick={() => setSelectedGoal(year)}
            className={`relative text-center px-6 font-semibold text-[18px] tracking-wide py-2 cursor-pointer group duration-300`}
            style={{
              color: selectedGoal === year ? tabColor : "#D9D9D9",
            }}
          >
            <span className="relative z-10">{year}</span>
            <span
              className="absolute -bottom-[2px] left-0 w-full h-[2px] duration-300"
              style={{
                backgroundColor:
                  selectedGoal === year ? tabColor : "transparent",
              }}
            ></span>
          </div>
        ))}
      </div>
      <div className="tracking-wide">
        <AnimatePresence mode="wait">
          {React.Children.map(children, (child) =>
            React.isValidElement(child) &&
            child.props["data-year"] === selectedGoal ? (
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

export const IconTabContainer: React.FC<TabProps> = ({
  years,
  children,
  icons,
  tabColor = "#FF8D50",
}) => {
  const [selectedGoal, setSelectedGoal] = useState(years[0]);

  return (
    <div className="mt-[50px]">
      <div className="flex justify-between border-b-[2px] border-[#d9d9d9]">
        {years.map((year, index) => (
          <div
            key={year}
            onClick={() => setSelectedGoal(year)}
            className={`relative text-center w-full font-semibold text-[18px] tracking-wide py-2 cursor-pointer group duration-300 `}
            style={{
              color: selectedGoal === year ? tabColor : "#D9D9D9",
            }}
          >
            <span className="relative z-10 flex flex-col gap-4">
              {icons && icons[index] && <>{icons[index]}</>}
              {year}
            </span>
            <span
              className={`absolute -bottom-[2px] left-0 w-full h-[2px] duration-300 `}
              style={{
                backgroundColor:
                  selectedGoal === year ? tabColor : "transparent",
              }}
            ></span>
          </div>
        ))}
      </div>
      <div className="mt-[50px] tracking-wide">
        <AnimatePresence mode="wait">
          {React.Children.map(children, (child) =>
            React.isValidElement(child) &&
            child.props["data-year"] === selectedGoal ? (
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


interface Goal {
  description: string;
  highlight?: string;
}

interface TabTableProps {
  goals: Record<string, Goal[]>;
  color?: string;
}

export const ListTab: React.FC<TabTableProps> = ({ goals, color='#FF8D50' }) => {
  const [selectedGoal, setSelectedGoal] = useState(Object.keys(goals)[Object.keys(goals).length - 1]);


  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleGoalClick = (goal: string) => {
    if (goals[goal]) {
      setSelectedGoal(goal);
    }
  };

  return (
    <div className="mt-[50px]">
      <div className="flex border-b-[2px] border-[#d9d9d9]">
        {Object.keys(goals)
          .reverse()
          .map((goal) => (
            <div
              key={goal}
              onClick={() => handleGoalClick(goal)}
              className={`relative text-center px-6 font-semibold text-[18px] tracking-wide py-2 cursor-pointer group duration-300 `}
              style={{color: selectedGoal === goal ? color : '#d9d9d9'}}
            >
              <span className="relative z-10">{goal}</span>
              <span
                className={`absolute -bottom-[2px] left-0 w-full h-[2px] duration-300 `}
                
              style={{backgroundColor: selectedGoal === goal ? color : '#d9d9d9'}}
              ></span>
            </div>
          ))}
      </div>
      <div className="mt-[50px] border-t-[2px] border-b-[2px] border-[#d9d9d9] tracking-wide">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGoal}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {goals[selectedGoal] ? (
              goals[selectedGoal].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="grid grid-cols-12 items-center border-b-[1px] border-[#d9d9d9] py-4"
                >
                  {item.highlight ? (
                    <>
                      <p className="col-span-9 content">{item.description}</p>
                      <p className="col-span-3 text-right font-bold text-[24px]" style={{color: color}}>
                        {item.highlight}
                      </p>
                    </>
                  ) : (
                    <p className="col-span-12 content">{item.description}</p>
                  )}
                </motion.div>
              ))
            ) : (
              <p className="text-center py-8">無法找到相應的目標</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};


interface GoalTableProps {
  goals: string[];
  children: React.ReactNode;
  icons: React.ReactNode[];
  tabColor?: string;
}


export const SideTabWithIcon: React.FC<GoalTableProps> = ({ goals, children, icons,  tabColor = "#FF8D50" }) => {
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);

  return (
    <div className="mt-[50px] flex gap-8">
      <div className="flex flex-col w-[25%] gap-4">
        {goals.map((goal, index) => (
          <div
            key={goal}
            onClick={() => setSelectedGoal(goal)}
            className={`relative w-full  tracking-wide py-2 cursor-pointer group duration-300  hover:bg-gray-100 hover:-translate-x-2 p-2 rounded-xl `}
               style={{
              color: selectedGoal === goal ? tabColor : '#D9D9D9',
            }}
          >
            <span className="relative z-10 flex items-center gap-6">
              <div className="min-w-[55px] items-center justify-center flex"> {icons[index]}</div>
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

