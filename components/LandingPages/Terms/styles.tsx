import styled from "styled-components";
import { device } from "../../../Global";

type TermTypes = {
  flexPercentage?: string;
  padding?: string;
};

export const FooterNavContainer = styled.div`
  background: #ffffff;
  padding: 5rem;
  max-width: 1440px;
  margin: auto;
  @media ${device.tablet} {
    padding: 1.5rem;
  }
`;

export const TermWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
`;

export const TermFLex = styled.div`
  flex: ${({ flexPercentage }: TermTypes) =>
    flexPercentage ? flexPercentage : "50%"};
  box-sizing: border-box;
  padding: ${({ padding }: TermTypes) => (padding ? padding : "0")};
`;
export const TermTitle = styled.h2`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.5px;
  color: #011122;
  margin: 0;
  padding: 0;
`;
export const TermSubtitle = styled.h3`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.4px;
  color: #011122;
  margin-bottom: 0.75rem;
`;
export const TermText = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #324a64;
  a {
    text-decoration: none;
    color: #007afb;
    cursor: pointer;
  }
`;
