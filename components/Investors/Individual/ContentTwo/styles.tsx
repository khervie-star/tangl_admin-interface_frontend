import styled from "styled-components";
import { device } from "../../../../Global";

export const TelContainer = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    margin: 0;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #a0aaba;
      margin: 0;
    }
  }
`;
export const Title = styled.span``;

export const Confirmation = styled.div`
  margin-bottom: 11rem;
  ${Title} {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #43566a;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #a0aaba;
  }
`;

export const CodeContainer = styled.div`
  display: flex;
  align-items: center;
  input {
    border: 0;
    border-bottom: 1px solid #007AFB;
    padding: 0.75rem 0.5rem; 
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 5px;
    width: 100%;
    &:focus {
      outline: none;
    }
    &:hover {
      outline: none;
    }
  }
`;


export const InputContainer = styled.div`
  width: 70%;
  @media ${device.mobileL} {
    width: 60%;
  }
`

export const Resend = styled.div`
  display: flex;
  align-items: center;
  margin-top: -3rem;
  margin-left: 2rem;
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    font-feature-settings: "liga" off;
    color: #007afb;
    margin-left: 0.75rem;
  }
`
