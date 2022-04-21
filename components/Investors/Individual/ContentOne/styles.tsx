import styled from "styled-components";
import { FormContainer } from "../../Assets/common";

export const SecureAlert = styled.div`
  background: #fafafa;
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding: 24px;
  margin: 2rem 0rem;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: #a0aaba;
    margin: 0rem 1.25rem;
  }
`;

export const InputContainer = styled(FormContainer)`
  margin-bottom: 6.375rem;
  padding: 2rem 2rem 2rem 2rem;
`;

export const InputText = styled.div`
  margin-bottom: 40px;
  p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #43566a;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  input {
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
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    &:focus {
      border: 0;
      outline: none;
      border-bottom: 1px solid #a0aaba;
    }
    &:hover {
      border: 0;
      border-bottom: 1px solid #a0aaba;
    }
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
  padding: 0.5rem 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='none' height='5' viewBox='0 0 10 5' width='10' xmlns='http://www.w3.org/2000/svg'><path d='M0 0L5 5L10 0H0Z' fill='rgb(50,74,100)'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 60px;
  background-position-y: 15px;
  border-radius: 2px;

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
    padding: 0.6rem 1rem;
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
