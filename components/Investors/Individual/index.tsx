import { BackButton } from "../Assets/Buttons";
import { Display, Pad } from "../Assets/common";
import PageBar from "../PageBar";
import ContentOne from "./ContentOne";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import FunctionCard from "./FunctionCard";
import Router from "next/router";
import ContentTwo from "./ContentTwo";
import { individualBackwardRoute } from "../../../store/actions";
import ContentThree from "./ContentThree";
import ContentFour from "./ContentFour";
import ContentFive from "./ContentFive";
import ContentSix from "./ContentSix";
import ContentSeven from "./ContentSeven";
import ContentEight from "./ContentEight";
import ContentNine from "./ContentNine";
import ContentTen from "./ContentTen";
import FinalContent from "./FinalContent";
import ContentEleven from "./ContentEleven";

const IndividualContent = () => {
  const { IndPage } = useSelector((store: RootState) => ({
    IndPage: store.Individual.page,
  }));

  const dispatch = useDispatch();

  const handleBack = () => {
    if (IndPage === 2) Router.push("/Investor");
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
        <Pad page = {IndPage} >
          {IndPage !== 13 && <PageBar page={IndPage} />}
          {IndPage === 2 && <ContentOne page={IndPage} />}
          {IndPage === 3 && <ContentTwo page={IndPage} />}
          {IndPage === 4 && <ContentThree page={IndPage} />}
          {IndPage === 5 && <ContentFour page={IndPage} />}
          {IndPage === 6 && <ContentFive page={IndPage} />}
          {IndPage === 7 && <ContentSix page={IndPage} />}
          {IndPage === 8 && <ContentSeven page={IndPage} />}
          {IndPage === 9 && <ContentEight page={IndPage} />}
          {IndPage === 10 && <ContentNine page={IndPage} />}
          {IndPage === 11 && <ContentTen page={IndPage} />}
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
