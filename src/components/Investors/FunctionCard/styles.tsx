import styled, { css } from "styled-components";

export type CardProps = {
  active?: boolean;
};

export const CardWrap = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 12px;
  max-width: 310px;
  padding: 40px;
  margin-left: 16.625rem;
`;

export const Function = styled.div`
  p {
    padding-left: 32px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: #324a64;
    opacity: 0.4;
    margin-top: 16px;
  }
`;

export const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
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