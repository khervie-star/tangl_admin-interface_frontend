import styled from "styled-components";
import { device } from "../../../../../Global";
import { contentTypes } from "../../../types";

export const FundraisingFormTitle = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  color: #011122;
  margin-top: 1rem;
`;

export const PoundsInputContainer = styled.div`
  border: 1px solid #f4f4f4;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }: contentTypes) =>
    justify ? justify : "flex-start"};
  margin-bottom: 8px;
  width: ${({ width }: contentTypes) => (width ? width : "100%")};
  input {
    width: 100%;
    background: #ffffff;
    border: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    margin: 0 16px;
    box-sizing: border-box;
    &:focus {
      border: 0;
      outline: none;
    }
    &:hover {
      border: 0;
    }
  }
`;

export const Prefix = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 1rem;
  color: #43566a;
  font-size: 18px;
`;
