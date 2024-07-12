import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

type ListItem = {
  title: string;
  content: string;
};

type CollapsibleListProps = {
  items: ListItem[];
};

const CollapsibleList: React.FC<CollapsibleListProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t-[2px] border-gray mt-md">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="py-8 flex justify-between border-b-[1px] border-gray cursor-pointer text-[18px]"
            onClick={() => toggleItem(index)}
          >
            <div className='flex items-center'><FontAwesomeIcon icon={faCircle} className='text-[5px] mr-4 text-[#555555]' />{item.title}</div>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faChevronDown} className='text-2xl text-orange' />
            </motion.div>
          </div>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                className="py-4 px-8 content whitespace-pre-line"
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: 500, opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default CollapsibleList;
