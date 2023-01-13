import { TextBody, TextTitle, TextTitleBlue } from "../Assets/Common";
import {
  BarWrapper,
  ButtonFlex,
  OtherButton,
  TabEightContainer,
} from "./styles";
import Router from "next/router";

const TabEight = () => {
  const handleClick = () => {
    // Router.push("/Investors/Onboarding");
    Router.push("waitlist");
  };

  const applyForFunding = () => {
    // Router.push("/Investors/Onboarding");
    // Router.push("/Investors/Onboarding");
  };

  return (
    <TabEightContainer>
      <BarWrapper>
        <TextTitleBlue>Ready to get started?</TextTitleBlue>
        <TextBody>
          Smart connections between Startups, Venture Capital and Real Estate
          Asset classes
        </TextBody>
        <ButtonFlex>
          <OtherButton background="#007AFB" onClick={handleClick}>
            Become a partner
          </OtherButton>
          <OtherButton
            background="#011122"
            borderColor="#A0AABA"
            margin="0rem 0rem 0rem 1.5rem"
            display="mobile"
            onClick={applyForFunding}
          >
            Apply for funding
          </OtherButton>
        </ButtonFlex>
      </BarWrapper>
    </TabEightContainer>
  );
};

export default TabEight;
