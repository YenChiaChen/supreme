import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GoalWrapperProps {
  goal: string;
  children: React.ReactNode;
}
interface GoalTableProps {
  goals: string[];
  children: React.ReactNode;
  icons: React.ReactNode[];
}

const GoalWrapper: React.FC<GoalWrapperProps> = ({ goal, children }) => {
  return <div data-goal={goal}>{children}</div>;
};

const TabContainerIcon: React.FC<GoalTableProps> = ({ goals, children, icons }) => {
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);

  return (
    <div className="mt-[50px]">
      <div className="flex justify-between border-b-[2px] border-[#d9d9d9]">
        {goals.map((goal, index) => (
          <div
            key={goal}
            onClick={() => setSelectedGoal(goal)}
            className={`relative text-center w-full font-semibold text-[18px] tracking-wide py-2 cursor-pointer group duration-300 ${
              selectedGoal === goal
                ? "text-orange"
                : "text-[#D9D9D9] hover:text-orange"
            }`}
          >
            <span className="relative z-10 flex flex-col gap-4">
              {icons[index]}
              {goal}
            </span>
            <span
              className={`absolute -bottom-[2px] left-0 w-full h-[2px] duration-300 ${
                selectedGoal === goal
                  ? "bg-orange"
                  : "bg-transparent group-hover:bg-orange"
              }`}
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
