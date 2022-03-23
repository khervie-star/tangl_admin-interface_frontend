import styled from "styled-components";
import { device } from "../../../Global";
import { TextBody, TextTitle } from "../Assets/Common";

export type TabProps = {
  margin?: string;
  display?: string;
  padding?: string;
  flexPercentage?: string;
};

export const TabSixContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5rem;
  @media ${device.mobileL}{
    padding: 2.5rem 1.5rem;
  }
  
`;

export const BoxText = styled.p`
  align-self: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #324a64;
  display: flex;
  align-items: center;
  margin: 0rem 2.875rem;
`;

export const TextTitleSix  = styled(TextTitle)`
  display: ${({ display }: TabProps) =>
    (display === "desktop" || display === "both") ? "flex" : "none"};
  @media ${device.mobileL} {
    margin: 0;
    display: ${({ display }: TabProps) =>
      (display === "mobile" || display === "both") ? "block" : "none"};
  }
`;
export const TextBodySix  = styled(TextBody)`
  margin: 2.5rem 0rem 2.5rem 0rem;
  display: ${({ display }: TabProps) =>
    (display === "desktop" || display === "both") ? "flex" : "none"};
  @media ${device.mobileL} {
    margin: 1.5rem 0rem;
    display: ${({ display }: TabProps) =>
      (display === "mobile" || display === "both") ? "block" : "none"};
  }
`;
