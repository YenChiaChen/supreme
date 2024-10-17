import React from "react";
import { Container } from "./Container";
import { useEffect, useState } from "react";

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
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scaleValue = 1 + scrollPosition * 0.0002;

  return (
    <div className="relative w-full h-[40vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out"
        style={{
          transform: `scale(${scaleValue})`,
        }}
      />
      {/* Mask (Optional) */}
      {mask && <div className="absolute inset-0 bg-black opacity-50"></div>}
      
      {/* Content */}
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
