import styled from "styled-components";
import { TabProps } from "./types";
import { device } from "../../../../../Global";

export const List = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
    padding: 10px 0px;
  }
`;

export const ListText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #a0aaba;
  margin: 0;
  margin-left: 1.875rem;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
    margin-left: 1rem;
  }
`;

export const TextTitle = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TextTitleDark = styled.h1`
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

export const TextTitleBlue = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #007afb;
  text-align: center;
  @media ${device.tablet} {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TextBody = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #a0aaba;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const TextBodyDark = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #43566a;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const FlexWrap = styled.div`
  display: ${({ display }: TabProps) =>
    display === "desktop" || display === "both" ? "block" : "none"};
  flex: ${({ flexPercentage }: TabProps) =>
    flexPercentage ? flexPercentage : "50%"};
  box-sizing: border-box;
  padding: ${({ padding }: TabProps) => (padding ? padding : "0")};
  @media ${device.tablet} {
    padding: 0;
    display: ${({ display }: TabProps) =>
      display === "mobile" || display === "both" ? "block" : "none"};
  }
`;

export const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
`;

export const Box = styled.div`
  display: flex;
  height: ${({ height }: TabProps) => (height ? height : "0")};
  background: #a0aaba;
  margin: ${({ margin }: TabProps) => (margin ? margin : "0")};
`;
