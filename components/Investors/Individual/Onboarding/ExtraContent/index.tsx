import Router from "next/router";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../../../hooks";
import {
  individualFowardRoute,
  setIndividualPage,
} from "../../../../../store/actions";
import { setInvestorType } from "../../../../../store/actions/session";
import { ContinueButton, DarkContinueButton } from "../../../Assets/Buttons";
import { TextBody, TextTitle } from "../../../Assets/common";
import { ButtonWrap } from "./styles";

const ExtraContent = ({ page }: { page: number }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    Router.replace("/");
    dispatch(setInvestorType(""));
    dispatch(setIndividualPage(2));
  };

  const handlePage = () => {
    page && dispatch(individualFowardRoute(page));
  };
  return (
    <div>
      <TextTitle>Email verification is complete!</TextTitle>
      <TextBody>
        You can now continue to KYC or route to your dashboard
      </TextBody>
      <ButtonWrap>
        <DarkContinueButton onClick={handlePage}>Start KYC</DarkContinueButton>
        <ContinueButton onClick={handleClick}>Go to Dashboard</ContinueButton>
      </ButtonWrap>
    </div>
  );
};

export default ExtraContent;
