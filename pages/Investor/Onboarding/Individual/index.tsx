import IndividualContent from "../../../../components/Investors/Individual";
import OnBoardNavBar from "../../../../components/Investors/OnboardNav";
import styled from "styled-components";
import { device } from "../../../../Global";

const Individual = () => {
  return (
    <IndividualWrapper>
      <OnBoardNavBar />
      <IndividualContent />
    </IndividualWrapper>
  );
};

export default Individual



export const IndividualWrapper = styled.div`
  background: #ffffff;
`;

