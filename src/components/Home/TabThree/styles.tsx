import styled from "styled-components";
import { TextTitle, TextBody } from "../Assets/Common";
import { device } from "../../../Global";

export type TabProps = {
  margin?: string;
  display?: string;
  padding?: string;
  flexPercentage?: string;
};

export const TabThreeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-wrap: wrap;
  @media ${device.tablet}{
    display: none
  }
`;

export const TextTitleThree = styled(TextTitle)`
  margin: 0.67rem 5rem 0.67rem 0rem;
  display: ${({ display }: TabProps) =>
    display === "desktop" ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 0;
    display: ${({ display }: TabProps) =>
      display === "mobile" ? "flex" : "none"};
  }
`;

export const TextBodyThree = styled(TextBody)`
  margin: 1rem 5rem 1rem 0rem;
  display: ${({ display }: TabProps) =>
    display === "desktop" ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 1.5rem 0rem;
    display: ${({ display }: TabProps) =>
      display === "mobile" ? "block" : "none"};
  }
`;