import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import AwardImage01 from '../../assets/img/awards/img_Charity16.jpg'
import AwardImage02 from '../../assets/img/awards/img_Charity15.jpg'
import AwardImage03 from '../../assets/img/awards/img_Charity14.jpg'
import AwardImage04 from '../../assets/img/awards/img_Charity13.jpg'
import AwardImage05 from '../../assets/img/awards/img_Charity12.png'
import AwardImage06 from '../../assets/img/awards/img_Charity11.png'
import AwardImage07 from '../../assets/img/awards/img_Charity10.png'
import AwardImage08 from '../../assets/img/awards/img_Charity09.png'
import AwardImage09 from '../../assets/img/awards/img_Charity08.jpg'
import AwardImage10 from '../../assets/img/awards/img_Charity07.png'
import AwardImage11 from '../../assets/img/awards/img_Charity06.png'
import AwardImage12 from '../../assets/img/awards/img_Charity03.jpg'
import AwardImage13 from '../../assets/img/awards/img_Charity02.jpg'
import AwardImage14 from '../../assets/img/awards/img_Charity01.jpg'

interface Award {
  image: string;
  description: string;
}

const awards: Award[] = [
  { image: AwardImage01, description: "Charity Award 16" },
  { image: AwardImage02, description: "Charity Award 15" },
  { image: AwardImage03, description: "Charity Award 14" },
  { image: AwardImage04, description: "Charity Award 13" },
  { image: AwardImage05, description: "Charity Award 12" },
  { image: AwardImage06, description: "Charity Award 11" },
  { image: AwardImage07, description: "Charity Award 10" },
  { image: AwardImage08, description: "Charity Award 09" },
  { image: AwardImage09, description: "Charity Award 08" },
  { image: AwardImage10, description: "Charity Award 07" },
  { image: AwardImage11, description: "Charity Award 06" },
  { image: AwardImage12, description: "捐贈三十五萬贊助「八八水災」受災兒童家庭" },
  { image: AwardImage13, description: "Charity Award 02" },
  { image: AwardImage14, description: "Charity Award 01" }
];

const PrizeSwiper: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <>
      <Swiper
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        centeredSlides={false}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper mb-24 cursor-grab"
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index} style={{ width: "300px" }}>
            <div
              className={`w-[300px] h-[200px] rounded-xl my-8 flex items-center justify-center duration-500 py-4 shadow-xl relative ${hoverIndex === index ? 'bg-orange' : 'bg-white'}`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {hoverIndex === index ? (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4">
                  {award.description}
                </div>
              ) : (
                <img src={award.image} alt={`Award ${index + 1}`} className="h-full w-auto object-cover" />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PrizeSwiper;
