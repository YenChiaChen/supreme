import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface TextProps {
  text: string;
  subItems?: TextProps[];
  className?: string;
}

interface ListProps {
  items: TextProps[];
  listType?: "decimal" | "disc" | "none";
  className?: string;
  title? : string;
  color?: string;
}

interface InfoListProps {
  title?: string;
  content: string;
}

interface CollapseListProps {
  title: string;
  color?: string;
  content: TextProps[];
  icon?: any;
}

export const H1: React.FC<TextProps> = ({ text, className="text-[#555555]" }) => {
  return (
    <p className={`font-bold text-5xl tracking-wide mb-8 ${className}`}>
      {text}
    </p>
  );
};
export const H3: React.FC<TextProps> = ({ text, className="text-[#555555]" }) => {
  return (
    <p
      className={`font-semibold text-xl tracking-wide mt-24 mb-8 ${className}`}
    
    >
      {text}
    </p>
  );
};

export const H2: React.FC<TextProps> = ({ text, className="text-[#555555]" }) => {
  return (
    <p
      className={`text-center font-semibold mt-36 text-3xl tracking-wide mb-8 ${className}`}
    >
      {text}
    </p>
  );
};

export const P: React.FC<TextProps> = ({ text, className="text-[#555555]" }) => {
  return (
    <p
      className={`whitespace-pre-wrap mt-8 tracking-wide text-md leading-8 ${className}`}
    >
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export const Desc: React.FC<TextProps> = ({ text, className="" }) => {
  return (
    <p
      className={`whitespace-pre-wrap tracking-wide text-md  ${className}`}
    >
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export const Sup: React.FC<TextProps> = ({ text }) => {
  return (
    <p
      className="whitespace-pre-wrap text-right tracking-wide text-md leading-7 text-[#b3b3b3]"
    >
      {text}
    </p>
  );
};

export const List: React.FC<ListProps> = ({ items, listType = 'decimal', className, title = "", color = "" }) => {
  return (
    <div className={`mt-8  ${className || ''}`}>
      {title && (
        <h3 className={` font-semibold mb-4`} style={{ color: color || '#555555' }}>
          {title}
        </h3>
      )}
      <ul className={`tracking-wide text-md leading-8 space-y-2 list-${listType} list-outside pl-8 list-disc text-[#555555]`}>
        {items.map((item, index) => (
          <li key={index}>
            {item.text}
            {item.subItems && item.subItems.length > 0 && (
              <ul className={`ml-6 list-outside`}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    - &nbsp;{subItem.text}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const InfoList: React.FC<{ rows: InfoListProps[] }> = ({ rows }) => {
  return (
    <table className='border-t-[2px] border-light_gray w-full'>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className='border-b border-light_gray'>
            {row.title && (
              <td className='py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12'>
                {row.title}
              </td>
            )}
            <td className='py-8 text-[16px] text-[#555555] font-light'>
              {row.content}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export const CollapseList: React.FC<CollapseListProps> = ({ title, content, color='#555555', icon }) => {
  return (
      <div className='collapse collapse-arrow shadow p-4  bg-[#FFEDF2]'>
          <input type='checkbox' />
          <div className='collapse-title flex font-semibold items-center' style={{color: color}}>
              {icon && <FontAwesomeIcon icon={icon} className='mr-3 text-3xl text-pink' />} 
              <span className=''>{ title }</span>
          </div>
          <div className='collapse-content'>
              <List items={content} />
          </div>
      </div>


  )}

