import { useState } from "react";
import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import { TextBody, TextTitle } from "../../../Assets/common";
import { EditIcon, ReloadIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";
import {
  CodeContainer,
  Confirmation,
  InputContainer,
  Resend,
  TelContainer,
  Title,
} from "./styles";

const ContentTwo = ({ page }: PageBarTypes) => {
  const [otpCode, setOtpCode] = useState("")
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtpCode(e.target.value);
    setDisabled(!e.target.value.length);
  };

  const handleSubmit = () => {
    if (page) dispatch(individualFowardRoute(page));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>Confirm Phone Number</TextTitle>
      <TextBody>
        Fill in the registration data. It will take a couple of minutes. You
        only need your phone number and e-mail.
      </TextBody>
      <TelContainer>
        <h1>+234 815 768 2447</h1>
        <span>
          <p>Number not confirmed yet</p>
          <EditIcon />
        </span>
      </TelContainer>
      <Confirmation>
        <Title>Confirmation Code</Title>
        <CodeContainer>
          <InputContainer>
            <input type="text" value={otpCode} onChange={handleOTPChange} placeholder="- - - -" />
            <p>Confirm phone number with code from sms message</p>
          </InputContainer>
          <Resend>
            <ReloadIcon />
            <span>Send again</span>
          </Resend>
        </CodeContainer>
      </Confirmation>
      <ContinueButton disabled={disabled}>Confirm</ContinueButton>
    </form>
  );
};

export default ContentTwo;
