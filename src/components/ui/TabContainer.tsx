import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GoalWrapperProps {
  goal: string;
  children: React.ReactNode;
}
interface GoalTableProps {
  goals: string[];
  children: React.ReactNode;
}

const GoalWrapper: React.FC<GoalWrapperProps> = ({ goal, children }) => {
  return <div data-goal={goal}>{children}</div>;
};

const TabContainer: React.FC<GoalTableProps> = ({ goals, children }) => {
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);

  return (
    <div className="mt-[50px]">
      <div className="flex border-b-[2px] border-[#d9d9d9]">
        {goals.map((goal) => (
          <div
            key={goal}
            onClick={() => setSelectedGoal(goal)}
            className={`relative text-center px-6 font-semibold text-[18px] tracking-wide py-2 cursor-pointer group duration-300 ${
              selectedGoal === goal
                ? "text-orange"
                : "text-[#D9D9D9] hover:text-orange"
            }`}
          >
            <span className="relative z-10">{goal}</span>
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
        <AnimatePresence mode='wait'>
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

export default TabContainer;
