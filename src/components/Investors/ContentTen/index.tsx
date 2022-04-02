import { ContinueButton } from "../Assets/Buttons";
import { TextTitle} from "./styles";
import { PageBarTypes } from "../types";

const ContentTen = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
      <TextTitle>Upload proof of address</TextTitle>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentTen;
