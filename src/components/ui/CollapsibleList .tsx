import React, { useState, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

type CollapsibleListItemProps = {
  title: ReactNode;
  children: ReactNode;
};

type CollapsibleListProps = {
  items: CollapsibleListItemProps[];
  colSpan?: string;
};

const CollapsibleList: React.FC<CollapsibleListProps> = ({ items, colSpan }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`grid grid-cols-${colSpan} gap-4 gap-x-24 border-t-[2px] border-gray mt-md`}>
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="py-8 flex justify-between border-b-[1px] border-gray cursor-pointer text-[18px]"
            onClick={() => toggleItem(index)}
          >
            <div className='flex items-center'>
              {item.title}
            </div>
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
                animate={{ maxHeight: 1000, opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default CollapsibleList;
