import { useDispatch, useSelector } from "react-redux";
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
import { organizationBackwardRoute } from "../../../store/actions";
import ContentTwelve from "./Onboarding/ContentTwelve";
import ContentFourteen from "./Onboarding/ContentFourteen";
import ContentFifteen from "./Onboarding/ContentFifteen";
import ContentThirteen from "./Onboarding/ContentThirteen";

const OrganizationContent = () => {
  const { OrgPage } = useSelector((store: RootState) => ({
    OrgPage: store.Organization.page,
  }));
  const dispatch = useDispatch();
  const handleBack = () => {
    if (OrgPage === 1) Router.push("/Investor/Onboarding");
    else dispatch(organizationBackwardRoute(OrgPage));
  };

  return (
    <>
      <Display>
        <div>
          <BackButton onClick={handleBack} />
        </div>
        <Pad>
          {OrgPage !== 13 && <PageBar page={OrgPage} />}
          {OrgPage === 1 && <ContentOne page={OrgPage} />}
          {OrgPage === 2 && <ContentTwo page={OrgPage} />}
          {OrgPage === 3 && <ContentThree page={OrgPage} />}
          {OrgPage === 4 && <ContentFour page={OrgPage} />}
          {OrgPage === 5 && <ContentFive page={OrgPage} />}
          {OrgPage === 6 && <ContentSix page={OrgPage} />}
          {/* {OrgPage === 7 && <ContentSeven page={OrgPage} />} */}
          {/* {OrgPage === 8 && <ContentEight page={OrgPage} />} */}
          {/* {OrgPage === 7 && <ContentNine page={OrgPage} />} */}
          {/* {OrgPage === 7 && <ContentTen page={OrgPage} />} */}
          {/* {OrgPage === 7 && <ContentEleven page={OrgPage} />} */}
          {OrgPage === 7 && <ContentTwelve page={OrgPage} />}
          {OrgPage === 8 && <ContentThirteen page={OrgPage} />}
          {OrgPage === 9 && <ContentFourteen page={OrgPage} />}
          {OrgPage === 10 && <ContentFifteen page={OrgPage} />}
        </Pad>
        {OrgPage && OrgPage >= 1 && OrgPage < 12 && (
          <div>
            <FunctionCard page={OrgPage} />
          </div>
        )}
      </Display>
    </>
  );
};

export default OrganizationContent;
