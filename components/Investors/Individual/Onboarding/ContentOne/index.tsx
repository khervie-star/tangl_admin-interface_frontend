import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../../store/actions";
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
import { useState } from "react";
import { savePhone } from "../../../../../store/actions/register";

const ContentOne = ({ page }: PageBarTypes) => {
  const [countryDialCode, setCountryDialCode] = useState("+1");
  const [phone, setPhone] = useState<string>();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setDisabled(!e.target.value.length);
  };

  const handleDialCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setCountryDialCode(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      phone && (await dispatch(savePhone(countryDialCode + "" + phone)));
      page && dispatch(individualFowardRoute(page));
    } catch (error: any) {}
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <LabelFlex flexPercentage="30%" padding="0rem .5rem 0rem 0rem">
            <Select value={countryDialCode} onChange={handleDialCodeChange}>
              <option>+234</option>
              <option>+1</option>
            </Select>
          </LabelFlex>
          <LabelFlex flexPercentage="70%" padding="0rem 0rem 0rem .5rem">
            <input
              type="text"
              value={phone}
              onChange={handlePhoneNumberChange}
            />
          </LabelFlex>
        </InputWrapper>
      </InputContainer>
      <ContinueButton type="submit" disabled={disabled}>
        Send Code
      </ContinueButton>
    </form>
  );
};

export default ContentOne;
