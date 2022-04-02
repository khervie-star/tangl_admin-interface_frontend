import { DarkContinueButton } from "../Assets/Buttons";
import { PageBarTypes } from "../types";
import { TextTitle, TextBody } from "./styles";

const ContentTwelve = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
      <TextTitle>Application complete</TextTitle>
      <TextBody>
        Click the button below to confirm your submission or go back to previous
        sections to edit your entries.
      </TextBody>
      <DarkContinueButton onClick={handleClick}>Complete</DarkContinueButton>
    </>
  );
};

export default ContentTwelve;
