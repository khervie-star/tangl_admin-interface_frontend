import styled from "styled-components";
import { device } from "../../../Global";

export const FooterContainer = styled.div`
  margin-top: 5rem;
  padding: 5rem;
  background: #011122;
  @media ${device.tablet} {
    margin-top: 2.5rem;
    padding: 3.5rem 1.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const HeadWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 18rem;
  grid-row-gap: 2.5rem;
  align-items: stretch;

  @media ${device.tablet} {
    grid-column-gap: 15rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    grid-column-gap: 14rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileM} {
    grid-column-gap: 12rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TanglWrap = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: -0.2px;
  color: #ffffff;
  span {
    margin-left: 12px;
  }
  @media ${device.tablet} {
    margin-bottom: 2.5rem;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-feature-settings: "liga" off;
    color: #ffffff;
  }
  p {
    font-family: "Cera Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: -0.1px;
    color: #a0aaba;
  }
`;

export const BaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 40px 0px;
`;

export const BaseText = styled.div`
  display: flex;
  align-items: center;
  > * {
      &:last-child {
        margin-right: 0;
      }
    }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    margin-right: 3.56rem;
    color: #a0aaba;
    @media ${device.tablet} {
      margin: 2.5rem 3.5rem 0rem 0rem;
    }
    @media ${device.mobileL} {
      margin: 2.5rem 2.5rem 0rem 0rem;
    }
    @media ${device.mobileM} {
      margin: 2.5rem 1.5rem 0rem 0rem;
  }
  }
`;

export const BaseIcons = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 35px;
`;

export const IconBox = styled.div`
  height: 48px;
  width: 48px;
  box-sizing: border-box;
  background: #a0aaba;
  @media ${device.mobileL} {
    height: 40px;
    width: 40px;
  }

  @media ${device.mobileM} {
    height: 34px;
    width: 34px;
  }
`;
