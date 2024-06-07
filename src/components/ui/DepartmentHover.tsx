import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const DepartmentHover = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('董事會');

  const departments = [
    { name: '董事會', description: '本公司風險管理之最高決策單位，負責公司整體風險之最終責任。董事會應依整體營運策略及經營環境，核定整體之風險管理政策，持續監督風險管理機制之有效運作，充分掌握風險狀況，並確保擁有適足之資本以因應所涉風險。' },
    { name: '永續發展委員會', description: '永續發展委員會的描述内容。' },
    { name: '風險管控小組', description: '由財務、會計、資訊、倉儲中心、人力資源、風險管理、業務、公司治理小組暨股務及稽核室等部門共同組成，執行董事會核定之風險管理決策，並監督建立本公司風險管理機制之架構及質化與量化之管理標準。檢視依內部分層負責陳報之風險控管報告與處理風險管理相關議題，協調及促進跨組織之風險管控方案，決定及執行符合成本效益的風險控制方案，以提高風險管理透明度及改善風險控制作法。' },
    { name: '資安管理部門', description: '強化資訊安全管理，透過日常演練、滲透測試、資安檢測、弱點掃瞄，並宣導同仁提高資安意識等手段，以達到確保本公司資訊合法存取；如遭受外力入侵或事故發生時，能做迅速必要之應變處置，在最短時間內回復系統正常運作，以降低該事故可能帶來之損害。' },
    { name: '各業務部門', description: '因應內外部環境、法令調整進行風險管理制度之規劃與修正，各業務部門應明確辨識其所面臨之各項風險，並依規定執行必要之自評作業及風險管理作業，以利本公司將所涉風險控制於可承擔之範圍內。' },
    { name: '稽核室', description: '每年應執行風險控管作業，要求各部門出具自行評估報告，並據此擬訂稽核計劃，定期進行稽查並出具報告，適時提出改進建議予風險管理小組。' },
  ];

  return (
    <div className="grid grid-cols-2 gap-12 mt-24">
      <div className="flex flex-col items-center gap-2">
        {departments.slice(0, 3).map((dept, index) => (
            <>
          <div
            key={index}
            className="w-[100%] bg-orange col-span-3 rounded-xl text-white text-center py-4 px-6 cursor-pointer hover:scale-[1.05] duration-300"
            onMouseEnter={() => setSelectedDepartment(dept.name)}
          >
            {dept.name}
          </div>
            <FontAwesomeIcon icon={faSortDown} className="text-[24px] text-orange pb-[8px]" /></>
        ))}
        <div className="bg-orange/20 col-span-3 rounded-xl p-4 w-[100%] grid grid-cols-3 gap-4 text-orange text-center">
          {departments.slice(3).map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 cursor-pointer  hover:scale-[1.05] duration-300"
              onMouseEnter={() => setSelectedDepartment(dept.name)}
            >
              {dept.name}
            </div>
          ))}
        </div>
      </div>
      <div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedDepartment}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[18px] tracking-wide mb-4">{selectedDepartment}</p>
            <p className="content">
              {departments.find(dept => dept.name === selectedDepartment)?.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DepartmentHover;
