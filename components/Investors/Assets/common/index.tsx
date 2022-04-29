import styled, { css } from "styled-components";
import { device } from "../../../../Global";
import { EditIcon } from "../Icons";
import { CommonTypes } from "./types";

export const TextTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.4px;
  color: #324a64;
  margin-top: 5rem;
`;

export const TextBody = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #a0aaba;
  margin-top: 1rem;
`;

export const Card = styled.div`
  color: #43566a;
  background: #ffffff;
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  height: 104px;
  padding: 0px 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ active }: CommonTypes) =>
    active
      ? css`
          color: #0070f3;
          border-color: #0070f3;
        `
      : css`
          color: #43566a;
          border-color: #e1e8f4;
        `}
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
    margin: auto;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-row: 300px;
  margin: 5rem 0rem;
`;

export const Display = styled.div`
  display: flex;
  margin: 4.7rem 5rem 8.2rem 5rem;
  @media ${device.tablet} {
    margin: 4.7rem 3rem 8.2rem 3rem;
  }
`;

export const Pad = styled.div`
  width: 100%;
  margin-left: 8rem;
  @media ${device.tablet} {
    margin-left: 5rem;
  }

  @media ${device.mobileL} {
    margin-left: 0rem;
  }
`;

export const FormContainer = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 2rem;
  padding: 2rem 2rem 0rem 2rem;
`;
export const Input = styled.input`
  background: #ffffff;
  border: 0;
  border-bottom: 1px solid #a0aaba;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #324a64;
  padding: ${({ padding }: CommonTypes) => (padding ? padding : "0.5rem 1rem")};
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 2rem;
  &:focus {
    border: 0;
    outline: none;
    border-bottom: 1px solid #a0aaba;
  }
  &:hover {
    border: 0;
    border-bottom: 1px solid #a0aaba;
  }
`;

export const Select = styled.select`
  background: #ffffff;
  border: 0;
  border-bottom: 1px solid #a0aaba;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #324a64;
  box-sizing: border-box;
  padding: 0.65rem 1rem;
  margin-bottom: 2rem;
  width: 100%;
  option {
    background: #ffffff;
    border: 0;
    border-bottom: 1px solid #a0aaba;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    padding: 0.7rem 1rem;
  }
  &:focus {
    border: 0;
    outline: none;
    border-bottom: 1px solid #a0aaba;
  }
  &:hover {
    border: 0;
    border-bottom: 1px solid #a0aaba;
  }
`;

export const Label = styled.label`
  margin: 2rem 0rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #324a64;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LabelComment = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: #a0aaba;
`;

export const LabelFlex = styled.div`
  flex: 50%;
  box-sizing: border-box;
  padding: ${({ padding }: CommonTypes) => (padding ? padding : "0")};
`;

export const ProofContainer = styled.div`
  border-bottom: 1px solid #a0aaba;
  padding: 0.5rem 0rem;
  margin: 0;
  margin-bottom: 2rem;
  h1 {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
  }
`;

export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 1rem;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: #a0aaba;
  }
`;

export const ActionIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    &:last-child {
      margin-left: 2rem;
    }
  }
`;