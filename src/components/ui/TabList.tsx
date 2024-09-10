import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Goal {
  title: string;
  description: string;
}

interface TabTableProps {
  goals: Record<string, Goal[]>;
  color?: string;
}

const TabList: React.FC<TabTableProps> = ({ goals, color='#FF8D50' }) => {
  const [selectedGoal, setSelectedGoal] = useState(Object.keys(goals)[0]);

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

  return (
    <div className="mt-[50px]">
      <div className="flex border-b-[2px] border-[#d9d9d9]">
        {Object.keys(goals).map((goal) => (
        <div
        key={goal}
        onClick={() => setSelectedGoal(goal)}
        className={`relative text-center px-6 font-semibold text-[18px] tracking-wide py-2 cursor-pointer group duration-300`}
        style={{
          color: selectedGoal === goal ? color : '#D9D9D9',
        }}
      >
        <span className="relative z-10">{goal}</span>
        <span
          className="absolute -bottom-[2px] left-0 w-full h-[2px] duration-300"
          style={{
            backgroundColor: selectedGoal === goal ? color : 'transparent',
          }}
        ></span>
      </div>
        ))}
      </div>
      <div className="mt-[50px] border-t-[2px] border-b-[2px] border-[#d9d9d9] tracking-wide">
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedGoal}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {goals[selectedGoal].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-12 items-center border-b-[1px] border-[#d9d9d9] py-8"
              >
                <p className="col-span-3 text-[20px]" style={{color: color}}>{item.title}</p>
                <p className="col-span-9 content">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabList;
