import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../../store/actions";
import { DarkContinueButton } from "../../../Assets/Buttons";
import { FormContainer, Input, Label, TextBody, TextTitle } from "../../../Assets/common";
import { VerifiedIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";
import { TelVerified } from "./styles";

const ContentThree = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (page) dispatch(individualFowardRoute(page));
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
         <Input type="text"  />
         <Label>Password</Label>
         <Input type="password" />
      </FormContainer>
      <DarkContinueButton>Continue</DarkContinueButton>
    </form>
  );
};

export default ContentThree;
