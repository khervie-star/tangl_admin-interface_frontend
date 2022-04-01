import { ContinueButton } from "../Assets/Buttons";
import { TextTitle, TextBody } from "./styles";
import { PageBarTypes } from "../types";

const ContentTwo = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
      <TextTitle>Individual Investors’ Registration</TextTitle>
      <TextBody>
        Fill in the registration data. It will take a couple of minutes. You
        only need your phone number and e-mail.
      </TextBody>
      <ContinueButton onClick={handleClick}>Send Code</ContinueButton>
    </>
  );
};

export default ContentTwo;
