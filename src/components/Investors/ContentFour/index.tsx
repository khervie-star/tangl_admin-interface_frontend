import { DarkContinueButton } from "../Assets/Buttons";
import { TextTitle, TextBody } from "./styles";
import { PageBarTypes } from "../types";

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
      <DarkContinueButton onClick={handleClick}>Continue</DarkContinueButton>
    </>
  );
};

export default ContentFour;
