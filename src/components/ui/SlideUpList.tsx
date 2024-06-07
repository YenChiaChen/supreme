import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

interface ListItem {
  id: number;
  content: string;
  icon?: IconDefinition;
  title?: string;
  download?: string;
  iconSize?: string;
  iconColor?: string;
}

interface SlideUpListProps {
  items: ListItem[];
}

const SlideUpList: React.FC<SlideUpListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col border-t-[2px] border-b-[1px] border-light_gray text-dark font-light text-[18px]">
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
  const isInView = useInView(ref, { once: false });

  return (
    <motion.li
      ref={ref}
      className="border-b-[1px] border-light_gray py-8 flex items-center"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {item.icon && (
        <FontAwesomeIcon
          icon={item.icon}
          className="mr-4"
          style={{ fontSize: item.iconSize || '1em', color: item.iconColor || 'inherit' }} 
        />
      )}
      {item.title ? (
        <div className="grid grid-cols-12  items-center w-full font-medium">
          <p className="col-span-4 text-[20px]">{item.title}</p>
          <p className="col-span-8 notes">{item.content}</p>
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
         <FontAwesomeIcon icon={faCloudArrowDown} className="text-[34px] text-orange duration-300 hover:scale-[1.1] mr-2" />
        </a>
      )}
    </motion.li>
  );
};

export default SlideUpList;
