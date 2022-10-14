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
import ContentSixteen from "./Onboarding/ContentSixteen";
import ContentSeventeen from "./Onboarding/ContentSeventeen";
import ContentNineteen from "./Onboarding/ContentNineteen";
import ContentTwenty from "./Onboarding/ContentTwenty";
import ContentTwentyOne from "./Onboarding/ContentTwentyOne";
import ContentEighteen from "./Onboarding/ContentEighteen";
import ContentTwentyTwo from "./Onboarding/ContentTwentyTwo";

const OrganizationContent = () => {
  const { OrgPage } = useSelector((store: RootState) => ({
    OrgPage: store.Organization.page,
  }));
  const { OrgType } = useSelector((store: RootState) => ({
    OrgType: store.OrganizationType.selectedType,
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
          <BackButton
            onClick={handleBack}
            disabled={
              OrgPage === 6 || OrgPage === 7 || OrgPage === 8 || OrgPage === 11
            }
          />
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
          {/* {OrgPage === 9 && <ContentNine page={OrgPage} />} */}
          {/* {OrgPage === 10 && <ContentTen page={OrgPage} />} */}
          {/* {OrgPage === 11  && <ContentEleven page={OrgPage} />} */}
          {OrgPage === 7 && <ContentTwelve page={OrgPage} />}

          {/* OTHER ORGANIZATION TYPE INVESTMENT QUESTIONNAIRE SELECT */}
          {OrgType !== "STARTUP" && OrgPage === 8 && (
            <ContentThirteen page={OrgPage} />
          )}
          {OrgType !== "STARTUP" && OrgPage === 9 && (
            <ContentFourteen page={OrgPage} />
          )}
          {OrgType !== "STARTUP" && OrgPage === 10 && (
            <ContentFifteen page={OrgPage} />
          )}

          {/* ADMIN TYPE FUNDRAISING QUESTIONNAIRE SELECT */}
          {OrgType === "STARTUP" && OrgPage === 8 && (
            <ContentSixteen page={OrgPage} />
          )}
          {OrgType === "STARTUP" && OrgPage === 9 && (
            <ContentSeventeen page={OrgPage} />
          )}
          {OrgType === "STARTUP" && OrgPage === 10 && (
            <ContentEighteen page={OrgPage} />
          )}
          {OrgType === "STARTUP" && OrgPage === 11 && (
            <ContentNineteen page={OrgPage} />
          )}
          {OrgType === "STARTUP" && OrgPage === 12 && (
            <ContentTwenty page={OrgPage} />
          )}
          {OrgType === "STARTUP" && OrgPage === 13 && (
            <ContentTwentyOne page={OrgPage} />
          )}
          {OrgType === "STARTUP" && OrgPage === 14 && (
            <ContentTwentyTwo page={OrgPage} />
          )}
        </Pad>
        {OrgPage && OrgPage >= 1 && OrgPage < 15 && (
          <div>
            <FunctionCard page={OrgPage} />
          </div>
        )}
      </Display>
    </>
  );
};

export default OrganizationContent;
