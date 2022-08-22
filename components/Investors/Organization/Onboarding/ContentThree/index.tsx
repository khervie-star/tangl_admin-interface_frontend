import { useState } from "react";
import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
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

const ContentThree = ({ page }: PageBarTypes) => {
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  const handleConfirmCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(e.target.value.length < 4);
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
            <input
              type="number"
              placeholder="- - - -"
              maxLength={4}
              onChange={handleConfirmCodeChange}
            />
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

export default ContentThree;
