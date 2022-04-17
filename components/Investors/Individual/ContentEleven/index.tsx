import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../store/actions";
import { DarkContinueButton } from "../../Assets/Buttons";
import { TextTitle } from "../../Assets/common";
import { PageBarTypes } from "../../types";


const ContentEleven = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Upload proof of address</TextTitle>
      <DarkContinueButton onClick={handleClick}>Complete</DarkContinueButton>
    </>
  );
};

export default ContentEleven;
