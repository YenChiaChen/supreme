import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCloudArrowDown } from "@fortawesome/pro-solid-svg-icons";

interface ListItem {
  id: number;
  content: string;
  icon?: IconDefinition;
  title?: string;
  download?: string;
  iconSize?: string;
  iconColor?: string;
  titleColor?: string;
}

interface SlideUpListProps {
  items: ListItem[];
}

const AnimatedList: React.FC<SlideUpListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col border-t-[2px] border-b-[1px] border-gray-200 tracking-wide">
      {items.map((item, index) => (
        <SlideUpListItem key={item.id} item={item} delay={index * 0.2} />
      ))}
    </ul>
  );
};

interface SlideUpListItemProps {
  item: ListItem;
  delay: number;
}

const SlideUpListItem: React.FC<SlideUpListItemProps> = ({ item, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.li
      ref={ref}
      className="border-b-[1px] border-gray-200 py-8 flex items-center"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {item.icon && (
        <FontAwesomeIcon
          icon={item.icon}
          className="mr-4 w-[50px]"
          style={{ fontSize: item.iconSize || '1em', color: item.iconColor || 'inherit' }} 
        />
      )}
      {item.title ? (
        <div className="grid grid-cols-12 gap-12  items-center w-full font-medium" >
          <p className="col-span-2 text-[20px]" style={{color: item.titleColor}}>{item.title}</p>
          <p className="col-span-10 whitespace-pre-line leading-8 tracking-wide text-[#555555]">{item.content}</p>
        </div>
      ) : (
        <span className="flex-1 text-[16px] tracking-wider leading-[32px]">{item.content}</span>
      )}
      {item.download && (
        <a
          href={item.download}
          download
          target="_blank"
        >
         <FontAwesomeIcon icon={faCloudArrowDown} className="text-[34px] duration-300 hover:scale-[1.1] mr-2" style={{color: item.iconColor}} />
        </a>
      )}
    </motion.li>
  );
};

export default AnimatedList;
