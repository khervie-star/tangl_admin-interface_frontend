import { useState } from "react";
import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../../store/actions";
import { registerUser } from "../../../../../store/actions/register";
import { DarkContinueButton } from "../../../Assets/Buttons";
import {
  FormContainer,
  Input,
  Label,
  TextBody,
  TextTitle,
} from "../../../Assets/common";
import { VerifiedIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";
import { TelVerified } from "./styles";

const ContentThree = ({ page }: PageBarTypes) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setDisabled(!e.target.value.length);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setDisabled(!e.target.value.length);
  };

  const handleDisabled = () => {
    if (email && password) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    try {
      if (email && password) {
        const data = {
          email: email,
          password,
        };
        await dispatch(registerUser(data));
      }
      if (page) dispatch(individualFowardRoute(page));
    } catch (error: any) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>2-Factor Authentication</TextTitle>
      <TextBody>
        Fill in the registration data. It will take a couple of minutes. You
        only need your phone number and e-mail.
      </TextBody>
      <TelVerified>
        <h1>+234 815 768 2447</h1>
        <span>
          <VerifiedIcon />
          <p>verified</p>
        </span>
      </TelVerified>
      <FormContainer>
        <Label>Email</Label>
        <Input type="text" value={email} onChange={handleEmailChange} />
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormContainer>
      <DarkContinueButton disabled={handleDisabled()}>
        Continue
      </DarkContinueButton>
    </form>
  );
};

export default ContentThree;
