import { BackButton } from "../Assets/Buttons";
import { Display, Pad } from "../Assets/common";
import PageBar from "../PageBar";
import ContentOne from "./Onboarding/ContentOne";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import FunctionCard from "./Onboarding/FunctionCard";
import Router from "next/router";
import ContentTwo from "./Onboarding/ContentTwo";
import { individualBackwardRoute } from "../../../store/actions";
import ContentThree from "./Onboarding/ContentThree";
import ContentFour from "./Onboarding/ContentFour";
import ContentFive from "./Onboarding/ContentFive";
import ContentSix from "./Onboarding/ContentSix";
import ContentSeven from "./Onboarding/ContentSeven";
import ContentEight from "./Onboarding/ContentEight";
import ContentNine from "./Onboarding/ContentNine";
import ContentTen from "./Onboarding/ContentTen";
import FinalContent from "./Onboarding/FinalContent";
import ContentEleven from "./Onboarding/ContentEleven";
import ExtraContent from "./Onboarding/ExtraContent";

const IndividualContent = () => {
  const { IndPage } = useSelector((store: RootState) => ({
    IndPage: store.Individual.page,
  }));

  const dispatch = useDispatch();

  const handleBack = () => {
    if (IndPage === 2) Router.push("/Investor/Onboarding");
    else if (IndPage === 6) Router.replace("/");
    else dispatch(individualBackwardRoute(IndPage));
  };

  return (
    <>
      <Display>
        {IndPage !== 13 && (
          <div>
            <BackButton onClick={handleBack} />
          </div>
        )}
        <Pad page={IndPage}>
          {IndPage !== 13 && <PageBar page={IndPage} />}
          {IndPage === 2 && <ContentOne page={IndPage} />}
          {IndPage === 3 && <ContentTwo page={IndPage} />}
          {IndPage === 4 && <ContentThree page={IndPage} />}
          {IndPage === 5 && <ContentFour page={IndPage} />}
          {IndPage === 6 && <ExtraContent page={IndPage} />}
          {IndPage === 7 && <ContentFive page={IndPage} />}
          {IndPage === 8 && <ContentSix page={IndPage} />}
          {IndPage === 9 && <ContentSeven page={IndPage} />}
          {IndPage === 10 && <ContentEight page={IndPage} />}
          {IndPage === 11 && <ContentNine page={IndPage} />}
          {IndPage === 12 && <ContentEleven page={IndPage} />}
          {IndPage === 13 && <FinalContent />}
        </Pad>
        {IndPage && IndPage > 1 && IndPage !== 13 && (
          <div>
            <FunctionCard page={IndPage} />
          </div>
        )}
      </Display>
    </>
  );
};

export default IndividualContent;
