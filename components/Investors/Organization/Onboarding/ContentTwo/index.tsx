import _, { toSafeInteger } from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminType } from "../../../../../constants";
import { sendVerificationCode } from "../../../../../services/requests";
import { organizationFowardRoute } from "../../../../../store/actions";
import { setPhoneNumber } from "../../../../../store/actions/register";
import { RootState } from "../../../../../store/reducers";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  LabelFlex,
  TextBody,
  TextTitle,
  ErrorMessage,
} from "../../../Assets/common";
import { DeleteIcon, LockIcon, ReloadIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";
import {
  InputContainer,
  InputText,
  InputWrapper,
  SecureAlert,
  Select,
} from "./styles";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import toast from "react-hot-toast";

const ContentTwo = ({ page }: PageBarTypes) => {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const dispatch = useDispatch();

  // Get selected organization type from store for header specification
  const { OrgType } = useSelector((store: RootState) => ({
    OrgType: store.OrganizationType.selectedType,
  }));

  // Match organization type with name
  const getAdminType = () => {
    return _.find(adminType, ["cardType", OrgType]).content;
  };

  // Get saved phone number from store for confirmation
  const { phone } = useSelector((store: RootState) => ({
    phone: store.register.phone,
  }));

  // Handle Phone Number Input Change
  const handlePhoneNumberChange = (phone: string) => {
    dispatch(setPhoneNumber(phone));
    setDisabled(phone?.length < 9);
  };

  // Submit Phone Number and send verification code
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setSending(true);
      setError("");
      const resp = await sendVerificationCode({ phone });
      toast.success(resp.data.message);
      if (page) dispatch(organizationFowardRoute(page));
      setSending(false);
      setError("");
    } catch (err: any) {
      console.log(err);
      setError(err.response.data || err.message);
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>{getAdminType() + " "}registration</TextTitle>
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
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <InputContainer>
        <InputText>
          <p>Enter your phone number</p>
        </InputText>
        <InputWrapper>
          {/* <LabelFlex flexPercentage="30%" padding="0rem .5rem 0rem 0rem">
            <Select value={countryDialCode} onChange={handleDialCodeChange}>
              <option value="+234">+234</option>
              <option value="+1">+1</option>
            </Select>
          </LabelFlex>
          <LabelFlex flexPercentage="70%" padding="0rem 0rem 0rem .5rem">
            <input
              type="number"
              onChange={handlePhoneNumberChange}
              value={phone}
              placeholder="(xxx) xxx-xxxx"
            />
          </LabelFlex> */}
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="US"
            value={phone}
            onChange={handlePhoneNumberChange}
          />
          {sending && <ReloadIcon animate={true} />}
        </InputWrapper>
      </InputContainer>
      <ContinueButton disabled={disabled || sending}>
        {sending ? "Sending code" : "Send code"}
      </ContinueButton>
    </form>
  );
};

export default ContentTwo;
