import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../store/actions";
import { ContinueButton } from "../../Assets/Buttons";
import { TextBody, TextTitle } from "../../Assets/common";
import { PageBarTypes } from "../../types";

const ContentFive = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
  };

  return (
    <>
      <TextTitle>KYC</TextTitle>
      <TextBody>Kindly fill in your personal information below.</TextBody>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentFive;
