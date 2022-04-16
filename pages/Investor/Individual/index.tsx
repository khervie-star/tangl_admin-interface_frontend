import IndividualContent from "../../../components/Investors/Individual";
import OnBoardNavBar from "../../../components/Investors/OnboardNav";
import { IndividualWrapper } from "./styles";

const Individual = () => {
  return (
    <IndividualWrapper>
      <OnBoardNavBar />
      <IndividualContent />
    </IndividualWrapper>
  );
};

export default Individual