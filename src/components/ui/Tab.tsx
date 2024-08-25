import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabProps } from "../type";

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
