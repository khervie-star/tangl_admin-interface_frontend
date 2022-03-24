import styled from "styled-components";
import { device } from "../../../Global";
import { TextTitle, TextBody } from "../Assets/Common";

export type TabProps = {
  margin?: string;
  display?: string;
  padding?: string;
  flexPercentage?: string;
};

export const TabFourContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-wrap: wrap;
  @media ${device.tablet}{
    padding:2.5rem 1.5rem;
  }
`;

export const TextTitleFour = styled(TextTitle)`
  margin: 0rem 2.5rem 0rem 0rem;
  display: ${({ display }: TabProps) =>
    (display === "desktop" || display === "both") ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 0;
    display: ${({ display }: TabProps) =>
      (display === "mobile" || display === "both") ? "block" : "none"};
  }
`;
export const TextBodyFour = styled(TextBody)`
  margin: 2.5rem 0rem;
  display: ${({ display }: TabProps) =>
    (display === "desktop" || display === "both") ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 1.5rem 0rem;
    display: ${({ display }: TabProps) =>
      (display === "mobile" || display === "both") ? "block" : "none"};
  }
`;
