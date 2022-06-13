import { TextBody, TextTitle } from "../Assets/Common";
import {
  BarWrapper,
  ButtonFlex,
  OtherButton,
  TabEightContainer,
} from "./styles";
import Router from "next/router";


const TabEight = () => {
  
  const handleClick = () => {
    Router.push("/Investors/Onboarding");
  };
  return (
    <TabEightContainer>
      <BarWrapper>
        <TextTitle >Ready to get started?</TextTitle>
        <TextBody>
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
    </TabEightContainer>
  );
};

export default TabEight;
