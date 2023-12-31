import styled from "styled-components";
import { device } from "../../../Global";
import { FlexWrap } from "../Home/Assets/Common";

export const WaitlistBackground = styled.div`
  width: 100vw;
  background: #324a64;
  position: relative;
`;

export const WaitlistContainer = styled.div`
  padding: 1em 5rem;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  max-width: 1440px;
  margin: 0 auto;

  @media ${device.tablet} {
    position: relative;
    padding: 1.5rem;
    overflow-y: scroll;
    ${FlexWrap} {
      flex: 100%;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0rem;
  gap: 1rem;
`;

export const WaitlistDescription = styled.div`
  padding-left: 5rem;
  width: 75%;
  @media ${device.tablet} {
    width: 100%;
    padding-left: 0rem;
  }
`;

export const WaitlistDescriptionHeader = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 96px;
  font-family: "Outfit";
  color: #fff;
  margin-bottom: 1rem;
  @media ${device.tablet} {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
  }
`;

export const WaitlistDescriptionText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.2px;
  font-family: "Outfit";
  color: #f4f4f4;
  margin-top: 1rem;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const WaitlistForm = styled.form`
  padding: 2.5rem;
  border-radius: 1.5rem;
  background-color: #fff;
  margin-bottom: 4rem;
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 50.4px;
    color: #324a64;
    margin-bottom: 2.5rem;
    @media ${device.tablet} {
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.4px;
    }
  }
  p {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #43566a;
    margin-bottom: 2.5rem;
  }
  input {
    box-sizing: border-box;
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
    & ::placeholder {
      color: #a0aaba;
      font-size: 14px;
      line-height: 20px;
      font-weight: medium;
    }
  }

  label {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    color: #43566a;
    margin: 0;
    margin-bottom: 0.5rem;
  }
`;

export const JoinWaitlist = styled.button`
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #007afb;
  color: #fff !important;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  font-family: "Outfit";
  letter-spacing: -0.1px;
  margin-bottom: 0 !important;
  cursor: pointer;
  transition: all;
  transition-duration: 500ms;
  border: 1px solid transparent;
  padding: 12px;
  &:hover {
    box-shadow: rgba(0, 122, 251, 0.2) 0px 7px 29px 0px;
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
  @media ${device.mobileL} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const RadioContainer = styled.div`
  padding: 0.5rem 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input {
    width: 32px;
    height: 32px;
    border: 2px solid #007afb;
    box-sizing: border-box;
  }
  label {
    font-family: "Outfit";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.1px;
    color: #43566a;
    margin-left: 12px;
  }
`;

export const AccountTypeRadioContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  input {
    width: 16px;
    height: 16px;
    border: 2px solid #007afb;
    box-sizing: border-box;
    margin: 0;
    margin-right: 8px;
  }
  label {
    font-family: "Outfit";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.1px;
    margin: 0;
    margin-left: 12px;
  }
`;

export const WaitlistFlex = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  flex-wrap: wrap;
  box-sizing: border-box;
  height: 100%;
  @media ${device.tablet} {
    margin: 0rem;
    ${FlexWrap} {
      flex: 100%;
      padding: 1rem 0rem;
    }
  }
`;

export const WaitlistBar = styled.div`
  // width: 100%;
  // display: flex;
  // justify-content: flex-start;
  padding: 32px;
  @media ${device.tablet} {
    // width: 100%;
  }
`;

export const Terminate = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
`;

export const AccountTypeWrapper = styled.div`
  margin: 1.5em 0;
  display: flex;
  align-items: center;
  gap: 2em;
  @media ${device.tablet} {
    display: block;
    margin: 0.5em 0;
    margin-bottom: 1em;
  }
`;
