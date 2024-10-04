import React from "react";
import { Container } from "./Container";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  description?: string;
  mask?: boolean;
  center?: boolean;
  fixed?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  description,
  mask = true,
  center = true,
  fixed = true,
}) => {
  return (
    <div
      className="relative w-full h-[40vh] min-h-[500px] overflow-hidden bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {mask && <div className="absolute inset-0 bg-black opacity-50"></div>}
      <Container className="w-full h-full">
        <div
          className={`relative w-full h-full flex flex-col justify-center  ${
            center ? "items-center" : "items-start"
          }  text-white`}
        >
          <h1 className="text-5xl font-semibold mb-4 tracking-widest">
            {title}
          </h1>
          {description && (
            <p
              className={`text-lg font-light mt-4 text-center max-w-[1000px] tracking-wide leading-8 ${
                center ? "text-center" : "text-left"
              } `}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
