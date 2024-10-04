import React from "react";
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

const PrizeSwiper: React.FC = () => {
  const awardImages = [
    AwardImage01, AwardImage02, AwardImage03, AwardImage04, AwardImage05, AwardImage06, 
    AwardImage07, AwardImage08, AwardImage09, AwardImage10, AwardImage11, AwardImage12, 
    AwardImage13, AwardImage14
  ];

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
        {awardImages.map((image, index) => (
          <SwiperSlide key={index} style={{ width: "300px" }}>
            <div className="w-[300px] shadow-xl bg-white h-[200px] my-8 flex items-center justify-center duration-500  py-4">
              <img src={image} alt={`Award ${index + 1}`} className="h-full w-auto object-cover " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PrizeSwiper;