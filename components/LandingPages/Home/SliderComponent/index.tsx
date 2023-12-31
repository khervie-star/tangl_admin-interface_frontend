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
import Router from "next/router";
import TanglBackground from "./Images/tangl.png";

const SliderComponent = () => {
  const goToNewsPage = () => {
    Router.push("/News");
  };
  return (
    <SliderContainer>
      <Swiper
        effect={"coverflow"}
        // grabCursor={true}
        spaceBetween={
          typeof window !== "undefined" && window.innerWidth < 768 ? 0 : -500
        }
        rewind={true}
        centeredSlides={true}
        slidesPerView={
          typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
        }
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 8,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <SliderReportWrapper>
            <SliderImage src={TanglBackground.src} />
          </SliderReportWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderReportWrapper>
            <SliderReportBody>
              <SliderReportFloat>Report</SliderReportFloat>
              <SliderReportText>
                The Role of Blockchain Technology in the Investment Funds
                Industry
              </SliderReportText>
              {/* <SliderReportTinyText>
                Some tiny text to convey more information
              </SliderReportTinyText> */}
              <DownloadNow onClick={goToNewsPage}>
                Download Now
                <ArrowRightIcon />
              </DownloadNow>
            </SliderReportBody>
            <SliderReportImage width={100} height={100} src={ReportImg.src} />
          </SliderReportWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderReportWrapper>
            <SliderImage src={TanglBackground.src} />
          </SliderReportWrapper>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

export default SliderComponent;
