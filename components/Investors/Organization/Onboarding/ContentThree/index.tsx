import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  organizationBackwardRoute,
  organizationFowardRoute,
} from "../../../../../store/actions";
import { RootState } from "../../../../../store/reducers";
import { ContinueButton } from "../../../Assets/Buttons";
import { ErrorMessage, TextBody, TextTitle } from "../../../Assets/common";
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
import { formatPhoneNumberIntl } from "react-phone-number-input";
import {
  sendVerificationCode,
  verifyPhone,
} from "../../../../../services/requests";
import toast from "react-hot-toast";

const ContentThree = ({ page }: PageBarTypes) => {
  const [disabled, setDisabled] = useState(true);
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState({
    sending: false,
    confirming: false,
  });
  const [error, setError] = useState("");
  const [code, setConfirmationCode] = useState("");
  const dispatch = useDispatch();

  // Get saved phone number from store for confirmation
  const { phone } = useSelector((store: RootState) => ({
    phone: store.register.phone,
  }));

  // Handle confirmation code change
  const handleConfirmCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmationCode(e.target.value.slice(0, 6));
    setDisabled(e.target.value.length < 6);
  };

  // Resend confirmation code if use did not receive confirmation code previously due to some reason or another
  const resendConfirmationCode = async (e: any) => {
    e.preventDefault();
    try {
      setLoading({ ...loading, sending: true });
      setError("");
      const resp = await sendVerificationCode({ phone });
      toast.success(resp.data.message);
      setLoading({ ...loading, sending: false });
      setError("");
    } catch (err: any) {
      console.log(err);
      setError(err.response.data || err.message);
      setLoading({ ...loading, sending: false });
    }
  };

  // Edit user phone number (return user to previous page)
  const handleEditPhoneNumber = () => {
    if (page) dispatch(organizationBackwardRoute(page));
  };

  // Send received code for backend validation
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading({ ...loading, confirming: true });
      setError("");
      await verifyPhone({ phone, code });
      if (page) dispatch(organizationFowardRoute(page));
      setLoading({ ...loading, confirming: false });
      setError("");
    } catch (err: any) {
      console.log(err);
      setError(err.response.data || err.message);
      setLoading({ ...loading, confirming: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>Confirm Phone Number</TextTitle>
      <TextBody>
        Fill in the registration data. It will take a couple of minutes. You
        only need your phone number and e-mail.
      </TextBody>
      <TelContainer>
        <h1>{formatPhoneNumberIntl(phone)}</h1>
        <span>
          <p>Number not confirmed yet</p>
          <div onClick={handleEditPhoneNumber}>
            <EditIcon />
          </div>
        </span>
      </TelContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Confirmation>
        <Title>Confirmation Code</Title>
        <CodeContainer>
          <InputContainer>
            <input
              type="number"
              placeholder="- - - - - -"
              onChange={handleConfirmCodeChange}
              value={code}
            />
            <p>Confirm phone number with code from sms message</p>
          </InputContainer>
          <Resend onClick={resendConfirmationCode}>
            <ReloadIcon animate={loading.sending} />
            {!loading.sending && <span>Send again</span>}
            {loading.sending && <span>Sending...</span>}
          </Resend>
        </CodeContainer>
      </Confirmation>
      <ContinueButton
        disabled={disabled || loading.sending || loading.confirming}
      >
        {!loading.confirming && <span>Confirm</span>}
        {loading.confirming && <span>Confirming</span>}
      </ContinueButton>
    </form>
  );
};

export default ContentThree;
