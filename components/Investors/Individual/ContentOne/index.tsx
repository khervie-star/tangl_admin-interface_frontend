import { ContinueButton } from "../../Assets/Buttons.tsx";
import { TextBody, TextTitle } from "../../Assets/common";
import { DeleteIcon, LockIcon } from "../../Assets/Icons";
import { PageBarTypes } from "../../types";
import {SecureAlert, InputContainer, Select, InputWrapper, InputText } from "./styles";


const ContentOne = ({ page }: PageBarTypes) => {
  const handleClick = () => {
    
  };

  return (
    <>
      <TextTitle>Individual Investors’ Registration</TextTitle>
      <TextBody>
        Fill in the registration data. It will take a couple of minutes. You
        only need your phone number and e-mail.
      </TextBody>
      <SecureAlert>
        <LockIcon />
        <span>
          We take privacy issues seriously. You can be sure that your personal
          data is securely protected.
        </span>
        <DeleteIcon />
      </SecureAlert>
      <InputContainer>
        <InputText>
          <p>Enter your phone number</p>
        </InputText>
        <InputWrapper>
        <Select>
          <option>+234</option>
          <option>+1</option>
        </Select>
        <input type="text" placeholder="815 768 2447"/>
        </InputWrapper>
      </InputContainer>
      <ContinueButton onClick={handleClick}>Send Code</ContinueButton>
    </>
  );
};

export default ContentOne;
