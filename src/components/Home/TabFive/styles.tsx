import styled from "styled-components";
import { TextTitle, TextBody } from "../Assets/Common";
import { device } from "../../../Global";

export type TabProps = {
  margin?: string;
  display?: string;
};

export const TabFiveContainer = styled.div`
  padding: 5rem 0rem;
  @media ${device.tablet}{
    padding:2.5rem 0rem;
  }
`;

export const TextWrapper = styled.div`
  margin: 0rem 5rem 2.5rem 5rem;
  @media ${device.tablet}{
    margin: 0rem 1.5rem 2.5rem 1.5rem;
  }
`;

export const TextFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.tablet}{
    display: none;
  }
`;


export const TextTitleFive = styled(TextTitle)`
  margin: 0.67rem 0rem 2.5rem 0rem;
  display: ${({ display }: TabProps) =>
    (display === "desktop" || display === "both") ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 0;
    display: ${({ display }: TabProps) =>
      (display === "mobile" || display === "both") ? "block" : "none"};
  }
`;
export const TextBodyFive = styled(TextBody)`
  margin: 0rem 0rem 0rem 2.5rem;
  display: ${({ display }: TabProps) =>
    (display === "desktop" || display === "both") ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 1.5rem 0rem;
    display: ${({ display }: TabProps) =>
      (display === "mobile" || display === "both") ? "block" : "none"};
  }
`;