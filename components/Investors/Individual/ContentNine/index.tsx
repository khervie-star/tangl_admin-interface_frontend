import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../store/actions";
import { ContinueButton } from "../../Assets/Buttons";
import { TextTitle } from "../../Assets/common";
import { PageBarTypes } from "../../types";


const ContentNine = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Upload proof of address</TextTitle>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentNine;
