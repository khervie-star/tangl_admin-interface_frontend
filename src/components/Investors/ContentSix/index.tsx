import { ContinueButton } from "../Assets/Buttons";
import { TextTitle, TextBody } from "./styles";
import { PageBarTypes } from "../types";

const ContentSix = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
      <TextTitle>KYC</TextTitle>
      <TextBody>Kindly fill in your personal information below.</TextBody>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentSix;
