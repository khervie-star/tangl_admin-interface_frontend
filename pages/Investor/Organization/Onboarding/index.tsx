import OnBoardNavBar from "../../../../components/Investors/OnboardNav";
import OrganizationContent from "../../../../components/Investors/Organization";
import styled from "styled-components";
import { Grid } from "../../../../components/Investors/Assets/common";
import { device } from "../../../../Global";

const Organization = () => {
  return (
    <OrganizationWrapper>
      <OnBoardNavBar />
      <OrganizationContent />
    </OrganizationWrapper>
  );
};

export default Organization;




export const OrganizationWrapper = styled.div`
  background: #ffffff;
  ${Grid} {
    grid-template-columns: repeat(2, 1fr);
  }
`;