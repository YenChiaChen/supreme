import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const HeroBanner: React.FC<BannerProps> = ({ title, description, backgroundImage }) => {
  const formattedDescription = description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div
      className="w-full aspect-[12/6] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto h-full flex flex-col justify-end pb-[140px] px-8 text-white">
        <p className="text-[60px] font-semibold">{title}</p>
        <p className="text-[18px] mt-4 font-light tracking-wider leading-8">
          {formattedDescription}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
