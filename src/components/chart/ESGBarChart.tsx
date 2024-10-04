import React from "react";
import { motion } from "framer-motion";
import { faCircleMinus, faCirclePlus } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ESGTopic {
  topic: string;
  positiveScore: number;
  negativeScore: number;
}

interface ESGBarChartProps {
  data: ESGTopic[];
}

const ESGBarChart: React.FC<ESGBarChartProps> = ({ data }) => {
  const maxScore = Math.max(
    ...data.map((item) => Math.max(item.positiveScore, item.negativeScore))
  );

  const scaleMax = Math.ceil(maxScore / 5) * 5;

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="w-2/5 flex justify-end">
            <motion.div
              className="bg-red-400 text-white text-left pl-4 rounded-l"
              initial={{ width: 0 }}
              animate={{ width: `${(item.negativeScore / scaleMax) * 100}%` }}
              transition={{ duration: 0.8 }}
            >
              {item.negativeScore}
            </motion.div>
          </div>

          <div className="w-1/5 text-center tracking-wide">{item.topic}</div>

          <div className="w-2/5 flex justify-start">
            <motion.div
              className="bg-blue text-white text-right pr-4 rounded-r"
              initial={{ width: 0 }}
              animate={{ width: `${(item.positiveScore / scaleMax) * 100}%` }}
              transition={{ duration: 0.8 }}
            >
              {item.positiveScore}
            </motion.div>
          </div>
        </div>
      ))}

      <div className="relative w-full mt-4 flex justify-between">
        <div className="w-2/5 flex justify-between">
          {Array.from({ length: scaleMax / 5 + 1 }, (_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="h-2 w-px bg-black" />
              <span>{(scaleMax - i * 5)}</span>
            </div>
          ))}
        </div>

        <div className="w-1/5" />

        <div className="w-2/5 flex justify-between">
          {Array.from({ length: scaleMax / 5 + 1 }, (_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="h-2 w-px bg-black" />
              <span>{i * 5}</span>
            </div>
          ))}
        </div>
      </div>

      
      <div className="relative w-full mt-24 flex">
        <div className="w-2/5 flex justify-start pt-6 items-center">
        <FontAwesomeIcon icon={faCircleMinus} className="mr-3 text-red-400" />負面衝擊顯著程度
        </div>

        <div className="w-1/5" />

        <div className="w-2/5 flex justify-end pt-6 items-center">
        <FontAwesomeIcon icon={faCirclePlus} className="mr-3 text-blue" />正面衝擊顯著程度 
        </div>
      </div>
    </div>
  );
};

export default ESGBarChart;
