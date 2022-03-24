import styled from "styled-components";
import { device } from "../../../Global";
import { TextTitle, TextBody } from "../Assets/Common";

export type TabProps = {
  margin?: string;
  display?: string;
  padding?: string;
  flexPercentage?: string;
};

export const TabTwoContainer = styled.div`
  padding: 5rem;
  @media ${device.tablet}{
    padding: 2.5rem 1.5rem;
  }
`;

export const TextWrap = styled.div`
  margin-right: 18.44rem;
  @media ${device.laptop}{
    margin-right: 10rem;
  }
  @media ${device.tablet} {
    margin-right: 0;
  }
`;

export const TextTitleTwo = styled(TextTitle)`
  margin: 0rem 2.5rem 0rem 0rem;
  display: ${({ display }: TabProps) =>
    display === "desktop" ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 0;
    display: ${({ display }: TabProps) =>
      display === "mobile" ? "flex" : "none"};
  }
`;
export const TextBodyTwo = styled(TextBody)`
  margin: 2.5rem 0rem;
  display: ${({ display }: TabProps) =>
    display === "desktop" ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 1.5rem 0rem;
    display: ${({ display }: TabProps) =>
      display === "mobile" ? "block" : "none"};
  }
`;
export const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;
