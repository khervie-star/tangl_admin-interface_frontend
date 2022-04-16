import OnBoardNavBar from "../../../components/Investors/OnboardNav";
import OrganizationContent from "../../../components/Investors/Organization";
import { OrganizationWrapper } from "./styles";

const Organization = () => {
  return (
    <OrganizationWrapper>
      <OnBoardNavBar />
      <OrganizationContent />
    </OrganizationWrapper>
  );
};

export default Organization;
