import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import {
  DownloadNow,
  SliderContainer,
  SliderImage,
  SliderReportBody,
  SliderReportFloat,
  SliderReportImage,
  SliderReportText,
  SliderReportTinyText,
  SliderReportWrapper,
} from "./styles";
import ReportImg from "./Images/Group.png";
import { ArrowRightIcon } from "../../Common/Icons";

const SliderComponent = () => {
  return (
    <SliderContainer>
      <Swiper
        effect={"coverflow"}
        // grabCursor={true}
        spaceBetween={-500}
        rewind={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: -1,
          stretch: 0,
          depth: 100,
          modifier: 8,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <SliderImage src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderReportWrapper>
            <SliderReportBody>
              <SliderReportFloat>Report</SliderReportFloat>
              <SliderReportText>
                The Role of Blockchain Technology in the Investment Funds
                Industry
              </SliderReportText>
              <SliderReportTinyText>
                Some tiny text to convey more information
              </SliderReportTinyText>
              <DownloadNow>
                Download Now
                <ArrowRightIcon />
              </DownloadNow>
            </SliderReportBody>
            <SliderReportImage src={ReportImg.src} />
          </SliderReportWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src="https://images.pexels.com/photos/6289030/pexels-photo-6289030.jpeg" />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

export default SliderComponent;