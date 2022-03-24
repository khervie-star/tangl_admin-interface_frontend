import styled from "styled-components";
import { device } from "../../../Global";
import { TextBody, TextTitle } from "../Assets/Common";

export type TabProps = {
  margin?: string;
  display?: string;
  padding?: string;
  flexPercentage?: string;
};

export const TabSevenContainer = styled.div`
  margin: 5rem;
  border-radius: 16px;
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  background: #011122;
  @media ${device.tablet} {
    margin: 2.5rem 1.5rem;
    padding: 2.5rem;
  }
`;

export const OfferButton = styled.button`
  background: #5ac179;
  border-radius: 4px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-feature-settings: "liga" off;
  color: #ffffff;
  border: 0;
`;

export const IconText = styled.span`
  margin-left: 12px;
`;

export const TextTitleSeven = styled(TextTitle)`
  margin: 1.5rem 0rem 0.5rem 0rem;
  display: ${({ display }: TabProps) =>
    display === "desktop" || display === "both" ? "flex" : "none"};
  align-items: center;
  @media ${device.tablet} {
    margin: 1.5rem 0rem 0rem 0rem;
    display: ${({ display }: TabProps) =>
      display === "mobile" || display === "both" ? "flex" : "none"};
  }
`;
export const TextBodySeven = styled(TextBody)`
  margin: 0rem 0rem 1.5rem 0rem;
  display: ${({ display }: TabProps) =>
    display === "desktop" || display === "both" ? "flex" : "none"};
  @media ${device.tablet} {
    margin: 1.5rem 0rem;
    display: ${({ display }: TabProps) =>
      display === "mobile" || display === "both" ? "block" : "none"};
  }
`;
