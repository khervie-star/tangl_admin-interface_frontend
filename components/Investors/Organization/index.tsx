import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { BackButton } from "../Assets/Buttons";
import { Display, Pad } from "../Assets/common";
import PageBar from "../PageBar";
import Router from "next/router";
import ContentFive from "./Onboarding/ContentFive";
import ContentOne from "./Onboarding/ContentOne";
import ContentTwo from "./Onboarding/ContentTwo";
import ContentThree from "./Onboarding/ContentThree";
import ContentFour from "./Onboarding/ContentFour";
import ContentSix from "./Onboarding/ContentSix";
import ContentSeven from "./Onboarding/ContentSeven";
import ContentEight from "./Onboarding/ContentEight";
import ContentNine from "./Onboarding/ContentNine";
import ContentTen from "./Onboarding/ContentTen";
import FunctionCard from "./Onboarding/FunctionCard";
import ContentEleven from "./Onboarding/ContentEleven";

const OrganizationContent = () => {
  const { OrgPage } = useSelector((store: RootState) => ({
    OrgPage: store.Organization.page,
  }));

  const handleBack = () => {
    Router.push("/Investor");
  };

  return (
    <>
      <Display>
        <div>
          <BackButton onClick={handleBack}/>
        </div>
        <Pad>
          {OrgPage !== 13 && <PageBar page={OrgPage} />}
          {OrgPage === 1 && <ContentOne page={OrgPage} />}
          {OrgPage === 2 && <ContentTwo page={OrgPage} />}
          {OrgPage === 3 && <ContentThree page={OrgPage} />}
          {OrgPage === 4 && <ContentFour page={OrgPage} />}
          {OrgPage === 5 && <ContentFive page={OrgPage} />}
          {OrgPage === 6 && <ContentSix page={OrgPage} />}
          {OrgPage === 7 && <ContentSeven page={OrgPage} />}
          {OrgPage === 8 && <ContentEight page={OrgPage} />}
          {OrgPage === 9 && <ContentNine page={OrgPage} />}
          {OrgPage === 10 && <ContentTen page={OrgPage} />}
          {OrgPage === 11 && <ContentEleven page={OrgPage} />}
        </Pad>
        {OrgPage && OrgPage > 1 && OrgPage < 11 && (
          <div>
            <FunctionCard page={OrgPage} />
          </div>
        )}
      </Display>
    </>
  );
};

export default OrganizationContent;
