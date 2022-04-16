import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { BackButton } from "../Assets/Buttons.tsx";
import { Display, Pad } from "../Assets/common";
import PageBar from "../PageBar";
import ContentOne from "./ContentOne";

const OrganizationContent = () => {
  const { OrgPage } = useSelector((store: RootState) => ({
    OrgPage: store.Organization.page,
  }));
  return (
    <>
      <Display>
        <div>
          <BackButton />
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
