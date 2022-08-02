import styled from "styled-components";
import { device } from "../../../Global";

export const LandingTitle = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  text-align: center;
  color: #011122;
  margin: 0;
  @media ${device.mobileL} {
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
  }
`;

export const LandingForm = styled.form`
  box-sizing: border-box;
  margin: 2rem 0rem;
  > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
  input {
    box-sizing: border-box;
    width: 100%;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: #a0aaba;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #e2e4e5;
    padding: 0.75rem 0.875rem;
    margin-bottom: 1.875rem;
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: #a0aaba;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #e2e4e5;
    padding: 0.75rem 0.875rem;
    margin-bottom: 1.875rem;
  }
  label {
    box-sizing: border-box;
    padding: 0.25rem;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #43566a;
    margin-bottom: 0.875rem;
  }
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
`;
