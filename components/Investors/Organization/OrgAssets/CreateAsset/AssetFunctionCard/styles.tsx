import styled, { css } from "styled-components";
import { device } from "../../../../../../Global";

export type CardProps = {
  active?: boolean;
  checked?: boolean;
};

export const CardWrap = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 12px;
  width: 17.375;
  padding: 40px;
  > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const Function = styled.div`
  margin-bottom: 32px;
`;

export const Text = styled.p`
  text-align: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: #324a64;
  opacity: 0.4;
  margin-top: 16px;
  ${({ active }: CardProps) =>
    active
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.4;
        `};
`;

export const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    margin-right: 2.375rem;
    ${({ active }: CardProps) =>
      active
        ? css`
            color: #007afb;
            opacity: 0.5;
          `
        : css`
            color: #324a64;
          `};
  }
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
  ${({ active }: CardProps) =>
    !active
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};
`;
