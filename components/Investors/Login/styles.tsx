import { MdCheckCircle, MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import styled, { css } from "styled-components";

type LoginTypes = {
  checked?: boolean;
};

export const LoginContainer = styled.div`
  padding: 3.313rem 0rem 17.188rem 0rem;
  margin: 0 auto;
`;

export const LoginFormContainer = styled.form`
  margin: 0 auto;
  padding: 0.5rem 2rem;
  max-width: 35rem;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.4px;
    color: #324a64;
  }

  input {
    border: 0;
    outline: none;
    border-bottom: 1px solid #a0aaba;
    padding: 0.5rem 1rem;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    margin-bottom: 2rem;
    width: 100%;
  }

  label {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #43566a;
    margin: 0;
    margin-bottom: 0.5rem;
  }
`;

export const LoginFormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RememberMe = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  letter-spacing: -0.1px;
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-left: 0.25rem;
  }
  ${({ checked }: LoginTypes) =>
    checked
      ? css`
          color: #007afb;
        `
      : css`
          color: #43566a;
        `}
`;

export const ForgotPassword = styled.p`
  margin: 0;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: #c16565;
  cursor: pointer;
`;

export const UnCheckedIcon = styled(MdOutlineRadioButtonUnchecked)`
  color: #43566a;
  font-size: 16px;
  cursor: pointer;
`;

export const CheckedIcon = styled(MdCheckCircle)`
  color: #007afb;
  font-size: 16px;
  cursor: pointer;
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    padding: 0.75rem 4rem;
    margin: 2rem auto;
    border: 0;
    background: #007afb;
    border-radius: 4px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginFooterWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e1e8f4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-top: 3.75rem;
  max-width: 20.25rem;
  span {
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

export const CreateAnAcount = styled.p`
  margin: 0;
  margin-left: 3.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #007afb;
    margin-left: 0.25rem;
  }
`;

export const UserCheckIcon = styled(BiUserCheck)`
  color: #007afb;
  font-size: 24px;
`;
