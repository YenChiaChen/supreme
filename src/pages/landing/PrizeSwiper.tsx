import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";

const PrizeSwiper: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        loop={true}
        spaceBetween={20}
        centeredSlides={false} 
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index} style={{ width: "300px" }}>
            {/* 設定寬度讓 Swiper 可以自動調整 */}
            <div className="w-[300px] shadow-xl bg-white rounded-xl h-[200px] my-8 flex items-center justify-center duration-500 hover:bg-orange">
              <p className="bg-gray p-12 shadow-md">獎狀 {index + 1}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PrizeSwiper;
