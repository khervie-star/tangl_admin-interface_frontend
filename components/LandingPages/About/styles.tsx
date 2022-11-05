import styled from "styled-components";
import { device } from "../../../Global";
import { FlexWrap } from "../Home/Assets/Common";

export const AboutContainer = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  @media ${device.tablet} {
    ${FlexWrap} {
      flex: 100%;
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background: #011122;
  padding: 5rem;
  margin-top: 5em;
  box-sizing: border-box;
  @media ${device.tablet} {
    padding: 1.5rem;
  }
  h1 {
    @media ${device.mobileL} {
      font-size: 36px;
      line-height: 48px;
      letter-spacing: -0.6px;
    }
    max-width: 46.875rem;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 96px;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
    box-sizing: border-box;
  }
  p {
    @media ${device.mobileL} {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.6px;
    }
    max-width: 46.875rem;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #43566a;
    margin: 1rem auto 0rem auto;
    max-width: 37.5rem;
    @media ${device.tablet} {
      margin: 3rem auto 0rem auto;
    }
  }
`;

export const LenghtyTextAlert = styled.button`
  background: #5ac179;
  border-radius: 4px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-feature-settings: "liga" off;
  color: #ffffff;
  border: 0;
  margin-bottom: 0.5rem;
`;

export const AboutTitle = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #011122;
  margin-bottom: 1rem;
  @media ${device.tablet} {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const AboutListText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #43566a;
  margin: 0;
  margin-left: 1.875rem;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
    margin-left: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const AboutText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #43566a;
  /* margin: 0;
  margin-left: 1.875rem; */
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const AboutMargin = styled.div`
  margin: 5rem;
  @media ${device.tablet} {
    margin: 1.5rem;
  }
`;

export const AboutFlex = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem;
  flex-wrap: wrap;
  @media ${device.tablet} {
    margin: 1.5rem;
    ${FlexWrap} {
      flex: 100%;
      padding: 1rem 0rem;
    }
  }
`;

export const AboutBox = styled.div`
  height: 40rem;
  width: 100%;
  background: #d9d9d9;
`;
