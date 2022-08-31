import { useState } from "react";
import { MdDisabledByDefault, MdSentimentDissatisfied } from "react-icons/md";
import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  FlexItems,
  FlexText,
  LabelFlex,
  TextBody,
  TextTitle,
} from "../../../Assets/common";
import { DeleteIcon, LockIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";
import {
  SecureAlert,
  InputContainer,
  Select,
  InputWrapper,
  InputText,
} from "./styles";
import { AvatarIcon } from "../../../Assets/Icons";

const ContentTwo = ({ page }: PageBarTypes) => {
  const [countryDialCode, setCountryDialCode] = useState("+1");
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(countryDialCode + " " + e.target.value);
    setDisabled(!e.target.value.length);
  };

  const handleDialCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setCountryDialCode(e.target.value);
  };

  const handleSubmit = () => {
    // dispatch(setOrganization(cardType));
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
          <LabelFlex flexPercentage="30%" padding="0rem .5rem 0rem 0rem">
            <Select value={countryDialCode} onChange={handleDialCodeChange}>
              <option value="+234">+234</option>
              <option value="+1">+1</option>
            </Select>
          </LabelFlex>
          <LabelFlex flexPercentage="70%" padding="0rem 0rem 0rem .5rem">
            <input type="number" onChange={handlePhoneNumberChange} />
          </LabelFlex>
        </InputWrapper>
      </InputContainer>
      <ContinueButton>Send Code</ContinueButton>
    </form>
  );
};

export default ContentTwo;
