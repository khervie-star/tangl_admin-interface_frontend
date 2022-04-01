import { DarkContinueButton } from "../Assets/Buttons";
import { TextTitle, TextBody } from "./styles";
import { PageBarTypes } from "../types";

const ContentFive = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
      <TextTitle>Check your email</TextTitle>
      <TextBody>
        A verifiction link has been sent to your email. Click on the link to
        verify your account.
      </TextBody>
      <DarkContinueButton onClick={handleClick}>Start KYC</DarkContinueButton>
    </>
  );
};

export default ContentFive;
