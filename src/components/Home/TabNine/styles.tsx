import styled from "styled-components";
import { device } from "../../../Global";
import { TextBody, TextTitle } from "../Assets/Common";

export type TabProps = {
  margin?: string;
  display?: string;
  padding?: string;
  flexPercentage?: string;
};

export const TabNineContainer = styled.div`
  display: flex;
  padding: 5rem;
  @media ${device.tablet}{
    display: block;
    padding:2.5rem 1.5rem;
  }
`;

export const TextTitleNine = styled(TextTitle)`
  margin: 0rem 0rem 2.5rem 0rem;
  display: ${({ display }: TabProps) =>
    display === "desktop" || display === "both" ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 0;
    display: ${({ display }: TabProps) =>
      display === "mobile" || display === "both" ? "block" : "none"};
  }
`;
export const TextBodyNine = styled(TextBody)`
  display: ${({ display }: TabProps) =>
    display === "desktop" || display === "both" ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 1.5rem 0rem;
    display: ${({ display }: TabProps) =>
      display === "mobile" || display === "both" ? "block" : "none"};
  }
`;
