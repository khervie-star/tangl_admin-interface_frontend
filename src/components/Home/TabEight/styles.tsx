import styled from "styled-components";
import { device } from "../../../Global";
import { TextBody, TextTitle } from "../Assets/Common";

export type TabProps = {
  margin?: string;
  display?: string;
  padding?: string;
  flexPercentage?: string;
};

export const TabEightContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  @media ${device.mobileL} {
    padding: 2.5rem 1.5rem;
  }
`;

export const ListTag = styled.div`
  background: blue;
  height: 24px;
  width: 24px;
  margin-right: 2.5rem;
`;

export const TextWrap = styled.div`
  display: flex;
  padding: 10px;
  margin: 40px 0px;
`;

export const TextTitleEight = styled(TextTitle)`
  display: ${({ display }: TabProps) =>
    display === "desktop" || display === "both" ? "flex" : "none"};
  @media ${device.mobileL} {
    margin: 0;
    display: ${({ display }: TabProps) =>
      display === "mobile" || display === "both" ? "block" : "none"};
  }
`;
export const TextBodyEight = styled(TextBody)`
  display: ${({ display }: TabProps) =>
    display === "desktop" || display === "both" ? "flex" : "none"};
  @media ${device.mobileL} {
    margin: 1.5rem 0rem;
    display: ${({ display }: TabProps) =>
      display === "mobile" || display === "both" ? "block" : "none"};
  }
`;
