import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronsRight } from '@fortawesome/pro-light-svg-icons';

interface CardProps {
  title: string;
  backgroundImage: string;
  url: string;
}

const LinkCard: React.FC<CardProps> = ({ title, backgroundImage, url }) => {
  return (
    <Link to={url} className="group">
      <div
        className="relative w-full aspect-square flex flex-col justify-center px-8 rounded-[2rem] duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-[#000000] bg-opacity-30 group-hover:bg-opacity-60 duration-500 rounded-[2rem]"></div>
        <p className="text-white font-bold text-5xl duration-500 z-10">
          {title}
        </p>
        <div className="w-[60%] h-[2px] bg-white my-8 group-hover:w-[80%] duration-500 z-10"></div>
        <p className="text-white text-xl group-hover:translate-x-[58%] duration-500 w-full z-10 flex items-center">
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

export default LinkCard;
