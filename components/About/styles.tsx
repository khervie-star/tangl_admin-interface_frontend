import styled from "styled-components";
import { device } from "../../Global";
import { FlexWrap } from "../Home/Assets/Common";

export const AboutContainer = styled.div`
  background: #ffffff;
  padding: 5rem;
  @media ${device.tablet} {
    padding: 2.5rem;
    ${FlexWrap}{
      flex: 100%;
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 96px;
    text-align: center;
    color: #011122;
    margin: 0;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #43566a;
    margin: 6.25rem auto 0rem auto;
    max-width: 37.5rem;
  }
`;

export const AboutTitle = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #011122;
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
`;

export const AboutMargin = styled.div`
    margin:3.125rem 0rem ;
`

export const AboutFlex = styled.div`
    display: flex;
    align-items: center;
    margin:3.125rem 0rem ;
    flex-wrap: wrap;
    @media ${device.tablet} {
    ${FlexWrap}{
      flex: 100%;
      padding:1rem 0rem ;
    }
  }
`
