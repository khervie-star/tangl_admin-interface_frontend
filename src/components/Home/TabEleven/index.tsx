import { TextBody, TextTitle } from "../Assets/Common";
import {
  BarWrapper,
  ButtonFlex,
  OtherButton,
  TabElevenContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

const TabEleven = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/investors");
  };
  return (
    <TabElevenContainer>
      <BarWrapper>
        <TextTitle textAlign="center">Ready to get started?</TextTitle>
        <TextBody textAlign="center" margin="2.5rem 0rem">
          Smart connections between Startups, Venture Capital and Real Estate
          Asset classes
        </TextBody>
        <ButtonFlex>
          <OtherButton background="#007AFB" onClick={handleClick}>Become a partner</OtherButton>
          <OtherButton
            background="#011122"
            borderColor="#A0AABA"
            margin="0rem 0rem 0rem 1.5rem"
            display="mobile"
            onClick={handleClick}
          >
            Apply for funding
          </OtherButton>
        </ButtonFlex>
      </BarWrapper>
    </TabElevenContainer>
  );
};

export default TabEleven;
