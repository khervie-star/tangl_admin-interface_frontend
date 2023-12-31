import styled from "styled-components";
import { device } from "../../../../Global";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon } from "../../Common/Icons";

export const SliderContainer = styled.section`
  margin: 5rem auto;
  max-width: 1440px;
  margin-bottom: 10rem;
  height: 400px;
  box-sizing: border-box;
  @media ${device.tablet} {
    margin: 1.5rem 1.5rem;
    height: 200px;
    margin-bottom: 4rem;
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 450px;
  /* object-fit: cover; */
  border-radius: 23.8667px;
  box-sizing: border-box;
  @media ${device.mobileL} {
    height: 200px;
  }
`;

export const SliderReportWrapper = styled.div`
  margin: 3.5rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  /* justify-content: center; */
  @media ${device.mobileL} {
    margin: 1.75rem;
  }
`;

export const SliderReportBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
`;

export const SliderReportImage = styled.img`
  width: 100%;
  margin-left: 2.5rem;
  margin-right: -3.5rem;
  height: 26.627rem;
  width: 23.063rem;
  @media ${device.tablet} {
    max-height: 10.625rem;
    max-width: 8.625rem;
    margin-right: -1rem;
  }
`;

export const SliderReportFloat = styled.span`
  background: #5ac179;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  font-feature-settings: "liga" off;
  color: #ffffff;
  box-sizing: content-box;
  @media ${device.mobileL} {
    font-size: 9px;
    line-height: 13px;
    padding: 0.2rem 0.5rem;
  }
  @media ${device.mobileM} {
    font-size: 8px;
    line-height: 12px;
    padding: 0.1rem 0.35rem;
  }
`;

export const SliderReportText = styled.p`
  margin: 1rem 0rem 0.35rem 0rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #ffffff;
  text-align: left;
  @media ${device.mobileL} {
    font-size: 13px;
    line-height: 15px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const SliderReportTinyText = styled.p`
  margin: 0.35rem 0rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  text-align: left;
  @media ${device.mobileL} {
    font-size: 8px;
    line-height: 12px;
  }
  @media ${device.mobileS} {
    font-size: 6px;
    line-height: 11px;
  }
`;

export const DownloadNow = styled.button`
  background: #011122;
  border: 1px solid #a0aaba;
  border-radius: 4px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.3rem;
  margin-top: 4.5rem;
  ${ArrowRightIcon} {
    margin-left: 0.625rem;
    @media ${device.mobileL} {
      margin-left: 0.35rem;
      font-size: 10px;
    }
  }
  @media ${device.mobileL} {
    font-size: 8px;
    line-height: 12px;
    padding: 0.3rem 0.7rem;
    margin-top: 0.75rem;
  }
  @media ${device.mobileL} {
    font-size: 7px;
    line-height: 11px;
    padding: 0.3rem 0.7rem;
    margin-top: 0.55rem;
  }
  @media ${device.mobileS} {
    font-size: 6px;
    line-height: 10px;
    padding: 0.2rem 0.5rem;
    margin-top: 0.40rem;
  }
`;
