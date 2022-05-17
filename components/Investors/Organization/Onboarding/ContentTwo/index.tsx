import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import { LabelFlex, TextBody, TextTitle } from "../../../Assets/common";
import { DeleteIcon, LockIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";
import {
  SecureAlert,
  InputContainer,
  Select,
  InputWrapper,
  InputText,
} from "./styles";

const ContentTwo = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>Special Purpose investment Vehicle registration</TextTitle>
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
          <LabelFlex flexPercentage="30%" padding= "0rem .5rem 0rem 0rem">
            <Select>
              <option>+234</option>
              <option>+1</option>
            </Select>
          </LabelFlex>
          <LabelFlex flexPercentage="70%" padding ="0rem 0rem 0rem .5rem">
            <input type="text" />
          </LabelFlex>
        </InputWrapper>
      </InputContainer>
      <ContinueButton>Send Code</ContinueButton>
    </form>
  );
};

export default ContentTwo;
