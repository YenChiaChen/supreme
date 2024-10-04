import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronsRight } from "@fortawesome/pro-light-svg-icons";

import { useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CardProps {
  title: string;
  backgroundImage: string;
  url: string;
}

export const LinkCard: React.FC<CardProps> = ({
  title,
  backgroundImage,
  url,
}) => {
  return (
    <Link to={url} className="group">
      <div
        className="relative w-[300px] aspect-square flex flex-col justify-center px-8 rounded-[2rem] duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-[#000000] bg-opacity-30 group-hover:bg-opacity-60 duration-500 rounded-[2rem]"></div>
        <p className="text-white font-bold text-lg group-hover:text-2xl duration-500 z-10">
          {title}
        </p>
        <div className="w-[60%] h-[2px] bg-white my-4 group-hover:w-[80%] duration-500 z-10"></div>
        <p className="text-white text-md group-hover:translate-x-[58%] duration-500 w-full z-10 flex items-center">
          More
          <span>
            <FontAwesomeIcon
              className="ml-2 hidden group-hover:block delay-500"
              icon={faChevronsRight}
              beatFade
            />
          </span>
        </p>
      </div>
    </Link>
  );
};

interface CardData {
  title: string;
  description: string;
  icon: IconDefinition;
}

interface HoverCardProps {
  data: CardData;
  width?: string;
  color?: string;
}

export const HoverCard: React.FC<HoverCardProps> = ({
  data,
  width = "33%",
  color = "#FF8D50",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-gray-100 rounded-xl duration-300 flex items-center justify-center group relative min-h-[450px] hover:shadow-xl ${
        isHovered ? "w-[500px]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: isHovered ? "500px" : width,
        backgroundColor: isHovered ? color : "",
      }}
    >
      {/* 初始内容 */}
      <div className="flex flex-col gap-4 w-full items-center group-hover:hidden">
        <FontAwesomeIcon
          icon={data.icon}
          className="h-[50px]"
          style={{ color: color }}
        />
        <p className="text-[18px] mt-4 tracking-wide">{data.title}</p>
      </div>

      <div
        className={`absolute inset-0 flex px-10 mt-24 text-white opacity-0 group-hover:opacity-100 transition-none duration-500 delay-300 group-hover:delay-300 group-hover:duration-300 group-hover:transition-opacity`}
      >
        <div className="text-left">
          <FontAwesomeIcon icon={data.icon} className="h-[50px] mb-6" />
          <p className="text-[32px] font-semibold tracking-wider mb-4">
            {data.title}
          </p>
          <hr />
          <p className="text-[15px] font-light tracking-wide mt-6 whitespace-pre-line">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};
