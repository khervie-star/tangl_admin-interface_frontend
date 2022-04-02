import { ContinueButton } from "../Assets/Buttons";
import {
  TextTitle,
  TextBody,
  TelContainer,
  Confirmation,
  CodeContainer,
  Title,
  InputContainer,
  Resend,
} from "./styles";
import { PageBarTypes } from "../types";
import { EditIcon, ReloadIcon } from "../Assets/Icons";

const ContentThree = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
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
            <input type="text" placeholder="- - - -" />
            <p>Confirm phone number with code from sms message</p>
          </InputContainer>
          <Resend>
            <ReloadIcon />
            <span>Send again</span>
          </Resend>
        </CodeContainer>
      </Confirmation>
      <ContinueButton onClick={handleClick}>Confirm</ContinueButton>
    </>
  );
};

export default ContentThree;
