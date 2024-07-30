import React from "react";

interface BannerProps {
  title: string;
  description: string;
  backgroundImage: string;
  center?: boolean;
  titleColor?: string;
  contentColor?: string;
}

const HeroBanner: React.FC<BannerProps> = ({
  title,
  description,
  backgroundImage,
  titleColor="#4C8591",
  contentColor="#555555",
  center = false,
}) => {
  const formattedDescription = description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div
      className="w-full h-[500px]  bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {center ? (
        <>
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center">
            <p className="text-[48px] text-[#4C8591]"   style={{ color: titleColor }}>{title}</p>
            <p className="text-[16px] mt-6 tracking-wider leading-8 max-w-[50%] font-light"  style={{ color: contentColor }}>
              {formattedDescription}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="container mx-auto h-full flex flex-col justify-end pb-[140px] px-8 text-[white]">
            <p className="text-[60px] font-semibold">{title}</p>
            <p className="text-[18px] mt-4 font-light tracking-wider leading-8 max-w-[75%]">
              {formattedDescription}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroBanner;
