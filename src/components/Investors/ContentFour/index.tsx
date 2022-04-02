import { DarkContinueButton } from "../Assets/Buttons";
import { TextTitle, TextBody, TelVerified } from "./styles";
import { PageBarTypes } from "../types";
import { VerifiedIcon } from "../Assets/Icons";

const ContentFour = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
      <TextTitle>2-Factor Authentication</TextTitle>
      <TextBody>
        Fill in the registration data. It will take a couple of minutes. You
        only need your phone number and e-mail.
      </TextBody>
      <TelVerified>
        <h1>+234 815 768 2447</h1>
        <span><VerifiedIcon/><p>verified</p></span>
      </TelVerified>
      <DarkContinueButton onClick={handleClick}>Continue</DarkContinueButton>
    </>
  );
};

export default ContentFour;
