import Router from "next/router";
import { useDispatch } from "react-redux";
import { setIndividualPage } from "../../../../../store/actions";
import { setInvestorType } from "../../../../../store/actions/session";
import { DarkContinueButton } from "../../../Assets/Buttons";
import { TextBody, TextTitle } from "../../../Assets/common";
import { FinalWrapper } from "./styles";

const FinalContent = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    Router.replace("/");
    dispatch(setInvestorType(""))
    dispatch(setIndividualPage(1))
  }
  return (
    <FinalWrapper>
      <TextTitle>Submitted!</TextTitle>
      <TextBody>
        Your application has been successfully submitted and is awaiting
        approval.
      </TextBody>
      <div>
        <DarkContinueButton onClick={handleClick}>
          Go to Dashboard
        </DarkContinueButton>
      </div>
    </FinalWrapper>
  );
};

export default FinalContent;
