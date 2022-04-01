import { DarkContinueButton } from "../Assets/Buttons";
import { TextTitle} from "./styles";
import { PageBarTypes } from "../types";

const ContentEleven = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
      <TextTitle>Upload proof of address</TextTitle>
      <DarkContinueButton onClick={handleClick}>Complete</DarkContinueButton>
    </>
  );
};

export default ContentEleven;
