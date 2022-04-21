import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../store/actions";
import { DarkContinueButton } from "../../Assets/Buttons";
import { TextBody, TextTitle } from "../../Assets/common";
import { PageBarTypes } from "../../types";
import { ConfirmWrap } from "./styles";

const ContentEleven = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Application Complete</TextTitle>
      <TextBody>
        Click the button below to confirm your submission or go back to previous
        sections to edit your entries.
      </TextBody>
      <ConfirmWrap>
        <DarkContinueButton onClick={handleClick}>Confirm</DarkContinueButton>
      </ConfirmWrap>
    </>
  );
};

export default ContentEleven;
