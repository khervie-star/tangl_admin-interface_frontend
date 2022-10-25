import { useState } from "react";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton, DarkContinueButton } from "../../../Assets/Buttons";
import { TextBody, TextTitle, ErrorMessage } from "../../../Assets/common";
import { EditIcon, ReloadIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";
import { ButtonWrap, MailContainer, ResendLink } from "./styles";
import { sendEmailConfirmation } from "../../../../../services/requests";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import { RootState } from "../../../../../store/reducers";

const ContentFive = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  // Get Email from redux store
  const { email } = useAppSelector((store: RootState) => ({
    email: store.register.email,
  }));

  // Send received code for backend validation
  const ResendverificationEmail = async (e: any) => {
    e.preventDefault();
    const data = {
      email: email,
      role: "INVESTMENT_COMPANY",
    };
    try {
      setSending(true);
      setError("");
      const response = await sendEmailConfirmation(data);
      toast.success(response.data.message);
      setSending(false);
      setError("");
    } catch (err: any) {
      console.log(err);
      setError(err.response?.data || err.message);
      setSending(false);
    }
  };

  return (
    <>
      <TextTitle>Check your email</TextTitle>
      <TextBody>
        A verifiction link has been sent to your email. Click on the link to
        verify your account.
      </TextBody>
      <MailContainer>
        <h1>{email}</h1>
        <span>
          <p>Email not confirmed yet</p>
          <EditIcon />
        </span>
      </MailContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ResendLink onClick={ResendverificationEmail}>
        <h1>Didn&apos;t receive a link?</h1>
        <span>
          <ReloadIcon animate={sending} />
          {!sending && <span>Send again</span>}
          {sending && <span>Sending</span>}
        </span>
      </ResendLink>
      {/* <ButtonWrap>
        <DarkContinueButton onClick={handleClick}>Start KYC</DarkContinueButton>
        <ContinueButton onClick={handleRoute}>Go to Dashboard</ContinueButton>
      </ButtonWrap> */}
    </>
  );
};

export default ContentFive;
