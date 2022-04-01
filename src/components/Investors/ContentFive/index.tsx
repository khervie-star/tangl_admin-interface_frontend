import { ContinueButton, DarkContinueButton } from "../Assets/Buttons";
import { TextTitle, TextBody, MailContainer, ResendLink, ButtonWrap } from "./styles";
import { PageBarTypes } from "../types";
import { EditIcon, ReloadIcon } from "../Assets/Icons";
import { useNavigate } from "react-router-dom";

const ContentFive = ({ page, setPage }: PageBarTypes) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  const handleRoute = () => {
    navigate("/", { replace: true })
  }

  return (
    <>
      <TextTitle>Check your email</TextTitle>
      <TextBody>
        A verifiction link has been sent to your email. Click on the link to
        verify your account.
      </TextBody>
      <MailContainer>
        <h1>blessing@gmail.com</h1>
        <span><p>Email not confirmed yet</p><EditIcon/></span>
      </MailContainer>
      <ResendLink>
        <h1>Didn't receive a link? </h1>
        <span><ReloadIcon/><p>Send again</p></span>
      </ResendLink>
      <ButtonWrap>
      <DarkContinueButton onClick={handleClick}>Start KYC</DarkContinueButton>
      <ContinueButton onClick={handleRoute}>Go to Dashboard</ContinueButton>
      </ButtonWrap>
      
    </>
  );
};

export default ContentFive;
