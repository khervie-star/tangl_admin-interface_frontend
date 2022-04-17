import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { BackButton } from "../Assets/Buttons";
import { Display, Pad } from "../Assets/common";
import PageBar from "../PageBar";
import ContentOne from "./ContentOne";
import Router from "next/router";

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
        </Pad>
      </Display>
    </>
  );
};

export default OrganizationContent;
