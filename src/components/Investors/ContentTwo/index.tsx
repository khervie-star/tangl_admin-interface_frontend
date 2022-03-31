import { ContinueButton } from "../Assets/Buttons";
import { TextTitle, TextBody } from "./styles";

const ContentTwo = () => {
  return (
    <>
      <TextTitle>Individual Investors’ Registration</TextTitle>
      <TextBody>
        Fill in the registration data. It will take a couple of minutes. You
        only need your phone number and e-mail.
      </TextBody>
      <ContinueButton>Send Code</ContinueButton>
    </>
  );
};

export default ContentTwo;
