import styled, { css } from "styled-components";
import { device } from "../../../Global";

type FooterFlowType = {
  active?: boolean;
};

export const FooterFlowContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media ${device.mobileL} {
    display: none;
  }
`;

export const FooterFlowText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const FooterFlowTextContent = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  margin: 0;
  padding: 0;
  cursor: pointer;
  ${({ active }: FooterFlowType) =>
    active
      ? css`
          color: #007afb;
        `
      : css`
          color: #324a64;
        `}
`;

export const Current = styled.div`
  background: #f4f4f4;
  border-radius: 40px;
  padding: 5px 16px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-feature-settings: "liga" off;
  color: #5ac179;
  ${({ active }: FooterFlowType) =>
    !active
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};
`;
