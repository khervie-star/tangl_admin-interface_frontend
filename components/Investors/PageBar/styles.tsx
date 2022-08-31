import styled, { css } from "styled-components";

export type FlowTypes = {
  active?: boolean;
  pending?: boolean;
  page?: number;
};

export const FlowCircle = styled.div`
  box-sizing: border-box;
  background: #007afb;
  border: 1px solid #007afb;
  background: ${({ active }: FlowTypes) => (active ? "#007AFB" : "#ffffff")};
  ${({ page, active }: FlowTypes) =>
    page === 5 || page === 6 || !active
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `};
  ${({ page }: FlowTypes) =>
    page === 7
      ? css`
          background: #fff;
        `
      : css`filter: background: initial; `};
  border-radius: 50%;
  height: 12px;
  width: 12px;
`;

export const FlowBar = styled.p`
  height: 1px;
  width: 40px;
  background: #007afb;
  ${({ page, active }: FlowTypes) =>
    page === 5 || !active
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `};
  margin: 0px 8px;
`;

export const FlowWrap = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
`;
