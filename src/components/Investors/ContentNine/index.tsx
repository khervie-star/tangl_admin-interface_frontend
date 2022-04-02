import { ContinueButton } from "../Assets/Buttons";
import { TextTitle} from "./styles";
import { PageBarTypes } from "../types";

const ContentNine = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
      <TextTitle>Upload Government Identification</TextTitle>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentNine;
