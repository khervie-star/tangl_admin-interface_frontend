import styled, { css } from "styled-components";
import { device } from "../../../../Global";
import { BackButton } from "../Buttons";
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
          color: #007afb;
          border-color: #007afb;
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

export const CardLabel = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #43566a;
  // margin-top: 1rem;
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
    flex-wrap: wrap;
    margin: 4.7rem 2.5rem 8.2rem 2.5rem;
  }
  @media ${device.mobileL} {
    flex-wrap: wrap;
    margin: 4.7rem 1.5rem 8.2rem 1.5rem;
  }
`;

export const Pad = styled.div`
  width: 100%;
  margin-left: ${({ page }: CommonTypes) => (page === 13 ? "0rem" : "8rem")};
  @media ${device.tablet} {
    margin-left: 0rem;
  }
`;

export const FormContainer = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 3rem;
  padding: 2rem;
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
  @media ${device.mobileL} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const BorderedInput = styled.input`
  background: #ffffff;
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
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
  &::placeholder {
    color: #a0aaba;
    font-weight: 400;
    // font-family: "Cera Pro";
    font-style: medium;
    font-size: 14px;
    line-height: 20px;
    vertical-align: center;
  }
  &:focus {
    outline: none;
    border: 1px solid #e1e8f4;
    box-sizing: border-box;
    border-radius: 8px;
  }
  &:hover {
    border: 1px solid #e1e8f4;
    box-sizing: border-box;
    border-radius: 8px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const BorderedTextField = styled.textarea`
  resize: none;
  background: #ffffff;
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
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
  &::placeholder {
    color: #a0aaba;
    font-weight: 400;
    // font-family: "Cera Pro";
    font-style: medium;
    font-size: 14px;
    line-height: 20px;
    vertical-align: center;
  }
  &:focus {
    outline: none;
    border: 1px solid #e1e8f4;
    box-sizing: border-box;
    border-radius: 8px;
  }
  &:hover {
    border: 1px solid #e1e8f4;
    box-sizing: border-box;
    border-radius: 8px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Date = styled.input.attrs({
  type: "date",
})`
  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
  background: #ffffff;
  border: 0;
  border-bottom: 1px solid #a0aaba;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  text-transform: uppercase;
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
  @media ${device.mobileL} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Select = styled.select`
  background: #ffffff;
  border: 0;
  border-bottom: 1px solid #a0aaba;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: ${({ smaller }: CommonTypes) => (smaller ? "14px" : "18px")};
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
    font-size: ${({ smaller }: CommonTypes) => (smaller ? "10px" : "18px")};
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
  @media ${device.mobileL} {
    font-size: 14px;
    line-height: 20px;
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
  @media ${device.mobileL} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: ${({ flexWrap }: CommonTypes) => (flexWrap ? "wrap" : "nowrap")};
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
  flex: ${({ flexPercentage }: CommonTypes) =>
    flexPercentage ? flexPercentage : "50%"};
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

export const RadioContainer = styled.div`
  padding: 1rem 0.75rem;
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input {
    width: 16px;
    height: 16px;
    border: 1px solid #007afb;
    box-sizing: border-box;
  }
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #43566a;
    margin-left: 16px;
  }
`;

export const CheckboxContainer = styled.div`
  padding: 1rem 0.75rem;
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input {
    width: 16px;
    height: 16px;
    border: 1px solid #007afb;
    box-sizing: border-box;
  }
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #43566a;
    margin-left: 16px;
  }
`;

export const SelectRadio = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 2rem;
  padding: 2rem;
`;

export const SelectCheckbox = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 2rem;
  padding: 2rem;
`;

export const FlexItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const FlexText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${({ withIcon }: CommonTypes) => (withIcon ? "#007AFB" : "#324a64")};
`;

export const ErrorMessage = ({ children }: CommonTypes) => {
  return (
    <>
      <MessageText>{children}</MessageText>
    </>
  );
};

export const MessageText = styled.div`
  font-family: Montserrat;
  color: crimson;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0.7rem;
  background-color: #ffebee;
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
`;
