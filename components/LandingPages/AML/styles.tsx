import styled from "styled-components";
import { device } from "../../../Global";
type amlType = {
  style?: string;
};

export const UnOrderedList = styled.ul`
  list-style: ${({ style }: amlType) => (style ? style : "disc")};
  li {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    @media ${device.mobileL} {
      font-size: 16px;
      line-height: 24px;
    }
    a {
      text-decoration: none;
      color: #007afb;
      cursor: pointer;
    }
  }
`;

export const OrderedList = styled.ol`
  list-style: ${({ style }: amlType) => (style ? style : "lower-roman")};
  li {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    @media ${device.mobileL} {
      font-size: 16px;
      line-height: 24px;
    }
    a {
      text-decoration: none;
      color: #007afb;
      cursor: pointer;
    }
  }
`;
